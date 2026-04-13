import Link from 'next/link'

import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const accountFlowChart = `flowchart LR
  %% Opening invoice + PDC + bank clearing - account flow
  TO["Temporary Opening"] -->|Phase 1 - Opening invoice creates AR balance| AR["Accounts Receivable"]
  AR -->|Phase 2 - Payment Entry receives PDC| PDC["PDC Receivable"]
  PDC -->|Phase 3 - Clear on maturity| BANK["Bank Account"]
`

const processFlowChart = `flowchart TD
  A["Phase 1 - Debt: Opening Invoice Creation Tool"] --> B["Sales Invoice - Is Opening = Yes"]
  B --> C["Outstanding in AR shows old balance"]
  C --> D["Phase 2 - Payment: Payment Entry - Receive - Mode of Payment = PDC"]
  D --> E["Link payment to the opening invoice in References table"]
  E --> F["Paid To = PDC Receivable"]
  F --> G["Reference Date = actual check date"]
  G --> H["Phase 3 - Clear PDC to Bank on maturity date"]
`

const sopFlowChart = `flowchart TD
  %% SOP flowchart - Opening Sales Invoice + PDC Linkage
  START["Start - Migration / Catch-up"] --> SETUP{One-time setup done?}
  SETUP -->|No| SETUP1["Create/confirm accounts: Temporary Opening, AR, PDC Receivable, Bank"]
  SETUP1 --> SETUP2["Create Mode of Payment: PDC/Check (map accounts as per policy)"]
  SETUP2 --> SETUP3["Restrict roles + define clearing procedure"]
  SETUP3 --> SETUP

  SETUP -->|Yes| P1["Phase 1 - Create Opening Sales Invoice"]
  P1 --> P1A["Use Opening Invoice Creation Tool"]
  P1A --> P1B["Invoice is marked: Is Opening = Yes"]
  P1B --> P1C["GL check: Dr AR / Cr Temporary Opening (no revenue)"]
  P1C --> P2["Phase 2 - Receive PDC and link to Opening Invoice"]

  P2 --> P2A["Create Payment Entry - Receive - Customer"]
  P2A --> P2B["Paid To = PDC Receivable (not Bank)"]
  P2B --> P2C["References: link Opening Invoice + allocate amount"]
  P2C --> P2D["Critical: Payment Entry Is Opening = No"]
  P2D --> P2E["Enter check details: Ref No + Ref Date = check date"]
  P2E --> P2F["Submit + confirm invoice outstanding reduced"]
  P2F --> WAIT["Hold in PDC Receivable until maturity"]

  WAIT --> P3["Phase 3 - Clear PDC to Bank on maturity/deposit date"]
  P3 --> P3A{Clearing method?}
  P3A -->|"Internal Transfer"| P3B["Payment Entry - Internal Transfer: PDC Receivable -> Bank"]
  P3A -->|"Journal Entry"| P3C["Journal Entry: Dr Bank / Cr PDC Receivable"]
  P3B --> END["Reconcile with bank statement + file audit trail"]
  P3C --> END
`

