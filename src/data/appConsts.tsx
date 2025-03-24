// Define types for the data structures
type MainTableDataItem = {
  id: number;
  name: string;
  action: string;
  dealId: string;
  hide: boolean;
  icon: string;
};

type AccountDataItem = {
  name: string;
  currentYtdSpend: string;
  yoyGrowth: string;
  primarySE: string;
  preferredPartner: string;
  indicators: string[];
};

type ActionsDataItem = {
  event: string;
  type: string;
  date: string;
  summary: string;
};

type OpportunityDataItem = {
  technology: string;
  stage: string;
  dollarTier: string;
  linked: string;
  strategic: boolean;
  marketShare: string;
  highlights: string[];
};

// Apply types to the variables
export const mainTableData: MainTableDataItem[] = [
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
export const accountData: Record<number, AccountDataItem> = {
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
export const actionsData: Record<number, ActionsDataItem[]> = {
  1: [
    {
      event: 'Document Review',
      type: 'PDF',
      date: '2025-03-20',
      summary: 'Reviewed legal documentation for proposal terms.',
    },
    {
      event: 'Proposal Sent',
      type: 'Email',
      date: '2025-03-22',
      summary: 'Sent pricing and pitch deck to primary contact.',
    },
    {
      event: 'Customer Feedback',
      type: 'Meeting',
      date: '2025-03-25',
      summary: 'Customer provided feedback and requested revisions.',
    },
  ],
  2: [
    {
      event: 'NDA Signed',
      type: 'PDF',
      date: '2025-03-10',
      summary: 'Signed mutual NDA with partner company.',
    },
    {
      event: 'Solution Overview Shared',
      type: 'PPT',
      date: '2025-03-12',
      summary: 'Shared architecture and solution roadmap presentation.',
    },
  ],
};


// Sample data for the opportunity tab - based on "Opportunity - [Security EA Refresh - 55827996]" in the image
export const opportunityData: Record<number, OpportunityDataItem> = {
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

// ========================
// More Detail Popup Data
// ========================

export interface MoreDetailData {
  dealDetail: {
    dealId: string;
    accountName: string;
    expectedService: string;
    expectedProduct: string;
    stage: string;
    expectedBookDate: string;
    forecastStatus: string;
    opportunityOwner: string;
    accountSite: string;
  };
  technologyServices: {
    id: number;
    name: string;
    category: string;
    product: string;
    dealId: string;
    partner: string;
    quote: string;
    quoteAmount: string;
  }[];
  accountDetail: {
    owner: string;
    accountName: string;
    website: string;
    phone: string;
    industry: string;
    parent: string;
    verticalTop: string;
    verticalSub: string;
    verticalDetail: string;
    segments: string[];
  };
  financials: {
    avgBookings3Yr: string;
    installBase: string;
    whitespaceSolutions: string[];
  };
}

export const moreDetailData: Record<number, MoreDetailData> = {
  1: {
    dealDetail: {
      dealId: '99724070',
      accountName: 'BLUE CROSS AND BLUE SHIELD LA',
      expectedService: 'USD 150',
      expectedProduct: 'USD 3,200',
      stage: '3 - Proposal',
      expectedBookDate: '5/2/2025',
      forecastStatus: 'Commit',
      opportunityOwner: 'tmedine',
      accountSite: '5255 REITZ AVE, BATON ROUGE, LA, UNITED STATES',
    },
    technologyServices: [
      {
        id: 1,
        name: 'TECHNICAL SUPPORT SERVICES - SMART NET TOTAL CARE',
        category: 'SNTC',
        product: 'Smart Net Total Care',
        dealId: '79455534',
        partner: 'TRANSFORMYX LLC',
        quote: 'BCBSLA M&S Quote',
        quoteAmount: '3,347',
      },
      {
        id: 2,
        name: 'Cisco Compute',
        category: 'SNTC',
        product: 'Compute',
        dealId: '79455534',
        partner: 'TRANSFORMYX LLC',
        quote: '—',
        quoteAmount: '—',
      },
    ],
    accountDetail: {
      owner: 'Phil Meyers',
      accountName: 'SIXTEENTH STREET COMMUNITY HEALTH CENTER, INC',
      website: 'http://www.sschc.org',
      phone: '(414) 672-1353',
      industry: 'Specialty outpatient clinics, nec',
      parent: '—',
      verticalTop: 'Health Care',
      verticalSub: 'Providers',
      verticalDetail: 'Providers',
      segments: ['Super Group Program Type'],
    },
    financials: {
      avgBookings3Yr: '$450,000',
      installBase: '$1.2M',
      whitespaceSolutions: ['Security', 'AI Analytics', 'Edge Compute'],
    },
  },
};
