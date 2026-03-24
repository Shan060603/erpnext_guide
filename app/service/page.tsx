import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function ServicePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Service Module</h1>
      
      <Section title="Overview">
        <p>
          The Service module handles after-sales support, maintenance contracts, and service ticketing.
          It helps track customer issues, schedule service visits, and manage service agreements.
        </p>
      </Section>
      
      <Section title="Workflow Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Service Ticket"
            description="Capture customer issues and requests."
            bullets={[
              'Create tickets from calls or emails',
              'Assign priority and category',
              'Track ticket status and resolution',
              'Maintain ticket history',
            ]}
          />
          <StepCard
            title="2. Maintenance Schedule"
            description="Plan preventive maintenance visits."
            bullets={[
              'Set up recurring maintenance schedules',
              'Link to service contracts',
              'Auto-create tickets for visits',
              'Track maintenance history',
            ]}
          />
          <StepCard
            title="3. Warranty Management"
            description="Track product warranties."
            bullets={[
              'Link warranties to sales invoices',
              'Auto-check warranty status',
              'Process warranty claims',
              'Generate warranty reports',
            ]}
          />
          <StepCard
            title="4. Service Invoice"
            description="Bill for services rendered."
            bullets={[
              'Create from completed tickets',
              'Apply service rates and charges',
              'Include spare parts used',
              'Track service revenue',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Respond to tickets promptly to maintain customer satisfaction</li>
          <li>✓ Set up preventive maintenance schedules for key customers</li>
          <li>✓ Track technician time for accurate billing</li>
          <li>✓ Use SLAs to meet service commitments</li>
        </ul>
      </Section>
    </div>
  )
}