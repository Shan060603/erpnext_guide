import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const payablesFlowchart = `flowchart TD
  A[Purchase Invoice] --> B[Supplier]
  B --> C[Payment Entry]
  C --> D[Journal Entry]
  D --> E[Payment Reconciliation]
  E --> F[Accounts Payable Report]`

const receivablesFlowchart = `flowchart TD
  A[Sales Invoice] --> B[Customer]
  B --> C[Payment Entry]
  C --> D[Payment Request]
  D --> E[Payment Reconciliation]
  E --> F[Payment Gateway Account]
  B --> G[Dunning]
  G --> H[Dunning Type]`

const financialReportsFlowchart = `flowchart TD
  A[General Ledger] --> B[Trial Balance]
  B --> C[Profit and Loss Statement]
  B --> D[Balance Sheet]
  B --> E[Cash Flow]
  B --> F[Consolidated Financial Statement]
  C --> G[Gross Profit]
  C --> H[Profitability Analysis]
  A --> I[Sales Invoice Trends]
  A --> J[Purchase Invoice Trends]`


const ledgersFlowchart = `flowchart TD
  A[General Ledger] --> B[Customer Ledger Summary]
  A --> C[Supplier Ledger Summary]`

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

export default function AccountingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Accounting Module</h1>
      
      <Section title="Overview">
        <p>
          The Accounting module is the financial backbone of ERPNext, handling all monetary transactions, 
          general ledger entries, and financial reporting. It integrates with Selling and Buying modules 
          to automatically create journal entries from invoices and payments, ensuring accurate financial records.
        </p>
      </Section>
      
      <Section title="Payables">
        <p className="mb-4">
          The Payables section manages all supplier-related financial transactions, from invoice creation to payment processing.
        </p>
        <Mermaid chart={payablesFlowchart} />
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reports & Masters</h3>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Invoicing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StepCard
            title="Purchase Invoice"
            description="Record supplier bills for goods or services received."
            bullets={[
              'Create from purchase receipt or directly',
              'Verify against purchase order',
              'Post to accounts payable',
              'Match with receiving reports',
              'Process taxes and additional charges',
            ]}
          />
          <StepCard
            title="Supplier"
            description="Manage supplier master data and payment terms."
            bullets={[
              'Create supplier records',
              'Set payment terms and credit limits',
              'Configure default accounts',
              'Track supplier balances',
            ]}
          />
        </div>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Payments</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StepCard
            title="Payment Entry"
            description="Process payments to suppliers."
            bullets={[
              'Pay against purchase invoices',
              'Multiple payment methods',
              'Handle advance payments',
              'Maintain vendor accounts',
            ]}
          />
          <StepCard
            title="Journal Entry"
            description="Record manual accounting adjustments."
            bullets={[
              'Record prepaid expenses',
              'Process fixed asset entries',
              'Make correcting entries',
              'Allocate costs',
            ]}
          />
          <StepCard
            title="Payment Reconciliation"
            description="Match payments with invoices."
            bullets={[
              'Reconcile bank statements',
              'Match payments to invoices',
              'Handle discrepancies',
              'Auto-reconcile where possible',
            ]}
          />
        </div>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Reports</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepCard
            title="Accounts Payable"
            description="Detailed aging report of outstanding supplier payments."
            bullets={[
              'View by supplier',
              'Aging buckets (30, 60, 90 days)',
              'Export to Excel',
            ]}
          />
          <StepCard
            title="Accounts Payable Summary"
            description="Summary of payables by supplier."
            bullets={[
              'Total outstanding per supplier',
              'Quick overview of payables',
              'Filter by date range',
            ]}
          />
          <StepCard
            title="Purchase Register"
            description="Register of all purchase transactions."
            bullets={[
              'List all purchase invoices',
              'Filter by supplier/date',
              'Export for audit',
            ]}
          />
          <StepCard
            title="Item-wise Purchase Register"
            description="Purchase transactions by item."
            bullets={[
              'Track purchases by item',
              'Analyze item costs',
              'Supplier comparison',
            ]}
          />
          <StepCard
            title="Purchase Order Analysis"
            description="Analyze purchase order status."
            bullets={[
              'Track pending orders',
              'Monitor delivery status',
              'Identify delays',
            ]}
          />
          <StepCard
            title="Received Items To Be Billed"
            description="Items received but not yet invoiced."
            bullets={[
              'Track unbilled receipts',
              'Follow up with suppliers',
              'Ensure proper billing',
            ]}
          />
          <StepCard
            title="Supplier Ledger Summary"
            description="Summary of supplier account activity."
            bullets={[
              'View transactions per supplier',
              'Opening/closing balances',
              'Debit/credit summary',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Receivables">
        <p className="mb-4">
          The Receivables section manages all customer-related financial transactions, from invoice creation to payment collection.
        </p>
        <Mermaid chart={receivablesFlowchart} />
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reports & Masters</h3>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Invoicing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StepCard
            title="Sales Invoice"
            description="Bill customers for goods or services delivered."
            bullets={[
              'Create from delivery note or sales order',
              'Auto-post to accounts receivable',
              'Calculate taxes and discounts',
              'Set payment due date',
              'Generate invoice PDF',
            ]}
          />
          <StepCard
            title="Customer"
            description="Manage customer master data and credit terms."
            bullets={[
              'Create customer records',
              'Set credit limits and payment terms',
              'Configure default accounts',
              'Track customer balances',
            ]}
          />
        </div>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Payments</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StepCard
            title="Payment Entry"
            description="Record customer payments received."
            bullets={[
              'Link to sales invoice',
              'Process multiple payment modes',
              'Handle partial payments',
              'Reconcile bank entries',
            ]}
          />
          <StepCard
            title="Payment Request"
            description="Send payment requests to customers."
            bullets={[
              'Generate payment links',
              'Send via email',
              'Track payment status',
              'Integrate with payment gateways',
            ]}
          />
          <StepCard
            title="Payment Reconciliation"
            description="Match payments with invoices."
            bullets={[
              'Reconcile bank statements',
              'Match payments to invoices',
              'Handle discrepancies',
              'Auto-reconcile where possible',
            ]}
          />
          <StepCard
            title="Payment Gateway Account"
            description="Configure online payment gateways."
            bullets={[
              'Setup payment gateways',
              'Process online payments',
              'Auto-reconcile transactions',
              'Track payment success rates',
            ]}
          />
        </div>
        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Dunning</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <StepCard
            title="Dunning"
            description="Send payment reminders to customers."
            bullets={[
              'Create dunning letters',
              'Set escalation levels',
              'Track reminder history',
              'Auto-generate based on aging',
            ]}
          />
          <StepCard
            title="Dunning Type"
            description="Configure dunning letter templates."
            bullets={[
              'Define dunning levels',
              'Set reminder frequency',
              'Configure letter templates',
              'Set escalation rules',
            ]}
          />
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6 rounded-lg">
          <p className="text-blue-800 font-medium text-lg mb-2">🔗 Cross-reference: Partial Pickups Workflow</p>
          <p className="text-blue-700">
            See detailed <strong>Selling Module</strong> guide for handling backorders, partial deliveries, and multi-date 
            advance payments with "**Get Advances Received**" on Sales Invoices. Perfect for high-value retail/installation.
          </p>
        </div>

        
        <h4 className="text-lg font-medium text-gray-700 mb-3">Reports</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepCard
            title="Accounts Receivable"
            description="Detailed aging report of outstanding customer payments."
            bullets={[
              'View by customer',
              'Aging buckets (30, 60, 90 days)',
              'Export to Excel',
            ]}
          />
          <StepCard
            title="Accounts Receivable Summary"
            description="Summary of receivables by customer."
            bullets={[
              'Total outstanding per customer',
              'Quick overview of receivables',
              'Filter by date range',
            ]}
          />
          <StepCard
            title="Sales Register"
            description="Register of all sales transactions."
            bullets={[
              'List all sales invoices',
              'Filter by customer/date',
              'Export for audit',
            ]}
          />
          <StepCard
            title="Item-wise Sales Register"
            description="Sales transactions by item."
            bullets={[
              'Track sales by item',
              'Analyze item revenue',
              'Customer comparison',
            ]}
          />
          <StepCard
            title="Sales Order Analysis"
            description="Analyze sales order status."
            bullets={[
              'Track pending orders',
              'Monitor delivery status',
              'Identify bottlenecks',
            ]}
          />
          <StepCard
            title="Delivered Items To Be Billed"
            description="Items delivered but not yet invoiced."
            bullets={[
              'Track unbilled deliveries',
              'Follow up with customers',
              'Ensure proper billing',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Financial Reports">
        <p className="mb-4">
          Financial reports provide insights into the company's financial health and performance.
        </p>
        <Mermaid chart={financialReportsFlowchart} />
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ledgers</h3>
        <Mermaid chart={ledgersFlowchart} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StepCard
            title="General Ledger"
            description="Complete record of all accounting transactions."
            bullets={[
              'View all journal entries',
              'Filter by account/date',
              'Export to Excel',
              'Audit trail of transactions',
            ]}
          />
          <StepCard
            title="Customer Ledger Summary"
            description="Summary of customer account activity."
            bullets={[
              'View transactions per customer',
              'Opening/closing balances',
              'Debit/credit summary',
            ]}
          />
          <StepCard
            title="Supplier Ledger Summary"
            description="Summary of supplier account activity."
            bullets={[
              'View transactions per supplier',
              'Opening/closing balances',
              'Debit/credit summary',
            ]}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Statements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <StepCard
            title="Trial Balance"
            description="Verify debit and credit balances."
            bullets={[
              'List all account balances',
              'Verify debits equal credits',
              'Identify discrepancies',
              'Monthly/quarterly/yearly',
            ]}
          />
          <StepCard
            title="Profit and Loss Statement"
            description="Income and expense summary."
            bullets={[
              'Revenue and expenses',
              'Gross and net profit',
              'Period comparison',
              'Budget vs actual',
            ]}
          />
          <StepCard
            title="Balance Sheet"
            description="Assets, liabilities, and equity."
            bullets={[
              'Current assets/liabilities',
              'Fixed assets',
              'Owner equity',
              'Financial position',
            ]}
          />
          <StepCard
            title="Cash Flow"
            description="Cash inflows and outflows."
            bullets={[
              'Operating activities',
              'Investing activities',
              'Financing activities',
              'Net cash flow',
            ]}
          />
          <StepCard
            title="Consolidated Financial Statement"
            description="Combined financial statements for multiple companies."
            bullets={[
              'Merge subsidiary reports',
              'Eliminate inter-company transactions',
              'Group-level reporting',
            ]}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Profitability</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StepCard
            title="Gross Profit"
            description="Profit after cost of goods sold."
            bullets={[
              'Revenue minus COGS',
              'By item/customer/group',
              'Margin analysis',
            ]}
          />
          <StepCard
            title="Profitability Analysis"
            description="Detailed profitability breakdown."
            bullets={[
              'By product line',
              'By customer segment',
              'By territory',
            ]}
          />
          <StepCard
            title="Sales Invoice Trends"
            description="Track sales invoice patterns."
            bullets={[
              'Monthly trends',
              'Year-over-year comparison',
              'Identify seasonality',
            ]}
          />
          <StepCard
            title="Purchase Invoice Trends"
            description="Track purchase invoice patterns."
            bullets={[
              'Monthly trends',
              'Year-over-year comparison',
              'Cost analysis',
            ]}
          />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Reports</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepCard
            title="Trial Balance for Party"
            description="Trial balance for specific customers/suppliers."
            bullets={[
              'Customer-specific balances',
              'Supplier-specific balances',
              'Party-wise analysis',
            ]}
          />
          <StepCard
            title="Payment Period Based On Invoice Date"
            description="Analyze payment delays."
            bullets={[
              'Average payment period',
              'Late payment analysis',
              'Customer payment behavior',
            ]}
          />
          <StepCard
            title="Sales Partners Commission"
            description="Track sales partner commissions."
            bullets={[
              'Commission calculations',
              'Partner performance',
              'Payout tracking',
            ]}
          />
          <StepCard
            title="Customer Credit Balance"
            description="Monitor customer credit limits."
            bullets={[
              'Credit limit utilization',
              'Overdue accounts',
              'Risk assessment',
            ]}
          />
          <StepCard
            title="Sales Payment Summary"
            description="Summary of sales payments received."
            bullets={[
              'Payment collection rates',
              'Outstanding amounts',
              'Cash flow analysis',
            ]}
          />
          <StepCard
            title="Address And Contacts"
            description="Manage customer/supplier addresses."
            bullets={[
              'Contact information',
              'Billing/shipping addresses',
              'Communication history',
            ]}
          />
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
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Configure chart of accounts before processing transactions</li>
          <li>✓ Enable automatic invoice posting to simplify accounting</li>
          <li>✓ Regularly reconcile bank statements</li>
          <li>✓ Run trial balance to verify accounting accuracy</li>
          <li>✓ Generate financial reports monthly for review</li>
          <li>✓ Monitor accounts receivable aging to improve cash flow</li>
          <li>✓ Use dunning to follow up on overdue payments</li>
          <li>✓ Track profitability by product, customer, and territory</li>
        </ul>
      </Section>
    </div>
  )
}
