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
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Always create Material Requests before purchasing</li>
          <li>✓ Use RFQs to get competitive pricing from suppliers</li>
          <li>✓ Match Purchase Receipts to POs to ensure accuracy</li>
          <li>✓ Create Purchase Invoices only after receiving goods</li>
          <li>✓ Maintain good vendor relationships for better pricing</li>
        </ul>
      </Section>
    </div>
  )
}