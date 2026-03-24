import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const sellingFlowchart = `flowchart TD
  %% ===========================
  %% Sales Module (ERPNext)
  %% ===========================

  %% ===========================
  %% Sales Flow (Standard)
  %% ===========================
  Q[Quotation] --> R{Customer Approves?}
  R -->|No| QR[Revise Quotation]
  QR --> Q
  R -->|Yes| S[Sales Order]

  S --> T{Stock Available?}
  T -->|No| U[Trigger Purchase / Production]
  T -->|Yes| V[Delivery Note]

  V --> W[Sales Invoice]
  W --> X{Payment Received?}
  X -->|No| Y[Accounts Receivable]
  X -->|Yes| Z[Payment Entry]

  Z --> AA[Update Accounting Records]

  %% ===========================
  %% Optional: Blanket Order
  %% ===========================
  AB[Blanket Order] --> Q

  %% ===========================
  %% POS Flow (Retail Sales)
  %% ===========================
  AC[POS Profile & Settings] --> AD[POS Opening Entry]
  AD --> AE[POS Sales Invoice]
  AE --> AF[Loyalty Point Entry]
  AF --> AG[POS Closing Entry]

  %% ===========================
  %% Campaign / CRM Link
  %% ===========================
  AH[Campaign] --> Q
  AI[Lead Source] --> Q`

export default function SellingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Selling Module</h1>
      
      <Mermaid chart={sellingFlowchart} />
      
      <Section title="Overview">
        <p>
          The Selling module handles the complete sales process from initial opportunity to final payment collection.
          It integrates with CRM for lead management and connects to Inventory for stock availability and Accounting 
          for financial tracking. This module ensures smooth order processing and accurate revenue recognition.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Opportunity"
            description="Track potential sales from qualified leads or existing customers."
            bullets={[
              'Create opportunities from CRM leads or manually',
              'Define expected revenue and probability of closing',
              'Set expected delivery date and territory',
              'Track source and campaign for analytics',
            ]}
          />
          <StepCard
            title="2. Quotation"
            description="Create formal price proposals for customers."
            bullets={[
              'Generate quotations from opportunities',
              'Add items with quantities, rates, and discounts',
              'Include taxes, shipping terms, and validity',
              'Send directly to customer via email',
            ]}
          />
          <StepCard
            title="3. Sales Order"
            description="Create binding orders when customers accept quotations."
            bullets={[
              'Convert quotation to sales order with one click',
              'Reserve stock based on warehouse rules',
              'Set delivery date and shipping details',
              'Apply payment terms and credit limits',
            ]}
          />
          <StepCard
            title="4. Delivery Note"
            description="Track physical delivery of goods to customers."
            bullets={[
              'Create delivery note from sales order',
              'Scan items during packing with barcode',
              'Update actual vs. ordered quantities',
              'Generate packing slip and shipping label',
            ]}
          />
          <StepCard
            title="5. Sales Invoice"
            description="Bill customers for delivered goods or services."
            bullets={[
              'Create invoice from delivery note or order',
              'Auto-calculate taxes and discounts',
              'Add payment terms and due date',
              'Send invoice for customer payment',
            ]}
          />
          <StepCard
            title="6. Payment Entry"
            description="Record customer payments and reconcile accounts."
            bullets={[
              'Record payments against sales invoices',
              'Multiple payment modes: cash, bank, credit',
              'Handle partial payments and advances',
              'Reconcile bank statements automatically',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Always create Sales Orders from accepted Quotations</li>
          <li>✓ Use Delivery Notes to track actual shipments</li>
          <li>✓ Create Invoices only after Delivery to recognize revenue</li>
          <li>✓ Reconcile payments to keep customer accounts accurate</li>
          <li>✓ Set up automatic invoicing for recurring orders</li>
        </ul>
      </Section>
    </div>
  )
}