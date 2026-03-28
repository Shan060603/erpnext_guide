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

const interCompanyFlowchart = `flowchart TD
  %% ===========================
  %% Inter-Company Transfer Flow
  %% ===========================
  A[HQ Company] --> B[Create Sales Invoice]
  B --> C{Update Stock = Yes}
  C -->|No| D[Enable Update Stock]
  D --> B
  C -->|Yes| E[Submit Sales Invoice]
  
  E --> F[Click Create]
  F --> G[Inter Company Purchase Invoice]
  G --> H[Draft Created in Branch]
  
  H --> I[Switch to Branch Company]
  I --> J[Open Draft Invoice]
  J --> K[Select Target Warehouse]
  K --> L[Submit Invoice]
  L --> M[Stock Transfer Complete]
  
  M --> N[Update Stock Ledger]
  M --> O[Update Accounting Records]
  
  style A fill:#e1f5fe
  style M fill:#c8e6c9
  style N fill:#fff9c4
  style O fill:#fff9c4`

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
      
      <Section title="Inter-Company Stock Transfers">
        <p className="mb-4">
          When you have a multi-company setup (e.g., HQ and branch companies), moving stock between them requires 
          an Inter-Company Invoice workflow—not a standard Stock Entry. This ensures proper accounting balance 
          and avoids warehouse filtering errors.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-800 font-medium">⚠️ Important: Do NOT use standard Stock Entry for inter-company transfers</p>
          <p className="text-yellow-700 text-sm mt-1">Using Stock Entry will cause warehouse filtering errors and break accounting balance.</p>
        </div>
      </Section>
      
      <Mermaid chart={interCompanyFlowchart} />
      
      <Section title="Prerequisites">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Set Branch as Internal Customer"
            description="Configure the branch company as an internal customer in HQ's customer master."
            bullets={[
              'Go to Customer list in HQ company',
              'Create or edit the branch company record',
              'Set "Is Internal Customer" = Yes',
              'Link to the branch company in ERPNext',
            ]}
          />
          <StepCard
            title="2. Set HQ as Internal Supplier"
            description="Configure HQ as an internal supplier in the branch company's supplier master."
            bullets={[
              'Go to Supplier list in branch company',
              'Create or edit the HQ company record',
              'Set "Is Internal Supplier" = Yes',
              'Link to the HQ company in ERPNext',
            ]}
          />
        </div>
      </Section>
      
      <Section title="The 3-Step Process">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepCard
            title="Step 1: Create Sales Invoice in HQ"
            description="Create a Sales Invoice in the HQ company with stock update enabled."
            bullets={[
              'Source: HQ Warehouse (e.g., Main Warehouse)',
              'Set "Update Stock" = Yes',
              'Add items to transfer',
              'Submit the invoice',
            ]}
          />
          <StepCard
            title="Step 2: Create Inter-Company Purchase Invoice"
            description="From the submitted HQ invoice, create the inter-company purchase invoice."
            bullets={[
              'Click "Create" → "Inter Company Purchase Invoice"',
              'System auto-creates draft in branch company',
              'Invoice links to original HQ invoice',
              'Maintains audit trail across companies',
            ]}
          />
          <StepCard
            title="Step 3: Submit in Branch Company"
            description="Open the draft in the branch company and complete the transfer."
            bullets={[
              'Switch to branch company context',
              'Open the draft Inter-Company Purchase Invoice',
              'Select Target Warehouse (e.g., Stores - SI)',
              'Submit to complete the transfer',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Security Feature">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 font-medium">🔒 Cost Protection</p>
          <p className="text-blue-700 text-sm mt-1">
            The Inter-Company Invoice workflow hides HQ's original buying rate (e.g., from China suppliers) 
            from branch staff. They only see the internal transfer price, protecting sensitive cost information.
          </p>
        </div>
        <p className="text-gray-700">
          This is especially important when branch staff (like Kier) should not have visibility into 
          the original procurement costs from external suppliers.
        </p>
      </Section>
      
      <Section title="Troubleshooting">
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-800 font-medium">❓ Cannot see branch warehouse?</p>
          <p className="text-red-700 text-sm mt-1">
            If you cannot see the branch warehouse, you are likely in the wrong company context. 
            Use the "Create" button from the HQ Sales Invoice to automatically switch to the correct 
            branch company context and create the Inter-Company Purchase Invoice.
          </p>
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Always create Sales Orders from accepted Quotations</li>
          <li>✓ Use Delivery Notes to track actual shipments</li>
          <li>✓ Create Invoices only after Delivery to recognize revenue</li>
          <li>✓ Reconcile payments to keep customer accounts accurate</li>
          <li>✓ Set up automatic invoicing for recurring orders</li>
          <li>✓ Use Inter-Company Invoice workflow for multi-company stock transfers</li>
          <li>✓ Never use standard Stock Entry for inter-company transfers</li>
        </ul>
      </Section>
    </div>
  )
}