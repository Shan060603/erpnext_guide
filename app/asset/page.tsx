import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function AssetPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Asset Management Module</h1>
      
      <Section title="Overview">
        <p>
          The Asset Management module tracks and manages company assets throughout their lifecycle.
          It handles asset acquisition, depreciation, maintenance, and disposal while maintaining accurate asset valuations.
        </p>
      </Section>
      
      <Section title="Workflow Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Asset Acquisition"
            description="Record new asset purchases."
            bullets={[
              'Create asset from purchase receipt',
              'Define asset category and location',
              'Set acquisition date and cost',
              'Configure depreciation method',
            ]}
          />
          <StepCard
            title="2. Asset Maintenance"
            description="Schedule and track maintenance activities."
            bullets={[
              'Create maintenance schedules',
              'Log maintenance tickets',
              'Track maintenance costs',
              'Record equipment history',
            ]}
          />
          <StepCard
            title="3. Asset Transfer"
            description="Move assets between locations."
            bullets={[
              'Transfer asset to new location',
              'Assign to employee or department',
              'Track asset movements',
              'Maintain location history',
            ]}
          />
          <StepCard
            title="4. Asset Disposal"
            description="Dispose of fully depreciated assets."
            bullets={[
              'Create disposal request',
              'Calculate gain/loss on disposal',
              'Post disposal journal entry',
              'Update asset status',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Set up proper asset categories with depreciation rules</li>
          <li>✓ Track all assets with barcode or serial numbers</li>
          <li>✓ Schedule preventive maintenance to extend asset life</li>
          <li>✓ Regularly reconcile physical assets with system records</li>
        </ul>
      </Section>
    </div>
  )
}