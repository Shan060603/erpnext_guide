import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const lendingWorkflow = `flowchart TD
  %% ===========================
  %% Lending App - ERPNext v15 - High-level workflow
  %% Note: DocType names can vary by Lending app version.
  %% ===========================

  A["Employee"] --> B["Employee Loan Application"]
  B --> C{"KYC + Eligibility Complete?"}
  C -->|No| B
  C -->|Yes| D["Credit Review"]
  D --> E{"Approved?"}
  E -->|No| F["Rejected / Cancelled"]
  E -->|Yes| G["Loan - Sanction"]
  G --> H["Disbursement"]
  H --> I["Repayment Schedule"]
  I --> J["Repayments - EMI"]
  J --> K{"Overdue?"}
  K -->|No| L["Loan Closed"]
  K -->|Yes| M["Follow-up / Penalty / Restructure"]
  M --> J
`

const approvalWorkflow = `flowchart LR
  %% ===========================
  %% Example Workflow - Frappe Workflow - Loan Application
  %% ===========================
  D["Draft"] -->|Submit - Loan Officer| S["Submitted"]
  S -->|Send to Credit - Loan Officer| R["Credit Review"]
  R -->|Approve - Credit Approver| A["Approved"]
  R -->|Reject - Credit Approver| X["Rejected"]
  A -->|Create Loan + Disburse - Accounts| P["Disbursed"]
`

