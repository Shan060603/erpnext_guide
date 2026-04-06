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
      
      <Section title="Data Import Tutorial">
        <p className="mb-6">
          ERPNext Data Import tool lets you bulk upload Customers, Items, Suppliers from CSV/Excel. Perfect for migrating data or importing large lists.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-800 font-medium">💡 Pro Tip: Always download Template first!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StepCard
            title="1. Download Template"
            description="Get exact CSV format with required fields."
            bullets={[
              'Go to **Data Import** list',
              'Click **New** > Select **Document Type** (Customer/Item)',
              'Click **Download Template**',
              'Open CSV - columns match ERPNext exactly',
            ]}
          />
          <StepCard
            title="2. Prepare Your Data"
            description="Fill template with your data."
            bullets={[
              '**Exact column names** - no changes!',
              'Required fields marked with *',
              'Dates: YYYY-MM-DD format',
              'Phone/email optional but recommended',
            ]}
          />
          <StepCard
            title="3. Import Data"
            description="Upload and map fields."
bullets={[
              '**New Data Import** > **Document Type** > Upload CSV',
              '**Match fields** (should auto-match if using template)',
              '**Validate** - fixes most errors',
              '**Insert** when green ✅',
            ]}
          />
          <StepCard
            title="4. Verify Import"
            description="Check your data landed correctly."
            bullets={[
              'Go to **Customer List** or **Item List**',
              'Filter by **Creation Date**',
              'Check key fields populated',
              'Run **Data Import Log** report for errors',
            ]}
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
          <h4 className="font-bold text-yellow-800 mb-2">🚨 Common Import Errors & Fixes</h4>
          <ul className="text-yellow-700 space-y-1">
            <li>• <strong>Mandatory field missing</strong> → Fill required columns from template</li>
            <li>• <strong>Duplicate Name</strong> → Add unique **Naming Series** or change names</li>
            <li>• <strong>Invalid date format</strong> → Use YYYY-MM-DD everywhere</li>
            <li>• <strong>Invalid email/phone</strong> → Fix format or leave blank</li>
            <li>• <strong>"Parent missing"</strong> → Create parent Item/Customer first</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <p className="text-green-800 font-medium">✅ What Gets Created</p>
          <p className="text-green-700 text-sm">
            Customer → New Customer record + Chart of Accounts auto-created
            <br />
            Item → New Item + default warehouse/valuation setup
          </p>
        </div>

<div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2">📋 Quick CSV Template Example (Customer)</h4>
          <div className="bg-white border rounded p-4 text-xs overflow-x-auto">
            <code>customer_name,customer_type,email,mobile_no,territory
Solareco Corp,Company,info@solareco.ph,09171234567,Main
J. Doe,Individual,jdoe@email.com,09991234567,Manila
            </code>
          </div>
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Set up proper user roles before adding users</li>
          <li>✓ Configure company details for accurate reporting</li>
          <li>✓ Use workflows to automate approval processes</li>
          <li>✓ Regularly review and update permissions</li>
          <li>✓ Always use official **Import Template** - saves hours!</li>
          <li>✓ **Validate** before Insert to catch errors</li>
</ul>
      </Section>
    </div>
  )
}