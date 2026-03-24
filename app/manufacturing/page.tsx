import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function ManufacturingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Manufacturing Module</h1>
      
      <Section title="Overview">
        <p>
          The Manufacturing module manages production processes, from planning to finished goods.
          It handles bills of materials, work orders, job cards, and production planning to optimize manufacturing operations.
        </p>
      </Section>
      
      <Section title="Workflow Steps">
        <div className="grid grid-cols-1 md:col-span-2 gap-6">
          <StepCard
            title="1. Bill of Materials (BOM)"
            description="Define product recipes and specifications."
            bullets={[
              'Create BOM with raw materials and quantities',
              'Set up multiple BOMs for same product',
              'Define operations and workstations',
              'Configure scrap percentages',
            ]}
          />
          <StepCard
            title="2. Production Plan"
            description="Plan manufacturing based on sales orders."
            bullets={[
              'Generate plan from sales forecasts',
              'Material requirements calculation',
              'Allocate production to work orders',
              'Track plan vs. actual production',
            ]}
          />
          <StepCard
            title="3. Work Order"
            description="Authorization to manufacture products."
            bullets={[
              'Create from sales order or production plan',
              'Reserve materials from inventory',
              'Define operations and timelines',
              'Track production progress',
            ]}
          />
          <StepCard
            title="4. Job Card"
            description="Track individual operation completion."
            bullets={[
              'Create job cards for each operation',
              'Log time and material consumption',
              'Record labor and machine time',
              'Complete and transfer to next stage',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Create accurate BOMs for correct material planning</li>
          <li>✓ Use production planning to balance supply and demand</li>
          <li>✓ Track job cards for accurate cost calculation</li>
          <li>✓ Implement quality checks at key production stages</li>
        </ul>
      </Section>
    </div>
  )
}