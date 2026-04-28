import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const sellingFlowchart = `flowchart TD
  %% ===========================
  %% Sales Module (ERPNext)
  %% ===========================

  %% ===========================
  %% CRM Flow
  %% ===========================
  A[Lead] --> B[Customer]
  B --> Q[Quotation]

  %% ===========================
  %% Sales Flow (Standard)
  %% ===========================
  Q --> R{Customer Approves?}
  R -->|No| QR[Revise Quotation]
  QR --> Q
  R -->|Yes| S[Sales Order]

  S --> T{Delivery Required?}
  T -->|No| W["Sales Invoice (Update Stock)"]
  T -->|Yes| U{Stock Available?}
  U -->|No| P[Trigger Purchase / Production]
  P --> U
  U -->|Yes| V[Delivery Note]

  V --> W
  W --> X{Payment Received?}
  X -->|No| Y[Accounts Receivable]
  X -->|Yes| Z[Payment Entry]

  Z --> AA[Update Accounting Records]`

const interCompanyFlowchart = `flowchart TD
  %% ===========================
  %% Inter-Company Transfer Flow
  %% ===========================
  A[HQ Company] --> B[Create Sales Invoice]
  B --> C{Update Stock = Yes}
  C -->|No| D[Enable Update Stock]
  D --> B
  C -->|Yes| E[Submit Sales Invoice]
  
  E --> F[Share Transaction with Branch]
  F --> G[Branch Creates Inter Company Purchase Invoice]
  G --> H[Draft Created in Branch]
  
  H --> I[Switch to Branch Company]
  I --> J[Open Draft Invoice]
  J --> K[Select Target Warehouse]
  K --> L[Submit Invoice]
  L --> M[Stock Transfer Complete]
  
  M --> N[Update Stock Ledger]
  M --> O[Update Accounting Records]
  
  style A fill:#e1f5fe
  style F fill:#fff3e0
  style G fill:#fff3e0
  style M fill:#c8e6c9
  style N fill:#fff9c4
  style O fill:#fff9c4`

const productBundleFlowchart = `flowchart TD
  %% ===========================
  %% Product Bundle Structure
  %% ===========================
  A[Parent Item] --> B{Is Stock Item?}
  B -->|No| C[Virtual Item]
  B -->|Yes| D[ERROR: Parent Cannot Be Stockable]
  
  C --> E[Set Selling Price]
  E --> F[Create Product Bundle]
  
  F --> G[Child Item 1]
  F --> H[Child Item 2]
  F --> I[Child Item 3]
  
  G --> J{Is Stock Item?}
  H --> K{Is Stock Item?}
  I --> L{Is Stock Item?}
  
  J -->|Yes| M[Track in Inventory]
  K -->|Yes| N[Track in Inventory]
  L -->|Yes| O[Track in Inventory]
  
  J -->|No| P[ERROR: Child Must Be Stockable]
  K -->|No| Q[ERROR: Child Must Be Stockable]
  L -->|No| R[ERROR: Child Must Be Stockable]
  
  M --> S[Use in Sales Order]
  N --> S
  O --> S
  
  S --> T[Pick Child Items from Stock]
  T --> U[Deliver Bundle to Customer]
  
  style A fill:#e1f5fe
  style C fill:#c8e6c9
  style D fill:#ffcdd2
  style P fill:#ffcdd2
  style Q fill:#ffcdd2
  style R fill:#ffcdd2
  style M fill:#fff9c4
  style N fill:#fff9c4
  style O fill:#fff9c4
  style U fill:#c8e6c9`

const sellingReturnsFlowchart = `flowchart TD
  %% ===========================
  %% Selling Returns & Refunds Flow
  %% ===========================
  A[Sales Invoice] --> B{Customer Satisfied?}
  B -->|No| C[Create Sales Return]
  C --> D[Receive Returned Goods]
  D --> E[Inspect Returned Items]
  E --> F{Items Accepted?}
  F -->|Yes| G[Create Credit Note]
  F -->|No| H[Reject Return - Inform Customer]
  G --> I[Update Inventory Levels]
  I --> J[Create Payment Refund]
  J --> K[Update Customer Account]
  K --> L[Refund Process Complete]
  
  style A fill:#e3f2fd
  style C fill:#fff3e0
  style G fill:#fff3e0
  style J fill:#fff3e0
  style L fill:#c8e6c9
  style H fill:#ffcdd2`