export default function OpeningSalesInvoicePdcSopPage() {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">SOP: Opening Sales Invoice + PDC Linkage</h1>
          <p className="text-gray-600 mt-2">
            ERPNext v15 • Bringing in old receivables and linking physical post-dated checks to the correct opening invoice.
          </p>
        </div>
        <div className="no-print shrink-0 flex items-center gap-3">
          <Link
            href="/accounting"
            className="inline-flex items-center justify-center px-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow transition focus:outline-none focus:ring-2 focus:ring-primary-200"
          >
            Back
          </Link>
        </div>
      </div>

      <Section title="Purpose & Scope">
        <p>
          Use this SOP when migrating or catching up receivables: you need to encode <strong>old unpaid sales invoices</strong>{' '}
          as <strong>Opening Invoices</strong>, then record a customer’s <strong>post-dated check</strong> (PDC) payment that
          is tied to the specific opening invoice for clear tracking and clean ledgers.
        </p>
        <p className="mt-3">
          This SOP assumes your company uses a dedicated holding account such as <strong>PDC Receivable</strong> to park
          checks until they mature and are deposited/cleared.
        </p>
      </Section>

      <Section title="Roles">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Accounts Encoder"
            description="Creates the opening invoice and the linked payment entry."
            bullets={[
              'Ensures invoice is marked Is Opening',
              'Ensures payment is linked to the correct invoice',
              'Uses the correct accounts (AR, PDC Receivable, Bank)',
            ]}
          />
          <StepCard
            title="Approver / Finance Lead"
            description="Reviews and approves the posting logic and maturity handling."
            bullets={[
              'Verifies no revenue impact from opening invoices',
              'Checks that Payment Entry is not marked Is Opening',
              'Verifies clearing entries to bank match deposits',
            ]}
          />
        </div>
      </Section>

      <Section title="Process Overview">
        <Mermaid chart={processFlowChart} />
      </Section>

      <Section title="SOP Flowchart (Recommended View)">
        <Mermaid chart={sopFlowChart} />
      </Section>

      <Section title="One-time System Setup (Before Encoding)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Accounts & Mode of Payment"
            description="Make sure the accounts used in this SOP exist and are mapped correctly."
            bullets={[
              'Chart of Accounts: Temporary Opening (liability/equity, per your opening balance setup)',
              'Chart of Accounts: Accounts Receivable (Debtors) for customer receivables',
              'Chart of Accounts: PDC Receivable (Current Asset) for post-dated checks on hand',
              'Mode of Payment: PDC/Check (mapped to the PDC Receivable account if your setup requires it)',
            ]}
          />
          <StepCard
            title="Controls"
            description="Make the process audit-friendly."
            bullets={[
              'Restrict who can submit Opening Invoices and Payment Entries',
              'Standardize naming: use check number in Reference No',
              'Require attachments/scans for checks (policy-dependent)',
              'Define a clearing procedure and cut-off per payroll/finance calendar',
            ]}
          />
        </div>
      </Section>

      <Section title="Phase 1 (The Debt): Create Opening Sales Invoice">
        <p className="mb-4">
          Goal: bring in old outstanding balances without affecting current-period revenue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Use Opening Invoice Creation Tool"
            description="Create opening sales invoices from your migration list."
            bullets={[
              'Accounts → Tools → Opening Invoice Creation Tool',
              'Choose Invoice Type = Sales Invoice',
              'Enter Customer, Invoice No, Invoice Date, Due Date, Outstanding Amount',
              'Validate totals against your migration sheet before Submit',
            ]}
          />
          <StepCard
            title="2. Verify It Does Not Hit Revenue"
            description="Opening invoices should post against a Temporary Opening account, not income."
            bullets={[
              'Open the created Sales Invoice and confirm Is Opening = Yes',
              'Check GL Entry: Dr Accounts Receivable, Cr Temporary Opening (not Income)',
              'Confirm Customer outstanding matches your old balance',
            ]}
          />
        </div>
      </Section>

      <Section title="Phase 2 (The Payment): Link the Physical PDC to the Opening Invoice">
        <p className="mb-4">
          Goal: record the check and link it to the exact opening invoice it pays, while placing the value in a PDC holding account.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Create Payment Entry (Receive)"
            description="Encode the post-dated check as a receivable payment routed to PDC Receivable."
            bullets={[
              'Accounts → Payment Entry → New',
              'Payment Type = Receive',
              'Party Type = Customer; select the Customer',
              'Mode of Payment = PDC (or your check mode)',
              'Paid To = PDC Receivable (asset) instead of Bank',
            ]}
          />
          <StepCard
            title="2. Link the Opening Invoice"
            description="Allocate the payment against the specific opening invoice."
            bullets={[
              'In References table: add the Opening Sales Invoice',
              'Allocate the exact amount the check is meant to cover',
              'Save → Review → Submit',
              'Confirm Outstanding on the invoice decreases accordingly',
            ]}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <StepCard
            title="Required Check Details (Do Not Skip)"
            description="These fields make the PDC traceable and drive maturity tracking."
            bullets={[
              'Reference No = Check Number',
              'Reference Date = Date printed on the check (maturity date)',
              'Remarks = Opening invoice number + customer name (and any internal memo)',
              'Attach check scan/photo if required by policy',
            ]}
          />
          <StepCard
            title="Posting Date vs Reference Date"
            description="Use the correct dates to avoid operational confusion."
            bullets={[
              'Posting Date = date you received/encoded the check',
              'Reference Date = date on the check (used to track maturity)',
              'Do not backdate Posting Date unless approved by Finance Lead',
            ]}
          />
        </div>
      </Section>

      <Section title="The “Is Opening” Logic (Critical)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Sales Invoice"
            description="Mark the invoice as opening so it posts to Temporary Opening, not revenue."
            bullets={[
              'Is Opening = Yes (Opening Invoice Creation Tool does this)',
              'Result: affects AR and opening balances, not current income',
            ]}
          />
          <StepCard
            title="Payment Entry"
            description="Do NOT mark the Payment Entry as opening when it is linked to an invoice."
            bullets={[
              'Is Opening = No',
              'Reason: payment is a normal settlement against AR',
              'Marking it opening can create ledger conflicts and incorrect balancing',
            ]}
          />
        </div>
      </Section>

      <Section title="Hardware / Process Note (PDC Maturity Tracking)">
        <p>
          When encoding the check, set <strong>Reference Date</strong> to the <strong>actual date printed on the check</strong>{' '}
          (not the date you received it). This is what triggers correct PDC maturity tracking in operational workflows.
        </p>
      </Section>

      <Section title="Phase 3 (Clearing): Move PDC Receivable to Bank">
        <p className="mb-4">
          On the maturity/deposit date, clear the check from <strong>PDC Receivable</strong> to the actual <strong>Bank Account</strong>.
          This should align with your deposit slip and bank statement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Option A: Payment Entry (Internal Transfer)"
            description="Preferred when you want consistent payment-style documents."
            bullets={[
              'Create Payment Entry → Payment Type = Internal Transfer',
              'Paid From = PDC Receivable',
              'Paid To = Bank Account',
              'Reference No/Date = bank deposit slip details (or clearing reference)',
              'Submit and reconcile to the bank statement',
            ]}
          />
          <StepCard
            title="Option B: Journal Entry"
            description="Acceptable if your team clears PDC via JE."
            bullets={[
              'Create Journal Entry dated on deposit/clearing date',
              'Dr Bank Account',
              'Cr PDC Receivable',
              'Add remarks referencing the check number and customer',
              'Submit and reconcile to the bank statement',
            ]}
          />
        </div>
      </Section>

      <Section title="Account Flow (What Moves Where)">
        <Mermaid chart={accountFlowChart} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Opening Invoice Posting"
            description="Moves your old receivable into AR without revenue."
            bullets={[
              'Dr Accounts Receivable',
              'Cr Temporary Opening',
            ]}
          />
          <StepCard
            title="PDC Payment Linked to Invoice"
            description="Clears AR but holds funds in PDC Receivable until maturity."
            bullets={[
              'Dr PDC Receivable',
              'Cr Accounts Receivable',
            ]}
          />
          <StepCard
            title="PDC Clearing to Bank (on maturity)"
            description="Moves value from PDC holding to the real bank account."
            bullets={[
              'Dr Bank Account',
              'Cr PDC Receivable',
            ]}
          />
          <StepCard
            title="Reconciliation Control"
            description="Keep PDC and bank clearing clean and auditable."
            bullets={[
              'Clear PDC only when deposited/confirmed by bank',
              'Match deposit slips and bank statements to clearing entries',
              'Investigate any long-outstanding PDC Receivable balances',
            ]}
          />
        </div>
      </Section>

      <Section title="Which Approach Is Better?">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Opening Invoice (Recommended when tracking matters)"
            description="Best when you want visibility of which old invoices are paid by which checks."
            bullets={[
              'Invoice-level settlement is clear and auditable',
              'AR aging remains meaningful per invoice',
              'Slightly more encoding work during migration',
            ]}
          />
          <StepCard
            title="Direct Payment (Advance)"
            description="Best when you want to capture checks quickly without encoding old invoice details."
            bullets={[
              'Fastest way to record received PDCs',
              'Allocation to invoices can be done later',
              'Less precise invoice-to-check tracing until allocated',
            ]}
          />
        </div>
      </Section>

      <Section title="Direct Payment (Advance) - If You Choose Speed">
        <p className="mb-4">
          If you decide not to encode opening invoices, you can still record PDCs quickly as customer advances and allocate later.
          Use this only if your team accepts that invoice-level tracing will be delayed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Record the PDC as Advance"
            description="Capture the check into PDC Receivable without linking to invoices."
            bullets={[
              'Payment Entry → Receive → Customer',
              'Paid To = PDC Receivable',
              'Reference No = check number; Reference Date = check date',
              'Do not add invoice references yet (leave unallocated)',
            ]}
          />
          <StepCard
            title="Allocate Later"
            description="When you encode invoices or when allocation is required, allocate the advance."
            bullets={[
              'Use Payment Reconciliation (or update references) to allocate against invoices',
              'Ensure allocation does not exceed received amount',
              'Clear PDC to Bank on maturity via Phase 3',
              'Document allocation decisions for audit',
            ]}
          />
        </div>
      </Section>
    </div>
  )
}
