export interface BusinessPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  capabilities: string[];
  applications: string[];
}

export const businessPillars: BusinessPillar[] = [
  {
    id: "revenue-optimization",
    icon: "🎯",
    title: "Revenue Optimization Solutions",
    description: "Advanced pricing strategies, yield management, and multi-channel revenue optimization that maximizes profitability while maintaining competitive positioning",
    capabilities: [
      "Dynamic pricing algorithms and real-time yield management",
      "Multi-channel revenue strategies and distribution optimization",
      "Advanced market intelligence and competitive analysis",
      "Partnership revenue optimization and commission management",
      "Demand forecasting and inventory optimization",
      "Revenue performance analytics and KPI tracking"
    ],
    applications: [
      "Hospitality: OTA optimization, dynamic room pricing, revenue per available room (RevPAR) maximization",
      "SaaS: Subscription pricing optimization, customer lifetime value maximization, churn reduction"
    ]
  },
  {
    id: "operational-excellence",
    icon: "🏢",
    title: "Operational Excellence Solutions",
    description: "End-to-end operational efficiency, quality management, and performance optimization that drives sustainable business growth and customer satisfaction",
    capabilities: [
      "Process optimization and workflow standardization",
      "Quality management systems and compliance frameworks",
      "Real-time performance monitoring and KPI dashboards",
      "Customer experience optimization and journey mapping",
      "Staff training and development programs",
      "Operational cost reduction and efficiency improvements"
    ],
    applications: [
      "Hospitality: Guest experience management, service delivery optimization, staff productivity enhancement",
      "Corporate: Office operations streamlining, employee experience improvement, workflow automation"
    ]
  },
  {
    id: "asset-infrastructure",
    icon: "🔧",
    title: "Asset & Infrastructure Management",
    description: "Comprehensive facility management, maintenance optimization, and asset lifecycle solutions that maximize asset value and operational uptime",
    capabilities: [
      "Strategic facility management and space optimization",
      "Predictive and preventive maintenance programs",
      "Complete asset lifecycle management and tracking",
      "Compliance and safety management systems",
      "Energy efficiency and sustainability initiatives",
      "Vendor management and contract optimization"
    ],
    applications: [
      "Hospitality: Property maintenance excellence, facility operations optimization, guest safety compliance",
      "Corporate: Office buildings management, facility optimization, workplace safety programs",
      "Manufacturing: Plant maintenance optimization, asset performance tracking, regulatory compliance"
    ]
  },
  {
    id: "business-intelligence",
    icon: "📊",
    title: "Business Intelligence & Analytics",
    description: "Data-driven insights, performance analytics, and strategic decision support that transforms raw data into actionable business intelligence",
    capabilities: [
      "Advanced analytics and custom reporting solutions",
      "Real-time performance dashboards and KPI visualization",
      "Predictive analytics and machine learning forecasting",
      "Strategic decision support and scenario modeling",
      "Data integration and warehouse management",
      "Business performance benchmarking and competitive analysis"
    ],
    applications: [
      "Hospitality: Guest behavior analysis, market intelligence, revenue optimization insights",
      "Corporate: Operational KPIs, performance tracking, strategic planning support"
    ]
  },
  {
    id: "global-distribution",
    icon: "🌐",
    title: "Global Distribution & Partnerships",
    description: "Multi-channel distribution strategies and strategic partnership development that expands market reach and drives sustainable growth",
    capabilities: [
      "Multi-channel distribution strategy and optimization",
      "Strategic partnership development and management",
      "Global market expansion and localization strategies",
      "Distribution network optimization and performance tracking",
      "Partner relationship management and support systems",
      "Cross-border commerce and international market entry"
    ],
    applications: [
      "Hospitality: OTA management, travel partnerships, global booking platform integration",
      "B2B: Channel partner management, reseller network development, strategic alliances",
      "Technology: Integration partnerships, API management, global reseller networks"
    ]
  }
];
