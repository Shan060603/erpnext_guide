import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const organizationSetupChart = `flowchart TD
  A["System Configuration"] --> B["1. Create Company"]
  B --> C["2. Set Fiscal Year"]
  C --> D["3. Create Accounting Period"]
  D --> E["4. Design Chart of Accounts"]
  E --> F["5. Create Cost Centers"]
  F --> G["6. Set Accounting Dimension"]
  G --> H["7. Configure Currencies"]
  H --> I["✅ Organization Ready"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#e8f5e9
  style D fill:#e8f5e9
  style E fill:#fff3e0
  style F fill:#fff3e0
  style G fill:#fff3e0
  style H fill:#fff3e0
  style I fill:#c8e6c9`

const coaExampleChart = `flowchart TD
  A["Chart of Accounts"] --> B["Assets (1000)"]
  A --> C["Liabilities (2000)"]
  A --> D["Equity (3000)"]
  A --> E["Income (4000)"]
  A --> F["Expenses (5000)"]

  B --> B1["Current Assets (1100)"]
  B --> B2["Fixed Assets (1200)"]
  B1 --> B11["Cash (1110)"]
  B1 --> B12["Receivables (1120)"]
  B2 --> B21["Equipment (1210)"]

  C --> C1["Current Liabilities (2100)"]
  C --> C2["Long-term Liabilities (2200)"]
  C1 --> C11["Payables (2110)"]
  C1 --> C12["Advance Payments (2120)"]

  E --> E1["Product Sales (4100)"]
  E --> E2["Service Income (4200)"]

  F --> F1["Cost of Goods Sold (5100)"]
  F --> F2["Operating Expenses (5200)"]
  F2 --> F21["Salaries (5210)"]
  F2 --> F22["Rent (5220)"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#e8f5e9
  style D fill:#e8f5e9
  style E fill:#e8f5e9
  style F fill:#e8f5e9
  style B1 fill:#fff3e0
  style B11 fill:#f3e5f5
  style E1 fill:#f3e5f5`

const costCenterHierarchyChart = `flowchart TD
  A["Company"] --> B["Regional - North"]
  A --> C["Regional - South"]
  A --> D["Functional - IT"]

  B --> B1["Delhi Branch"]
  B --> B2["Punjab Branch"]
  C --> C1["Bangalore Branch"]

  D --> D1["IT Operations"]
  D --> D2["IT Support"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style B1 fill:#fff3e0
  style D1 fill:#f3e5f5`

const boxClass =
  'print-block bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6'

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900 mb-3">{children}</h3>
}

function MiniHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold text-gray-800 mb-2">{children}</h4>
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

