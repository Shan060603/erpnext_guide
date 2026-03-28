import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const buyingFlowchart = `flowchart TD
  %% ===========================
  %% Buying Module (ERPNext)
  %% ===========================

  %% ===========================
  %% Procurement Flow
  %% ===========================
  L[Material Request] --> M{Stock Needed?}
  M -->|No| N[Close Request]
  M -->|Yes| O[Request for Quotation]

  O --> P[Send RFQ to Suppliers]
  P --> Q[Supplier Quotation]
  Q --> R{Select Supplier?}
  R -->|No| P
  R -->|Yes| S[Purchase Order]

  S --> T{Stock Received?}
  T -->|No| U[Track Pending Delivery]
  T -->|Yes| V[Purchase Receipt]

  V --> W[Purchase Invoice]
  W --> X{Invoice Verified?}
  X -->|No| WR[Review Invoice]
  X -->|Yes| Y[Payment Entry]

  Y --> Z[Update Accounting Records]
  Z --> AX[Accounting & Inventory Updates]`

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

export default function BuyingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Buying Module</h1>
      
      <Mermaid chart={buyingFlowchart} />
      
      <Section title="Overview">
        <p>
          The Buying module manages your procurement process from identifying material needs to final payment to suppliers.
          It helps streamline purchasing workflows, negotiate best prices, and maintain proper vendor relationships.
          This module ensures timely availability of materials while optimizing purchase costs.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Material Request"
            description="Internal request for purchasing goods or services."
            bullets={[
              'Create requests from production plans or stock alerts',
              'Specify items, quantities, and required dates',
              'Set requested by department and purpose',
              'Submit for approval to procurement team',
            ]}
          />
          <StepCard
            title="2. Request for Quotation (RFQ)"
            description="Solicit price quotes from multiple suppliers."
            bullets={[
              'Create RFQs from approved material requests',
              'Select suppliers to send invitations',
              'Set submission deadline and terms',
              'Track supplier responses and comparisons',
            ]}
          />
          <StepCard
            title="3. Supplier Quotation"
            description="Record price quotations received from vendors."
            bullets={[
              'Capture vendor pricing in system',
              'Compare quotes side-by-side',
              'Track delivery times and payment terms',
              'Select best quote for purchase order',
            ]}
          />
          <StepCard
            title="4. Purchase Order"
            description="Legal commitment to purchase from supplier."
            bullets={[
              'Create PO from supplier quotation or directly',
              'Include items, prices, delivery terms',
              'Set payment terms and validity',
              'Send PO to supplier for confirmation',
            ]}
          />
          <StepCard
            title="5. Purchase Receipt"
            description="Record incoming goods from suppliers."
            bullets={[
              'Match receipt with purchase order',
              'Inspect and accept/reject items',
              'Update inventory with received stock',
              'Handle partial receipts and backorders',
            ]}
          />
          <StepCard
            title="6. Purchase Invoice"
            description="Record supplier bills for received goods."
            bullets={[
              'Create invoice from purchase receipt',
              'Verify against PO and receipt',
              'Process taxes and additional charges',
              'Schedule for payment to vendor',
            ]}
          />
          <StepCard
            title="7. Payment Entry"
            description="Make payments to suppliers for invoices."
            bullets={[
              'Record payments against purchase invoices',
              'Multiple payment methods available',
              'Handle partial and advance payments',
              'Maintain supplier account balance',
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
          <li>✓ Always create Material Requests before purchasing</li>
          <li>✓ Use RFQs to get competitive pricing from suppliers</li>
          <li>✓ Match Purchase Receipts to POs to ensure accuracy</li>
          <li>✓ Create Purchase Invoices only after receiving goods</li>
          <li>✓ Maintain good vendor relationships for better pricing</li>
          <li>✓ Use Inter-Company Invoice workflow for multi-company stock transfers</li>
          <li>✓ Never use standard Stock Entry for inter-company transfers</li>
        </ul>
      </Section>
    </div>
  )
}