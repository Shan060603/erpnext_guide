import Section from '@/components/Section'
import StepCard from '@/components/StepCard'
import Mermaid from '@/components/Mermaid'

const phasedRolloutChart = `flowchart TD
  A["Phase 0: Planning<br/>2-4 weeks"] --> B["Phase 1: org & Masters<br/>4-6 weeks"]
  B --> C["Phase 2: HR & Payroll<br/>4-6 weeks"]
  C --> D["Phase 3: Finance & Accounting<br/>6-8 weeks"]
  D --> E["Phase 4: Sales & Inventory<br/>6-8 weeks"]
  E --> F["Phase 5: Projects/Mfg/Service<br/>4-6 weeks"]
  F --> G["Phase 6: Go-Live & Support<br/>2-4 weeks"]
  G --> H["Steady State<br/>Ongoing"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#e8f5e9
  style D fill:#fff3e0
  style E fill:#fff3e0
  style F fill:#f3e5f5
  style G fill:#c8e6c9
  style H fill:#e0e0e0`

const boxClass =
  'print-block bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6'

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-gray-900 mb-3">{children}</h3>
}

function MiniHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="text-lg font-semibold text-gray-800 mb-2">{children}</h4>
}

function Callout({
  title,
  children,
  tone = 'blue',
}: {
  title: string
  children: React.ReactNode
  tone?: 'blue' | 'amber' | 'green'
}) {
  const styles = {
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    green: 'bg-green-50 border-green-200',
  }

  return (
    <div className={`print-block border rounded-xl p-4 mb-4 ${styles[tone]}`}>
      <p className="font-semibold text-gray-900 mb-1">{title}</p>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

export default function ImplementationStrategyPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Implementation Strategy & Go-Live Plan
      </h1>

      <Callout title="Strategic Overview" tone="blue">
        Successful ERP implementation requires careful sequencing. Incorrect order
        leads to failures. This guide provides a proven phased approach based on
        module dependencies and business readiness.
      </Callout>

      <Section title="1. Implementation Timeline">
        <Mermaid chart={phasedRolloutChart} />

        <div className={boxClass}>
          <p className="text-gray-700">
            <strong>Total Timeline:</strong> 4-6 months for complete implementation
          </p>
          <p className="text-gray-700 text-sm mt-2">
            (May vary based on company size, complexity, and data volume)
          </p>
        </div>
      </Section>

      <Section title="2. Pre-Implementation: Planning Phase (Weeks 1-4)">
        <div className={boxClass}>
          <SubHeading>Goals</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand business requirements</li>
            <li>Assemble implementation team</li>
            <li>Document current processes</li>
            <li>Plan data migration</li>
            <li>Secure executive sponsorship</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Stakeholder Analysis"
            description="Identify key business users and decision-makers."
            bullets={[
              'Finance team members',
              'HR managers',
              'Sales/Operations leads',
              'Inventory/Warehouse staff',
              'IT support team',
            ]}
          />
          <StepCard
            title="Requirement Gathering"
            description="Document current workflows and gaps."
            bullets={[
              'Current system landscape',
              'Key reports and metrics needed',
              'Integration requirements',
              'Customization needs',
              'Compliance requirements (tax, audit)',
            ]}
          />
          <StepCard
            title="Data Audit"
            description="Assess quality of data to migrate."
            bullets={[
              'Customer master data cleanup',
              'Supplier database validation',
              'Item/SKU consolidation',
              'Historical transaction assessment',
              'Employee data verification',
            ]}
          />
          <StepCard
            title="Team & Resources"
            description="Allocate project team."
            bullets={[
              'Project Manager (full-time)',
              'Business Process Owners (50-75%)',
              'Technical Administrator (full-time)',
              'Finance lead (part-time)',
              'HR lead (part-time)',
            ]}
          />
        </div>

        <div className={boxClass}>
          <SubHeading>Deliverables by End of Phase 0</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Project Charter approved by executive sponsor</li>
            <li>Detailed project plan with milestones</li>
            <li>Business requirements document</li>
            <li>Data migration plan</li>
            <li>Training and communication schedule</li>
            <li>Go-live readiness checklist</li>
            <li>Budget and resource allocation</li>
          </ul>
        </div>
      </Section>

      <Section title="3. Phase 1: Organization & Master Setup (Weeks 5-10)">
        <div className={boxClass}>
          <SubHeading>Why First?</SubHeading>
          <p>
            All transactions depend on organizational structure and master data.
            Cannot proceed to transactions until this is complete and validated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Organization Setup"
            description="Configure system foundation."
            bullets={[
              'Create Company record(s)',
              'Set up Fiscal Year(s)',
              'Design Chart of Accounts',
              'Create Cost Centers',
              'Configure Accounting Dimensions',
            ]}
          />
          <StepCard
            title="2. Financial Masters"
            description="Set up accounting structure."
            bullets={[
              'GL account hierarchy and codes',
              'Banking setup (Bank Master, Bank Accounts)',
              'Currency & Exchange Rates',
              'Payment Terms',
              'Accounting Period settings',
            ]}
          />
          <StepCard
            title="3. HR Masters"
            description="Employee reference data."
            bullets={[
              'Departments',
              'Designations',
              'Employee master (name, ID, salary structure)',
              'Shift Types',
              'Leave Types & Allocations',
            ]}
          />
          <StepCard
            title="4. Business Masters"
            description="Reference data for transactions."
            bullets={[
              'Customer master (key customers)',
              'Supplier master (key vendors)',
              'Item master (products/services)',
              'Item Groups & Categories',
              'UOM (Units of Measure)',
            ]}
          />
        </div>

        <Callout title="Data Cleanup First" tone="amber">
          Before importing customer/supplier data:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Remove duplicates (multiple records for same entity)</li>
            <li>Standardize naming conventions</li>
            <li>Validate email and phone formats</li>
            <li>Confirm tax ID accuracy</li>
            <li>Remove obsolete records</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Output by End of Phase 1</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>Organization structure complete and tested</li>
            <li>Chart of Accounts finalized</li>
            <li>Master data imported and validated</li>
            <li>GL reconciliation ready (all accounts mapped)</li>
            <li>Cost Centers operational</li>
            <li>Preliminary GL trial balance (zero-balance for new company)</li>
          </ul>
        </div>
      </Section>

      <Section title="4. Phase 2: HR & Payroll (Weeks 11-16)">
        <div className={boxClass}>
          <SubHeading>Why Early?</SubHeading>
          <p>
            Payroll is critical and monthly. Must be operational before any salary
            is paid. Also allows testing of leave, attendance, and HR processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="HR Core Setup"
            description="Employee lifecycle management."
            bullets={[
              'Complete Employee records',
              'Shift assignments & schedules',
              'Leave Types & allocations',
              'Attendance system (manual or bio-metric)',
              'Leave encashment rules',
            ]}
          />
          <StepCard
            title="Payroll Configuration"
            description="Salary structure & processing."
            bullets={[
              'Salary Structure templates (by designation)',
              'Salary Components (earnings, deductions)',
              'Payroll modes (monthly, bi-weekly)',
              'Tax slabs & rules',
              'Statutory deduction setup (PF, ESI, Income Tax)',
            ]}
          />
          <StepCard
            title="HR Finance Setup"
            description="Employee cash management."
            bullets={[
              'GL accounts for advances & expenses',
              'Employee Advance policy',
              'Expense Claim categories',
              'Approval hierarchies',
              'Settlement rules',
            ]}
          />
          <StepCard
            title="Testing & Training"
            description="Validate and train users."
            bullets={[
              'Test payroll with sample data',
              'Verify GL postings',
              'Validate tax calculations',
              'Train HR team on system',
              'Train payroll processor',
            ]}
          />
        </div>

        <Callout title="Parallel Operations" tone="green">
          If you cannot stop payroll immediately:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Run payroll in both old and new system (parallel run)</li>
            <li>Reconcile results for 1-2 months</li>
            <li>Switch over once confident</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Output by End of Phase 2</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>First test payroll run successful</li>
            <li>GL entries for salary posting verified</li>
            <li>Payroll processor trained</li>
            <li>Attendance system live</li>
            <li>Leave management operational</li>
            <li>Ready for live payroll run</li>
          </ul>
        </div>
      </Section>

      <Section title="5. Phase 3: Finance & Accounting (Weeks 17-24)">
        <div className={boxClass}>
          <SubHeading>Why After Payroll?</SubHeading>
          <p>
            Payroll generates GL entries. Accounting must be ready to receive them.
            Also allows financial close procedures to be tested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Accounting Setup"
            description="Core accounting operations."
            bullets={[
              'Bank reconciliation setup',
              'Payment methods configured',
              'Journal entry templates',
              'Opening/Closing entry process',
              'Financial close checklist',
            ]}
          />
          <StepCard
            title="Data Migration"
            description="Historical financials (if required)."
            bullets={[
              'Opening balances for all GL accounts',
              'Open invoices from legacy system',
              'Open POs and SOs',
              'Intercompany transactions',
              'Audit trail documentation',
            ]}
          />
          <StepCard
            title="Reports & Dashboards"
            description="Finance reporting setup."
            bullets={[
              'P&L Statement configuration',
              'Balance Sheet mapping',
              'Cash Flow reporting',
              'Variance analysis format',
              'Management dashboards',
            ]}
          />
          <StepCard
            title="Testing & Training"
            description="Validation and user preparation."
            bullets={[
              'Test accounting transactions',
              'Verify reconciliation process',
              'Validate financial reports',
              'Train finance team',
              'Document accounting policies',
            ]}
          />
        </div>

        <Callout title="Opening Balances Critical" tone="amber">
          Incorrect opening balances lead to wrong financials forever. Take time to:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Verify each GL account balance from old system</li>
            <li>Reconcile with bank statements</li>
            <li>Reconcile AR and AP aging</li>
            <li>Confirm inventory valuation</li>
            <li>Post opening entries and re-verify</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Output by End of Phase 3</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>Chart of Accounts populated with opening balances</li>
            <li>Bank reconciliation process working</li>
            <li>Trial Balance matches GL</li>
            <li>Financial reports generating correctly</li>
            <li>Accounting team trained</li>
            <li>Approval workflows for accounting set</li>
            <li>Ready for live accounting transactions</li>
          </ul>
        </div>
      </Section>

      <Section title="6. Phase 4: Sales & Inventory (Weeks 25-32)">
        <div className={boxClass}>
          <SubHeading>Why After Finance?</SubHeading>
          <p>
            GL accounts are set up. Now we can test sales/delivery/invoice flows and
            verify GL posting. Inventory integration with accounting is critical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Sales Setup"
            description="Sales order management."
            bullets={[
              'Pricing rules & disc ounts',
              'Sales order approval workflow',
              'Pricing tiers by customer',
              'Payment terms',
              'Commission structure (if applicable)',
            ]}
          />
          <StepCard
            title="Inventory Setup"
            description="Stock management."
            bullets={[
              'Warehouses created',
              'Item masters with stock',
              'Stock valuation method (FIFO/Moving Avg)',
              'Re-order levels set',
              'Stock count reconciliation',
            ]}
          />
          <StepCard
            title="Buying Setup"
            description="Purchase order management."
            bullets={[
              'Supplier terms & pricing',
              'Purchase approval workflow',
              'Vendor performance metrics',
              'RFQ process (if used)',
              'Purchase order templates',
            ]}
          />
          <StepCard
            title="Testing & Training"
            description="Validation and team preparation."
            bullets={[
              'Test SO → Delivery → Invoice flow',
              'Verify inventory updates',
              'Validate GL postings (COGS)',
              'Train sales and warehouse teams',
              'Document approval workflows',
            ]}
          />
        </div>

        <Callout title="Inventory Count Critical" tone="amber">
          Before going live:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Perform physical stock count</li>
            <li>Match against system records</li>
            <li>Reconcile discrepancies</li>
            <li>Post count variance adjustments</li>
            <li>Verify valuation is correct</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Output by End of Phase 4</SubHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>Complete SO to Invoice flow tested</li>
            <li>Inventory updates automatic with deliveries</li>
            <li>COGS posting verified</li>
            <li>Receivables AR aging working</li>
            <li>Sales reports generating correctly</li>
            <li>Purchase flow tested end-to-end</li>
            <li>Payables AP aging working</li>
            <li>Ready for live transactions</li>
          </ul>
        </div>
      </Section>

      <Section title="7. Phase 5: Specialized Modules (Weeks 33-38)">
        <div className={boxClass}>
          <SubHeading>Module Selection</SubHeading>
          <p className="mb-4">
            Depending on your business, implement relevant modules:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Projects Management"
            description="For service/consulting businesses."
            bullets={[
              'Project creation & task hierarchy',
              'Timesheet configuration',
              'Project costing rules',
              'Billing models (fixed vs hourly)',
              'Project profitability reports',
            ]}
          />
          <StepCard
            title="Manufacturing"
            description="For manufacturing businesses."
            bullets={[
              'Bill of Materials (BOM) structure',
              'Work Order workflow',
              'Production planning',
              'Quality control process',
              'Production cost tracking',
            ]}
          />
          <StepCard
            title="Service/Support"
            description="For service businesses & support teams."
            bullets={[
              'Issue/Ticket management',
              'SLA configuration',
              'Maintenance scheduling',
              'Warranty tracking',
              'Support team workflow',
            ]}
          />
          <StepCard
            title="Asset Management"
            description="For capital-intensive operations."
            bullets={[
              'Asset creation & tracking',
              'Depreciation schedule',
              'Asset maintenance',
              'Asset disposal & gain/loss',
              'Asset register reports',
            ]}
          />
        </div>

        <div className={boxClass}>
          <SubHeading>Testing & Training</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Test workflows specific to each module</li>
            <li>Verify GL impact from specialized modules</li>
            <li>Train module-specific users</li>
            <li>Validate reports and analytics</li>
          </ul>
        </div>
      </Section>

      <Section title="8. Phase 6: Go-Live & Support (Weeks 39-42)">
        <div className={boxClass}>
          <SubHeading>Pre-Go-Live Checklist</SubHeading>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">System Testing Complete</p>
                <p className="text-sm text-gray-600">All modules tested, all use cases validated</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">User Training Completed</p>
                <p className="text-sm text-gray-600">All users trained; competency verified</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Data Migration Verified</p>
                <p className="text-sm text-gray-600">All masters and opening balances validated</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Legacy System Reconciliation</p>
                <p className="text-sm text-gray-600">Old system vs new system totals match</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Backup & Disaster Recovery Plan Ready</p>
                <p className="text-sm text-gray-600">Backup procedures tested; recovery tested</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Support Team Briefed</p>
                <p className="text-sm text-gray-600">IT support knows troubleshooting & escalation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Rollback Plan Documented</p>
                <p className="text-sm text-gray-600">If issues, can revert to legacy system quickly</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 w-4 h-4" disabled />
              <div>
                <p className="font-semibold text-gray-900">Documentation Finalized</p>
                <p className="text-sm text-gray-600">Process docs, training materials, FAQ</p>
              </div>
            </div>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Go-Live Week</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Day 1 (Morning):</strong> Final data verification from legacy
              system
            </li>
            <li>
              <strong>Day 1 (Afternoon):</strong> Disable legacy system; final backup
            </li>
            <li>
              <strong>Day 1 (Evening):</strong> Activate ERPNext; verify initial
              setup
            </li>
            <li>
              <strong>Days 2-5:</strong> Monitor all transactions; support team
              on-call 24/7
            </li>
            <li>
              <strong>End of Week 1:</strong> Daily review of issues and resolution
            </li>
          </ol>
        </div>

        <Callout title="Phased Go-Live Option" tone="green">
          If you have multiple locations or departments:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Go live with pilot location first</li>
            <li>Run parallel with other locations for 2-4 weeks</li>
            <li>Once stable, roll out to remaining locations</li>
            <li>Reduces risk of system-wide outage</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Post-Go-Live Support (4 Weeks)</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Daily monitoring of system and transactions</li>
            <li>Quick resolution of user issues</li>
            <li>Weekly review meetings with department heads</li>
            <li>Performance tuning as needed</li>
            <li>Documentation updates based on actual usage</li>
            <li>Final reconciliation (GL to legacy system)</li>
          </ul>
        </div>
      </Section>

      <Section title="9. Project Team Roles & Responsibilities">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Project Manager (Full-Time)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>Project planning & timeline</li>
              <li>Resource allocation</li>
              <li>Stakeholder communication</li>
              <li>Risk management</li>
              <li>Change management</li>
            </ul>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Technical Administrator (Full-Time)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>System setup & configuration</li>
              <li>User account management</li>
              <li>Customizations & scripts</li>
              <li>Performance tuning</li>
              <li>Backup & security</li>
            </ul>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Finance Lead (Part-Time)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>GL structure design</li>
              <li>Opening balance validation</li>
              <li>Report configuration</li>
              <li>Reconciliation procedures</li>
              <li>Finance user training</li>
            </ul>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              HR Lead (Part-Time)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>Employee master setup</li>
              <li>Payroll configuration</li>
              <li>Leave policy implementation</li>
              <li>Attendance system setup</li>
              <li>HR user training</li>
            </ul>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Operations Lead (Part-Time)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>Sales workflow design</li>
              <li>Inventory setup</li>
              <li>Warehouse process mapping</li>
              <li>Operations user training</li>
              <li>Reports configuration</li>
            </ul>
          </div>

          <div className={boxClass}>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Super Users (Department Champions)
            </h4>
            <ul className="list-disc pl-6 text-sm space-y-2">
              <li>First-level user support</li>
              <li>Best practices mentoring</li>
              <li>Issue escalation</li>
              <li>Training of new users</li>
              <li>Change management communication</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="10. Change Management & Communications">
        <div className={boxClass}>
          <SubHeading>Why Change Management Matters</SubHeading>
          <p className="mb-4">
            Technical success ≠ Implementation success. Users must embrace the
            system.
          </p>

          <MiniHeading>Weekly Steering Committee</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Executive sponsor</li>
            <li>Project manager</li>
            <li>Department heads (rotating)</li>
            <li>Review progress, risks, issues</li>
          </ul>

          <MiniHeading>User Communication Plan</MiniHeading>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Kickoff town hall - "why we're doing this"</li>
            <li>Monthly newsletters - "progress updates"</li>
            <li>Pre-go-live awareness - "get ready"</li>
            <li>Post-go-live retrospective - "lessons learned"</li>
          </ul>

          <MiniHeading>Training & Support Phases</MiniHeading>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Train-the-Trainer:</strong> Core team trained first
            </li>
            <li>
              <strong>User Training:</strong> Department-specific sessions
            </li>
            <li>
              <strong>Hands-on Practice:</strong> Users practice on test data
            </li>
            <li>
              <strong>Go-Live Support:</strong> Help desk available 24/7 first
              week
            </li>
            <li>
              <strong>Post-Go-Live:</strong> Weekly office hours for questions
            </li>
          </ul>
        </div>
      </Section>

      <Section title="11. Implementation Risks & Mitigation">
        <div className={boxClass}>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Risk: Poor Data Quality</p>
              <p className="text-sm text-gray-700 mb-2">
                Legacy data full of errors cascades issues.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Invest time in data cleansing (Phase 1). Validate before import.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Risk: Scope Creep</p>
              <p className="text-sm text-gray-700 mb-2">
                "While you're at it, can we also…?' leads to delays and over-budget.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Strict change control board. Defer non-critical items to Phase 2.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                Risk: User Resistance
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Users continue using old systems or workarounds.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Strong communication, training, and early wins. Show ROI.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">
                Risk: Insufficient Testing
              </p>
              <p className="text-sm text-gray-700 mb-2">
                Go-live with untested workflows leads to fires.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Dedicated testing phase. Test realistic scenarios, not just happy
                paths.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Risk: Team Burnout</p>
              <p className="text-sm text-gray-700 mb-2">
                Long hours lead to exhaustion and mistakes.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Realistic timelines. Team off during phases with less intensity.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Risk: Poor Cutover</p>
              <p className="text-sm text-gray-700 mb-2">
                Go-live day chaos because transition not planned.
              </p>
              <p className="text-sm font-semibold text-gray-900">Mitigation:</p>
              <p className="text-sm text-gray-700">
                Detailed cutover plan. Dry run. Rollback plan. Go-live weekend if
                possible.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="12. Post-Implementation: Steady State">
        <div className={boxClass}>
          <SubHeading>Month 2 Onwards: Stabilize & Optimize</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Monthly Reviews:</strong> KPIs, issues, process improvements
            </li>
            <li>
              <strong>User Feedback:</strong> Collect and act on suggestions
            </li>
            <li>
              <strong>Performance Tuning:</strong> Optimize slow reports/workflows
            </li>
            <li>
              <strong>Advanced Features:</strong> Implement post-launch value-adds
            </li>
            <li>
              <strong>Knowledge Transfer:</strong> Document processes; train new
              hires
            </li>
            <li>
              <strong>Compliance:</strong> Regular audits and regulatory filings
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Implementation Success Metrics">
        <div className={boxClass}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="font-semibold text-gray-900 mb-1">📊 Project Metrics</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>On-time go-live (plan vs actual)</li>
                <li>On-budget (plan vs actual spend)</li>
                <li>Zero critical issues at go-live</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-semibold text-gray-900 mb-1">👥 Adoption Metrics</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>% of users trained (target: 100%)</li>
                <li>System usage rate (target: 90%+)</li>
                <li>User satisfaction (survey: 4/5 or higher)</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <p className="font-semibold text-gray-900 mb-1">💼 Business Metrics</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>
                  Report generation time (target: reduce by 80%)
                </li>
                <li>Data entry errors (target: eliminate</li>
                <li>Process cycle time (target: reduce by 30%)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="font-semibold text-gray-900 mb-1">🎯 Financial Metrics</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>GL reconciliation time (target: 1 day)</li>
                <li>AR aging accuracy (target: 100%)</li>
                <li>Audit findings (target: zero)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Next Steps">
        <div className={boxClass}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Start with Phase 0:</strong> Create detailed project plan
            </li>
            <li>
              <strong>Assemble team:</strong> Allocate resources
            </li>
            <li>
              <strong>Plan Phase 1:</strong> Organization & master data setup
            </li>
            <li>
              <strong>Document processes:</strong> Current state → Future state
            </li>
            <li>
              <strong>Baseline data:</strong> Prepare for migration
            </li>
            <li>
              <strong>Begin training:</strong> Start with core team
            </li>
          </ol>
        </div>
      </Section>
    </div>
  )
}
