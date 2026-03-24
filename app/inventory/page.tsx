import Flowchart from '@/components/Flowchart'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function InventoryPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Inventory Module</h1>
      
      <Flowchart 
        src="/flowcharts/inventory.svg" 
        title="Inventory Workflow: Stock Management"
      />
      
      <Section title="Overview">
        <p>
          The Inventory module manages stock levels, warehouses, and material movements across your organization.
          It provides real-time visibility into inventory, tracks stock valuations, and ensures optimal stock levels
          to meet customer demand while minimizing carrying costs.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Purchase Receipt"
            description="Record incoming stock from suppliers."
            bullets={[
              'Create from linked purchase order',
              'Verify received quantities and quality',
              'Update bin location and batch details',
              'Trigger stock valuation updates',
            ]}
          />
          <StepCard
            title="2. Warehouse"
            description="Manage storage locations for inventory."
            bullets={[
              'Set up warehouses for each location',
              'Define default storage zones',
              'Configure picking and putaway rules',
              'Track warehouse-wise stock levels',
            ]}
          />
          <StepCard
            title="3. Delivery Note"
            description="Record outgoing stock to customers."
            bullets={[
              'Create from sales order fulfillment',
              'Scan items during packing process',
              'Update stock reservations',
              'Generate packing slips and labels',
            ]}
          />
          <StepCard
            title="4. Stock Movement"
            description="Track internal transfers of inventory."
            bullets={[
              'Record transfers between warehouses',
              'Track manufacturing job card outputs',
              'Log scrap and waste movements',
              'Maintain complete audit trail',
            ]}
          />
          <StepCard
            title="5. Landed Cost"
            description="Allocate additional costs to inventory."
            bullets={[]}
          />
          <StepCard
            title="6. Journal Entry"
            description="Make accounting adjustments for inventory."
            bullets={[]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Set up proper warehouse structure for efficient operations</li>
          <li>✓ Use barcode scanning for accurate stock tracking</li>
          <li>✓ Run regular cycle counts to ensure inventory accuracy</li>
          <li>✓ Set reorder levels to trigger automatic purchase requests</li>
          <li>✓ Use batch and serial number tracking for traceability</li>
        </ul>
      </Section>
    </div>
  )
}