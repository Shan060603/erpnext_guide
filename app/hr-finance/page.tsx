import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const hrFinanceOverviewChart = `flowchart TD
  A["HR Finance Flows"] --> B["Employee Advance"]
  A --> C["Expense Claim"]
  B --> D["Cash Requirement"]
  C --> E["Reimbursement"]
  D --> F["Settlement Path"]
  E --> F
  F --> G["Option 1: Direct Payment"]
  F --> H["Option 2: Salary Deduction"]
  F --> I["Option 3: Settle Against Each Other"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#e8f5e9
  style G fill:#fff3e0
  style H fill:#fff3e0
  style I fill:#fff3e0`

const advanceWorkflowChart = `flowchart TD
  A["Employee Needs Working Capital"] --> B["Submit Employee Advance"]
  B --> C["State: Draft"]
  C --> D["Manager Reviews"]
  D --> E{Approved?}
  E -->|Rejected| F["Back to Draft"]
  F --> A
  E -->|Approved| G["Create Payment Entry"]
  G --> H["Receive Payment"]
  H --> I["GL Impact: Dr Cash → Cr Advance Payable"]
  I --> J["Settlement Options"]
  J --> J1["Against Next Expense Claim"]
  J --> J2["Against Next Salary"]
  J --> J3["Direct Refund"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style H fill:#fff3e0
  style J1 fill:#c8e6c9
  style J2 fill:#c8e6c9
  style J3 fill:#c8e6c9`

const expenseClaimWorkflowChart = `flowchart TD
  A["Employee Spends Company Money"] --> B["Collect Receipts"]
  B --> C["Submit Expense Claim"]
  C --> D["State: Draft"]
  D --> E["Manager Reviews & Approves"]
  E --> F{Approved?}
  F -->|Rejected| G["Back to Draft"]
  G --> C
  F -->|Approved| H["Submit Claim"]
  H --> I["GL Impact: Dr Expense → Cr Payable"]
  I --> J["Settlement Decision"]
  J --> J1["Pay Direct to Employee"]
  J --> J2["Deduct from Next Salary"]
  J --> J3["Adjust Against Employee Advance"]

  style A fill:#e3f2fd
  style C fill:#e8f5e9
  style H fill:#fff3e0
  style J1 fill:#c8e6c9
  style J2 fill:#c8e6c9
  style J3 fill:#c8e6c9`

const settlementExampleChart = `flowchart TD
  A["Scenario: Employee needs cash, then submits expenses"] --> B["Employee Advance: 50,000"]
  B --> C["Payment Entry Created"]
  C --> D["Advance Received & Recorded"]
  D --> E["Employee Spends: 30,000 on expenses"]
  E --> F["Expense Claim Submitted: 30,000"]
  F --> G{"Settlement Options"}
  G --> G1["Option A: Direct payment of 30k, keep 20k advance"]
  G --> G2["Option B: Adjust entire 50k advance against future expenses"]
  G --> G3["Option C: Deduct from next month salary"]
  
  G1 --> H1["GL: Dr Expense 30k → Cr Payable 30k → Cr Advance 20k"]
  G2 --> H2["GL: Dr Expense 30k → Cr Advance 30k (remaining 20k stays)"]
  G3 --> H3["GL: Dr Expense 30k → Cr Advance 30k (salary slip deducts in month-end)"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style F fill:#fff3e0
  style H1 fill:#c8e6c9
  style H2 fill:#c8e6c9
  style H3 fill:#c8e6c9`