export default function OrganizationSetupPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Organization Setup Module
      </h1>

      <Callout title="Foundation First" tone="amber">
        This is the most critical section of your implementation. Incorrect
        organizational setup cascades throughout ERPNext. Get this right before
        moving to transactions and operations.
      </Callout>

      <Section title="1. Overview - Why Organization Setup Matters">
        <div className={boxClass}>
          <SubHeading>The Pyramid</SubHeading>
          <p className="mb-4">
            Think of ERPNext setup like building a house:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Foundation (Organization Setup):</strong> Everything rests
              on this
            </li>
            <li>
              <strong>Walls (Master Data):</strong> Built on the foundation
            </li>
            <li>
              <strong>Roof (Transactions):</strong> Dependent on walls and
              foundation
            </li>
          </ul>
          <p className="text-right font-semibold text-gray-700">
            A weak foundation = the entire structure crumbles
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>What We Configure</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Company:</strong> Your legal entity (parent company,
              branches, subsidiaries)
            </li>
            <li>
              <strong>Fiscal Year:</strong> Your financial year (Apr-Mar, Jan-Dec,
              etc.)
            </li>
            <li>
              <strong>Chart of Accounts:</strong> GL account structure
            </li>
            <li>
              <strong>Cost Centers:</strong> Profit/responsibility centers
            </li>
            <li>
              <strong>Accounting Dimensions:</strong> Custom analysis dimensions
            </li>
            <li>
              <strong>Currency & Exchange:</strong> Multi-currency support
            </li>
          </ol>
        </div>
      </Section>

      <Section title="2. System Setup Flow">
        <Mermaid chart={organizationSetupChart} />
      </Section>

      <Section title="3. Company Setup">
        <div className={boxClass}>
          <SubHeading>What is a Company?</SubHeading>
          <p className="mb-4">
            In ERPNext, a <strong>Company</strong> represents a legal business
            entity. Most organizations have one company, but larger enterprises
            may have multiple.
          </p>
          <p className="mb-4">
            <strong>Examples:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your main business</li>
            <li>Subsidiary company</li>
            <li>Regional branch operating as separate legal entity</li>
            <li>Joint venture or partnership</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Multi-Company Concept</SubHeading>
          <p className="mb-4">
            ERPNext supports <strong>multiple companies</strong> in one system,
            but each user can typically operate in one company at a time.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">
              Example: Multi-Branch Company
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
              <li>Delhi Branch (Company: Acme Delhi Ltd)</li>
              <li>Mumbai Branch (Company: Acme Mumbai Ltd)</li>
              <li>Each has its own chart of accounts</li>
              <li>Each has its own inventory and customers</li>
              <li>Consolidated reporting shows combined numbers</li>
            </ul>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create a Company</SubHeading>
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              Go to <strong>Settings → Company</strong>
            </li>
            <li>
              Click <strong>New</strong>
            </li>
            <li>
              Fill in:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Company Name:</strong> Your legal business name
                </li>
                <li>
                  <strong>Abbr:</strong> Short code (e.g., ACME, ABC)
                </li>
                <li>
                  <strong>Parent Company:</strong> If subsidiary, link to parent
                </li>
                <li>
                  <strong>Company Type:</strong> Proprietorship, Partnership,
                  Private Limited, etc.
                </li>
                <li>
                  <strong>Default Currency:</strong> Your operating currency
                </li>
                <li>
                  <strong>Country:</strong> Your country for compliance
                </li>
              </ul>
            </li>
            <li>
              Add company details:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Registration number and tax ID</li>
                <li>Address and contact details</li>
                <li>Bank details</li>
              </ul>
            </li>
            <li>
              Save and proceed to <strong>Set Chart of Accounts</strong>
            </li>
          </ol>
        </div>

        <Callout title="Important: Company Cannot Be Deleted" tone="amber">
          Once you create a company and use it (create transactions), you cannot
          delete it. Choose your company structure carefully.
        </Callout>
      </Section>

      <Section title="4. Fiscal Year & Accounting Period">
        <div className={boxClass}>
          <SubHeading>Fiscal Year Definition</SubHeading>
          <p className="mb-4">
            Your <strong>Fiscal Year</strong> is your financial year—not
            necessarily the calendar year.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900">India Typical</p>
              <p className="text-sm text-gray-700">April - March</p>
              <p className="text-xs text-gray-600 mt-1">FY 2024-25</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900">US/UK Typical</p>
              <p className="text-sm text-gray-700">January - December</p>
              <p className="text-xs text-gray-600 mt-1">FY 2024</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900">Custom</p>
              <p className="text-sm text-gray-700">Any 12-month period</p>
              <p className="text-xs text-gray-600 mt-1">Flexible</p>
            </div>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Fiscal Year</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Go to <strong>Settings → Fiscal Year</strong>
            </li>
            <li>
              Click <strong>New</strong>
            </li>
            <li>
              Enter:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Year:</strong> Name your fiscal year (e.g., "2024-25")
                </li>
                <li>
                  <strong>Year Start Date:</strong> When your financial year
                  begins
                </li>
                <li>
                  <strong>Year End Date:</strong> When your financial year ends
                </li>
              </ul>
            </li>
            <li>
              Save
            </li>
          </ol>
          <p className="mt-4 text-gray-700">
            Typically, you keep 2-3 fiscal years open in the system (current +
            previous + next).
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Accounting Period (Months)</SubHeading>
          <p className="mb-4">
            Within each fiscal year, you have <strong>Accounting Periods</strong>
            (typically monthly).
          </p>
          <p className="text-gray-700">
            These are created automatically by ERPNext once you create a Fiscal
            Year. However, you can customize them if needed (e.g., to create
            quarterly or weekly periods).
          </p>
        </div>
      </Section>

      <Section title="5. Chart of Accounts (COA)">
        <div className={boxClass}>
          <SubHeading>What is a Chart of Accounts?</SubHeading>
          <p className="mb-4">
            Your <strong>Chart of Accounts</strong> is the complete list of GL
            accounts your company uses for financial accounting. It's the
            foundation of financial records.
          </p>
          <p className="mb-4">
            Accounts are organized hierarchically:
          </p>
        </div>

        <Mermaid chart={coaExampleChart} />

        <div className={boxClass}>
          <SubHeading>Account Types (Standard)</SubHeading>
          <div className="space-y-3 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                💰 Asset (Balance Sheet - Left)
              </p>
              <p className="text-sm text-gray-700">
                Things you own: Cash, Receivables, Inventory, Equipment
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                📊 Liability (Balance Sheet - Right)
              </p>
              <p className="text-sm text-gray-700">
                Money you owe: Payables, Loans, Advance Payments
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                🏦 Equity (Balance Sheet - Right)
              </p>
              <p className="text-sm text-gray-700">
                Owner's stake: Capital, Retained Earnings
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                📈 Income (P&L Statement - Credits)
              </p>
              <p className="text-sm text-gray-700">
                Revenue: Sales, Service Income, Professional Fees
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                📉 Expense (P&L Statement - Debits)
              </p>
              <p className="text-sm text-gray-700">
                Costs: Salaries, Rent, Utilities, COGS
              </p>
            </div>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Set Chart of Accounts</SubHeading>
          <p className="mb-3">
            When creating your company, ERPNext prompts you to choose a COA
            template:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Go to <strong>Settings → Company → [Your Company]</strong>
            </li>
            <li>
              Click <strong>Setup COA (Chart of Accounts)</strong>
            </li>
            <li>
              Choose a template that matches your country's standards:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>India - Standard (for Indian companies)</li>
                <li>US - Standard (for US companies)</li>
                <li>Germany - Standard (for German companies)</li>
                <li>Or custom if you want to build from scratch</li>
              </ul>
            </li>
            <li>
              Review and customize the chart:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Add/remove accounts as needed</li>
                <li>Adjust account codes to match your numbering</li>
                <li>Group similar accounts</li>
              </ul>
            </li>
            <li>
              Save and finish setup
            </li>
          </ol>
        </div>

        <Callout title="Can You Change COA After Transactions?" tone="amber">
          <strong>Partially.</strong> You can add new accounts, but deleting or
          moving accounts with existing transactions is risky. Get your chart
          right before posting transactions. If you must change it:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Close old accounts by moving balance to new account</li>
            <li>Post reversal/adjustment journal entries</li>
            <li>Document the change for audit purposes</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Best Practice: Account Numbering</SubHeading>
          <p className="mb-4">
            Use a consistent numbering scheme for easy identification:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-mono">
            <p>1000 - 1999: Assets</p>
            <p>1100 - 1199: Current Assets</p>
            <p>1110: Cash at Bank</p>
            <p>1120: Accounts Receivable</p>
            <p className="mt-2">2000 - 2999: Liabilities</p>
            <p>2100 - 2199: Current Liabilities</p>
            <p>2110: Accounts Payable</p>
            <p className="mt-2">4000 - 4999: Income</p>
            <p>4100: Product Sales</p>
            <p>4200: Service Income</p>
          </div>
        </div>
      </Section>

      <Section title="6. Cost Centers">
        <div className={boxClass}>
          <SubHeading>What is a Cost Center?</SubHeading>
          <p className="mb-4">
            A <strong>Cost Center</strong> is a department, location, or business
            unit to which you want to allocate costs and measure performance.
          </p>
          <p className="mb-4">
            <strong>Purpose:</strong> Understand who is spending money and
            whether they're profitable.
          </p>
          <p>
            <strong>Real examples:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sales Department</li>
            <li>Delhi Branch</li>
            <li>Production Unit</li>
            <li>IT Department</li>
            <li>Marketing Team</li>
          </ul>
        </div>

        <Mermaid chart={costCenterHierarchyChart} />

        <div className={boxClass}>
          <SubHeading>Why Cost Centers Matter</SubHeading>
          <div className="mb-4">
            <p className="font-semibold text-gray-900 mb-2">Without Cost Centers:</p>
            <p className="text-gray-700 text-sm mb-3">
              "We spent $100,000 on salaries this month" ← But where? By whom?
              Profitable or not?
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">With Cost Centers:</p>
            <p className="text-gray-700 text-sm">
              "Sales dept spent $40,000 on salaries | IT dept spent $30,000 |
              Admin spent $30,000" ← Now you can measure department profitability
            </p>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Cost Center</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Go to <strong>Settings → Cost Center</strong>
            </li>
            <li>
              Click <strong>New</strong>
            </li>
            <li>
              Enter:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Cost Center Name:</strong> Department/location name
                </li>
                <li>
                  <strong>Cost Center Type:</strong> Department, Branch, or
                  other
                </li>
                <li>
                  <strong>Parent Cost Center:</strong> If hierarchical (e.g.,
                  "Sales" is parent of "Sales East")
                </li>
                <li>
                  <strong>Company:</strong> Which company this belongs to
                </li>
                <li>
                  <strong>Disabled:</strong> Uncheck to activate
                </li>
              </ul>
            </li>
            <li>
              Save
            </li>
          </ol>
        </div>

        <Callout title="Must-Define Cost Centers" tone="green">
          <strong>Create cost centers for:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Every department that incurs expenses</li>
            <li>Every branch/location</li>
            <li>Every business unit with separate P&L</li>
          </ul>
          <strong className="block mt-3">Without cost centers, you cannot:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Allocate expenses properly</li>
            <li>Measure department profitability</li>
            <li>Create budget vs actual reports</li>
          </ul>
        </Callout>
      </Section>

      <Section title="7. Accounting Dimensions">
        <div className={boxClass}>
          <SubHeading>What are Accounting Dimensions?</SubHeading>
          <p className="mb-4">
            <strong>Accounting Dimensions</strong> are custom classification
            fields you add to GL transactions for analysis.
          </p>
          <p>
            While Cost Center focuses on <strong>"who"</strong> (department), a
            dimension might classify <strong>"what"</strong> or <strong>
              "where"
            </strong>.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Common Dimensions</SubHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                Project
              </p>
              <p className="text-xs text-gray-700">
                Allocate costs to specific client projects
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                Business Line
              </p>
              <p className="text-xs text-gray-700">
                Software vs Services vs Products
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">
                Customer Segment
              </p>
              <p className="text-xs text-gray-700">
                Corporate vs SMB vs Retail
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">Region</p>
              <p className="text-xs text-gray-700">North, South, East, West</p>
            </div>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Add Accounting Dimension</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Go to <strong>Settings → Accounting Dimension</strong>
            </li>
            <li>
              Click <strong>New</strong>
            </li>
            <li>
              Select <strong>Document Type</strong> (usually a custom DocType
              like "Project", "Business Line")
            </li>
            <li>
              Check <strong>Mandatory</strong> if all transactions must have
              this
            </li>
            <li>
              Save
            </li>
            <li>
              Now when you post GL transactions, you'll see this dimension field
            </li>
          </ol>
        </div>

        <Callout title="Use Cautiously" tone="amber">
          Each dimension adds complexity to transactions. Start with 1-2 key
          dimensions; add more only if needed for reporting.
        </Callout>
      </Section>

      <Section title="8. Currency & Exchange Rates">
        <div className={boxClass}>
          <SubHeading>Multi-Currency Setup</SubHeading>
          <p className="mb-4">
            If your business operates in multiple currencies (USD, EUR, INR,
            etc.), ERPNext can handle it.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Go to <strong>Settings → Currency</strong>
            </li>
            <li>
              Create currencies you'll use (USD, EUR, INR, etc.)
            </li>
            <li>
              Go to <strong>Settings → Currency Exchange</strong>
            </li>
            <li>
              Maintain daily/monthly exchange rates
            </li>
            <li>
              When posting transactions in foreign currency, enter the rate
            </li>
          </ol>
        </div>

        <Callout title="Exchange Gain/Loss" tone="blue">
          If you have foreign currency transactions, make sure to set up a GL
          account for exchange gain/loss. At month-end, ERPNext can revalue
          foreign currency accounts and post unrealized gain/loss entries.
        </Callout>
      </Section>

      <Section title="9. Implementation Checklist - Organization Setup">
        <div className={boxClass}>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Company Created</p>
                <p className="text-sm text-gray-600">
                  Legal entity name, abbreviation, type
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Fiscal Year Defined</p>
                <p className="text-sm text-gray-600">
                  Year start/end dates matching your financial year
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Chart of Accounts Configured
                </p>
                <p className="text-sm text-gray-600">
                  All GL accounts created with proper hierarchy and coding
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Cost Centers Created</p>
                <p className="text-sm text-gray-600">
                  Department/branch cost centers with hierarchy
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Accounting Dimensions (if needed)
                </p>
                <p className="text-sm text-gray-600">
                  Custom dimensions for analysis
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Currency Configured</p>
                <p className="text-sm text-gray-600">
                  Default currency set; exchange rates updated
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Accounting Policies Documented
                </p>
                <p className="text-sm text-gray-600">
                  Year-end closing procedures, rounding rules, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <div className={boxClass}>
          <p className="mb-4">
            Now that you've set up your organization foundation:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Create Master Data:</strong> Customers, suppliers, items,
              employees
            </li>
            <li>
              <strong>Set Up Modules:</strong> Start with HR, then Finance, then
              Sales/Purchase
            </li>
            <li>
              <strong>Configure Workflows:</strong> Approval hierarchies,
              notifications
            </li>
            <li>
              <strong>Begin Transactions:</strong> Invoices, payments, receipts
            </li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
