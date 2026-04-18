import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const hrPayrollFlowChart = `flowchart TD
  A["HR Department Activities"] --> B["Attendance Marking"]
  A --> C["Leave Applications"]
  
  B --> D["Monthly Attendance Summary"]
  C --> E["Leave Balance Update"]
  
  D --> F["Payroll Processing"]
  E --> F
  
  F --> G["Salary Slip Generation"]
  G --> H["Calculate:<br/>- Basic Salary<br/>- Allowances<br/>- Deductions<br/>- Net Salary"]
  
  H --> I["Impact Analysis:<br/>- Attendance (% of days)<br/>- Leave (unpaid leave reduction)<br/>- Overtime (if applicable)"]
  
  I --> J["Salary Payment"]
  J --> K["GL Entry:<br/>Dr Salary Exp / Cr Bank"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style F fill:#fff3e0
  style J fill:#c8e6c9
  style K fill:#f3e5f5`

const hrFinanceAccountingFlowChart = `flowchart TD
  A["Employee Advance"] --> B["Payment Entry Created"]
  B --> C["GL: Dr Bank / Cr Advance Payable"]
  
  D["Expense Claim"] --> E["Submitted"]
  E --> F["GL: Dr Expense / Cr Payable"]
  
  C --> G["Settlement Options"]
  F --> G
  
  G --> H["Direct Payment to Employee"]
  G --> I["Deduct from Next Salary"]
  G --> J["Adjust Against Each Other"]
  
  H --> K["GL: Dr Payable / Cr Bank"]
  I --> L["GL: Advance Payable / Cr Bank<br/>(via Salary Slip)"]
  J --> M["GL: Dr Expense / Cr Advance Payable<br/>(Nets out)"]
  
  K --> N["Accounting Records"]
  L --> N
  M --> N

  style A fill:#e8f5e9
  style D fill:#e8f5e9
  style N fill:#c8e6c9
  style H fill:#fff3e0
  style I fill:#fff3e0
  style J fill:#fff3e0`

const projectAccountingFlowChart = `flowchart TD
  A["Project Created"] --> B["Tasks Assigned"]
  B --> C["Timesheets Logged"]
  
  C --> D["Costing Path"]
  C --> E["Billing Path"]
  
  D --> F["Project Costing"]
  F --> G["GL: Dr WIP Asset / Cr Labor Expense"]
  G --> H["Accumulated Cost"]
  
  E --> I["Billing Method?"]
  I -->|Fixed Price| J["Link to Sales Order"]
  I -->|Time-Based| K["Billing from Timesheets"]
  
  J --> L["Sales Invoice"]
  K --> L
  
  L --> M["GL: Dr Receivable / Cr Revenue"]
  
  H --> N["Profit = Revenue - Cost"]
  M --> N
  
  N --> O["Project Profitability Report"]

  style A fill:#e3f2fd
  style C fill:#e8f5e9
  style L fill:#fff3e0
  style O fill:#c8e6c9
  style H fill:#fff9c4
  style M fill:#fff9c4`

const salesInventoryFlowChart = `flowchart TD
  A["Sales Order Created"] --> B["Check Inventory"]
  
  B --> C{Stock Available?}
  C -->|No| D["Trigger Purchase Order"]
  C -->|Yes| E["Delivery Note"]
  
  D --> F["Stock In"]
  F --> E
  
  E --> G["Stock Movement:<br/>Warehouse → Customer"]
  G --> H["GL: Dr COGS / Cr Inventory"]
  
  H --> I["Sales Invoice"]
  I --> J["GL: Dr Receivable / Cr Revenue"]
  
  J --> K["Financial Records"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style E fill:#e8f5e9
  style H fill:#fff3e0
  style J fill:#fff3e0
  style K fill:#c8e6c9`