const customerWalletFlowchart = `flowchart TD
  %% ===========================
  %% Customer Wallet / Advance Payments Flow
  %% ===========================
  A[Customer Makes Advance Payment] --> B[Create Payment Entry - Receive]
  B --> C[Record Full Amount Swiped]
  C --> D[Add Deduction - Merchant Fee 4.5%]
  D --> E[Link to Bank Charges Account]
  E --> F[Unallocated Amount = Net Cash]
  F --> G[Customer Wallet Balance Updated]
  
  G --> H{Customer Makes Purchase?}
  H -->|Yes| I[Create Sales Invoice]
  I --> J[Click Get Advances Received]
  J --> K[Apply Wallet Balance]
  K --> L[Submit Invoice]
  L --> M[Wallet Balance Reduced]
  
  H -->|No| N[Balance Remains in Wallet]
  
  M --> O[Check Customer Dashboard]
  N --> O
  O --> P{Negative Total Unpaid?}
  P -->|Yes| Q[Customer Has Credit Available]
  P -->|No| R[Customer Owes Money]
  
  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style G fill:#fff3e0
  style J fill:#fff3e0
  style M fill:#c8e6c9
  style Q fill:#c8e6c9
  style R fill:#ffcdd2`

const partialPickupsFlowchart = `flowchart TD
  %% Partial Pickups & Backorders Workflow
  A[Customer Orders Solar Panels + Inverters] --> B[Create Sales Order - Master Order]
  B --> C[Customer Pays Upfront]
  C --> D{Stock Check}
  D -->|Partial Available| E[Customer Pickup #1]
  E --> F[Create Delivery Note from Sales Order]
  F --> G["**Manually set qty=0** for out-of-stock items"]
  G --> H[Submit - Status: Partially Delivered]
  B --> I["**Items To Be Delivered Report** - Track backorder"]
  H --> J[Customer Returns Later]
  J --> K[Sales Order &rarr; Create &rarr; Delivery Note]
  K --> L[Only undelivered items appear]
  L --> M[Customer Pickup #2 - Complete]
  M --> N[All items delivered - Status: To Invoice]
  N --> O[Create Sales Invoice]
  O --> P["**Get Advances Received** - Link all payments"]
  P --> Q[Complete - Fully Paid]
  
  style B fill:#f3e8ff
  style F fill:#fff3e0
  style G fill:#ffcdd2,stroke:#d32f2f
  style O fill:#e1f5fe
  style P fill:#e8f5e9
  style Q fill:#c8e6c9`


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
      
      <Section title="Product Bundle Creation">
        <p className="mb-4">
          Product Bundles allow you to sell multiple items together as a single package, perfect for promotional offers, 
          gift sets, or combo deals. The parent item acts as a virtual container and should NOT be stockable—only the 
          child items (components) are tracked in inventory.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 font-medium">💡 Key Concept: Parent Item is NOT Stockable</p>
          <p className="text-blue-700 text-sm mt-1">
            The parent item in a Product Bundle is a virtual item used only for pricing and sales. 
            It does not have stock levels—only the child items are tracked in inventory.
          </p>
        </div>
      </Section>
      
      <Mermaid chart={productBundleFlowchart} />
      
      <Section title="Creating a Product Bundle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Create Parent Item"
            description="Create the bundle item that will be sold to customers."
            bullets={[
              'Go to Item list and create new item',
              'Set Item Code and Item Name (e.g., "Promo Bundle A")',
              'Set Item Group (e.g., "Promotional Items")',
              '⚠️ Set "Is Stock Item" = No (CRITICAL)',
              'Set "Is Sales Item" = Yes',
              'Set an Income Account because the parent is a sales item',
              'Set selling price for the bundle',
            ]}
          />
          <StepCard
            title="2. Create Child Items"
            description="Create or use existing items that will be included in the bundle."
            bullets={[
              'Each component must be a stockable item',
              'Set "Is Stock Item" = Yes for each child',
              'If a child is sold, set an Income Account; if it is an expense item, set an Expense Account',
              'Ensure child items have stock levels',
              'Set individual selling prices if needed',
            ]}
          />
          <StepCard
            title="3. Create Product Bundle"
            description="Link the parent and child items together."
            bullets={[
              'Go to Product Bundle list',
              'Create new Product Bundle',
              'Select the parent item',
              'Add child items with quantities',
              'Save the bundle',
            ]}
          />
          <StepCard
            title="4. Use in Sales"
            description="Add the bundle to quotations and sales orders."
            bullets={[
              'Add parent item to Quotation or Sales Order',
              'System auto-expands to show child items',
              'Child items are picked from inventory',
              'Parent item price is used for billing',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Bundle Requirements">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Parent Item Settings"
            description="Critical settings for the bundle parent item."
            bullets={[
              'Is Stock Item = No (MUST be unchecked)',
              'Is Sales Item = Yes',
              'Income Account must be set for this sales item',
              'Has Variants = No',
              'Include Item in Manufacturing = No',
              'Set appropriate Item Group',
              'Set selling price for the bundle',
            ]}
          />
          <StepCard
            title="Child Item Settings"
            description="Settings for items included in the bundle."
            bullets={[
              'Is Stock Item = Yes (MUST be checked)',
              'Is Sales Item = Yes (optional)',
              'Set Income Account for sales items and Expense Account for expense items',
              'Maintain stock levels in warehouses',
              'Set default warehouse for picking',
              'Can have variants if needed',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Promotional Bundle Example">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Example: "Summer Sale Bundle"</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Parent Item (NOT Stockable):</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Item Code: BUNDLE-SUMMER-001</li>
                <li>• Name: Summer Sale Bundle</li>
                <li>• Is Stock Item: <span className="text-red-600 font-medium">No</span></li>
                <li>• Selling Price: $99.00</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Child Items (Stockable):</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 1x T-Shirt (SKU: TSHIRT-001) - <span className="text-green-600">In Stock</span></li>
                <li>• 1x Cap (SKU: CAP-001) - <span className="text-green-600">In Stock</span></li>
                <li>• 2x Sunglasses (SKU: SUNG-001) - <span className="text-green-600">In Stock</span></li>
              </ul>
            </div>
          </div>
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
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 font-medium">💡 Sharing Transactions Between Companies</p>
          <p className="text-blue-700 text-sm mt-1">
            After Company A creates a Sales/Purchase Invoice, they can share the transaction with Company B. 
            Company B can then create the Inter-Company Purchase Invoice for their own company, ensuring proper 
            accounting entries in both companies.
          </p>
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
      
      <Section title="The 4-Step Process">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            title="Step 2: Share Transaction with Branch"
            description="Share the submitted Sales Invoice with the branch company."
            bullets={[
              'Use the "Share" feature in the Sales Invoice',
              'Select the branch company to share with',
              'Branch receives notification of shared transaction',
              'Branch can view the transaction details',
            ]}
          />
          <StepCard
            title="Step 3: Branch Creates Inter-Company Purchase Invoice"
            description="Branch company creates the Inter-Company Purchase Invoice from the shared transaction."
            bullets={[
              'Branch opens the shared Sales Invoice',
              'Click "Create" → "Inter Company Purchase Invoice"',
              'System auto-creates draft in branch company',
              'Invoice links to original HQ invoice',
            ]}
          />
          <StepCard
            title="Step 4: Submit in Branch Company"
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
      
      <Section title="Returns & Refunds">
        <Mermaid chart={sellingReturnsFlowchart} />
        <p className="mb-4">
          Returns and refunds in the Selling module allow you to accept returned goods from customers and issue credit or refunds. 
          This process uses Sales Return and Credit Note documents to reverse the original sales transaction.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 font-medium">🔄 Return Process Flow</p>
          <p className="text-blue-700 text-sm mt-1">
            Sales Invoice → Sales Return → Credit Note → Payment Refund
          </p>
        </div>
      </Section>
      
      <Section title="Customer Wallet (Advance Payments)">
        <Mermaid chart={customerWalletFlowchart} />
        <p className="mb-4">
          The Customer Wallet feature allows you to manage advance payments and store credit for customers. 
          This is useful when customers pay upfront and use their balance over time for multiple purchases.
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <p className="text-green-800 font-medium">💡 Customer Wallet Overview</p>
          <p className="text-green-700 text-sm mt-1">
            When a customer pays a large amount upfront (e.g., ₱175,000), you can treat this as "Store Credit" 
            that they can spend down over time. The system tracks their balance and allows you to apply it to future invoices.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Recording the Deposit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StepCard
            title="Create Payment Entry"
            description="Record the advance payment received from the customer."
            bullets={[
              'Go to Payment Entry and create new entry',
              'Set Payment Type to "Receive"',
              'Select the customer account',
              'Set the Paid Amount to the full amount swiped (e.g., ₱175,000)',
            ]}
          />
          <StepCard
            title="Record Merchant Fee Deduction"
            description="Record the credit card processing fee as a deduction."
            bullets={[
              'Scroll to the "Deductions or Loss" table',
              'Add a new row for the 4.5% Merchant Fee',
              'Enter the fee amount (e.g., ₱7,875 for ₱175,000)',
              'Link to "Bank Charges" expense account',
            ]}
          />
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-800 font-medium">⚠️ Important: Net Cash Received</p>
          <p className="text-yellow-700 text-sm mt-1">
            After recording the 4.5% merchant fee deduction, the resulting "Unallocated Amount" in the bank 
            will be the net cash received (e.g., ₱167,125 for a ₱175,000 payment). This ensures your bank 
            reconciliation matches the actual deposit amount.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Spending the Credit</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StepCard
            title="Create Sales Invoice"
            description="Generate an invoice when the customer picks up materials."
            bullets={[
              'Create a new Sales Invoice for the customer',
              'Add the items being purchased',
              'Save and submit the invoice',
              'Navigate to the "Advances" section',
            ]}
          />
          <StepCard
            title="Apply Wallet Balance"
            description="Use the customer's advance payment to settle the invoice."
            bullets={[
              'Click "Get Advances Received" button',
              'Select the advance payment from the list',
              'The system will auto-apply the available balance',
              'Submit the invoice to complete the transaction',
            ]}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 3: Checking the Balance</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">Reading the Customer Dashboard</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Understanding Balances:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <span className="text-red-600 font-medium">Negative "Total Unpaid"</span> = Customer has credit remaining</li>
                <li>• Example: -₱95,000 means ₱95,000 credit available</li>
                <li>• <span className="text-green-600 font-medium">Positive "Total Unpaid"</span> = Customer owes money</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Where to Check:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Go to Customer Dashboard</li>
                <li>• View "Billing and Currency" section</li>
                <li>• Check "Total Unpaid" field</li>
                <li>• Negative value = Available credit</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Mermaid chart={partialPickupsFlowchart} />
      
      <Section title="Specialized Workflow: Partial Pickups & Backorders">
        <p className="mb-6 text-lg">
          <strong>Scenario:</strong> High-value retail/installation business (Solar Panels, Inverters). Customer orders multiple items, pays upfront, 
          but some items out of stock. They pickup available items today, return later for backordered items.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded">
          <h3 className="text-xl font-bold text-blue-800 mb-3">📌 Icon Key (UI Legend)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div><span className="text-2xl">💰</span> <strong>Payment Entry</strong> (Money)</div>
            <div><span className="text-2xl">📦</span> <strong>Delivery Note</strong> (Stock)</div>
            <div><span className="text-2xl">📄</span> <strong>Sales Invoice</strong> (Accounting)</div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 mt-12">Step 1: The Master Order (**Sales Order**)</h3>
        <p className="mb-6 text-lg">
          The <strong>Sales Order</strong> is the <em>Source of Truth</em>—lists everything promised to customer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StepCard
            title="Create Sales Order"
            description="Customer approves quotation → Sales Order."
            bullets={[
              'All items listed with full quantities',
              'Customer pays **downpayment** via **Payment Entry** 💰',
              'Status: **To Deliver**',
              '"**Items To Be Delivered**" report shows backorders',
            ]}
          />
        </div>

        <h3 className="text-2xl font-bold mb-6 mt-12">Step 2: Partial Pickup (**Delivery Note**) 📦</h3>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-lg">
          <p className="text-yellow-800 font-bold text-lg mb-2">🚨 CRITICAL INSTRUCTION</p>
          <p className="text-yellow-700">
            From <strong>Sales Order</strong> click <strong>Create</strong> → <strong>Delivery Note</strong>. 
            <strong>MANUALLY change Items table quantities to 0 for out-of-stock items today.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StepCard
            title="Partial Delivery Note"
            description="Customer takes available stock only."
            bullets={[
              'Copy from Sales Order (only ordered qty appears)',
              '**Edit qty manually** (e.g., Solar Panels=5/10, Inverters=0)',
              'Submit → Sales Order status = "**Partially Delivered**"',
              'Stock deducted only for picked items',
            ]}
          />
          <StepCard
            title="Customer Returns Later"
            description="Backorder handling."
            bullets={[
              'Go to original **Sales Order**',
'&rarr; <strong>Create</strong> &rarr; <strong>Delivery Note</strong> (only remaining items)',
              'Repeat process until "**To Invoice**"',
            ]}
          />
        </div>

        <h3 className="text-2xl font-bold mb-6 mt-12">Step 3: Financial Settlement 📄 💰</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StepCard
            title="Multiple Payment Entries"
            description="Record payments on different dates."
            bullets={[
              'Downpayment today 💰',
              'Balance on pickup #2 💰',
              'Any date works—no invoice needed yet',
            ]}
          />
          <StepCard
            title="Single Sales Invoice"
            description="Final billing after all deliveries."
            bullets={[
'From Sales Order: <strong>Create</strong> &rarr; <strong>Sales Invoice</strong> 📄',
              'Click **Get Advances Received**',
              'Links ALL prior **Payment Entries** automatically',
              '**UNCHECK Update Stock** (already handled by DNs)',
            ]}
          />
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-3">💡 Visual & UI Tips</h3>
          <div className="space-y-3 text-green-700">
            <p><strong>Troubleshooting:</strong> "No remaining items?" &rarr; Original <strong>Sales Order</strong> &rarr; <strong>Create</strong> &rarr; <strong>Delivery Note</strong>. ERPNext auto-filters undelivered items.</p>
            <p><strong>Pro-Tip:</strong> Always check **Sales Order Items To Be Delivered** report—what you still owe customers.</p>
          </div>
        </div>

        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 mb-8 rounded-lg">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">✅ Why This Workflow Works</h3>
          <ul className="text-indigo-700 space-y-2 list-disc list-inside">
            <li><strong>Prevents Over-Invoicing:</strong> Delivery Notes control stock; Sales Invoices control money.</li>
            <li><strong>Handles Backorders:</strong> No deleting from original order—track via status/reports.</li>
            <li><strong>Multi-Payment Friendly:</strong> Record payments any date; "**Get Advances**" consolidates at invoicing.</li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-red-800 mb-4">🛑 Solareco Staff: Common Mistakes Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <ul className="space-y-2">
              <li><label className="flex items-center"><input type="checkbox" className="mr-2" /> **Double-Deduction Error**: Delivery Note exists? **UNCHECK Update Stock** on Invoice.</label></li>
              <li><label className="flex items-center"><input type="checkbox" className="mr-2" /> **Ghost Item Error**: **Edit quantities** on partials (5/10 → qty=5).</label></li>
              <li><label className="flex items-center"><input type="checkbox" className="mr-2" /> **Floating Money Error**: Customer wallet? Click **Get Advances Received** on Invoice.</label></li>
            </ul>
            <ul className="space-y-2">
              <li><label className="flex items-center"><input type="checkbox" className="mr-2" /> **Wrong Date Error**: Posting Date = sale date (March sales in March).</label></li>
              <li><label className="flex items-center"><input type="checkbox" className="mr-2" /> **Missing Warehouse Error**: Verify **Warehouse** column filled.</label></li>
            </ul>
          </div>
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
        <li>✓ Use Sales Return and Credit Note for customer returns/refunds</li>
          <li>✓ Use **Partially Delivered** Sales Orders + manual qty edits for backorders</li>
          <li>✓ **Get Advances Received** consolidates multi-date payments on final Invoice</li>
          <li>✓ Always verify **Items To Be Delivered** report before claiming order complete</li>
        </ul>

      </Section>
    </div>
  )
}
