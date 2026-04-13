import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const mastersFlowchart = `flowchart TD
  A[Salary Component] --> B[Salary Structure]
  B --> C[Income Tax Slab]
  C --> D[Payroll Period]`

const payrollTransactionsFlowchart = `flowchart TD
  A[Salary Structure Assignment] --> B[Bulk Salary Structure Assignment]
  B --> C[Create Payroll Entry]
  C --> D[Generate Salary Slips]
  D --> E{Salary Review / Approval?}
  E -->|Approved| F[Salary Withholding & Payment Entry]
  E -->|Rejected| D[Revise Salary Slips]`

const incentivesFlowchart = `flowchart TD
  A[Additional Salary] --> B[Employee Incentive]
  B --> C[Retention Bonus]`

const employeeLoanDeductionFlowchart = `flowchart TD
  A["Employee Loan Approved"] --> B["Disbursement"]
  B --> C["Repayment Schedule (Installments)"]
  C --> D["Deduction Salary Component (Loan Deduction)"]
  D --> E["Salary Structure (Variable Deduction)"]
  E --> F["Each Payroll Period: Additional Salary (Deduction) = Installment"]
  F --> G["Payroll Entry"]
  G --> H["Salary Slips (Deduction Applied)"]
  H --> I["Salary Payment"]
  I --> J["Loan Balance Updates / Close"]`

const accountingFlowchart = `flowchart TD
  A[Chart of Accounts] --> B[Chart of Cost Centers]
  B --> C[Journal Entry]`

const reportsFlowchart = `flowchart TD
  A[Salary Register]
  B[Bank Remittance]
  C[Salary Payments Based On Payment Mode]
  D[Income Tax Computation]
  E[Provident Fund Deductions]
  F[Professional Tax Deductions]
  G[Income Tax Deductions]`

const taxBenefitsFlowchart = `flowchart TD
%% ===========================
%% Payroll / Tax & Benefits Module
%% ===========================

%% ===========================
%% Tax Setup Masters
%% ===========================
A[Income Tax Slab] --> B[Employee Tax Exemption Category]
B --> C[Employee Tax Exemption Sub Category]

%% ===========================
%% Employee Exemption Workflow
%% ===========================
D[Employee Tax Exemption Declaration] --> E[Employee Tax Exemption Proof Submission]
E --> F{Valid Proof?}
F -->|Yes| G[Apply Tax Exemption to Payroll]
F -->|No| H[Reject Declaration / Notify Employee]

%% ===========================
%% Employee Benefits Workflow
%% ===========================
I[Employee Benefit Application] --> J[Manager / HR Approval]
J --> K{Approved?}
K -->|Yes| L[Employee Benefit Claim]
K -->|No| M[Reject Benefit / Notify Employee]

%% ===========================
%% Reports
%% ===========================
G --> N[Income Tax Computation Report]
L --> O[Income Tax Deductions Report]
L --> P[Benefit Claim Reports]`

export default function PayrollPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Payroll Module</h1>
      
      <Section title="Overview">
        <p>
          The Payroll module handles salary processing, tax computations, and employee benefits management.
          It ensures accurate and timely salary payments while maintaining compliance with tax regulations.
          This module integrates with Accounting for financial reporting.
        </p>
      </Section>
      
      <Section title="1. Masters">
        <Mermaid chart={mastersFlowchart} />
        <p>
          Define salary components, structures, tax slabs, and payroll periods.
        </p>
      </Section>
      
      <Section title="2. Payroll Transactions">
        <Mermaid chart={payrollTransactionsFlowchart} />
        <p>
          Process salary assignments, payroll entries, and salary slip generation.
        </p>
      </Section>
      
      <Section title="3. Incentives & Additional Payments">
        <Mermaid chart={incentivesFlowchart} />
        <p>
          Manage additional salary, employee incentives, and retention bonuses.
        </p>
      </Section>

      <Section title="Employee Loans & Salary Deductions">
        <Mermaid chart={employeeLoanDeductionFlowchart} />
        <p>
          If your company lends money to employees, collect repayments by adding a dedicated <strong>Deduction</strong>{' '}
          salary component (e.g., “Loan Deduction”) to the salary structure, then post the installment due each
          payroll period (commonly via <strong>Additional Salary</strong> as a deduction). This ensures the
          repayment is reflected directly on the Salary Slip and net pay.
        </p>
      </Section>
      
      <Section title="4. Accounting Integration">
        <Mermaid chart={accountingFlowchart} />
        <p>
          Integrate payroll with chart of accounts, cost centers, and journal entries.
        </p>
      </Section>
      
      <Section title="5. Reports">
        <Mermaid chart={reportsFlowchart} />
        <p>
          Generate salary register, bank remittance, and tax computation reports.
        </p>
      </Section>
      
      <Section title="6. Tax & Benefits Workflow">
        <Mermaid chart={taxBenefitsFlowchart} />
        <p>
          Manage tax exemptions, employee benefits, and related workflows.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Salary Components"
            description="Define earnings and deduction components."
            bullets={[
              'Create salary components: Basic, HRA, Conveyance',
              'Set up deduction components: PF, Tax, Insurance',
              'Configure formula-based calculations',
              'Define eligibility conditions',
            ]}
          />
          <StepCard
            title="2. Salary Structure"
            description="Create pay templates for employees."
            bullets={[
              'Build salary structure with components',
              'Assign structure to employees or groups',
              'Set based on designation or department',
              'Define payment frequency',
            ]}
          />
          <StepCard
            title="3. Payroll Entry"
            description="Process employee salaries each period."
            bullets={[
              'Create payroll entry for the period',
              'Fetch attendance and salary data',
              'Calculate earnings and deductions',
              'Review and submit for approval',
            ]}
          />
          <StepCard
            title="4. Salary Slip"
            description="Generate employee payslips."
            bullets={[
              'Auto-generate from payroll entry',
              'Show detailed earnings and deductions',
              'Distribute to employees',
              'Export for record keeping',
            ]}
          />
          <StepCard
            title="5. Tax & Exemptions"
            description="Manage tax deductions and exemptions."
            bullets={[
              'Configure income tax slabs',
              'Process tax exemption declarations',
              'Calculate TDS each period',
              'Generate Form 16 and reports',
            ]}
          />
          <StepCard
            title="6. Payment & Accounting"
            description="Process payments and journal entries."
            bullets={[
              'Create payment entries for salary disbursement',
              'Auto-post to accounting ledgers',
              'Generate bank remittance files',
              'Reconcile with bank statements',
            ]}
          />
          <StepCard
            title="Employee Loan Deductions"
            description="Deduct loan installments automatically via payroll."
            bullets={[
              'Create a Deduction Salary Component (Variable) for loan repayments',
              'Add it to the Salary Structure under Deductions',
              'Create Additional Salary (Deduction) each period for the installment due',
              'Generate Salary Slips and verify the deduction before submitting',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Create salary components before building structures</li>
          <li>✓ Assign salary structures to employees correctly</li>
          <li>✓ Review salary slips before final approval</li>
          <li>✓ Process tax exemptions before payroll runs</li>
        </ul>
      </Section>
    </div>
  )
}
