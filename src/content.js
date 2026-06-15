// Master content config for the Lagoplata site.
// This is the single source of truth for editable copy, data, images, and
// PDF links. The admin panel writes a copy of this shape to Supabase; the
// public site falls back to these values whenever Supabase is unavailable.
//
// `sectionOrder` controls which sections render on the public page and in
// what order. Removing a key hides that section; reordering reorders it.

export const content = {
  sectionOrder: [
    "hero",
    "executiveSummary",
    "concept",
    "location",
    "market",
    "timeline",
    "financials",
    "team",
    "contact",
  ],

  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    title: "Lagoplata",
    subtitle: "Micro Resort",
    tagline: "Luxury Cabins on Lagoplata Creek | Bryson City, NC",
  },

  executiveSummary: {
    title: "Executive Summary",
    subtitle: "Lagoplata Micro Resort | BLVD Hospitality LLC",
    overview:
      "Lagoplata Micro Resort is a boutique development of six luxury cabins nestled along 750 feet of Lagoplata Creek in Bryson City, NC. This nature-rich setting is paired with top-tier design and amenities to target the growing demand for experiential, short-term stays in the Smoky Mountains region.",
    developmentDetails: [
      { label: "Total Project Cost", value: "$2.5M" },
      { label: "Loan Request", value: "$2.25M (90% LTC)" },
      { label: "Equity Contribution", value: "$250K" },
      { label: "Entity", value: "BLVD Hospitality LLC" },
    ],
    marketAdvantage: [
      "750 ft of creek frontage on 13.88 acres near Bryson City",
      "Proximity to top-tier attractions: GSMNP, NOC, Harrah's Casino, Blue Ridge Parkway",
      "Proven demand with comparable projects like Live Oak Lake and Onera Fredricksburg",
      "Positioned for premium rates, high occupancy, and repeat guests",
    ],
    timelineLaunch: [
      "Construction start: August 2025",
      "Soft launch: April 2026 | Full launch: May 2026",
      "Exit window: Q1–Q3 2027 (refi or sale)",
    ],
    financialHighlights: [
      "NOI range: $192K – $467K across conservative to ideal scenarios",
      "DSCR range: 1.4 – 2.8 during interest-only phase",
      "Two clear exit options: refi and hold, or strategic sale",
    ],
    businessPlanLabel: "Download the Lagoplata Business Plan",
    businessPlanPdf: "#",
  },

  concept: {
    title: "The Lagoplata Concept",
    subtitle:
      "Designed to stand apart — where engineering precision meets elevated guest experience",
    cabinRenderImage: "",
    siteMapImage: "",
    paragraphs: [
      "Lagoplata Creekside Cabins will consist of six luxury units perched above a pristine mountain creek, with floor-to-ceiling glass windows that blur the boundary between indoors and nature.",
      "Guests will explore curated trails that lead to a private waterfall, a peaceful mountain ridge, and a native flora garden. A shared community zone with grill, seating, and a small shop adds a sense of belonging.",
      "Unlike templated STR developments, Lagoplata offers a seamless nature-first design and experiential stay that caters to discerning, design-conscious travelers.",
      "Backed by a GC with proven success and occupancy above 72%, and led by an engineer who thrives on problem-solving and execution, the Lagoplata team brings creative precision and real-world grit to this vision.",
    ],
  },

  location: {
    title: "Location Overview",
    subtitle: "Lagoplata Micro Resort | Bryson City, NC",
    intro:
      "The Lagoplata Micro Resort site is a unique combination of serenity and proximity. Tucked along 750 feet of private creek frontage, yet just 12 minutes from downtown Bryson City, the location offers both seclusion and access. Guests will be able to unwind in a luxury nature setting while still enjoying coffee shops, breweries, and train rides just minutes away.",
    attractions: [
      { name: "Great Smoky Mountains Railroad", description: "Embark on scenic train journeys through the Smoky Mountains, offering views of Fontana Lake and the Nantahala Gorge.", image: "" },
      { name: "Great Smoky Mountains National Park", description: "Explore over 850 miles of hiking trails, waterfalls, and diverse wildlife in America's most visited national park.", image: "" },
      { name: "Nantahala National Forest", description: "Engage in activities like whitewater rafting, mountain biking, and hiking across 600 miles of trails.", image: "" },
      { name: "Harrah's Cherokee Casino Resort", description: "Experience luxury accommodations, gaming, and entertainment at this premier resort.", image: "" },
      { name: "Blue Ridge Parkway", description: "Drive along one of America's most scenic routes, featuring panoramic mountain views and cultural sites.", image: "" },
      { name: "Bryson City", description: "Discover a charming town offering local dining, shopping, and outdoor adventures.", image: "" },
      { name: "Cherokee, NC", description: "Immerse yourself in rich Native American history and culture, with museums, arts, and traditional experiences.", image: "" },
      { name: "Nantahala Outdoor Center", description: "Participate in outdoor activities such as rafting, zip-lining, and mountain biking at this renowned adventure hub.", image: "" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5!2d-83.4488!3d35.4285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDI1JzQyLjYiTiA4M8KwMjYnNTUuNyJX!5e0!3m2!1sen!2sus!4v1",
  },

  market: {
    title: "Drive-To Market Reach",
    subtitle: "Lagoplata Micro Resort | Positioned within 3 hours of 8 thriving cities",
    intro:
      "Bryson City's strategic location draws short-stay guests from across the Southeast. Year-round demand anchors the property's high occupancy potential.",
    cities: [
      { name: "Asheville, NC", distance: "65 miles (1 hour 15 minutes)", population: "417,202", description: "Vibrant arts, historic architecture, and access to Biltmore and the Blue Ridge Parkway.", image: "" },
      { name: "Knoxville, TN", distance: "110 miles (2 hours)", population: "879,773", description: "University town with downtown culture and Tennessee River recreation.", image: "" },
      { name: "Greenville, SC", distance: "110 miles (2 hours)", population: "928,195", description: "Charming and growing, with riverwalks, restaurants, and art scenes.", image: "" },
      { name: "Atlanta, GA", distance: "150 miles (3 hours)", population: "6,307,261", description: "Major metro hub with diverse culture and high volume visitor base.", image: "" },
      { name: "Charlotte, NC", distance: "180 miles (3 hours)", population: "2,805,115", description: "Southeast finance capital with sports, food, and events.", image: "" },
      { name: "Chattanooga, TN", distance: "140 miles (2 hours 30 minutes)", population: "562,647", description: "Scenic and family-focused with top-rated aquariums and trails.", image: "" },
      { name: "Cherokee, NC", distance: "170 miles (3 hours)", population: "858,302", description: "Historic capital with university culture and riverfront recreation.", image: "" },
      { name: "Winston-Salem, NC", distance: "160 miles (2 hours 45 minutes)", population: "695,630", description: "Southern charm meets innovation. Anchored by Wake Forest and arts districts.", image: "" },
    ],
    footnote: "*Population figures reflect the metropolitan statistical area (MSA) for each city.",
  },

  timeline: {
    title: "Development Timeline",
    subtitle: "Lagoplata Micro Resort | Key Milestones to Launch and Exit",
    intro1:
      "Bryson City's strategic location draws short-stay guests from across the Southeast. Year-round demand anchors the property's high occupancy potential.",
    intro2:
      "A strategic 12-month construction timeline staggered across six cabins ensures efficient resource allocation and progress tracking. A 24-month interest-only loan term provides buffer and flexibility.",
    milestones: [
      { date: "May 2025", label: "Pre-Construction Begins" },
      { date: "August 2025", label: "Construction Start" },
      { date: "Sept 2025 – Feb 2026", label: "Vertical Build Staggered" },
      { date: "Jan – March 2026", label: "Interior Finish & Landscaping" },
      { date: "April 2026", label: "Soft Launch" },
      { date: "May 2026", label: "Full Launch" },
      { date: "Q2 2026 – Q1 2027", label: "Stabilization Period" },
      { date: "Q1 – Q3 2027", label: "Refi or Sale Window" },
    ],
    gantt: [
      { label: "Pre-Construction", start: 0, duration: 3 },
      { label: "Construction", start: 3, duration: 6 },
      { label: "Interior &\nLandscaping", start: 8, duration: 3 },
      { label: "Soft Launch", start: 11, duration: 1 },
      { label: "Full Launch", start: 12, duration: 1 },
      { label: "Stabilization", start: 13, duration: 9 },
      { label: "Exit Window", start: 20, duration: 9 },
    ],
    ganttTotal: 32,
  },

  financials: {
    projections: {
      title: "Financial Projections",
      subtitle: "Lagoplata Micro Resort | Revenue, Expenses, and Net Operating Income (NOI)",
      intro:
        "Our financial model includes three scenarios to stress-test revenue and returns. Even under conservative assumptions, the project demonstrates lender-friendly DSCR and positive cash flow. Dynamic pricing and high occupancy potential drive upside.",
      maxValue: 800000,
      scenarios: [
        { label: "Conservative", revenue: 292000, expenses: 100000, noi: 192000, dscr: 1.4 },
        { label: "Expected", revenue: 475335, expenses: 150755, noi: 324580, dscr: 2.0 },
        { label: "Ideal", revenue: 660000, expenses: 200000, noi: 467000, dscr: 2.8 },
      ],
      stats: [
        { label: "DSCR", value: "1.4 / 2.0 / 2.8" },
        { label: "Occupancy Range", value: "50% / 66% / 80%" },
        { label: "ADR Range", value: "$275 / $350 / $425" },
        { label: "NOI Range", value: "$192K / $324K / $467K" },
      ],
      pdfLabel: "Download Financial Forecast PDF",
      pdf: "#",
    },
    useOfFunds: {
      title: "Use of Funds",
      subtitle: "Lagoplata Micro Resort | Thoughtful Allocation for Maximum Impact",
      intro:
        "Our capital deployment balances premium build quality with efficient execution. Below is a breakdown of how $2.54M in project costs are allocated.",
      items: [
        { label: "Acquisition/Land Costs", value: 573142, color: "#a08060" },
        { label: "Hard Costs", value: 1453788, color: "#6b9e8a" },
        { label: "Soft Costs", value: 56912, color: "#7a9ebc" },
        { label: "Financing", value: 453195, color: "#c47a6a" },
      ],
      pdfLabel: "Download Construction Costs PDF",
      pdf: "#",
    },
    operations: {
      title: "Operational Plan & Booking Strategy",
      subtitle: "Streamlined systems and smart automation to drive performance and guest satisfaction",
      items: [
        { label: "Direct Booking", text: "Powered by Hostaway, a leading all-in-one vacation rental software. Hostaway enables a custom website, CRM, marketing automation, and full OTA sync—allowing for reduced platform fees and long-term brand equity." },
        { label: "OTA Channels", text: "Listings on Airbnb, VRBO, and Booking.com provide visibility to global audiences while Hostaway centralizes messaging, calendars, and bookings." },
        { label: "Pricing Optimization", text: "Dynamic pricing through Hostaway integrates with PriceLabs to auto-adjust nightly rates based on demand, seasonality, competitor trends, and lead time." },
        { label: "Guest Experience", text: "Fully self-managed check-in with gated keypad access and smart locks. Integrated smart systems (thermostats, lighting, blinds) allow real-time control and monitoring. Guests receive proactive communication before, during, and after their stay." },
        { label: "Marketing Strategy", text: "Social-first approach (Instagram, Facebook), combined with strategic influencer stays and Google Ads." },
        { label: "User-Generated Content (UGC)", text: "The overall design of Lagoplata encourages guests to share their experiences via photos and videos—boosting organic reach and credibility through authentic, peer-driven promotion." },
      ],
      pdfLabel: "Download Marketing Strategy Assets PDF",
      pdf: "#",
      videoEmbed: "https://www.youtube.com/embed/SFWpSBFsLik",
    },
    risk: {
      title: "Risk Mitigation Strategy",
      subtitle: "Proactive planning to minimize exposure and protect lender interests",
      items: [
        { label: "Construction Delays", text: "Phased timeline, contractor accountability, and a 24-month interest-only loan allow for weather and permitting buffer." },
        { label: "Cost Overruns", text: "10% contingency and tight cost tracking, with weekly budget reviews by the project manager and GC." },
        { label: "Occupancy Risk", text: "Conservative scenario modeled at $250 ADR and 50% occupancy still exceeds DSCR thresholds." },
        { label: "Operational Risk", text: "Backed by Watershed Cabins' proven systems and tech-enabled remote management for reliability and scale." },
        { label: "Market Volatility", text: "Year-round Smoky Mountain demand, proximity to national parks, casino, and cultural draws create stable guest base." },
      ],
      pdfLabel: "Download Break Even Analysis PDF",
      pdf: "#",
    },
    comparables: {
      title: "Market Comparables & Case Studies",
      subtitle: "Proven performance from comparable luxury micro resorts",
      items: [
        {
          name: "Live Oak Lake – Waco, TX",
          image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
          body: "Built in 2021 and opened in early 2022, Live Oak Lake is a 7-cabin luxury retreat near Waco, Texas. Developed for $2.3M, it was sold just 18 months later for $7M in October 2023. The project achieved high occupancy and strong ADR through upscale design, digital marketing, and a direct booking strategy.",
          sources: [{ label: "Source 1", href: "#" }, { label: "Source 2", href: "#" }],
        },
        {
          name: "Onera – Fredericksburg, TX",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
          body: "Built in 2021 and opened in November of that year, Onera is a luxury glamping and micro resort that quickly attracted institutional attention. It was acquired by Summit Hotel Properties in October 2022 for a $7M valuation, with a $6.3M payout to founders who retained 10% equity.",
          sources: [{ label: "Source", href: "#" }],
        },
      ],
    },
    exit: {
      title: "Exit Strategy",
      subtitle: "Lagoplata Micro Resort | Two Clear Paths to Monetization",
      refinanceHeading: "Refinance & Hold",
      refinanceText:
        "Upon stabilization in 2026–2027, refinance the construction loan into a long-term mortgage. With an NOI of up to $417K and stabilized DSCR over 2.5, this option creates strong cash flow with potential for long-term asset appreciation and equity pulls.",
      saleHeading: "Strategic Sale",
      saleText:
        "Market comparables like Live Oak Lake and Onera show strong investor appetite for stabilized luxury cabin resorts. With solid branding, financials, and guest experience, Lagoplata is positioned for a premium valuation by 2027.",
      stats: [
        { label: "Exit Window", value: "Q1 – Q3 2027" },
        { label: "Refi or Sale Flexibility", value: "Based on performance and market timing" },
        { label: "Comps", value: "Live Oak Lake (3x return in 18 months), Onera (sold to REIT)" },
      ],
    },
  },

  team: {
    title: "Project Team",
    subtitle: "Lagoplata Micro Resort | Built by a hands-on team of experts",
    members: [
      { name: "Trevor Tirrell", role: "Founder & Project Manager", bio: "Hands-on experience in HVAC, framing, roofing, electrical, and plumbing. Converted a cargo van into a $150K luxury camper. Former software engineering manager now fully focused on project execution.", image: "", initials: "TT" },
      { name: "Shannon Lackey", role: "General Contractor, WNC Mountain Builders", bio: "25+ years in high-end residential construction. Specializes in small luxury cabins. Known for craftsmanship and integrity.", image: "", initials: "SL" },
      { name: "Scott Queen", role: "Builder & Lead Carpenter", bio: "Over 40 years of experience building custom homes and fine furniture. Master in trim, tile, cabinetry, and finish work.", image: "", initials: "SQ" },
      { name: "Tim Goodwin", role: "Architect & Property Manager, Watershed Cabins", bio: "Founder of Watershed Cabins. 20+ years in design and hospitality. Designed and operated dozens of Smoky Mountain vacation rentals.", image: "", initials: "TG" },
    ],
  },

  contact: {
    title: "Let's Build Something Beautiful",
    subtitle: "Lagoplata Micro Resort | A smart investment in design, demand, and destination",
    intro1:
      "With a strong team, proven financials, and a high-demand location, Lagoplata Micro Resort is ready to deliver outsized returns and unforgettable guest experiences. We invite you to join us in building the next standout destination in the Smoky Mountains.",
    intro2: "Questions? Let's talk financing, timeline, or tour the site. We're ready to move.",
    contactName: "Trevor Tirrell, Founder",
    email: "ttirrell@hotmail.com",
    phone: "864-553-3402",
  },
};