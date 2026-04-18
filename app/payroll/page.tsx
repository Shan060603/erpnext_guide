import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'

const payrollCycleChart = `flowchart LR
  A[Employee] --> B[Attendance]
  B --> C[Leave]
  C --> D[Salary Structure]
  D --> E[Salary Slip]
  E --> F[Payment]

  style A fill:#e3f2fd
  style D fill:#e8f5e9
  style E fill:#fff3e0
  style F fill:#c8e6c9`

const separationChart = `flowchart TD
  A[Payroll Module] --> B[Salary Structure]
  A --> C[Additional Salary]
  A --> D[Salary Slip]
  A --> E[Salary Payment]

  F[HR and Accounting Flow] --> G[Employee Advance]
  F --> H[Expense Claim]
  H --> I[Settlement or Reimbursement]

  style A fill:#e8f5e9
  style F fill:#fff3e0
  style C fill:#c8e6c9
  style G fill:#ffe0b2
  style H fill:#ffe0b2`

const businessExampleChart = `flowchart TD
  A[Employee Requests Advance] --> B[Employee Advance in HR]
  B --> C[Advance Paid]
  C --> D[Employee Spends for Company Work]
  D --> E[Expense Claim Submitted]
  E --> F[Advance Adjusted or Balance Returned]

  G[Regular Payroll Run] --> H[Salary Structure Applied]
  H --> I[Salary Slip Generated]
  I --> J[Advance Recovery Deduction if Applicable]
  J --> K[Salary Payment]

  style B fill:#fff3e0
  style E fill:#fff3e0
  style G fill:#e8f5e9
  style I fill:#e3f2fd
  style K fill:#c8e6c9`

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

