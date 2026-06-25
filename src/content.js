// Master content config for the Chappell Point pitch deck.
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
    backgroundImage: "/images/aerial.jpg",
    title: "Chappell Point",
    subtitle: "Micro Resort",
    tagline:
      "A 14-Unit Luxury Micro Resort Compound in the Texas Hill Country — Purpose-Built for the Premium Outdoor Hospitality and Event Market.",
  },

  executiveSummary: {
    title: "Executive Summary",
    subtitle: "Chappell Point | Glen Rose, Texas",
    overview:
      "Chappell Point is a ground-up luxury glamping and short-term rental compound in Somervell County, Texas — 11 purpose-designed cabins and 3 curated Airstream suites on a wooded parcel outside Glen Rose. The project targets the fastest-growing segment of the Texas STR market: premium experiential stays that command $300–$700+ per night and consistently outperform traditional vacation rentals on occupancy and nightly rate.",
    developmentDetails: [
      { label: "Total Project Cost", value: "$3.51M" },
      { label: "Senior Debt (7.5% / 25yr)", value: "$2.457M (70% LTC)" },
      { label: "Equity Raise", value: "$1.053M" },
      { label: "Entity", value: "Lago Plata Properties LLC" },
    ],
    marketAdvantage: [
      "14 distinct units across two typologies — structural cabins and Airstream suites — on a wooded Somervell County parcel",
      "38 minutes from Fort Worth; within 2 hours of 6M+ DFW and Austin-San Antonio metro residents",
      "The luxury STR tier in Somervell County is virtually untapped — existing inventory skews toward older cabins at $150–$250/night",
      "Fossil Rim Wildlife Centre, Dinosaur Valley State Park, and the Paluxy River create year-round destination demand",
      "Professionally managed from day one: Hostaway + PriceLabs",
    ],
    timelineLaunch: [
      "Capital close & permitting: Q3 2026",
      "Phase 1 delivery (6 cabins + Airstreams): Q1 2027",
      "Full open (14 units): Q2 2027",
      "Occupancy target reached: Q3–Q4 2027",
    ],
    financialHighlights: [
      "Year 1 NOI: $599K (base case)",
      "DSCR: 1.92x — tested to 1.20x at 55% occupancy",
      "After-built value: $4.9M at a 7.5% cap rate",
      "Total project cost: $3.51M — $1.39M in equity value created at completion",
    ],
    businessPlanLabel: "Download the Chappell Point Business Plan",
    businessPlanPdf: "#",
  },

  concept: {
    title: "The Chappell Point Concept",
    subtitle:
      "Two typologies. One unforgettable experience — where Hill Country landscape meets elevated design.",
    cabinRenderImage: "/images/cabin-render.jpg",
    siteMapImage: "/images/site-map.jpg",
    paragraphs: [
      "Chappell Point is a 14-unit luxury micro resort compound in Somervell County, Texas. The property features 11 high-design structural cabins and 3 curated Airstream suites, each with private outdoor living spaces, hotel-grade finishes, and thoughtfully chosen amenity packages.",
      "Shared resort amenities — including a pool, event pavilion, and fire pit commons — create a compound experience that goes well beyond the individual cabin. This positions Chappell Point for both leisure guests and private event bookings.",
      "Unlike cookie-cutter STR developments, Chappell Point is built for the guest who has stayed everywhere and wants something worth sharing. Every design decision — from A-frame rooflines and stone chimneys to Airstream pergola decks — is built to earn 5-star reviews, repeat bookings, and organic social reach.",
      "The project is led by an experienced Texas operator with an active STR portfolio, deep construction knowledge, and a hands-on hospitality operations approach. This is not a first deal — it is a natural extension of a proven operating track record.",
    ],
  },

  location: {
    title: "Location Overview",
    subtitle: "Chappell Point | Somervell County, Texas",
    intro:
      "The Chappell Point site is a wooded parcel in Somervell County, Texas — outside Glen Rose, at the edge of the Paluxy River watershed. Mature cedar, native stone outcroppings, and natural drainage corridors create exactly the landscape luxury glamping guests are looking for. The property sits 38 minutes from Fort Worth and less than 2 hours from Austin — within the Texas weekend driving range that fuels year-round bookings.",
    attractions: [
      {
        name: "Fossil Rim Wildlife Centre",
        description:
          "One of the top wildlife conservation parks in the US, drawing 200,000+ visitors annually to Glen Rose. A primary booking driver for Chappell Point guests year-round.",
        image: "",
      },
      {
        name: "Dinosaur Valley State Park",
        description:
          "Home to some of the best-preserved dinosaur tracks in the world, along the Paluxy River. A top-rated Texas state park just minutes from the property.",
        image: "",
      },
      {
        name: "Paluxy River",
        description:
          "A scenic Hill Country river near the Chappell Point site — offering tubing, swimming, and nature access guests can enjoy without driving far.",
        image: "",
      },
      {
        name: "Glen Rose, TX",
        description:
          "A charming small town with local dining, antique shops, wineries, and the Somervell County Expo Center — a consistent events and rodeo draw.",
        image: "",
      },
      {
        name: "Meridian State Park",
        description:
          "Scenic cypress-lined lake and hiking trails in Bosque County, a short drive from Chappell Point — a secondary outdoor draw for active guests.",
        image: "",
      },
      {
        name: "Texas Hill Country Wine Trail",
        description:
          "Several well-regarded wineries and tasting rooms within 45–90 minutes, adding a strong leisure draw for couples and small groups.",
        image: "",
      },
      {
        name: "Fort Worth Stockyards",
        description:
          "38 minutes north — a major cultural attraction and the primary source of weekend guests for Chappell Point.",
        image: "",
      },
      {
        name: "Granbury, TX",
        description:
          "A thriving lakefront community 25 minutes from the site — offering live music, dining, and Lake Granbury water recreation as a nearby excursion.",
        image: "",
      },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.5!2d-97.7331!3d32.2321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDEzJzU1LjYiTiA5N8KwNDMnNTkuMiJX!5e0!3m2!1sen!2sus!4v1",
  },

  market: {
    title: "Drive-To Market Reach",
    subtitle:
      "Chappell Point | Within 2 hours of 9M+ residents across Texas and Oklahoma",
    intro:
      "Glen Rose's location makes Chappell Point a natural weekend escape for a large slice of Texas. No flight required. The primary guest base runs from DFW to Austin and San Antonio — one of the fastest-growing population corridors in the country.",
    cities: [
      {
        name: "Fort Worth, TX",
        distance: "38 miles (38 minutes)",
        population: "3,500,000+",
        description:
          "Closest major city. DFW residents are Chappell Point's primary guest base — an affluent, weekend-travel market with strong discretionary spend.",
        image: "",
      },
      {
        name: "Dallas, TX",
        distance: "70 miles (1 hour)",
        population: "7,600,000+",
        description:
          "The largest Texas metro. A major source of weekend bookings and one of the highest-volume short-term travel markets in the South.",
        image: "",
      },
      {
        name: "Arlington, TX",
        distance: "55 miles (55 minutes)",
        population: "400,000+",
        description:
          "Mid-metro anchor between Dallas and Fort Worth. Home to major sports venues and entertainment — drives consistent leisure travel.",
        image: "",
      },
      {
        name: "Waco, TX",
        distance: "80 miles (1 hour 15 minutes)",
        population: "280,000+",
        description:
          "A growing destination city with strong Baylor University and Magnolia Silos tourism. A solid secondary market for Chappell Point.",
        image: "",
      },
      {
        name: "Austin, TX",
        distance: "175 miles (2 hours)",
        population: "2,200,000+",
        description:
          "One of the fastest-growing US cities. Tech-forward, design-conscious travelers — a strong match for Chappell Point's guest profile.",
        image: "",
      },
      {
        name: "San Antonio, TX",
        distance: "210 miles (2 hours 30 minutes)",
        population: "2,600,000+",
        description:
          "Major Texas metro with strong tourism infrastructure. Military and corporate presence creates consistent leisure travel year-round.",
        image: "",
      },
      {
        name: "Oklahoma City, OK",
        distance: "175 miles (2 hours 30 minutes)",
        population: "1,400,000+",
        description:
          "A growing northern market with few premium glamping options locally — making a Texas Hill Country trip an easy sell.",
        image: "",
      },
      {
        name: "Abilene, TX",
        distance: "120 miles (1 hour 45 minutes)",
        population: "170,000+",
        description:
          "West Texas hub with limited luxury overnight options nearby. Chappell Point offers a premium getaway within easy driving range.",
        image: "",
      },
    ],
    footnote:
      "*Population figures reflect the metropolitan statistical area (MSA) for each city.",
  },

  timeline: {
    title: "Development Timeline",
    subtitle: "Chappell Point | Key Milestones from Groundbreak to Full Operation",
    intro1:
      "Chappell Point is structured for phased delivery — early units begin generating revenue before construction is fully complete, reducing holding costs and accelerating the path to full occupancy.",
    intro2:
      "A 14-month build-to-full-open timeline with phased cabin delivery allows efficient resource use and early cash flow to offset construction costs.",
    milestones: [
      { date: "Q3 2026", label: "Capital Close & Permitting" },
      { date: "Q3 2026", label: "Site Work Begins — Roads, Utilities, Clearing" },
      { date: "Q4 2026", label: "Foundation & Infrastructure (Phase 1)" },
      { date: "Q4 2026", label: "Pool Excavation & Pavilion Framing" },
      { date: "Q1 2027", label: "Phase 1 Delivery — 6 Cabins + Airstreams (Soft Open)" },
      { date: "Q2 2027", label: "Phase 2 Delivery — Remaining 5 Cabins + Pool (Full Open)" },
      { date: "Q3–Q4 2027", label: "Occupancy Target Reached — 68%+" },
      { date: "2028–2029", label: "Refinance or Sale Window" },
    ],
    gantt: [
      { label: "Permitting & Site Work", start: 0, duration: 3 },
      { label: "Infrastructure", start: 2, duration: 4 },
      { label: "Phase 1 Build", start: 3, duration: 5 },
      { label: "Phase 2 Build", start: 6, duration: 5 },
      { label: "Soft Open", start: 8, duration: 1 },
      { label: "Full Open", start: 11, duration: 1 },
      { label: "Ramp to Target Occupancy", start: 12, duration: 9 },
      { label: "Refi or Sale Window", start: 20, duration: 12 },
    ],
    ganttTotal: 32,
  },

  financials: {
    projections: {
      title: "Financial Projections",
      subtitle:
        "Chappell Point | Revenue, Expenses, and Net Operating Income — Two Scenarios",
      intro:
        "Our model runs a base case and an upside case. The base case assumes 68% occupancy and a $385 average nightly rate — in line with comparable properties in Somervell County. The upside case reflects what top-performing luxury glamping properties in the region have demonstrated at full stride. Both scenarios produce comfortable debt coverage.",
      maxValue: 1500000,
      scenarios: [
        {
          label: "Base Case",
          revenue: 1387000,
          expenses: 788000,
          noi: 599000,
          dscr: 1.92,
        },
        {
          label: "Upside Case",
          revenue: 1740000,
          expenses: 940000,
          noi: 800000,
          dscr: 2.57,
        },
      ],
      stats: [
        { label: "DSCR", value: "1.92 / 2.57" },
        { label: "Occupancy", value: "68% / 80%" },
        { label: "Avg. Nightly Rate", value: "$385 / $425" },
        { label: "NOI", value: "$599K / $800K" },
      ],
      pdfLabel: "Download Financial Forecast PDF",
      pdf: "#",
    },
    useOfFunds: {
      title: "Use of Funds",
      subtitle: "Chappell Point | $3.51M Deployed with Precision",
      intro:
        "The budget balances premium build quality with efficient, phased execution. Below is a breakdown of how $3.51M in total project costs are allocated.",
      items: [
        { label: "Cabin Construction — 11 Units", value: 2310000, color: "#a08060" },
        { label: "Airstream Suites — 3 Units", value: 285000, color: "#6b9e8a" },
        { label: "Site & Infrastructure", value: 420000, color: "#7a9ebc" },
        { label: "Amenities (Pool, Pavilion, Commons)", value: 285000, color: "#c47a6a" },
        { label: "Soft Costs & Operating Reserve", value: 210000, color: "#8a7a9e" },
      ],
      pdfLabel: "Download Construction Cost Breakdown PDF",
      pdf: "#",
    },
    operations: {
      title: "Operational Plan & Booking Strategy",
      subtitle:
        "A practical technology stack and hands-on guest experience to drive strong performance from day one",
      items: [
        {
          label: "Property Management",
          text: "Powered by Hostaway — an all-in-one vacation rental platform with a custom direct booking website, CRM, and full OTA sync. Less platform dependency, more repeat guests and direct bookings over time.",
        },
        {
          label: "OTA Distribution",
          text: "Listed on Airbnb and VRBO from day one. Hostaway centralizes messaging, calendars, and reservations across all channels so nothing falls through the cracks.",
        },
        {
          label: "Dynamic Pricing",
          text: "PriceLabs adjusts nightly rates automatically based on demand, seasonality, and what comparable properties are charging — keeping rates competitive without leaving money on the table.",
        },
        {
          label: "Guest Experience",
          text: "Self-managed check-in via smart locks and gated access. Automated guest communication before, during, and after each stay. Smart home systems allow remote monitoring of all 14 units from a single dashboard.",
        },
        {
          label: "Event & Group Bookings",
          text: "The pavilion and pool are designed for full-property buyouts — retreats, small weddings, and corporate gatherings. These bookings carry a significantly higher nightly rate than standard reservations.",
        },
        {
          label: "Marketing",
          text: "Social-first approach on Instagram and Pinterest, paired with targeted influencer stays. Chappell Point's design is built to be photographed — guest-generated content is a core organic booking driver.",
        },
      ],
      pdfLabel: "Download Marketing Strategy PDF",
      pdf: "#",
      videoEmbed: "",
    },
    risk: {
      title: "Risk & How We're Addressing It",
      subtitle: "Straightforward planning to protect the project and the people in it",
      items: [
        {
          label: "Construction Delays",
          text: "Phased delivery means revenue starts before all units are complete. A proven Texas GC with an active timeline keeps the build on track.",
        },
        {
          label: "Cost Overruns",
          text: "10% contingency is baked into the budget. Weekly cost reviews with the GC. Phased construction allows real-time scope adjustments between phases if needed.",
        },
        {
          label: "Lower-Than-Expected Occupancy",
          text: "We stress-tested the numbers at 55% occupancy — well below comparable property performance in Somervell County. At 55%, debt service is still covered. The project doesn't require a best-case outcome to work.",
        },
        {
          label: "Regulatory Risk",
          text: "Somervell County has no STR licensing layer beyond standard county building requirements — a real advantage over most Texas urban markets that have added permitting and restriction frameworks.",
        },
        {
          label: "Seasonal Softness",
          text: "Fossil Rim draws 200,000+ visitors annually. Dinosaur Valley State Park is a year-round destination. The guest base isn't tied to a single season.",
        },
      ],
      pdfLabel: "Download Break-Even Analysis PDF",
      pdf: "#",
    },
    comparables: {
      title: "Comparable Properties",
      subtitle: "What comparable Texas luxury micro resorts have done",
      items: [
        {
          name: "Live Oak Lake — Waco, TX",
          image:
            "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80",
          body: "Built in 2021 and opened in early 2022, Live Oak Lake is a 7-cabin luxury retreat near Waco, Texas. Developed for $2.3M, it sold 18 months later for $7M in October 2023. Strong occupancy and nightly rates driven by premium design, direct bookings, and social marketing.",
          sources: [{ label: "Source", href: "#" }],
        },
        {
          name: "Onera — Fredericksburg, TX",
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
          body: "Opened November 2021, Onera is a luxury glamping property in the Texas Hill Country that attracted outside buyers quickly after opening. Acquired by Summit Hotel Properties in October 2022 at a $7M valuation — a strong data point for what a well-operated Texas glamping property can command.",
          sources: [{ label: "Source", href: "#" }],
        },
      ],
    },
    exit: {
      title: "Exit Options",
      subtitle: "Chappell Point | Two straightforward paths to investor returns",
      refinanceHeading: "Refinance & Hold",
      refinanceText:
        "Once the property reaches target occupancy in 2027, refinance the construction debt into a long-term loan. With a Year 1 NOI of $599K and a 1.92x debt coverage ratio, this path produces solid ongoing cash flow with long-term property appreciation.",
      saleHeading: "Sell the Property",
      saleText:
        "Texas comparables — Live Oak Lake (sold for 3x cost in 18 months) and Onera (purchased by a hotel company at $7M) — show that well-run luxury glamping properties attract serious buyers. Chappell Point is designed with this outcome in mind: premium build quality, clean financials, and a guest experience that holds its value.",
      stats: [
        { label: "Target Window", value: "2028–2029 (after reaching target occupancy)" },
        { label: "Refi or Sale", value: "Decision based on performance and market conditions" },
        {
          label: "Comparable Sales",
          value: "Live Oak Lake (3x cost in 18 months), Onera (sold to Summit Hotel Properties)",
        },
      ],
    },
  },

  team: {
    title: "Project Team",
    subtitle: "Chappell Point | Built by experienced Texas operators",
    members: [
      {
        name: "Michael Vinson",
        role: "Sponsor",
        bio: "Texas-licensed attorney and active real estate investor. Operates a growing STR portfolio including Living Waters on Lake Granbury. Partner in Lago Plata Properties, Dos V Legacy, and Alliance Land Resources. Deep background in mineral acquisition, land, and alternative asset underwriting.",
        image: "",
        initials: "MV",
      },
      {
        name: "Dan Whiffin",
        role: "Builder and Designer",
        bio: "Experienced Texas builder with over 35 years of experience, with active engagement on the Chappell Point project. Responsible for construction management, phased delivery scheduling, subcontractor coordination, and cost control from groundbreak through punch list.",
        image: "",
        initials: "DW",
      },
      {
        name: "Hospitality Operations",
        role: "STR Management Stack",
        bio: "Managed via a purpose-built technology stack: Hostaway (PMS) and PriceLabs (dynamic pricing). Distribution across Airbnb, VRBO, and a direct booking engine. VA-assisted day-to-day operations with a scalable GM hire at full occupancy.",
        image: "",
        initials: "OPS",
      },
    ],
  },

  contact: {
    title: "Let's Build Something Extraordinary",
    subtitle:
      "Chappell Point | A well-underwritten investment in design, demand, and destination",
    intro1:
      "With an experienced operator, conservative underwriting, and a strong Texas Hill Country location, Chappell Point is built to deliver solid investor returns and a guest experience worth coming back to. We'd love to have you involved in building the next standout destination in the Texas outdoor hospitality market.",
    intro2:
      "Questions about the deal, timeline, or a site visit? We're ready to move.",
    contactName: "Michael Vinson, Sponsor",
    email: "info@lagoplata.com",
    phone: "682-500-1786",
  },
};