export default function LendingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Lending App (ERPNext v15)</h1>

      <Mermaid chart={lendingWorkflow} />

      <Section title="Overview">
        <p>
          This guide focuses on <strong>employee lending</strong> in ERPNext v15: capturing employee loan requests,
          approving loans, disbursing funds, creating repayment schedules, and collecting installments—most
          commonly via <strong>salary deductions</strong> in Payroll. Accounting is used to post disbursement and
          repayment entries based on your company’s setup.
        </p>
        <p className="mt-3">
          The most common requirement is automatic repayment via <strong>salary deduction</strong>. See the
          employee-loan payroll workflow below.
        </p>
      </Section>

      <Section title="Prerequisites (Before You Start)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Install & Enable Lending"
            description="Ensure the Lending app is installed on your site and visible in the Desk."
            bullets={[
              'Confirm Lending module appears in the ERPNext desk sidebar',
              'Verify DocTypes like Loan / Loan Application exist (names may vary)',
              'Set user roles for lending operations (loan officer, credit reviewer, approver, accounts)',
            ]}
          />
          <StepCard
            title="2. Set Accounting Foundation"
            description="Prepare the ledgers used for disbursement, interest income, receivables, and penalties."
            bullets={[
              'Create/confirm loan receivable and interest income accounts',
              'Decide posting method: journal entries vs. payment entries (per your setup)',
              'Confirm company, fiscal year, and cost centers (if used)',
            ]}
          />
        </div>
      </Section>

      <Section title="Employee Lending Setup">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Employee & Eligibility"
            description="Maintain employee details needed for lending eligibility and assessment."
            bullets={[
              'Ensure Employee master data is complete (department, employment status, joining date)',
              'Capture required documents using attachments/custom fields (policy-dependent)',
              'Define eligibility rules (tenure, max exposure, outstanding balance limits)',
            ]}
          />
          <StepCard
            title="2. Loan Products"
            description="Define your loan offerings and rules."
            bullets={[
              'Create a Loan Product (interest method, rate, tenure, repayment frequency)',
              'Configure processing fees, penalties, and grace rules (as needed)',
              'Define collateral/security requirements (if applicable)',
            ]}
          />
        </div>
      </Section>

      <Section title="End-to-End Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Create Loan Application"
            description="Capture requested amount, product, tenure, and employee details."
            bullets={[
              'Link the borrower (Employee) and select the Loan Product',
              'Enter loan amount, repayment frequency, and preferred start date',
              'Attach KYC/credit documents and add internal notes for review',
            ]}
          />
          <StepCard
            title="2. Review & Approve"
            description="Evaluate eligibility and approve the application through a maker-checker flow."
            bullets={[
              'Verify KYC completeness and borrower eligibility criteria',
              'Perform credit review: income, liabilities, internal score/notes',
              'Approve or reject with clear reason codes for auditability',
            ]}
          />
          <StepCard
            title="3. Create Loan (Sanction)"
            description="Convert the approved application into an active loan record."
            bullets={[
              'Confirm sanctioned amount, rate, tenure, and repayment schedule parameters',
              'Set disbursement account and repayment collection method',
              'Lock critical terms to reduce post-approval changes',
            ]}
          />
          <StepCard
            title="4. Disburse Funds"
            description="Release funds and post the accounting entry."
            bullets={[
              'Create a Disbursement against the Loan (single or tranche-based)',
              'Post to the correct bank/cash and loan receivable accounts',
              'Capture reference numbers (bank transfer, voucher, etc.)',
            ]}
          />
          <StepCard
            title="5. Collect Repayments"
            description="Record EMI/instalment payments and keep the schedule updated."
            bullets={[
              'Create repayment entries (payment/journal, depending on configuration)',
              'Allocate principal vs. interest per the schedule',
              'Handle partial payments and advance payments consistently',
            ]}
          />
          <StepCard
            title="6. Handle Overdue & Closure"
            description="Manage delinquency and close loans correctly."
            bullets={[
              'Track overdue installments and apply penalties if configured',
              'Restructure/re-schedule only with proper approval and audit trail',
              'Close the loan when fully paid and all entries reconcile',
            ]}
          />
        </div>
      </Section>

      <Section title="Workflow (Recommended for v15)">
        <p className="mb-4">
          Use the built-in <strong>Workflow</strong> feature (Settings) to enforce approvals on the Loan
          Application. This makes approvals consistent, role-based, and auditable.
        </p>
        <Mermaid chart={approvalWorkflow} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="How to Configure"
            description="Create a workflow and attach it to your Loan Application DocType."
            bullets={[
              'Go to Settings → Workflow → New',
              'Select the DocType (often Loan Application) and set “Is Active”',
              'Add states: Draft, Submitted, Credit Review, Approved, Rejected (and optional Disbursed)',
              'Add transitions and assign roles per transition (maker-checker)',
            ]}
          />
          <StepCard
            title="Controls to Add"
            description="Keep approvals tight while still practical for operations."
            bullets={[
              'Restrict edits after submission to specific roles/fields',
              'Require remarks for rejection and major term changes',
              'Add email/system notifications on state changes',
              'Optionally require Accounts to confirm disbursement',
            ]}
          />
        </div>
      </Section>

      <Section title="Employee Loans (Salary Deduction Workflow)">
        <p className="mb-4">
          For employee lending, repayments are often collected by deducting a fixed installment from each payroll
          period. In ERPNext, the clean approach is to use a <strong>Deduction Salary Component</strong> and feed
          installment amounts into Salary Slips (typically via <strong>Additional Salary</strong> or variable
          components).
        </p>
        <Mermaid
          chart={`flowchart TD
            A["Employee"] --> B["Employee Loan Request / Application"]
            B --> C{"Approved?"}
            C -->|No| X["Rejected / Cancelled"]
            C -->|Yes| D["Disbursement"]
            D --> E["Repayment Schedule (Installments)"]
            E --> F["Create Deduction Salary Component (Loan Deduction)"]
            F --> G["Add Component to Salary Structure (as Variable Deduction)"]
            G --> H["Per Payroll Period: Create Additional Salary (Deduction) = Installment Due"]
            H --> I["Create Payroll Entry"]
            I --> J["Generate Salary Slips"]
            J --> K["Submit Salary Slips (deduction applied)"]
            K --> L["Loan Balance Updates / Close when paid"]
          `}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Set up the Deduction Component"
            description="Create a payroll component used to deduct loan repayments from salaries."
            bullets={[
              'Payroll → Salary Component → New',
              'Type: Deduction (e.g., “Loan Deduction”)',
              'Mark it as Variable (so amount can change per employee/period)',
              'Add it to the relevant Salary Structures under Deductions',
            ]}
          />
          <StepCard
            title="2. Deduct Installments in Payroll"
            description="Apply the installment due each pay period and let Salary Slips compute net pay."
            bullets={[
              'Each payroll period, create Additional Salary entries as a Deduction for the installment amount',
              'Run Payroll Entry → Generate Salary Slips',
              'Review that the loan deduction appears under Deductions on each Salary Slip',
              'Submit Salary Slips and proceed with salary payment as usual',
            ]}
          />
          <StepCard
            title="3. Controls & Audit"
            description="Keep deductions correct and traceable."
            bullets={[
              'Use Workflow approvals for loan request + disbursement',
              'Require a reference (loan number) in the remarks/attachments when creating deductions',
              'Handle edge cases: unpaid leave, final pay, partial deductions, and reschedules',
              'Reconcile loan balance vs. deducted totals before closing the loan',
            ]}
          />
          <StepCard
            title="Common Variations"
            description="Depending on your policy, deductions may not always be fixed."
            bullets={[
              'If you need auto-calculation, use a formula-based component fed by a custom “installment” field',
              'For one-time settlements, use a one-off Additional Salary deduction on the final payslip',
              'If you allow reschedules, generate a new schedule and adjust future deductions accordingly',
            ]}
          />
        </div>
      </Section>

      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Treat the Loan Application as the approval-controlled document</li>
          <li>✓ Keep accounting mappings (bank, receivable, interest) correct from day one</li>
          <li>✓ Use a maker-checker workflow to reduce fraud and errors</li>
          <li>✓ Standardize overdue handling with clear rules and audit trails</li>
        </ul>
      </Section>
    </div>
  )
}