export default function PayrollPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Payroll Module Guide
      </h1>

      <Section title="1. Module Overview">
        <div className={boxClass}>
          <SubHeading>What Is Payroll in ERPNext?</SubHeading>
          <p className="mb-4">
            Payroll in ERPNext is the part of the system used to calculate and
            process employee salary for a payroll period. It brings together
            salary rules, earnings, deductions, attendance, leave impact, and
            final payslip generation.
          </p>
          <p>
            In simple terms, Payroll answers the question: <strong>How much
            salary should each employee be paid for this period?</strong>
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Purpose of the Payroll System</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>To define employee salary in a structured way</li>
            <li>To calculate regular salary accurately each month or pay period</li>
            <li>To apply earnings, deductions, and one-time payroll adjustments</li>
            <li>To generate Salary Slips for employees</li>
            <li>To record salary accrual and process salary payment</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>What Payroll Handles</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic salary and fixed earnings</li>
            <li>Allowances and recurring benefits</li>
            <li>Bonuses and incentives through payroll adjustments</li>
            <li>Tax and statutory deductions</li>
            <li>Attendance and leave impact on payable salary</li>
            <li>Net salary calculation and salary payout processing</li>
          </ul>
        </div>

        <Callout title="Important Separation Rule" tone="amber">
          Payroll is for <strong>salary computation and salary payment</strong>.
          Employee Advances and Expense Claims belong to <strong>HR and Accounting workflows</strong>,
          not to payroll earnings.
        </Callout>
      </Section>

      <Section title="2. Payroll Flow Overview">
        <Mermaid chart={payrollCycleChart} />

        <div className={boxClass}>
          <SubHeading>Full Payroll Cycle</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Employee:</strong> The employee master record is the base
              for payroll processing.
            </li>
            <li>
              <strong>Attendance:</strong> Attendance may affect payable days,
              depending on your payroll settings.
            </li>
            <li>
              <strong>Leave:</strong> Approved leave can affect salary if your
              company policy treats some leave as paid and some as unpaid.
            </li>
            <li>
              <strong>Salary Structure:</strong> Defines how the employee’s
              salary is built.
            </li>
            <li>
              <strong>Salary Slip:</strong> Calculates earnings, deductions, and
              net pay for the payroll period.
            </li>
            <li>
              <strong>Payment:</strong> Final step where salary is paid and
              accounting entries are posted.
            </li>
          </ol>
        </div>
      </Section>

      <Section title="3. Salary Structure">
        <div className={boxClass}>
          <SubHeading>What Is Salary Structure?</SubHeading>
          <p className="mb-4">
            A Salary Structure is the salary template for an employee. It shows
            the breakup of salary into earnings and deductions, together with
            payroll frequency and payment-related settings.
          </p>
          <p>
            It defines how salary is calculated, not just the final amount.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Earnings vs Deductions</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Earnings:</strong> Amounts added to salary, such as Basic
              Pay, House Allowance, Transport Allowance, or Incentive.
            </li>
            <li>
              <strong>Deductions:</strong> Amounts reduced from salary, such as
              tax, loan recovery, or unpaid leave impact.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Basic Salary Concept</SubHeading>
          <p className="mb-4">
            Basic Salary is usually the core fixed part of compensation. Many
            other payroll calculations may be based on it, such as allowances,
            deductions, or formula-driven components.
          </p>
          <p>
            Example: An employee may have a monthly basic salary of `25,000`,
            with transport allowance and tax calculated separately.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How Salary Is Defined</SubHeading>
          <p className="mb-4">
            In practice, salary is defined through:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create Salary Components</li>
            <li>Build a Salary Structure using those components</li>
            <li>Assign the Salary Structure to the employee</li>
            <li>Generate Salary Slips during payroll</li>
          </ol>
        </div>
      </Section>

      <Section title="4. Salary Components">
        <div className={boxClass}>
          <SubHeading>What Are Salary Components?</SubHeading>
          <p className="mb-4">
            Salary Components are the building blocks of salary. ERPNext uses
            them to define each earning and each deduction that appears on a
            salary slip.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Common Earnings Components</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Basic Pay</li>
            <li>House or Transport Allowance</li>
            <li>Meal or Communication Allowance</li>
            <li>Sales Incentive</li>
            <li>Performance Bonus</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Common Deduction Components</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Income Tax</li>
            <li>Social security or statutory contributions</li>
            <li>Loan or advance recovery deduction</li>
            <li>Late attendance or unpaid absence deduction</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Formula Usage</SubHeading>
          <p className="mb-4">
            ERPNext allows a Salary Component to use a fixed amount or a formula.
            Formulas are useful when a component depends on another amount.
          </p>
          <p className="mb-4">
            Example:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Basic Pay            = 20,000
