export const SITE_CONFIG = {
  name: "Bebshadar",
  tagline: "Smart POS, Inventory & ERP for Growing Businesses",
  description:
    "The all-in-one retail management platform for Bangladesh — instant POS billing, live multi-branch inventory, supplier ledger, automated customer dues (baki) recovery, manufacturing recipes, and repair ticketing in one unified cloud system.",
  domain: "bebshadar.com",
  phone: "+880 1700-000000",
  email: "support@bebshadar.com",
  address: "Dhaka, Bangladesh",
  socials: {
    facebook: "https://facebook.com/bebshadar",
    linkedin: "https://linkedin.com/company/bebshadar",
    youtube: "https://youtube.com/@bebshadar",
  },
};

export const NAVIGATION_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Who it's for", href: "#industries" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST_METRICS = [
  { value: "17,000+", label: "Businesses in BD" },
  { value: "99.99%", label: "Uptime Guaranteed" },
  { value: "৳ 450M+", label: "Transactions Handled" },
  { value: "0.2s", label: "POS Checkout Speed" },
];

export const TRUSTED_BRANDS = [
  { name: "Al-Madina Super Shop", sector: "Retail Chain" },
  { name: "Bengal Hardware & Paint", sector: "Wholesale" },
  { name: "Popular Pharmacy Ltd.", sector: "Healthcare" },
  { name: "Urban Tech Solutions", sector: "Electronics" },
  { name: "FoodLand Bakery & Cafe", sector: "Restaurant" },
  { name: "Royal Auto Garage", sector: "Automobile" },
];

export const PAIN_POINTS = [
  {
    title: "Manual billing, human errors",
    description:
      "Handwritten receipts and calculator billing slow down every sale — and the cash drawer rarely matches the notebook at closing time.",
    impact: "Up to ৳ 15,000 lost per counter every month",
    icon: "Receipt",
  },
  {
    title: "No real idea what's in stock",
    description:
      "You find out a product is out of stock only when a customer is standing at the counter asking for it, losing instant revenue.",
    impact: "Lost sales & dead stock holding cash flow",
    icon: "PackageX",
  },
  {
    title: "Customer dues nobody is tracking",
    description:
      "Baki/credit sales scattered across messy khata notebooks, with no reminders sent and no clear total of who owes what.",
    impact: "Overdue payments remain unpaid for months",
    icon: "Clock",
  },
  {
    title: "One shop today, three tomorrow",
    description:
      "Growing to a second branch means duplicating registers, stock lists and staff schedules from scratch without central control.",
    impact: "Owner trapped inside the store 7 days a week",
    icon: "Store",
  },
];

export const CORE_FEATURES = [
  {
    icon: "Zap",
    title: "POS Billing & Quick Checkout",
    description:
      "Lightning-fast checkout with keyboard shortcuts, barcode scanner, or touchscreen. Instant thermal receipt printing & SMS slips.",
    badge: "FASTEST POS",
  },
  {
    icon: "Layers",
    title: "Inventory & Multi-Branch Stock",
    description:
      "Live stock tracking across all warehouses and outlets. Automated low-stock thresholds and seamless stock transfers.",
    badge: "REAL-TIME SYNC",
  },
  {
    icon: "BookOpen",
    title: "Purchases & Supplier Ledger",
    description:
      "Record vendor purchase orders, manage supplier accounts, track payments, and automatically reconcile purchase vs. sales margins.",
    badge: "AUTOMATED LEDGER",
  },
  {
    icon: "BellRing",
    title: "Customer Dues & SMS Reminders",
    description:
      "Maintain clear customer baki records per profile. Send automated polite SMS payment reminders with one click.",
    badge: "1-CLICK RECOVERY",
  },
  {
    icon: "TrendingUp",
    title: "Reports & Profit/Loss Analytics",
    description:
      "Clear daily P&L, stock valuation, top-selling items, and tax-ready summaries — formatted for owners, not accountants.",
    badge: "ACCURATE P&L",
  },
  {
    icon: "Users",
    title: "HRM, Attendance & Payroll",
    description:
      "Employee profiles, biometric/manual attendance tracking, commission management, and monthly salary disbursement in one place.",
    badge: "STAFF MANAGEMENT",
  },
];

