import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const moduleEcosystemChart = `flowchart TB
  A["📊 STRATEGIC MODULES"] --> B["💰 Financial Module"]
  A --> C["👥 Human Resources Module"]
  A --> D["📦 Supply Chain Module"]
  A --> E["🔧 Operations Module"]

  B --> B1["Accounting Core"]
  B --> B2["Asset Management"]
  B1 --> B3["Financial Reports"]
  B2 --> B3

  C --> C1["HR Core"]
  C --> C2["HR Finance"]
  C --> C3["Payroll"]
  C1 --> C2
  C2 --> C3

  D --> D1["Buying"]
  D --> D2["Inventory"]
  D --> D3["Selling"]
  D1 --> D2
  D --> D2
  D2 --> D3

  E --> E1["Projects"]
  E --> E2["Manufacturing"]
  E --> E3["Service"]
  E1 --> B1

  style A fill:#e3f2fd
  style B fill:#c8e6c9
  style C fill:#fff3e0
  style D fill:#f3e5f5
  style E fill:#ffe0b2`

const erpBenefitsChart = `flowchart LR
  A["Manual Systems\n❌ Multiple spreadsheets\n❌ Data duplication\n❌ Slow reporting\n❌ Error-prone"] --> B["ERP System Benefits"]
  B --> C["✅ Single Source of Truth"]
  B --> D["✅ Real-time Visibility"]
  B --> E["✅ Automated Workflows"]
  B --> F["✅ Integrated Reporting"]
  B --> G["✅ Better Decision Making"]
  B --> H["✅ Compliance & Audit Trail"]
  B --> I["✅ Scalability"]

  style A fill:#ffcdd2
  style B fill:#fff9c4
  style C fill:#c8e6c9
  style D fill:#c8e6c9
  style E fill:#c8e6c9
  style F fill:#c8e6c9
  style G fill:#c8e6c9
  style H fill:#c8e6c9
  style I fill:#c8e6c9`

const boxClass =
  'print-block bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6'

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900 mb-3">{children}</h3>
}

