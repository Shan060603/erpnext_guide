import Link from 'next/link'

const foundationalSections = [
  {
    name: 'Introduction',
    href: '/introduction',
    description: 'Learn what ERPNext is and why your company needs it',
    icon: '📚',
  },
  {
    name: 'Organization Setup',
    href: '/organization-setup',
    description: 'Configure company, chart of accounts, and cost centers',
    icon: '🏗️',
  },
  {
    name: 'HR Finance',
    href: '/hr-finance',
    description: 'Employee advances and expense claims (NOT payroll)',
    icon: '💼',
  },
  {
    name: 'Cross-Module Integration',
    href: '/cross-module-integration',
    description: 'Understand how modules work together seamlessly',
    icon: '🔗',
  },
  {
    name: 'Implementation Strategy',
    href: '/implementation-strategy',
    description: 'Step-by-step go-live roadmap and best practices',
    icon: '🚀',
  },
]

const modules = [
  {
    name: 'CRM',
    href: '/crm',
    description: 'Manage leads, opportunities, and customer relationships',
    icon: '👥',
  },
  {
    name: 'Selling',
    href: '/selling',
    description: 'Handle quotations, sales orders, and deliveries',
    icon: '💰',
  },
  {
    name: 'Buying',
    href: '/buying',
    description: 'Procure materials with RFQs and purchase orders',
    icon: '🛒',
  },
  {
    name: 'Inventory',
    href: '/inventory',
    description: 'Track stock, warehouses, and material movements',
    icon: '📦',
  },
  {
    name: 'Accounting',
    href: '/accounting',
    description: 'Manage invoices, payments, and financial entries',
    icon: '📊',
  },
  {
    name: 'Project',
    href: '/project',
    description: 'Plan and execute projects with tasks and timesheets',
    icon: '📋',
  },
  {
    name: 'Service',
    href: '/service',
    description: 'Manage support issues, maintenance, SLAs, and warranty claims',
    icon: '🔧',
  },
  {
    name: 'HR',
    href: '/hr',
    description: 'Manage recruitment, attendance, and performance',
    icon: '👔',
  },
  {
    name: 'Payroll',
    href: '/payroll',
    description: 'Process salaries, tax, and employee benefits',
    icon: '💵',
  },
  {
    name: 'Manufacturing',
    href: '/manufacturing',
    description: 'Plan production with bills of materials and work orders',
    icon: '🏭',
  },
  {
    name: 'Asset Management',
    href: '/asset',
    description: 'Track and maintain company assets',
    icon: '🏢',
  },
  {
    name: 'Reports',
    href: '/reports',
    description: 'Generate analytical reports and dashboards',
    icon: '📈',
  },
  {
    name: 'Settings',
    href: '/settings',
    description: 'Configure system preferences and permissions',
    icon: '⚙️',
  },
]

export default function HomePage() {
  return (
    <div className="pt-12 md:pt-0">
      <header className="mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          ERPNext User Training Manual
        </h1>
        <p className="text-base md:text-xl text-gray-600">
          Welcome to the comprehensive ERPNext training guide. This manual covers all major modules and workflows to help you master the system.
        </p>
      </header>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
          📖 Foundational Sections (Start Here)
        </h2>
        <p className="text-gray-700 mb-4">
          Read these before diving into specific modules:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {foundationalSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block p-4 md:p-6 bg-blue-50 rounded-xl shadow-md border border-blue-200 hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{section.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {section.name}
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
          Explore Modules
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="block p-4 md:p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-primary-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{module.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {module.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {module.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 md:mt-12 p-4 md:p-8 bg-primary-50 rounded-xl border border-primary-100">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
          Getting Started - Recommended Learning Path
        </h2>
        <p className="text-gray-700 mb-4">
          Follow this sequence for best results:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>Introduction</strong> - Understand ERPNext benefits and architecture</li>
          <li><strong>Organization Setup</strong> - Configure your company foundation</li>
          <li><strong>HR Module</strong> - Manage employees and attendance</li>
          <li><strong>HR Finance</strong> - Handle advances and expenses (separate from payroll)</li>
          <li><strong>Payroll</strong> - Process salaries and apply leaves/attendance</li>
          <li><strong>Accounting</strong> - Set up invoicing and payments</li>
          <li><strong>Selling & CRM</strong> - Manage sales pipeline and customers</li>
          <li><strong>Buying & Inventory</strong> - Track purchases and stock</li>
          <li><strong>Projects</strong> - If applicable to your business</li>
          <li><strong>Cross-Module Integration</strong> - See how everything connects</li>
          <li><strong>Implementation Strategy</strong> - Plan your go-live</li>
        </ol>
      </section>
    </div>
  )
}
