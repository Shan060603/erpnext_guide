import Link from 'next/link'

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
    description: 'Deliver after-sales support and maintenance',
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
          Getting Started
        </h2>
        <p className="text-gray-700 mb-4">
          New to ERPNext? We recommend starting with these foundational modules:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><strong>CRM</strong> - Understand how to capture and manage leads</li>
          <li><strong>Selling</strong> - Learn the sales workflow from quote to invoice</li>
          <li><strong>Inventory</strong> - Get familiar with stock management</li>
          <li><strong>HR</strong> - Manage employee lifecycle and attendance</li>
          <li><strong>Payroll</strong> - Process employee salaries and taxes</li>
        </ol>
      </section>
    </div>
  )
}
