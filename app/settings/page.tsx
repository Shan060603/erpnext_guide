import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Settings Module</h1>
      
      <Section title="Overview">
        <p>
          The Settings module allows system administrators to configure and customize ERPNext to meet business requirements.
          Control user access, customize workflows, and manage system-wide preferences.
        </p>
      </Section>
      
      <Section title="Configuration Areas">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Company Setup"
            description="Configure organizational details."
            bullets={[
              'Create and manage companies',
              'Set fiscal year and periods',
              'Configure default currency',
              'Define company address',
            ]}
          />
          <StepCard
            title="User Management"
            description="Control access and permissions."
            bullets={[
              'Create and manage users',
              'Assign roles and permissions',
              'Configure user types',
              'Set password policies',
            ]}
          />
          <StepCard
            title="Workflow Settings"
            description="Customize approval processes."
            bullets={[
              'Create workflow states',
              'Define approval rules',
              'Set notification triggers',
              'Automate document routing',
            ]}
          />
          <StepCard
            title="System Settings"
            description="Configure system behavior."
            bullets={[
              'Set session timeout',
              'Configure email settings',
              'Enable data import tools',
              'Set up printing formats',
            ]}
          />
          <StepCard
            title="Module Settings"
            description="Configure individual modules."
            bullets={[
              'Inventory settings - valuation methods',
              'Accounting settings - cost centers',
              'HR settings - attendance rules',
              'CRM settings - pipeline stages',
            ]}
          />
          <StepCard
            title="Data Management"
            description="Handle system data."
            bullets={[
              'Export/import data',
              'Backup and restore',
              'Data retention policies',
              'System health check',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Set up proper user roles before adding users</li>
          <li>✓ Configure company details for accurate reporting</li>
          <li>✓ Use workflows to automate approval processes</li>
          <li>✓ Regularly review and update permissions</li>
        </ul>
      </Section>
    </div>
  )
}