const payrollVsHRFinanceChart = `flowchart TD
  A["❌ NOT PAYROLL ❌"] --> B["Employee Advance"]
  A --> C["Expense Claim"]
  A --> D["Employee Advance Deduction"]
  
  E["✅ PAYROLL ✅"] --> F["Salary Structure"]
  E --> G["Basic Salary"]
  E --> H["Allowances"]
  E --> I["Bonuses/Incentives"]
  E --> J["Tax Deductions"]
  
  B --> K["Separate accounting"]
  C --> K
  D --> K
  K --> L["HR Finance Accounts\n(Advance Payable, Employee Reimbursable, Expense)"]
  
  F --> M["Payroll Accounts\n(Salary Payable, Expense)"]
  G --> M
  H --> M
  I --> M
  J --> M

  style A fill:#ffcdd2
  style E fill:#c8e6c9
  style B fill:#ffcdd2
  style C fill:#ffcdd2
  style D fill:#ffcdd2
  style F fill:#c8e6c9
  style L fill:#fff3e0
  style M fill:#e8f5e9`

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

export default function HRFinancePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        HR Finance Module
      </h1>

      <Callout title="Critical Clarification" tone="amber">
        <strong>HR Finance is NOT Payroll.</strong> <br />
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Payroll:</strong> Salary calculation and payment
          </li>
          <li>
            <strong>HR Finance:</strong> Employee cash management (advances and
            reimbursements)
          </li>
        </ul>
        These are separate modules with separate accounting. Do not mix them.
      </Callout>

      <Section title="1. Overview - What is HR Finance?">
        <div className={boxClass}>
          <SubHeading>The Purpose</SubHeading>
          <p className="mb-4">
            <strong>HR Finance</strong> manages the flow of cash between the
            company and employees for working capital and reimbursement purposes.
          </p>
          <p className="mb-4">
            It answers two questions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>What advance cash can we give employees?</strong> (Employee
              Advance)
            </li>
            <li>
              <strong>What expenses can we reimburse?</strong> (Expense Claim)
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>NOT Part of Salary</SubHeading>
          <p className="mb-4">
            HR Finance amounts are <strong>NOT earnings</strong> added to
            salary. They are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Security/working capital for employees</li>
            <li>Reimbursement for company expenses</li>
            <li>Settled separately from monthly payroll</li>
          </ul>
        </div>

        <Mermaid chart={payrollVsHRFinanceChart} />
      </Section>

      <Section title="2. HR Finance Overview Flow">
        <Mermaid chart={hrFinanceOverviewChart} />
      </Section>

      <Section title="3. Employee Advance - Detailed Guide">
        <div className={boxClass}>
          <SubHeading>What is Employee Advance?</SubHeading>
          <p className="mb-4">
            An <strong>Employee Advance</strong> is a loan-like payment given to
            an employee before they spend company money. It's working capital.
          </p>
          <p>
            <strong>Real-world scenario:</strong> Your employee travels to meet
            a client and needs ₱50,000 for hotels, flights, and food. The
            company gives ₱50,000 in advance before the trip. After returning,
            the employee submits receipts for expenses (say ₱40,000). The
            advance is settled.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>When to Use Employee Advance</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Employee traveling for business (need cash before departure)</li>
            <li>Employee assigned to a project site (need working capital)</li>
            <li>Employee purchases for company (need float)</li>
            <li>Situations where employee needs cash urgently for company work</li>
          </ul>
        </div>

        <Mermaid chart={advanceWorkflowChart} />

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Employee Advance</SubHeading>

          <MiniHeading>Step 1: Employee Requests Advance</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to HR → Employee Advance</li>
            <li>Click New</li>
            <li>Fill in:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><strong>Employee:</strong> Select employee</li>
                <li><strong>Advance Amount:</strong> Amount to advance</li>
                <li><strong>Reason:</strong> Why they need advance (travel, project, etc.)</li>
                <li><strong>Advance Date:</strong> When given</li>
                <li><strong>Purpose:</strong> Business purpose</li>
              </ul>
            </li>
            <li>Save → Status: Draft</li>
          </ol>

          <MiniHeading>Step 2: Manager Approval</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Manager reviews the advance request</li>
            <li>If approved, click Submit</li>
            <li>Status: Approved</li>
          </ol>

          <MiniHeading>Step 3: Create Payment Entry</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Once approved, click <strong>Create Payment Entry</strong></li>
            <li>ERPNext creates a Payment Entry in "Receive" mode</li>
            <li>Map:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><strong>Account To Pay:</strong> Bank account (cash goes out)</li>
                <li><strong>Account To Receive:</strong> Employee Advance Payable GL account</li>
              </ul>
            </li>
            <li>Submit Payment Entry</li>
            <li>Accounting entry posted: <code>Dr Bank / Cr Advance Payable</code></li>
          </ol>

          <MiniHeading>Step 4: Settlement</MiniHeading>
          <p className="text-gray-700 mb-2">
            Once advance is paid, follow up settlement
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Employee returns with receipts (Expense Claim)</li>
            <li>Advance is adjusted against the expense claim</li>
            <li>If expenses &lt; advance -&gt; employee refunds excess</li>
            <li>If expenses &gt; advance -&gt; company pays additional</li>
            <li>If neither, advance can be deducted from next salary</li>
          </ul>
        </div>

        <Callout title="GL Accounts for Employee Advance" tone="green">
          Set up these accounts:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Employee Advance Asset:</strong> Temporary account (if advance is being tracked as receivable)</li>
            <li><strong>Advance Payable:</strong> Liability account (amounts owed to employees for unspent advances)</li>
            <li><strong>Advance Settlement Payable:</strong> Amount to be settled to employee</li>
          </ul>
        </Callout>
      </Section>

      <Section title="4. Expense Claim - Detailed Guide">
        <div className={boxClass}>
          <SubHeading>What is Expense Claim?</SubHeading>
          <p className="mb-4">
            An <strong>Expense Claim</strong> is a formal request by an employee
            to be reimbursed for expenses they incurred on behalf of the company.
          </p>
          <p>
            <strong>Real-world scenario:</strong> Your traveling employee spent
            ₱40,000 on hotels, flights, and meals for the client meeting. They
            submit receipts. You review and reimburse ₱40,000.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>When to Use Expense Claim</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Travel expenses (flights, hotels, food)</li>
            <li>Office supplies purchased by employee</li>
            <li>Client entertainment (meals, gifts)</li>
            <li>Training and development expenses</li>
            <li>Any business expense paid by employee personally</li>
          </ul>
        </div>

        <Mermaid chart={expenseClaimWorkflowChart} />

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Expense Claim</SubHeading>

          <MiniHeading>Step 1: Employee Submits Claim</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to HR → Expense Claim</li>
            <li>Click New</li>
            <li>Fill in:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><strong>Employee:</strong> Their name</li>
                <li><strong>Expense Claim Date:</strong> When submitted</li>
                <li><strong>Approver:</strong> Who approves (manager)</li>
              </ul>
            </li>
            <li>Add line items:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><strong>Expense Type:</strong> Travel, Food, Office Supplies, etc.</li>
                <li><strong>Description:</strong> Details (e.g., "Flight Delhi-Mumbai")</li>
                <li><strong>Amount:</strong> Expense amount</li>
                <li><strong>Sanctioned Amount:</strong> Approved amount (may differ from claimed)</li>
              </ul>
            </li>
            <li>Save → Status: Draft</li>
          </ol>

          <MiniHeading>Step 2: Manager Approval</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Manager reviews receipts and claim details</li>
            <li>Can reject specific line items (sanctioned amount &lt; claimed)</li>
            <li>Approves claim → Status: Approved</li>
          </ol>

          <MiniHeading>Step 3: Submit & Post GL Entry</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Click Submit</li>
            <li>Status: Submitted</li>
            <li>GL Entry posted: <code>Dr Expense Account / Cr Payable</code></li>
          </ol>

          <MiniHeading>Step 4: Settlement - Choose Option</MiniHeading>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-3">Option A: Direct Payment</p>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>Employee submits expense claim only (no prior advance)</li>
              <li>Create Payment Entry to pay the claim directly</li>
              <li>GL: <code>Dr Bank → Cr Payable</code></li>
            </ol>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-3">Option B: Settle Against Employee Advance</p>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>Employee had prior advance (e.g., ₱50,000)</li>
              <li>Expense claim submitted (₱40,000)</li>
              <li>In Expense Claim, click "Get Advances"</li>
              <li>Select the advance to adjust</li>
              <li>GL: <code>Dr Expense → Cr Advance Payable</code></li>
              <li>Excess advance (₱10,000) remains with employee for next claim or refund</li>
            </ol>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-3">Option C: Deduct from Next Salary</p>
            <ol className="list-decimal pl-6 space-y-1 text-sm">
              <li>Instead of paying now, deduct from next month salary</li>
              <li>Mark claim: "Deduct from Salary"</li>
              <li>In next Salary Slip, advance deduction appears</li>
              <li>GL: <code>Dr Expense → Cr Advance Payable</code></li>
              <li>At salary slip generation: <code>Dr Advance Payable → Cr Bank</code></li>
            </ol>
          </div>
        </div>

        <Callout title="GL Accounts for Expense Claim" tone="green">
          Set up these accounts:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Travel Expense:</strong> For travel costs</li>
            <li><strong>Food & Entertainment:</strong> For meals and client entertainment</li>
            <li><strong>Office Supplies:</strong> For office purchases</li>
            <li><strong>Employee Payable:</strong> Liability for unsettled expenses</li>
          </ul>
        </Callout>
      </Section>

      <Section title="5. Settlement Logic & Scenarios">
        <Mermaid chart={settlementExampleChart} />

        <div className={boxClass}>
          <SubHeading>Scenario 1: Advance First, Then Expense</SubHeading>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Timeline:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Day 1:</strong> Employee Advance of ₱50,000 approved</li>
              <li><strong>Day 1:</strong> Payment Entry: Dr Bank 50k / Cr Advance Payable 50k</li>
              <li><strong>Days 2-5:</strong> Employee travels, spends ₱45,000</li>
              <li><strong>Day 6:</strong> Expense Claim submitted for ₱45,000</li>
              <li><strong>Day 6:</strong> Manager approves expense claim</li>
              <li><strong>Day 7:</strong> GL: Dr Travel Expense 45k / Cr Advance Payable 45k</li>
              <li><strong>Result:</strong> Advance Payable reduced from 50k to 5k; employee owes company ₱5,000 or company keeps as buffer</li>
            </ul>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Scenario 2: Expense Claim Without Advance</SubHeading>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <p className="font-semibold text-gray-900 mb-2">Timeline:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Day 1:</strong> Employee pays ₱12,000 for office supplies</li>
              <li><strong>Day 2:</strong> Expense Claim submitted for ₱12,000</li>
              <li><strong>Day 3:</strong> Manager approves</li>
              <li><strong>Day 3:</strong> GL: Dr Office Supplies 12k / Cr Employee Payable 12k</li>
              <li><strong>Day 4:</strong> Payment Entry: Dr Employee Payable 12k / Cr Bank 12k</li>
              <li><strong>Result:</strong> Employee reimbursed directly</li>
            </ul>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Scenario 3: Advance Exceeds Expenses</SubHeading>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="font-semibold text-gray-900 mb-2">Timeline:</p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Day 1:</strong> Employee Advance: ₱100,000</li>
              <li><strong>Day 5:</strong> Expense Claim: ₱60,000</li>
              <li><strong>Options:</strong></li>
              <li>• Employee refunds ₱40,000 to company</li>
              <li>• OR company keeps ₱40,000 as next trip's advance</li>
              <li>• OR deduct ₱40,000 from next month salary</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="6. Important: Advance Adjustment in Salary">
        <div className={boxClass}>
          <SubHeading>How Advance Settlement Affects Salary</SubHeading>
          <p className="mb-4">
            If an advance is not settled against an expense claim, and the
            employee needs the company to recover it, it can be deducted from
            the next month's salary.
          </p>

          <MiniHeading>Process:</MiniHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Expense claim is submitted but marked "Deduct from Salary"</li>
            <li>OR Employee Advance remains unsettled at month-end</li>
            <li>In Salary Slip generation, check "Adjust Advance"</li>
            <li>ERPNext automatically pulls unsettled advances</li>
            <li>Deduction appears as line item in salary slip</li>
            <li>GL: Dr Advance Payable / Cr Bank (when salary is paid)</li>
          </ol>

          <Callout title="Important: Advance Deduction ≠ Salary Deduction" tone="amber">
            This salary deduction is NOT part of Regular Salary. It's a separate
            settlement mechanism. It appears in salary slip but is distinct from:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Basic salary</li>
              <li>Allowances</li>
              <li>Bonuses</li>
              <li>Tax deductions</li>
            </ul>
            It's purely a recovery mechanism for the company.
          </Callout>
        </div>
      </Section>

      <Section title="7. GL Setup for HR Finance">
        <div className={boxClass}>
          <SubHeading>Required GL Accounts</SubHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">Liabilities</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Advance Payable</li>
                <li>Employee Payable</li>
                <li>Advance Settlement Payable</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-semibold text-sm text-gray-900 mb-1">Expenses</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>Travel Expense</li>
                <li>Food & Entertainment</li>
                <li>Office Supplies</li>
                <li>Other Reimbursable Expenses</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
            <p className="font-semibold text-gray-900 mb-1">Monthly Reconciliation</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Reconcile Advance Payable against open advances</li>
              <li>Reconcile Employee Payable against unpaid claims</li>
              <li>Follow up on old unsettled items</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="8. HR Finance vs Payroll - Quick Reference">
        <div className={boxClass}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 px-2 font-semibold">Aspect</th>
                  <th className="text-left py-2 px-2 font-semibold">HR Finance</th>
                  <th className="text-left py-2 px-2 font-semibold">Payroll</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 font-semibold">Purpose</td>
                  <td className="py-2 px-2">Cash management for employees</td>
                  <td className="py-2 px-2">Salary calculation</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 font-semibold">DocTypes</td>
                  <td className="py-2 px-2">
                    Employee Advance, Expense Claim
                  </td>
                  <td className="py-2 px-2">
                    Salary Structure, Salary Slip
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 font-semibold">Frequency</td>
                  <td className="py-2 px-2">As needed (ad-hoc)</td>
                  <td className="py-2 px-2">Monthly/periodic</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 font-semibold">GL Impact</td>
                  <td className="py-2 px-2">Expense + Payable</td>
                  <td className="py-2 px-2">Salary Expense + Payable</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 px-2 font-semibold">Settlement</td>
                  <td className="py-2 px-2">
                    Against expenses or salary deduction
                  </td>
                  <td className="py-2 px-2">
                    Salary payment on payday
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-2 font-semibold">Module</td>
                  <td className="py-2 px-2">HR (Finance)</td>
                  <td className="py-2 px-2">Payroll</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <Section title="9. Implementation Checklist - HR Finance">
        <div className={boxClass}>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">GL Accounts Created</p>
                <p className="text-sm text-gray-600">
                  Advance Payable, Employee Payable, Expense accounts
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Approval Hierarchies Set
                </p>
                <p className="text-sm text-gray-600">
                  Who approves advances and expense claims
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Expense Categories Defined
                </p>
                <p className="text-sm text-gray-600">
                  Travel, Food, Office Supplies, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">
                  Policy Documentation
                </p>
                <p className="text-sm text-gray-600">
                  Max advance amount, settlement timeframe, approval limits
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">User Training</p>
                <p className="text-sm text-gray-600">
                  Employees understand advance and expense claim process
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <div className={boxClass}>
          <p className="mb-4">Now that you understand HR Finance:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Set up GL accounts for advances and expenses
            </li>
            <li>
              Create expense claim categories
            </li>
            <li>
              Define approval workflows
            </li>
            <li>
              Train managers and employees on the process
            </li>
            <li>
              Refer to Payroll Module to understand salary settlement
            </li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