const buyingInventoryFlowChart = `flowchart TD
  A["Material Request"] --> B["Purchase Order"]
  B --> C["Supplier Delivers"]
  
  C --> D["Purchase Receipt"]
  D --> E["Stock In:<br/>Warehouse Inventory Increases"]
  
  E --> F["GL: Dr Inventory / Cr Payable"]
  
  F --> G["Purchase Invoice"]
  G --> H["GL: Dr Expense / Cr Payable<br/>(if landed cost)<br/>OR<br/>GL: Dr Payable / Cr Bank"]
  
  H --> I["Accounting Reconciliation"]

  style A fill:#e3f2fd
  style D fill:#e8f5e9
  style F fill:#fff3e0
  style I fill:#c8e6c9`

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

export default function CrossModuleIntegrationPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Cross-Module Integration
      </h1>

      <Callout title="Strategic Overview" tone="blue">
        ERPNext's power comes from how modules work together seamlessly. When one
        module updates, other modules automatically see the change. This eliminates
        data silos and manual re-entry. This section explains the major integrations.
      </Callout>

      <Section title="1. HR → Payroll Flow (Attendance Drives Salary)">
        <Mermaid chart={hrPayrollFlowChart} />

        <div className={boxClass}>
          <SubHeading>How They Connect</SubHeading>
          <p className="mb-4">
            Payroll doesn't work in isolation. It depends on HR data, specifically
            <strong> attendance and leaves</strong>.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step Process</SubHeading>

          <MiniHeading>Step 1: Attendance Tracking (Daily)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Employees check in/out daily (via app or manual entry)</li>
            <li>Shift schedule matched against actual attendance</li>
            <li>Absences and leaves tracked</li>
          </ul>

          <MiniHeading>Step 2: Monthly Attendance Summary</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>System generates monthly attendance report</li>
            <li>Calculates: Present Days, Absent Days, Leave Days</li>
            <li>Used to determine "Payable Days"</li>
          </ul>

          <MiniHeading>Step 3: Leave Impact</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Paid leaves (sick, casual) → included in payable days</li>
            <li>Unpaid leaves → reduce payable days and salary</li>
            <li>Leaves configured in Leave Type and Leave Allocation</li>
          </ul>

          <MiniHeading>Step 4: Salary Slip Calculates Impact</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>When generating Salary Slip, formula fetches:</li>
            <li style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              • Total working days in month
            </li>
            <li style={{ paddingLeft: '1.5rem' }}>• Attendance actual days</li>
            <li style={{ paddingLeft: '1.5rem' }}>• Leave days taken</li>
            <li>Calculates: (Attendance Days / Total Days) × Basic Salary</li>
          </ul>

          <MiniHeading>Step 5: GL Entry Posted</MiniHeading>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 font-mono text-sm">
            Dr Salary Expense (5210) / Cr Salary Payable (2110)
          </div>
        </div>

        <Callout title="Key Dependency" tone="amber">
          <strong>If attendance is wrong, payroll will be wrong.</strong> Always verify
          attendance records before salary slip generation. Reconcile checkin/checkout
          with shift schedules.
        </Callout>

        <div className={boxClass}>
          <SubHeading>Business Implication</SubHeading>
          <p>
            An employee who was on sick leave (paid) for 5 days should be paid for the
            entire month but marked as absent 5 days. The salary calculation
            automatically adjusts. Conversely, unpaid leave or absence reduces payable
            days, reducing salary proportionately.
          </p>
        </div>
      </Section>

      <Section title="2. HR Finance → Accounting Flow (Settlement Path)">
        <Mermaid chart={hrFinanceAccountingFlowChart} />

        <div className={boxClass}>
          <SubHeading>How They Connect</SubHeading>
          <p className="mb-4">
            Employee Advances and Expense Claims are HR Finance operations but
            <strong> post GL entries</strong> and can be settled via Accounting/Payroll.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Flow 1: Employee Advance → Payment</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>
              <strong>Advance created in HR:</strong> Employee Advance document
            </li>
            <li>
              <strong>Payment Entry created:</strong> Linked to Advance
            </li>
            <li>
              <strong>GL Entry posted:</strong> Dr Bank 50k / Cr Advance Payable
              50k
            </li>
            <li>
              <strong>Settlement:</strong> Advance Payable account decreases when
              settled
            </li>
          </ol>
        </div>

        <div className={boxClass}>
          <SubHeading>Flow 2: Expense Claim → GL Entry + Settlement</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>
              <strong>Expense Claim submitted in HR:</strong> Employee Expense
              Claim document
            </li>
            <li>
              <strong>GL Entry posted:</strong> Dr Travel Expense 40k / Cr
              Employee Payable 40k
            </li>
            <li>
              <strong>Settlement option 1 (Direct payment):</strong> Payment Entry
              created → Dr Employee Payable / Cr Bank
            </li>
            <li>
              <strong>Settlement option 2 (Deduct from salary):</strong> Salary
              Slip references advance → Dr Advance Payable / Cr Bank (via Payroll)
            </li>
            <li>
              <strong>Settlement option 3 (Adjust against advance):</strong> GL
              directly nets: Dr Expense / Cr Advance Payable
            </li>
          </ol>
        </div>

        <Callout title="Module Coordination" tone="green">
          HR Finance creates the GL entry, but Accounting or Payroll completes the
          settlement. Three separate modules work in concert without data re-entry.
        </Callout>
      </Section>

      <Section title="3. Projects → Accounting Flow (From Timesheet to Invoice)">
        <Mermaid chart={projectAccountingFlowChart} />

        <div className={boxClass}>
          <SubHeading>How They Connect</SubHeading>
          <p className="mb-4">
            Projects track work, timesheets track time, but
            <strong> revenue and cost are recorded in Accounting</strong>.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Flow: Project → Timesheet → Invoice → Profit</SubHeading>

          <MiniHeading>Step 1: Project Created (Operations)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Project created with Customer and Budget</li>
            <li>Tasks breakdown the work</li>
          </ul>

          <MiniHeading>Step 2: Timesheets Logged (HR/Operations)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Employees log timesheets against project tasks</li>
            <li>Each timesheet records: Hours, Rate, Billable Y/N</li>
            <li>Can be billable (charged to customer) or non-billable (overhead)</li>
          </ul>

          <MiniHeading>Step 3: Two Parallel Flows</MiniHeading>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Costing Path:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Timesheet labor cost captured (hourly rate × hours)</li>
              <li>GL Entry: Dr WIP (Work in Progress) Asset / Cr Salary Expense</li>
              <li>All project costs accumulated</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">Billing Path:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Billable timesheets → Sales Invoice</li>
              <li>OR use fixed-price Sales Order → Sales Invoice</li>
              <li>GL Entry: Dr Receivable / Cr Revenue</li>
            </ul>
          </div>

          <MiniHeading>Step 4: Profitability Calculation</MiniHeading>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Gross Profit = Total Revenue - Total Cost</li>
            <li>If Revenue 100k, Cost 60k → Profit 40k (40%)</li>
            <li>Reports show project margin and profitability</li>
          </ul>
        </div>

        <Callout title="Billing Models" tone="amber">
          <strong>Fixed-Price Project:</strong> Linked to Sales Order. Billing is
          fixed regardless of hours spent. Cost tracking important for margin.
          <br />
          <br />
          <strong>Time-and-Materials Project:</strong> Billed by timesheet hours.
          Higher hours = higher billing.
        </Callout>

        <div className={boxClass}>
          <SubHeading>Real Business Example</SubHeading>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
            <p className="font-semibold mb-2">
              Client Project: "System Implementation" (Fixed Price)
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sales Order: ₱5,00,000 (fixed price)</li>
              <li>Project created for ₱5,00,000</li>
              <li>Timesheets logged: 1000 hours at ₱400/hr = ₱4,00,000 cost</li>
              <li>
                GL entries posted automatically via timesheets and billing
              </li>
              <li>
                Profit = ₱5,00,000 (Revenue) - ₱4,00,000 (Cost) = ₱1,00,000
              </li>
              <li>Margin: 20%</li>
              <li>Report shows project was profitable</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="4. Sales → Inventory → Accounting Flow">
        <Mermaid chart={salesInventoryFlowChart} />

        <div className={boxClass}>
          <SubHeading>How They Connect</SubHeading>
          <p className="mb-4">
            When you create a Sales Order, the system checks inventory. Upon
            delivery and invoicing,
            <strong> stock is reduced and cost of goods sold is posted</strong>.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Sales Order → Stock → Revenue</SubHeading>

          <MiniHeading>Step 1: Sales Order (Sales Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Customer orders 100 units of Item X</li>
            <li>System checks Inventory</li>
            <li>If stock available → ready to deliver</li>
            <li>If stock not available → can trigger Purchase Order</li>
          </ul>

          <MiniHeading>Step 2: Delivery Note (Inventory Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Create Delivery Note from Sales Order</li>
            <li>Toggle: "Update Stock" = Yes</li>
            <li>Stock moves from Warehouse → Customer</li>
            <li>
              GL Entry: Dr Cost of Goods Sold / Cr Inventory Valuation Account
            </li>
          </ul>

          <MiniHeading>Step 3: Sales Invoice (Accounting Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Create Sales Invoice from Delivery Note</li>
            <li>
              GL Entry: Dr Accounts Receivable 110k / Cr Revenue 100k + Tax 10k
            </li>
          </ul>

          <MiniHeading>Step 4: Accounting Reconciliation</MiniHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>Revenue recorded (Accounting)</li>
            <li>Cost of Goods Sold recorded (Inventory)</li>
            <li>Gross Profit automatically calculated by GL</li>
          </ul>
        </div>

        <Callout title="Critical: Update Stock Toggle" tone="amber">
          If you don't check "Update Stock" on Delivery Note, inventory remains
          unchanged. This causes:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Inventory mismatch with physical stock</li>
            <li>COGS not recorded correctly</li>
            <li>Financial reports incorrect</li>
          </ul>
        </Callout>
      </Section>

      <Section title="5. Buying → Inventory → Accounting Flow">
        <Mermaid chart={buyingInventoryFlowChart} />

        <div className={boxClass}>
          <SubHeading>How They Connect</SubHeading>
          <p className="mb-4">
            Purchase Orders and Purchase Receipts track inbound stock, and
            <strong> GL accounts are updated when stock is received</strong>.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Purchase Order → Stock → Cost</SubHeading>

          <MiniHeading>Step 1: Purchase Order (Buying Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>You order 50 units from Supplier at ₱2,000/unit</li>
            <li>Total order value: ₱1,00,000</li>
          </ul>

          <MiniHeading>Step 2: Purchase Receipt (Inventory Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Goods arrive at your warehouse</li>
            <li>Quality inspected</li>
            <li>Create Purchase Receipt from PO</li>
            <li>Toggle: "Update Stock" = Yes</li>
            <li>Stock increases in warehouse</li>
            <li>GL Entry: Dr Inventory 1,00,000 / Cr Supplier Payable</li>
          </ul>

          <MiniHeading>Step 3: Purchase Invoice (Accounting Module)</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Supplier invoice received</li>
            <li>Create Purchase Invoice from PO or Receipt</li>
            <li>GL Entry: Dr Payable / Cr Bank (when paid)</li>
          </ul>

          <MiniHeading>Step 4: Inventory Valuation</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Stock balance now shows 50 units at ₱2,000/unit</li>
            <li>When items are sold, COGS = 50 units × ₱2,000</li>
            <li>Stock valuation method (FIFO, Moving Avg) affects cost</li>
          </ul>
        </div>

        <Callout title="Landed Cost" tone="green">
          If supplier invoice includes transportation, customs, or handling charges,
          use <strong>Landed Cost Voucher</strong> to distribute these costs across
          received items. This increases average cost per unit.
        </Callout>
      </Section>

      <Section title="6. Key Integration Principles">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              1. Master Data Consistency
            </h4>
            <p className="text-gray-700 text-sm">
              Once you create a Customer, Item, or Employee, all modules reference
              the same master record. No duplication or data entry.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              2. Automatic GL Posting
            </h4>
            <p className="text-gray-700 text-sm">
              When you create a transaction in one module, ERPNext automatically
              calculates and posts GL entries. No manual journal entries needed.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              3. Real-Time Data Flow
            </h4>
            <p className="text-gray-700 text-sm">
              Changes in one module immediately visible in another. Update Inventory
              → Stock Balance updates → COGS calculation changes.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              4. Audit Trail
            </h4>
            <p className="text-gray-700 text-sm">
              Every transaction linked to source. GL entry traceable back to Sales
              Invoice, which links to Delivery Note and SO.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              5. Validation & Business Rules
            </h4>
            <p className="text-gray-700 text-sm">
              Modules validate interdependencies. Can't create Invoice before
              Delivery Note. Can't overdeliver if stock insufficient.
            </p>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              6. Reconciliation
            </h4>
            <p className="text-gray-700 text-sm">
              Accounting records should always reconcile with operational records
              (Inventory, Receivables, Payables). ERPNext design enables this.
            </p>
          </div>
        </div>
      </Section>

      <Section title="7. Common Integration Mistakes to Avoid">
        <div className={boxClass}>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 1: Not Updating Stock
              </p>
              <p className="text-sm text-gray-700">
                Creating Delivery Note without "Update Stock" = Inventory never
                decreases. Stock records out of sync with reality.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 2: Mixing HR Finance with Payroll
              </p>
              <p className="text-sm text-gray-700">
                Treating Employee Advance as salary or Expense Claim as bonus.
                These are separate cash flows with different GL accounts.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 3: Posting Manual GL Entries
              </p>
              <p className="text-sm text-gray-700">
                Creating Sales Invoice AND manual GL entry for same transaction.
                Causes duplicates and reconciliation problems.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 4: Ignoring Cost Centers
              </p>
              <p className="text-sm text-gray-700">
                Not assigning cost centers to GL entries. Can't analyze unit/dept
                profitability.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 5: Deleting Submitted Documents
              </p>
              <p className="text-sm text-gray-700">
                Trying to delete submitted invoices/receipts. Breaks audit trail
                and GL reconciliation. Amend instead.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ Mistake 6: Attendance Errors Cascading to Payroll
              </p>
              <p className="text-sm text-gray-700">
                Bad attendance data leads to wrong Salary Slips. Always clean
                attendance before month-end salary run.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="8. Integration Testing Checklist">
        <div className={boxClass}>
          <p className="mb-4 font-semibold">Before Go-Live, Verify:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Sales Order → Delivery → Invoice → GL
                </p>
                <p className="text-sm text-gray-600">
                  Create test SO, deliver, invoice. Verify GL entries and inventory
                  updates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Purchase Order → Receipt → Invoice → GL
                </p>
                <p className="text-sm text-gray-600">
                  Create test PO, receive, invoice. Verify inventory and cost
                  posting
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Attendance → Salary Slip → Payment
                </p>
                <p className="text-sm text-gray-600">
                  Test attendance impact on salary calculation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Employee Advance → Settlement → GL
                </p>
                <p className="text-sm text-gray-600">
                  Test advance creation and settlement via all three paths
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Project → Timesheet → Invoice → Profit
                </p>
                <p className="text-sm text-gray-600">
                  Test project costing and billing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  GL Reconciliation
                </p>
                <p className="text-sm text-gray-600">
                  Receivables, Payables, Inventory match operational records
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <div className={boxClass}>
          <p className="mb-4">
            Now that you understand module integration:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Review your key business flows and map them to modules</li>
            <li>
              Identify critical integration points for your business
            </li>
            <li>
              Set up GL accounts that align with module workflows
            </li>
            <li>
              Create integration test cases
            </li>
            <li>
              Refer to Implementation Strategy for phased rollout
            </li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
