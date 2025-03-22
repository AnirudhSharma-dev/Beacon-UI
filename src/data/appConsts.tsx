  // Updated sample data based on the image
  export const mainTableData = [
    { id: 1, name: "Well's Dairy, Inc.", action: "Renewal", dealId: "55827996", hide: false, icon: "security" },
    { id: 2, name: "NHI Corporation", action: "New Opportunity", dealId: "Create New", hide: false, icon: "network" },
    { id: 3, name: "Grand Forks Public", action: "LDOS", dealId: "55924344", hide: false, icon: "refresh" },
    { id: 4, name: "Vermeer", action: "Quote", dealId: "Create New", hide: false, icon: "default" },
    { id: 5, name: "Altra Hospital", action: "Integration", dealId: "55924344", hide: false, icon: "default" },
    { id: 6, name: "Hy-vee, Inc", action: "White Space", dealId: "55924344", hide: false, icon: "default" },
    { id: 7, name: "Vermeer", action: "Past Due", dealId: "Create New", hide: false, icon: "default" },
    { id: 8, name: "Purfoodz, Llc", action: "Renewal", dealId: "55924344", hide: false, icon: "default" },
    { id: 9, name: "Vermeer (Primary)", action: "LDOS", dealId: "55924344", hide: false, icon: "default" },
  ];

  // Sample data for the account tab
  export const accountData = {
    1: {
      name: "Well's Dairy, Inc.",
      currentYtdSpend: "$430k",
      yoyGrowth: "+11%",
      primarySE: "Compute; NX",
      preferredPartner: "CDW",
      indicators: ["Current Active EA", "Upcoming Renewal", "Marketing surge", "Low wallet pen"]
    },
    2: {
      name: "NHI Corporation",
      currentYtdSpend: "$280k",
      yoyGrowth: "+5%",
      primarySE: "Network; SaaS",
      preferredPartner: "SHI",
      indicators: ["New account", "Security interest"]
    },
    3: {
      name: "Grand Forks Public",
      currentYtdSpend: "$520k",
      yoyGrowth: "-2%",
      primarySE: "Hardware; Security",
      preferredPartner: "Splunk",
      indicators: ["Hardware refresh needed", "Budget approved"]
    },
    // Additional accounts data for the rest of the companies
    4: {
      name: "Vermeer",
      currentYtdSpend: "$310k",
      yoyGrowth: "+3%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["Manufacturing focus", "Expansion opportunity"]
    },
    5: {
      name: "Altra Hospital",
      currentYtdSpend: "$620k",
      yoyGrowth: "+8%",
      primarySE: "Healthcare; Security",
      preferredPartner: "CDW",
      indicators: ["HIPAA compliance", "Cloud migration"]
    },
    6: {
      name: "Hy-vee, Inc",
      currentYtdSpend: "$480k",
      yoyGrowth: "+6%",
      primarySE: "Retail; Data",
      preferredPartner: "SHI",
      indicators: ["AI interest", "Competitive account"]
    },
    7: {
      name: "Vermeer",
      currentYtdSpend: "$310k",
      yoyGrowth: "+3%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["Secondary location", "New project"]
    },
    8: {
      name: "Purfoodz, Llc",
      currentYtdSpend: "$180k",
      yoyGrowth: "+15%",
      primarySE: "Food Tech; Analytics",
      preferredPartner: "Arrow",
      indicators: ["Growing account", "Tech adoption"]
    },
    9: {
      name: "Vermeer (Primary)",
      currentYtdSpend: "$450k",
      yoyGrowth: "+7%",
      primarySE: "IoT; Edge",
      preferredPartner: "Insight",
      indicators: ["HQ location", "Strategic account"]
    }
  };

  // Sample data for the actions tab - based on "Actions - [Security EA Renewal]" in the image
  export const actionsData = {
    1: [
      { detail: "Duo; ThousandEyes", event: "EA Renewal", amount: "$1,500k", expansionOption: "No Services; Splunk" }
    ],
    2: [
      { detail: "Networking Suite", event: "Initial Install", amount: "$280k", expansionOption: "Security Add-on" }
    ],
    3: [
      { detail: "Hardware; Splunk", event: "Refresh", amount: "$350k", expansionOption: "Managed Services" }
    ],
    // Other actions for remaining companies
    4: [
      { detail: "IoT Platform", event: "Expansion", amount: "$125k", expansionOption: "Edge Computing" }
    ],
    5: [
      { detail: "Healthcare Security", event: "Compliance Update", amount: "$220k", expansionOption: "Cloud Backup" }
    ],
    6: [
      { detail: "Retail Analytics", event: "New Implementation", amount: "$175k", expansionOption: "AI Insights" }
    ],
    7: [
      { detail: "Secondary Location", event: "New Setup", amount: "$95k", expansionOption: "Integration Services" }
    ],
    8: [
      { detail: "Food Safety Tech", event: "Initial Deployment", amount: "$120k", expansionOption: "Analytics Package" }
    ],
    9: [
      { detail: "Primary Infrastructure", event: "Upgrade", amount: "$210k", expansionOption: "Managed Services" }
    ]
  };

  // Sample data for the opportunity tab - based on "Opportunity - [Security EA Refresh - 55827996]" in the image
  export const opportunityData = {
    1: {
      technology: "DUO; NGFW",
      stage: "5",
      dollarTier: "$450k",
      linked: "Yes",
      strategic: true,
      marketShare: "65%",
      highlights: ["Clickable", "Takes AM directly to where they can take actions"]
    },
    2: {
      technology: "SD-WAN; WiFi",
      stage: "3",
      dollarTier: "$280k",
      linked: "No",
      strategic: false,
      marketShare: "28%",
      highlights: ["New opportunity", "Competitive situation"]
    },
    3: {
      technology: "Hardware; Splunk",
      stage: "4",
      dollarTier: "$350k",
      linked: "Yes",
      strategic: true,
      marketShare: "42%",
      highlights: ["Refresh cycle", "Budget approved"]
    },
    // Other opportunities for remaining companies
    4: {
      technology: "IoT; Edge",
      stage: "2",
      dollarTier: "$125k",
      linked: "No",
      strategic: false,
      marketShare: "15%",
      highlights: ["New territory", "Competitive situation"]
    },
    5: {
      technology: "Security; Cloud",
      stage: "4",
      dollarTier: "$220k",
      linked: "Yes",
      strategic: true,
      marketShare: "55%",
      highlights: ["Compliance driven", "Executive support"]
    },
    6: {
      technology: "Analytics; AI",
      stage: "3",
      dollarTier: "$175k",
      linked: "No",
      strategic: true,
      marketShare: "30%",
      highlights: ["Innovation focus", "Competitive situation"]
    },
    7: {
      technology: "Network; IoT",
      stage: "2",
      dollarTier: "$95k",
      linked: "No",
      strategic: false,
      marketShare: "22%",
      highlights: ["Expansion project", "Budget pending"]
    },
    8: {
      technology: "Analytics; Security",
      stage: "3",
      dollarTier: "$120k",
      linked: "Yes",
      strategic: false,
      marketShare: "38%",
      highlights: ["Technology upgrade", "ROI focused"]
    },
    9: {
      technology: "Edge; Security",
      stage: "4",
      dollarTier: "$210k",
      linked: "Yes",
      strategic: true,
      marketShare: "48%",
      highlights: ["Strategic initiative", "Executive sponsored"]
    }
  };
