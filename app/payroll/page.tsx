import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const payrollFlowchart = `flowchart TD
%% ===========================
%% Payroll / Salary Payout Module
%% ===========================

%% ===========================
%% Masters
%% ===========================
A[Salary Component] --> B[Salary Structure]
B --> C[Income Tax Slab]
C --> D[Payroll Period]

%% ===========================
%% Payroll Transactions
%% ===========================
D --> E[Salary Structure Assignment]
E --> F[Bulk Salary Structure Assignment]
F --> G[Create Payroll Entry]
G --> H[Generate Salary Slips]
H --> I{Salary Review / Approval?}
I -->|Approved| J[Salary Withholding & Payment Entry]
I -->|Rejected| H[Revise Salary Slips]

%% ===========================
%% Incentives & Additional Payments
%% ===========================
J --> K[Additional Salary]
J --> L[Employee Incentive]
J --> M[Retention Bonus]

%% ===========================
%% Accounting Integration
%% ===========================
J --> N[Chart of Accounts]
J --> O[Chart of Cost Centers]
J --> P[Journal Entry]

%% ===========================
%% Payroll Reports
%% ===========================
J --> T[Salary Register]
J --> U[Bank Remittance]
J --> V[Salary Payments Based On Payment Mode]
J --> X[Income Tax Computation]

%% ===========================
%% Deduction Reports
%% ===========================
J --> Y[Provident Fund Deductions]
J --> Z[Professional Tax Deductions]
J --> AA[Income Tax Deductions]`

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
      
      <Section title="Payroll / Salary Payout Workflow">
        <Mermaid chart={payrollFlowchart} />
      </Section>

      <Section title="Tax & Benefits Workflow">
        <Mermaid chart={taxBenefitsFlowchart} />
      </Section>
      
      <Section title="Overview">
        <p>
          The Payroll module handles salary processing, tax computations, and employee benefits management.
          It ensures accurate and timely salary payments while maintaining compliance with tax regulations.
          This module integrates with Accounting for financial reporting.
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