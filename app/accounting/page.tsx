import Flowchart from '@/components/Flowchart'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function AccountingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Accounting Module</h1>
      
      <Flowchart 
        src="/flowcharts/accounting.svg" 
        title="Accounting Workflow: Sales & Purchase Cycle"
      />
      
      <Section title="Overview">
        <p>
          The Accounting module is the financial backbone of ERPNext, handling all monetary transactions, 
          general ledger entries, and financial reporting. It integrates with Selling and Buying modules 
          to automatically create journal entries from invoices and payments, ensuring accurate financial records.
        </p>
      </Section>
      
      <Section title="Sales Cycle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            title="Sales Invoice"
            description="Bill customers for goods/services delivered."
            bullets={[
              'Create from delivery note or sales order',
              'Auto-post to accounts receivable',
              'Calculate taxes and discounts',
              'Set payment due date',
            ]}
          />
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
            title="Journal Entry"
            description="Adjust entries and accruals."
            bullets={[
              'Record depreciation',
              'Make accrual entries',
              'Process adjustments',
              'Transfer between accounts',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Purchase Cycle">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            title="Purchase Invoice"
            description="Record supplier bills for goods received."
            bullets={[
              'Create from purchase receipt',
              'Verify against purchase order',
              'Post to accounts payable',
              'Match with receiving reports',
            ]}
          />
          <StepCard
            title="Payment Entry"
            description="Make payments to suppliers."
            bullets={[
              'Process against purchase invoices',
              'Multiple payment methods',
              'Handle advance payments',
              'Maintain vendor accounts',
            ]}
          />
          <StepCard
            title="Journal Entry"
            description="General ledger adjustments."
            bullets={[
              'Record prepaid expenses',
              'Process fixed asset entries',
              'Make correcting entries',
              'Allocate costs',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Configure chart of accounts before processing transactions</li>
          <li>✓ Enable automatic invoice posting to simplify accounting</li>
          <li>✓ Regularly reconcile bank statements</li>
          <li>✓ Run trial balance to verify accounting accuracy</li>
          <li>✓ Generate financial reports monthly for review</li>
        </ul>
      </Section>
    </div>
  )
}