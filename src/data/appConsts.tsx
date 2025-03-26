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

export interface OpportunityPopupData {
  renewals: {
    product: string;
    stage: string;
    expiry: string;
    rsm: string;
  }[];
  ldos: {
    name: string;
    expires: string;
    hasOpportunity: boolean;
  }[];
  eas: {
    name: string;
    expiry: string;
    licenses: string[];
  }[];
  surgeEvents: {
    name: string;
    link: string;
  }[];
  showQuoteIntegration: boolean;
  showServicesAttach: boolean;
}

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
export const opportunityData: Record<number, OpportunityPopupData> = {
  1: {
    renewals: [
      { product: 'SmartNet Total Care', stage: 'Stage 2', expiry: '2025-06-30', rsm: 'Nina Patel' },
      { product: 'Security Ops License', stage: 'Stage 1', expiry: '2025-08-15', rsm: 'Samir Gupta' },
    ],
    ldos: [
      { name: 'Switching Infra', expires: '2025-04-10', hasOpportunity: false },
      { name: 'Voice Gateway', expires: '2025-04-28', hasOpportunity: true },
    ],
    eas: [
      { name: 'EA for Collaboration', expiry: '2026-01-01', licenses: ['CUCM', 'Webex Meetings'] },
      { name: 'EA for Security', expiry: '2026-07-30', licenses: ['Umbrella', 'Duo'] },
    ],
    surgeEvents: [
      { name: 'AI Surge Campaign', link: '#' },
      { name: 'Migration Incentive 2025', link: '#' },
    ],
    showQuoteIntegration: true,
    showServicesAttach: false,
  },

  2: {
    renewals: [],
    ldos: [
      { name: 'Wireless Access', expires: '2025-05-05', hasOpportunity: false },
    ],
    eas: [],
    surgeEvents: [],
    showQuoteIntegration: false,
    showServicesAttach: true,
  },
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

export interface DocumentPopupData {
  pitches: string[];
  proposals: string[];
  rfps: string[];
  businessCases: string[];
  contacts: {
    name: string;
    email: string;
    phone: string;
  }[];
  links: {
    label: string;
    url: string;
  }[];
}

export const documentPopupData: Record<number, DocumentPopupData> = {
  1: {
    pitches: ['Q1 Pitch Deck', 'Executive Summary - Jan', 'AI Product Demo Pitch'],
    proposals: ['SmartNet CX Proposal', 'Onboarding Proposal'],
    rfps: ['RFP - Southeast CX Project'],
    businessCases: ['Business Case - AI Edge'],
    contacts: [
      { name: 'Jane Doe', email: 'jane.doe@company.com', phone: '123-456-7890' },
      { name: 'John Smith', email: 'john.smith@company.com', phone: '987-654-3210' },
    ],
    links: [
      { label: 'AI Assisted Overview', url: '#' },
      { label: 'Escalation Sentiment', url: '#' },
      { label: 'SFDC Adoption', url: '#' },
      { label: 'Executive Mosaic', url: '#' },
    ],
  },
};

