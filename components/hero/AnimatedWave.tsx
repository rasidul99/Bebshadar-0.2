"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedWaveProps {
  colorStart?: [number, number, number]; // Purple
  colorEnd?: [number, number, number];   // Blue
  amplitude?: number;
  distance?: number;
  yOffset?: number;                      // Vertical position (0.0 bottom, 1.0 top)
  speed?: number;                        // Animation speed multiplier
  lineCount?: number;                    // Optimized line count
  className?: string;
}

export function AnimatedWave({
  colorStart = [0.58, 0.28, 0.98], // Royal Brand Purple (#9447FA)
  colorEnd = [0.08, 0.58, 0.98],   // Electric Cyan Blue (#1494FA)
  amplitude = 2.1,
  distance = 0.22,
  yOffset = 0.70,                  // Positioned behind the headline area
  speed = 0.35,                    // Slow, graceful motion
  lineCount = 26,                  // High performance 26 lines (40% lighter on GPU)
  className = "",
}: AnimatedWaveProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Use lightweight WebGL context
    const gl = canvas.getContext("webgl", {
      antialias: false,             // Fast AA via shader lines
      premultipliedAlpha: true,
      alpha: true,
      powerPreference: "low-power", // Battery & GPU friendly
    });

    if (!gl) return;

    let animationFrameId: number | null = null;
    let isDestroyed = false;
    let isVisible = true;

    // Cap DPR to 1.0 for ambient background wave to keep GPU load ultra-low on 4K/retina
    const dpr = 1.0;

    const handleResize = () => {
      if (!canvas || !gl) return;
      const rect = canvas.getBoundingClientRect();
      const targetW = Math.max(1, Math.floor(rect.width * dpr));
      const targetH = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        gl.viewport(0, 0, targetW, targetH);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    const vsSource = `
      attribute vec2 p;
      void main() {
        gl_Position = vec4(p, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      #define PI 3.1415926538
      uniform float iTime;
      uniform vec3 iResolution;
      uniform vec3 uColorStart;
      uniform vec3 uColorEnd;
      uniform float uAmplitude;
      uniform float uDistance;
      uniform float uYOffset;
      uniform vec2 uMouse;
      const int u_line_count = ${lineCount};
      const float u_line_width = 6.5;
      const float u_line_blur = 8.0;

      vec4 mod289(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
      vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
      vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }
      vec2 fade(vec2 t){ return t*t*t*(t*(t*6.0-15.0)+10.0); }
      
      float Perlin2D(vec2 P){
        vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
        vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
        Pi = mod289(Pi);
        vec4 ix = Pi.xzxz;
        vec4 iy = Pi.yyww;
        vec4 fx = Pf.xzxz;
        vec4 fy = Pf.yyww;
        vec4 i = permute(permute(ix)+iy);
        vec4 gx = fract(i*(1.0/41.0))*2.0-1.0;
        vec4 gy = abs(gx)-0.5;
        vec4 tx = floor(gx+0.5);
        gx = gx - tx;
        vec2 g00 = vec2(gx.x,gy.x);
        vec2 g10 = vec2(gx.y,gy.y);
        vec2 g01 = vec2(gx.z,gy.z);
        vec2 g11 = vec2(gx.w,gy.w);
        vec4 norm = taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));
        g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
        float n00 = dot(g00, vec2(fx.x,fy.x));
        float n10 = dot(g10, vec2(fx.y,fy.y));
        float n01 = dot(g01, vec2(fx.z,fy.z));
        float n11 = dot(g11, vec2(fx.w,fy.w));
        vec2 fade_xy = fade(Pf.xy);
        vec2 n_x = mix(vec2(n00,n01), vec2(n10,n11), fade_xy.x);
        float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
        return 2.3*n_xy;
      }

      float pixel(float count, vec2 res){ return (1.0/max(res.x,res.y))*count; }

      float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance, float yOffset){
        float split_offset = (perc*0.4);
        float split_point = 0.1 + split_offset;
        float amplitude_normal = smoothstep(split_point, 0.7, st.x);
        float amplitude_strength = 0.5;
        float finalAmplitude = amplitude_normal*amplitude_strength*amplitude*(1.0 + (mouse.y-0.5)*0.2);
        float time_scaled = time/10.0 + (mouse.x-0.5)*0.7;
        float blur = smoothstep(split_point, split_point+0.05, st.x)*perc;
        float xnoise = mix(
          Perlin2D(vec2(time_scaled, st.x+perc)*2.5),
          Perlin2D(vec2(time_scaled, st.x+time_scaled)*3.5)/1.5,
          st.x*0.3
        );
        float y = yOffset + (perc-0.5)*distance + xnoise/2.0*finalAmplitude;
        float line_start = smoothstep(y + (width/2.0) + (u_line_blur*pixel(1.0,iResolution.xy)*blur), y, st.y);
        float line_end = smoothstep(y, y - (width/2.0) - (u_line_blur*pixel(1.0,iResolution.xy)*blur), st.y);
        return clamp((line_start-line_end)*(1.0 - smoothstep(0.0,1.0,pow(perc,0.3))), 0.0, 1.0);
      }

      void main(){
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float line_strength = 1.0;
        for(int i=0; i<u_line_count; i++){
          float p = float(i)/float(u_line_count);
          line_strength *= (1.0 - lineFn(uv, u_line_width*pixel(1.0,iResolution.xy)*(1.0-p), p, (PI*1.0)*p, uMouse, iTime, uAmplitude, uDistance, uYOffset));
        }
        float colorVal = 1.0 - line_strength;
        
        // 60% Purple and 40% Blue Gradient Split
        float gradT = smoothstep(0.48, 0.75, uv.x * 1.05 + (1.0 - uv.y) * 0.1);
        vec3 gradientColor = mix(uColorStart, uColorEnd, gradT);
        
        gl_FragColor = vec4(gradientColor * colorVal, colorVal);
      }
    `;

    function compileShader(type: number, source: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aP = gl.getAttribLocation(program, "p");
    gl.enableVertexAttribArray(aP);
    gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "iTime");
    const uRes = gl.getUniformLocation(program, "iResolution");
    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uColorStartLoc = gl.getUniformLocation(program, "uColorStart");
    const uColorEndLoc = gl.getUniformLocation(program, "uColorEnd");
    const uAmp = gl.getUniformLocation(program, "uAmplitude");
    const uDist = gl.getUniformLocation(program, "uDistance");
    const uYOffsetLoc = gl.getUniformLocation(program, "uYOffset");

    gl.uniform3f(uColorStartLoc, colorStart[0], colorStart[1], colorStart[2]);
    gl.uniform3f(uColorEndLoc, colorEnd[0], colorEnd[1], colorEnd[2]);
    gl.uniform1f(uAmp, amplitude);
    gl.uniform1f(uDist, distance);
    gl.uniform1f(uYOffsetLoc, yOffset);

    let tx = 0.5,
      ty = 0.5,
      mx = 0.5,
      my = 0.5;

    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate < 16 || !canvas) return; // Throttle to ~60fps
      lastMouseUpdate = now;
      const rect = canvas.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = 1.0 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      tx = 0.5;
      ty = 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Render loop with visibility pause
    const render = (time: number) => {
      if (isDestroyed || !gl || !canvas) return;

      if (isVisible) {
        mx += (tx - mx) * 0.025;
        my += (ty - my) * 0.025;

        gl.uniform1f(uTime, time * 0.001 * speed);
        gl.uniform3f(uRes, canvas.width, canvas.height, canvas.width / canvas.height);
        gl.uniform2f(uMouse, mx, my);
        gl.uniform1f(uYOffsetLoc, yOffset);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause loop entirely when off-screen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
          });
        },
        { rootMargin: "100px 0px" }
      );
      observer.observe(container);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isDestroyed = true;
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (gl) {
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
      }
    };
  }, [colorStart, colorEnd, amplitude, distance, yOffset, speed, lineCount]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden will-change-transform ${className}`}
      style={{
        transform: "translateZ(0)",
        maskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 10%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 85%, rgba(0,0,0,0) 100%)",
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
