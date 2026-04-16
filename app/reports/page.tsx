import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function ReportsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Reports Module</h1>
      
      <Section title="Overview">
        <p>
          The Reports module provides comprehensive analytics and reporting capabilities across all ERPNext modules.
          Generate real-time insights, custom reports, and dashboards to make informed business decisions.
        </p>
      </Section>
      
      <Section title="Report Categories">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Sales Reports"
            description="Analyze sales performance and trends."
            bullets={[
              'Sales Analytics - revenue by customer, item',
              'Sales Pipeline - opportunity conversion rates',
              'Sales Order Summary - pending vs. completed',
              'Customer-wise sales analysis',
            ]}
          />
          <StepCard
            title="Purchase Reports"
            description="Track procurement metrics."
            bullets={[
              'Purchase Analytics - spend by supplier',
              'Supplier Performance - delivery and quality',
              'Purchase Order Status - pending receipts',
              'Item-wise purchase analysis',
            ]}
          />
          <StepCard
            title="Financial Reports"
            description="Review financial health."
            bullets={[
              'Profit and Loss Statement',
              'Balance Sheet',
              'Cash Flow Statement',
              'Trial Balance',
            ]}
          />
          <StepCard
            title="Inventory Reports"
            description="Monitor stock levels and movements."
            bullets={[
              'Stock Balance - current inventory levels',
              'Stock Ledger - transaction history',
              'Stock Aging - slow-moving items',
              'Warehouse-wise stock report',
            ]}
          />
          <StepCard
            title="HR Reports"
            description="Analyze workforce metrics."
            bullets={[
              'Attendance Summary',
              'Payroll Cost Analysis',
              'Employee Performance',
              'Leave Balance Report',
            ]}
          />
          <StepCard
            title="Support Reports"
            description="Track service performance and SLAs."
            bullets={[
              'First Response Time Analysis',
              'SLA Compliance Dashboard',
              'Technician Performance',
              'Issue Aging Report',
              'Maintenance Schedule Compliance',
            ]}
          />
          <StepCard
            title="Custom Reports"
            description="Build custom reports and dashboards."
            bullets={[
              'Report Builder tool',
              'Visual Report Builder',
              'Dashboard creation',
              'Scheduled report delivery',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Use filters to drill down into report data</li>
          <li>✓ Schedule automated report delivery via email</li>
          <li>✓ Create custom reports using Report Builder</li>
          <li>✓ Build dashboards for real-time business monitoring</li>
        </ul>
      </Section>
    </div>
  )
}