export const SPECIALIZED_MODULES = [
  {
    icon: "Cpu",
    title: "Manufacturing & Production",
    description:
      "Create Bill of Materials (BOM) recipes to auto-deduct raw materials upon finishing goods, track wastage, overheads, and batch cost.",
    features: [
      "BOM multi-ingredient recipes",
      "Raw material batch deduction",
      "Production stage tracking",
      "Wastage & overhead calculation",
    ],
    highlight: "For Factories & Mills",
  },
  {
    icon: "Wrench",
    title: "Repair & Service Job Tracking",
    description:
      "End-to-end service workflow with digital job cards, technician assignment, status notifications, and spare parts billing.",
    features: [
      "Job ticket generation",
      "Technician performance",
      "Customer repair status lookup",
      "Spare parts inventory linking",
    ],
    highlight: "For Service Centers",
  },
  {
    icon: "Globe",
    title: "WooCommerce & Online Store Sync",
    description:
      "Bridge your physical shop and WordPress/WooCommerce site. Keep product prices, descriptions, and stock counts synchronized.",
    features: [
      "2-way inventory sync",
      "Online order import to POS",
      "Price update automation",
      "Multi-channel sales report",
    ],
    highlight: "Omnichannel Retail",
  },
];

export const INDUSTRIES = [
  {
    title: "Grocery Stores & Supershops",
    desc: "Barcode scanning, scale integration, expiry alerts, and multi-counter POS billing.",
    icon: "ShoppingBag",
    badge: "High Velocity",
  },
  {
    title: "Pharmacies & Drugstores",
    desc: "Batch number lookup, expiry tracking, doctor prescription, and license records.",
    icon: "Pill",
    badge: "Batch & Expiry",
  },
  {
    title: "Restaurants & Bakeries",
    desc: "KOT kitchen display, table order billing, recipe costing, and takeaway parcels.",
    icon: "Utensils",
    badge: "KOT Ready",
  },
  {
    title: "Auto Parts & Garages",
    desc: "Part serial tracking, vehicle fitment search, mechanic job cards, and invoices.",
    icon: "Car",
    badge: "Serial / SKU",
  },
  {
    title: "Electronics & Repair Shops",
    desc: "IMEI warranty lookup, digital service tickets, technician jobs, and accessories.",
    icon: "Smartphone",
    badge: "IMEI Tracking",
  },
  {
    title: "Manufacturing & Wholesale",
    desc: "Raw material buying, batch recipe tracking, bulk carton packing, and credit dues.",
    icon: "Factory",
    badge: "BOM Production",
  },
  {
    title: "Multi-Branch Retail Chains",
    desc: "Central catalog, branch stock requisitions, staff access roles, and analytics.",
    icon: "Building2",
    badge: "Multi-Outlet",
  },
  {
    title: "Online & Offline Brands",
    desc: "WooCommerce store sync, courier parcel tracking, inventory updates, and orders.",
    icon: "Truck",
    badge: "Omnichannel",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Sign up & configure profile",
    desc: "Register your shop in under 2 minutes. Configure your business name, currency (BDT ৳), tax, and multiple outlet branches.",
  },
  {
    step: "02",
    title: "Import products & stock",
    desc: "Bulk upload your inventory via Excel or create items with barcodes, purchase costs, retail prices, and opening balances.",
  },
  {
    step: "03",
    title: "Start instant POS billing",
    desc: "Cashiers start ringing up sales on any laptop, desktop, tablet, or barcode terminal with zero learning curve.",
  },
  {
    step: "04",
    title: "Scale with live analytics",
    desc: "Monitor live revenue, recover customer dues with SMS, reorder low stock, and review profits from anywhere on your mobile phone.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Bebshadar made managing our 3 grocery super-outlets effortless. Cash mismatch dropped to zero and we can see live inventory across branches from our phones.",
    author: "Rafiqul Islam",
    role: "Founder, Al-Madina Super Shop",
    city: "Dhaka, Mirpur",
    rating: 5,
    avatar: "/testimonials/owner1.jpg",
  },
  {
    quote:
      "The customer baki management and automated SMS reminders alone recovered over ৳ 1,80,000 in overdue accounts within our first two months!",
    author: "Kamrul Hassan",
    role: "Managing Director, Bengal Hardware & Parts",
    city: "Chittagong",
    rating: 5,
    avatar: "/testimonials/owner2.jpg",
  },
  {
    quote:
      "We run both a physical showroom and an online store. The WooCommerce live sync prevents overselling and saves our team hours of manual stock updates.",
    author: "Tanzirul Alam",
    role: "Founder, Urban Electronics & Care",
    city: "Sylhet",
    rating: 5,
    avatar: "/testimonials/owner3.jpg",
  },
  {
    quote:
      "Managing batch numbers and drug expiry dates used to be a nightmare. Bebshadar alerts us 60 days before expiry, completely saving us from dead stock losses.",
    author: "Dr. Mahmudul Haque",
    role: "Owner, CarePoint Pharmacy Ltd.",
    city: "Dhaka, Dhanmondi",
    rating: 5,
    avatar: "/testimonials/owner4.jpg",
  },
  {
    quote:
      "Kitchen display KOT and rapid takeaway billing speeded up our order cycle by 40%. Cashiers learned the entire POS system in less than 15 minutes.",
    author: "Farhan Chowdhury",
    role: "Co-Founder, FoodLand Cafe & Bakery",
    city: "Uttara, Dhaka",
    rating: 5,
    avatar: "/testimonials/owner5.jpg",
  },
  {
    quote:
      "The multi-variant size and color inventory management is a lifesaver for our fashion boutique. Generating barcodes for 5,000 apparel items was instant.",
    author: "Nasrin Akhter",
    role: "Proprietor, Elegance Fashion House",
    city: "Rajshahi",
    rating: 5,
    avatar: "/testimonials/owner6.jpg",
  },
  {
    quote:
      "We track over 12,000 vehicle spare parts across 2 garage workshops. Job tickets and mechanic labor calculations are now completely automated.",
    author: "Kabir Hossain",
    role: "Managing Partner, Royal Auto Works",
    city: "Khulna",
    rating: 5,
    avatar: "/testimonials/owner7.jpg",
  },
  {
    quote:
      "From raw wheat purchase to flour milling batch cost deductions, Bebshadar's BOM recipe module gave us exact per-kg production profit margins.",
    author: "Shamsul Arefin",
    role: "Director, Green Agro & Feed Mill",
    city: "Bogra",
    rating: 5,
    avatar: "/testimonials/owner8.jpg",
  },
  {
    quote:
      "Our courier delivery integration and customer SMS order dispatch updates increased our repeat purchase rate by 35% across all 64 districts.",
    author: "Saiful Islam",
    role: "Founder, Glamour Cosmetics BD",
    city: "Dhaka, Gulshan",
    rating: 5,
    avatar: "/testimonials/owner9.jpg",
  },
];

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Single-shop retail & fast billing",
    price: "1,499",
    billingPeriod: "/ month",
    popular: false,
    ctaText: "Start 14-Day Free Trial",
    features: [
      "1 Business Location / Branch",
      "Unlimited POS Billing & Invoices",
      "Live Inventory & Barcode Support",
      "Customer Due & Khata Ledger",
      "Thermal Receipt & PDF Printing",
      "Basic Sales & Stock Reports",
      "Email & WhatsApp Support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing multi-branch businesses",
    price: "2,999",
    billingPeriod: "/ month",
    popular: true,
    badge: "Most Popular",
    ctaText: "Start 14-Day Free Trial",
    features: [
      "Everything in Starter, plus:",
      "Up to 5 Outlets & Warehouses",
      "Inter-branch Stock Transfers",
      "Automated SMS Due Reminders",
      "HRM, Staff Attendance & Payroll",
      "Advanced Profit/Loss & Tax Reports",
      "Multi-user Roles & Permissions",
      "Priority 24/7 Phone & Remote Support",
    ],
  },
  {
    id: "custom",
    name: "Enterprise",
    tagline: "Manufacturing, repair & custom chains",
    price: "Custom",
    billingPeriod: "",
    popular: false,
    ctaText: "Talk to Business Advisor",
    features: [
      "Everything in Growth, plus:",
      "Unlimited Locations & Warehouses",
      "Recipe & BOM Manufacturing Module",
      "Repair Job Tickets & Service Center",
      "WooCommerce & E-commerce Live Sync",
      "Custom ERP Integrations & API Access",
      "Dedicated Account Manager & On-site Setup",
    ],
  },
];

export const FAQS = [
  {
    q: "Do I need special hardware or expensive POS machines to use Bebshadar?",
    a: "No special hardware required! Bebshadar runs smoothly in any web browser on standard desktops, laptops, tablets, or even smartphones. It connects seamlessly with standard thermal receipt printers, barcode scanners, and cash drawers you already have.",
  },
  {
    q: "Can I manage multiple shops, branches, and warehouses under one account?",
    a: "Yes! Bebshadar is built from the ground up for multi-branch operations. You can track stock, sales, cash balances, and staff performance for each branch independently or view unified consolidated reports in one central dashboard.",
  },
  {
    q: "How does customer due (Baki) tracking and SMS notification work?",
    a: "Every customer can have their own digital ledger. When a sale is made with partial or no payment, the balance is logged. You can view total dues at any moment and send customized SMS payment reminders directly to their phone with a single click.",
  },
  {
    q: "Will my staff need extensive training to use Bebshadar?",
    a: "Not at all. The billing interface is intentionally designed to be as straightforward as a smartphone or calculator. Most retail staff learn how to scan, bill, and print receipts within 15 minutes of onboarding.",
  },
];