function Callout({
  title,
  children,
  tone = 'blue',
}: {
  title: string
  children: React.ReactNode
  tone?: 'blue' | 'amber' | 'green'
}) {
  const styles = {
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    green: 'bg-green-50 border-green-200',
  }

  return (
    <div className={`print-block border rounded-xl p-4 mb-4 ${styles[tone]}`}>
      <p className="font-semibold text-gray-900 mb-1">{title}</p>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

export default function IntroductionPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        ERPNext Master Implementation Guide
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Version 15 - Professional ERP System Training Manual
      </p>

      <Section title="1. What is ERPNext?">
        <div className={boxClass}>
          <SubHeading>The Simple Answer</SubHeading>
          <p className="mb-4">
            <strong>ERPNext is a complete business management system</strong> that
            brings together all departments of your company—HR, Finance, Sales,
            Purchasing, Inventory, and Operations—into one unified platform.
          </p>
          <p className="mb-4">
            Instead of using separate spreadsheets, disconnected software tools,
            and manual processes, ERPNext allows your entire organization to work
            with the same data in real-time.
          </p>
          <p>
            <strong>Think of it as:</strong> One intelligent system where every
            department can see the same information and work together seamlessly.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>What Makes ERPNext Different?</SubHeading>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Open Source:</strong> Built on open-source technology;
              customizable to your exact needs
            </li>
            <li>
              <strong>Affordable:</strong> No expensive licensing fees like
              traditional ERP systems
            </li>
            <li>
              <strong>User-Friendly:</strong> Easy to understand interfaces for
              non-technical users
            </li>
            <li>
              <strong>Comprehensive:</strong> Covers all business functions in one
              platform
            </li>
            <li>
              <strong>Cloud-Ready:</strong> Can be hosted in the cloud or on
              premises
            </li>
            <li>
              <strong>Compliance-Focused:</strong> Built-in support for tax,
              regulatory, and audit requirements
            </li>
          </ul>
        </div>

        <Callout title="Important: ERPNext v15" tone="blue">
          This guide covers ERPNext version 15, the latest stable release.
          Features and workflows in this guide are specific to v15. If you're
          using a different version, some details may vary.
        </Callout>
      </Section>

      <Section title="2. Why Companies Use ERP Systems">
        <Mermaid chart={erpBenefitsChart} />

        <div className={boxClass}>
          <SubHeading>Real Business Challenges Solved by ERP</SubHeading>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ❌ Problem: Multiple Departments, Conflicting Data
            </h4>
            <p className="text-gray-700">
              Sales says the customer balance is $5,000; Finance says $7,500.
              Inventory shows 100 units in stock; Warehouse says 80. Nobody
              knows the truth.
            </p>
            <p className="text-green-700 font-semibold mt-2">
              ✅ ERP Solution: One unified data source. Everyone sees the same
              information, automatically updated in real-time.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ❌ Problem: Manual Processes & Delays
            </h4>
            <p className="text-gray-700">
              A sales order goes through email, then a spreadsheet, then a
              manual entry into another system. Takes days. Errors happen.
            </p>
            <p className="text-green-700 font-semibold mt-2">
              ✅ ERP Solution: Workflows are automated. A sales order
              automatically flows through the system, triggering inventory
              checks, purchase orders, and accounting entries instantly.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ❌ Problem: Hidden Visibility & Blind Decisions
            </h4>
            <p className="text-gray-700">
              Managers make decisions with incomplete information, old data, or
              guesses. They can't see real-time profitability of projects,
              customer health, or inventory status.
            </p>
            <p className="text-green-700 font-semibold mt-2">
              ✅ ERP Solution: Real-time dashboards and reports. Executives can
              see day-to-day profit, cash position, customer aging, project
              status—all with one click.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              ❌ Problem: No Audit Trail or Compliance
            </h4>
            <p className="text-gray-700">
              Tax audits, customer disputes, or regulatory checks become
              nightmares. "Who changed this invoice? When? Why?" — nobody knows.
            </p>
            <p className="text-green-700 font-semibold mt-2">
              ✅ ERP Solution: Every transaction is logged, timestamped, and
              tracked. Complete audit trail for compliance and dispute
              resolution.
            </p>
          </div>
        </div>
      </Section>

      <Section title="3. ERPNext Module Ecosystem">
        <Mermaid chart={moduleEcosystemChart} />

        <div className={boxClass}>
          <SubHeading>The Four Pillars of ERPNext</SubHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">💰 Finance</h4>
              <p className="text-sm text-gray-700">
                Accounting, payments, budgets, and financial reporting
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">👥 People</h4>
              <p className="text-sm text-gray-700">
                HR, attendance, leaves, compensation, and payroll
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">📦 Supply Chain</h4>
              <p className="text-sm text-gray-700">
                Buying, inventory, stock management, and warehousing
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🛍️ Sales</h4>
              <p className="text-sm text-gray-700">
                CRM, quotations, sales orders, and customer billing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepCard
              title="Core Modules"
              description="Essential for all businesses"
              bullets={[
                'Accounting - invoices, payments, ledgers',
                'HR - employees, attendance, leaves',
                'Buying - suppliers, purchase orders',
                'Selling - customers, orders, quotes',
                'Inventory - item masters, stock tracking',
              ]}
            />
            <StepCard
              title="Specialized Modules"
              description="Depends on your business type"
              bullets={[
                'Projects - time tracking, billing',
                'Manufacturing - BOMs, production',
                'Service - support tickets, SLAs',
                'Asset Management - equipment tracking',
                'CRM - leads, opportunities, pipelines',
              ]}
            />
          </div>
        </div>

        <Callout title="Module Integration" tone="green">
          The power of ERPNext comes from{' '}
          <strong>how these modules work together</strong>. A sales order
          automatically affects inventory, triggers purchases if stock is low,
          generates accounting entries, and impacts payroll when it's a service
          project. Modules don't work in isolation—they communicate
          automatically.
        </Callout>
      </Section>

      <Section title="4. System Architecture Overview">
        <div className={boxClass}>
          <SubHeading>How ERPNext Is Organized</SubHeading>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Master Data Layer (The Foundation)
            </h4>
            <p className="text-gray-700 mb-3">
              The core reference data that doesn't change often but is used by
              all transactions:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <strong>Company & Chart of Accounts:</strong> Your organization
                structure and GL accounts
              </li>
              <li>
                <strong>Customers & Suppliers:</strong> Your business partners
              </li>
              <li>
                <strong>Items & Materials:</strong> Products, services, materials
              </li>
              <li>
                <strong>Employees & Departments:</strong> Your workforce
              </li>
              <li>
                <strong>Warehouses & Locations:</strong> Where you store goods
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">
              Transaction Layer (The Workflow)
            </h4>
            <p className="text-gray-700 mb-3">
              Day-to-day business transactions that use the master data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <strong>Sales Invoices & Quotations:</strong> Customer orders and
                billing
              </li>
              <li>
                <strong>Purchase Orders & Receipts:</strong> Supplier orders and
                received goods
              </li>
              <li>
                <strong>Stock Entries:</strong> Inventory movements
              </li>
              <li>
                <strong>Salary Slips:</strong> Employee payments
              </li>
              <li>
                <strong>Journal Entries:</strong> Accounting records
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              Analysis Layer (The Insights)
            </h4>
            <p className="text-gray-700 mb-3">
              Reports and dashboards that analyze the transactions:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <strong>Financial Reports:</strong> P&L, Balance Sheet, Cash Flow
              </li>
              <li>
                <strong>HR Analytics:</strong> Attendance, payroll cost analysis
              </li>
              <li>
                <strong>Sales Analytics:</strong> Revenue, customer trends
              </li>
              <li>
                <strong>Inventory Reports:</strong> Stock levels, aging analysis
              </li>
            </ul>
          </div>
        </div>

        <Callout title="The Flow" tone="amber">
          Master Data → Transactions → Reports. Set up your master data
          correctly once, then transactions flow through cleanly, and reports
          automatically reflect your business reality.
        </Callout>
      </Section>

      <Section title="5. Key Benefits for Your Business">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">⚡</span> Speed & Efficiency
            </h4>
            <p className="text-gray-700">
              Automation eliminates manual data entry. Processes that took days
              now happen instantly. Staff focuses on strategy, not spreadsheets.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">🎯</span> Accuracy & Visibility
            </h4>
            <p className="text-gray-700">
              One source of truth means no data conflicts. Real-time visibility
              lets you catch problems early instead of discovering them in
              reports.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">💡</span> Better Decisions
            </h4>
            <p className="text-gray-700">
              Data-driven decisions based on real-time information instead of
              hunches. Dashboards show exactly what's happening in your business
              right now.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">🔒</span> Compliance & Security
            </h4>
            <p className="text-gray-700">
              Complete audit trails, user access controls, and compliance
              features. Ready for tax audits and regulatory inspections.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">📈</span> Scalability
            </h4>
            <p className="text-gray-700">
              As your company grows, ERPNext grows with you. Add users, modules,
              or locations without overhauling your systems.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-lg">💰</span> Cost Savings
            </h4>
            <p className="text-gray-700">
              Eliminate redundant tools and manual processes. No expensive
              licensing. Open-source flexibility at a fraction of traditional
              ERP costs.
            </p>
          </div>
        </div>
      </Section>

      <Section title="6. How to Use This Manual">
        <div className={boxClass}>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Read the Introduction:</strong> You are here. Understand
              the big picture.
            </li>
            <li>
              <strong>Organization Setup:</strong> Learn how to initialize your
              company, chart of accounts, and basic settings.
            </li>
            <li>
              <strong>Master Data Setup:</strong> Create your foundational data
              (customers, items, employees).
            </li>
            <li>
              <strong>Module-by-Module Learning:</strong> Dive into each module
              relevant to your business (HR, Sales, Finance, Projects, etc.).
            </li>
            <li>
              <strong>Cross-Module Integration:</strong> Understand how modules
              work together.
            </li>
            <li>
              <strong>Implementation Strategy:</strong> Follow the phased rollout
              plan for your organization.
            </li>
            <li>
              <strong>Best Practices:</strong> Apply lessons learned from
              successful ERP implementations.
            </li>
          </ol>
        </div>

        <Callout title="For Different Roles" tone="blue">
          <strong>Finance Leaders:</strong> Start with Organization Setup →
          Accounting → Implementation Strategy.
          <br />
          <br />
          <strong>HR Managers:</strong> Start with HR Core → HR Finance →
          Payroll.
          <br />
          <br />
          <strong>Operations Managers:</strong> Start with Inventory → Buying →
          Manufacturing.
          <br />
          <br />
          <strong>System Administrators:</strong> Read everything; focus on
          Settings & Customization for your specific setup.
        </Callout>
      </Section>

      <Section title="7. Prerequisites for Success">
        <div className={boxClass}>
          <SubHeading>Before You Start Implementation</SubHeading>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ✅ Business Process Documentation
            </h4>
            <p className="text-gray-700 text-sm">
              Know your current workflows. What are your sales, purchase, and
              accounting processes? How do departments interact?
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">✅ User Buy-in</h4>
            <p className="text-gray-700 text-sm">
              ERP success depends on user adoption. Employees need to understand
              why the system matters and how it helps them.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ✅ Data Cleanup First
            </h4>
            <p className="text-gray-700 text-sm">
              Garbage in = Garbage out. Clean your legacy data before migration.
              Validate customer lists, supplier records, and historical invoices.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              ✅ Dedicated Implementation Team
            </h4>
            <p className="text-gray-700 text-sm">
              Assign a project lead, business process experts, and IT support.
              Don't try to implement ERPNext as a side project.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              ✅ Training & Support Plan
            </h4>
            <p className="text-gray-700 text-sm">
              Plan user training for each module. Have support available during
              the first month post-launch.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <div className={boxClass}>
          <p className="mb-4">
            Now that you understand what ERPNext is and why it matters, let's
            get started:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Go to Organization Setup</strong> to configure your company
              structure
            </li>
            <li>
              <strong>Understand module relationships</strong> by reading
              Cross-Module Integration
            </li>
            <li>
              <strong>Plan your implementation</strong> using the Implementation
              Strategy section
            </li>
            <li>
              <strong>Dive into your key modules</strong> (HR, Finance, Sales,
              etc.)
            </li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