House Allowance      = 40% of Basic Pay
House Allowance      = 8,000`}</pre>
          </div>
          <p>
            This keeps payroll rules consistent across employees with similar
            compensation design.
          </p>
        </div>
      </Section>

      <Section title="5. Salary Slip">
        <div className={boxClass}>
          <SubHeading>What Is a Salary Slip?</SubHeading>
          <p className="mb-4">
            A Salary Slip is the payroll document issued to the employee for a
            specific pay period. It shows the earnings, deductions, working days,
            payment days, and net salary.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How It Is Generated</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create or confirm the employee’s Salary Structure Assignment.</li>
            <li>Create a Payroll Entry or create an individual Salary Slip.</li>
            <li>Select the payroll period dates.</li>
            <li>Fetch the employee and applicable salary data.</li>
            <li>Review the Salary Slip and submit it.</li>
          </ol>
        </div>

        <div className={boxClass}>
          <SubHeading>How Attendance, Leave, and Components Affect Salary</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attendance can affect payment days if validation is enabled.</li>
            <li>Leave can affect salary based on paid and unpaid leave policy.</li>
            <li>Earnings components increase gross salary.</li>
            <li>Deductions reduce net salary.</li>
            <li>Additional Salary can add or deduct one-time payroll amounts.</li>
          </ul>
        </div>
      </Section>

      <Section title="6. Additional Salary">
        <div className={boxClass}>
          <SubHeading>What Is Additional Salary?</SubHeading>
          <p className="mb-4">
            Additional Salary is used in payroll to add or deduct an ad hoc
            salary amount for a specific employee on a payroll date. It is used
            for one-time or special payroll adjustments.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>When to Use It</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Bonuses</li>
            <li>Incentives</li>
            <li>One-time salary adjustments</li>
            <li>Retroactive pay or arrears</li>
            <li>Special payroll deductions</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>How It Affects the Salary Slip</SubHeading>
          <p className="mb-4">
            If the Additional Salary payroll date falls within the salary
            processing period, ERPNext includes that amount in the employee’s
            Salary Slip under the selected Salary Component.
          </p>
          <p>
            Example: A `3,000` performance bonus entered as Additional Salary
            for the payroll date will appear in that month’s Salary Slip as an
            earning.
          </p>
        </div>

        <Callout title="Critical Clarification" tone="green">
          <strong>Additional Salary is part of Payroll only.</strong> It is for
          salary-related additions or deductions. It should be used for bonus,
          incentive, arrears, or other payroll adjustments, not for employee
          advances or expense reimbursements.
        </Callout>
      </Section>

      <Section title="7. Employee Advance">
        <div className={boxClass}>
          <SubHeading>What Is Employee Advance?</SubHeading>
          <p className="mb-4">
            Employee Advance is money given by the company to an employee in
            advance for company-related spending or a recoverable amount. It is
            not salary and not payroll income.
          </p>
          <p>
            From a business point of view, it is a recoverable company asset
            until it is settled.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How It Is Handled</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handled through HR and Accounting workflow</li>
            <li>Created as an Employee Advance record</li>
            <li>Paid through accounting after approval</li>
            <li>Later settled through expense claim, return, or recovery</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>What It Is Not</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>It is not salary</li>
            <li>It is not payroll earnings</li>
            <li>It does not directly increase gross pay</li>
            <li>It should not be treated as income on the Salary Slip</li>
          </ul>
        </div>

        <Callout title="Important Clarification" tone="amber">
          Employee Advance belongs to <strong>HR and Accounting</strong>. It may
          later be recovered through salary deduction or separate repayment, but
          the advance itself is <strong>not payroll income</strong>.
        </Callout>
      </Section>

      <Section title="8. Expense Claim">
        <div className={boxClass}>
          <SubHeading>What Is an Expense Claim?</SubHeading>
          <p className="mb-4">
            An Expense Claim is a request by an employee to reimburse business
            expenses paid from their own pocket, such as travel, meals, fuel, or
            lodging for company work.
          </p>
          <p>
            It is a reimbursement process, not salary.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How It Is Handled</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handled in HR and Accounting workflow</li>
            <li>Submitted by employee with expense details</li>
            <li>Approved by expense approver</li>
            <li>Booked as company expense and employee payable</li>
            <li>May be reimbursed or adjusted against an earlier advance</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>What It Is Not</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>It is not salary</li>
            <li>It is not payroll income</li>
            <li>It should not be added to payroll earnings</li>
            <li>It should not be entered as Additional Salary</li>
          </ul>
        </div>

        <Callout title="Important Clarification" tone="amber">
          Expense Claim belongs to <strong>HR and Accounting</strong>. It is a
          reimbursement of business expense, not a payroll earning.
        </Callout>
      </Section>

      <Section title="9. Salary Deduction Logic">
        <div className={boxClass}>
          <SubHeading>How Advance Recovery Can Connect to Payroll</SubHeading>
          <p className="mb-4">
            An Employee Advance may be recovered from salary, but only as a
            deduction component. This means payroll is only being used as the
            recovery channel, not as the original source of the advance.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Example</SubHeading>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Employee Advance     = 5,000
Monthly Recovery     = 1,000

Month 1 Salary Slip  -> Deduction 1,000
Month 2 Salary Slip  -> Deduction 1,000
Month 3 Salary Slip  -> Deduction 1,000
Month 4 Salary Slip  -> Deduction 1,000
Month 5 Salary Slip  -> Deduction 1,000

Advance Balance      = 0`}</pre>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Key Principle</SubHeading>
          <p>
            The recovery amount appears in payroll as a <strong>deduction</strong>.
            The advance itself still remains outside payroll logic.
          </p>
        </div>
      </Section>

      <Section title="10. Payment Entry in Payroll">
        <div className={boxClass}>
          <SubHeading>What Payment Means in Payroll Context</SubHeading>
          <p className="mb-4">
            In payroll, payment means the final payout of net salary after the
            Salary Slips are reviewed and submitted.
          </p>
          <p className="mb-4">
            In standard ERPNext payroll processing, salary payment is typically
            generated from <strong>Payroll Entry</strong> using
            <strong> Make Bank Entry</strong>, which creates a draft
            <strong> Journal Entry</strong> for salary payment.
          </p>
          <p>
            Users may casually say “payment entry for payroll,” but the standard
            payroll payout flow itself is usually handled through the payroll
            bank entry and journal entry process.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Salary Payout Process</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create Payroll Entry for the payroll period.</li>
            <li>Fetch employees.</li>
            <li>Create Salary Slips.</li>
            <li>Review and submit Salary Slips.</li>
            <li>Record salary accrual.</li>
            <li>Use `Make Bank Entry` to create the salary payment journal entry.</li>
            <li>Submit the payment journal entry after bank details are confirmed.</li>
          </ol>
        </div>
      </Section>

      <Section title="11. Common Mistakes">
        <div className={boxClass}>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Mixing Employee Advance with Salary:</strong> An advance is
              recoverable, not payroll income.
            </li>
            <li>
              <strong>Treating Expense Claims as Salary:</strong> Reimbursements
              should not appear as payroll earnings.
            </li>
            <li>
              <strong>Using Additional Salary for reimbursements:</strong>
              Additional Salary is for payroll adjustments only.
            </li>
            <li>
              <strong>Not separating HR vs Payroll logic:</strong> This creates
              wrong reporting, wrong salary slips, and accounting confusion.
            </li>
            <li>
              <strong>Ignoring attendance and leave impact:</strong> This can
              cause incorrect payment days and salary values.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="12. Real Business Example Flow">
        <Mermaid chart={businessExampleChart} />

        <div className={boxClass}>
          <SubHeading>Scenario</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              An employee receives an advance of `5,000` for an out-of-town
              client visit. This is recorded as <strong>Employee Advance</strong>
              in HR and Accounting.
            </li>
            <li>
              The employee spends part of the money for hotel and transport and
              later submits an <strong>Expense Claim</strong>.
            </li>
            <li>
              The Expense Claim is approved and adjusted against the advance.
            </li>
            <li>
              Payroll for the month runs separately using Salary Structure,
              attendance, and leave rules.
            </li>
            <li>
              If part of the advance still needs to be recovered from the
              employee, payroll applies a deduction component on the Salary Slip.
            </li>
            <li>
              Net salary is then paid through the payroll payment process.
            </li>
          </ol>
        </div>

        <Callout title="Business Meaning" tone="green">
          The advance and expense claim support the employee’s business spending.
          Payroll remains a separate process that calculates salary. The only
          connection is that an unrecovered advance balance may be deducted from salary.
        </Callout>
      </Section>

      <Section title="13. Summary Flow">
        <Mermaid chart={separationChart} />

        <div className={boxClass}>
          <SubHeading>Payroll Flow</SubHeading>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-sm whitespace-pre-wrap">{`Attendance
  -> Salary Structure
  -> Salary Slip
  -> Payment`}</pre>
          </div>

          <MiniHeading>HR Finance Flow (Not Payroll)</MiniHeading>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Employee Advance
  -> Expense Claim
  -> Settlement`}</pre>
          </div>
        </div>

        <Callout title="Final Rule" tone="amber">
          Always keep these two areas separate:
          <br />
          <strong>Payroll</strong> = salary computation and salary payments
          <br />
          <strong>HR and Accounting</strong> = advances and expense claims
        </Callout>
      </Section>
    </div>
  )
}
