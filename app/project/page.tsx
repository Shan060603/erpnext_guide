import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'

const lifecycleChart = `flowchart LR
  A[Project] --> B[Tasks]
  B --> C[Timesheets]
  C --> D{Billing Method}
  D --> E[Sales Order Based Billing]
  D --> F[Timesheet Based Billing]
  E --> G[Sales Invoice]
  F --> G
  C --> H[Actual Cost]
  I[Expenses and Purchase Invoices] --> H
  G --> J[Actual Revenue]
  H --> K[Gross Margin]
  J --> K
  K --> L[Project Profitability]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#fff3e0
  style G fill:#f3e5f5
  style H fill:#fff9c4
  style L fill:#c8e6c9`

const dependencyChart = `flowchart LR
  A[Task A: Site Survey] --> B[Task B: Layout Approval]
  B --> C[Task C: Installation]
  C --> D[Task D: Final Handover]

  style A fill:#e3f2fd
  style B fill:#fff3e0
  style C fill:#f3e5f5
  style D fill:#c8e6c9`

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

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Projects Module Guide
      </h1>

      <Section title="1. Overview of the Projects Module">
        <div className={boxClass}>
          <SubHeading>What Is a Project in ERPNext?</SubHeading>
          <p className="mb-4">
            In ERPNext, a Project is a controlled piece of work that can be
            planned, tracked, costed, and billed. A project is usually broken
            into smaller Tasks so that teams can monitor responsibilities,
            timelines, hours worked, costs, and customer billing.
          </p>
          <p className="mb-4">
            Examples of projects include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Implementing ERP for a client</li>
            <li>Constructing a custom office fit-out</li>
            <li>Running an internal software upgrade</li>
            <li>Delivering a monthly support retainer</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Why Companies Use It</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>To plan project work with dates, milestones, and ownership</li>
            <li>To break large work into manageable tasks and sub-tasks</li>
            <li>To capture employee time through Timesheets</li>
            <li>To bill customers either by contract value or by time spent</li>
            <li>To compare revenue against actual project cost</li>
            <li>To measure project profitability and gross margin</li>
          </ul>
        </div>

        <Callout title="Internal vs Customer Projects" tone="green">
          ERPNext supports both internal projects and customer-facing projects.
          A common practice is to use <strong>Project Type</strong> to separate
          internal work from external or customer work. Customer-facing projects
          are usually linked to a Customer and often to a Sales Order.
        </Callout>
      </Section>

      <Section title="2. Project Creation">
        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create a Project</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to `Projects &gt; Project`.</li>
            <li>Click `New`.</li>
            <li>Enter the Project Name.</li>
            <li>Select the Customer if the work is for a client.</li>
            <li>Enter the Expected Start Date and Expected End Date.</li>
            <li>Set the Status, usually `Open` when starting.</li>
            <li>
              If the job comes from a signed order, link the related Sales
              Order.
            </li>
            <li>
              Optionally choose a Project Template, Project Type, Priority, and
              Department.
            </li>
            <li>Save the Project.</li>
          </ol>

          <MiniHeading>Fields Explained</MiniHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Project Name:</strong> The main title of the job, for
              example `ABC Office Renovation Phase 1`.
            </li>
            <li>
              <strong>Customer:</strong> The client for whom the project is
              being delivered.
            </li>
            <li>
              <strong>Expected Start / End Date:</strong> Planned timeline for
              the project.
            </li>
            <li>
              <strong>Status:</strong> Overall stage of the project. Commonly
              used to show whether the project is open, completed, or cancelled.
            </li>
            <li>
              <strong>Sales Order:</strong> Used when the project is tied to an
              approved customer contract or agreed job value.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Business Example</SubHeading>
          <p>
            A consulting company wins a `USD 20,000` implementation contract for
            Customer `Bright Retail`. They create a Project called `Bright
            Retail ERP Implementation`, link the Customer, set the expected
            dates, and connect the signed Sales Order so the delivery team can
            track work against the agreed scope.
          </p>
        </div>

        <Callout title="Project Template Usage" tone="blue">
          If your company repeats the same project structure, such as onboarding,
          fit-out, or implementation jobs, use a <strong>Project Template</strong>.
          In ERPNext, a Project Template can preload a standard sequence of
          tasks into a new project, which saves setup time and improves
          consistency.
        </Callout>
      </Section>

      <Section title="3. Tasks">
        <div className={boxClass}>
          <SubHeading>What Is a Task?</SubHeading>
          <p className="mb-4">
            A Task is a single actionable unit of work inside a project. If a
            Project is the full job, Tasks are the smaller steps needed to
            complete it.
          </p>
          <p>
            Example: In an ERP implementation project, separate tasks may
            include requirement gathering, user training, data migration, and go-live support.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How Tasks Relate to Projects</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>One Project can contain many Tasks.</li>
            <li>Tasks can be created directly from the Project or separately.</li>
            <li>
              If a task is created separately, it should still be linked to the
              correct Project for reporting and costing.
            </li>
            <li>
              Timesheets, progress, costing, and billing become much clearer
              when tasks are properly linked.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create a Task</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to `Projects &gt; Task` or open a Project and add a Task from its dashboard.</li>
            <li>Click `New`.</li>
            <li>Enter the task Subject.</li>
            <li>Link the Project.</li>
            <li>Set the Status.</li>
            <li>Set the Priority.</li>
            <li>Enter expected dates and expected hours if known.</li>
            <li>Assign the task to the responsible user or team member.</li>
            <li>Save the Task.</li>
          </ol>

          <MiniHeading>Important Task Fields</MiniHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Assigned To:</strong> The person responsible for doing or
              following up on the task.
            </li>
            <li>
              <strong>Status:</strong> Shows the current stage of the task such
              as `Open`, `Working`, `Pending Review`, `Completed`, or
              `Cancelled`.
            </li>
            <li>
              <strong>Priority:</strong> Helps teams focus on urgent or critical
              work first.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Task Hierarchy: Parent and Child Tasks</SubHeading>
          <p className="mb-4">
            ERPNext allows group tasks and sub-tasks. A parent task is used as a
            larger work package, while child tasks break it into smaller pieces.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Project: Office Renovation
|
+-- Parent Task: Civil Works
|   +-- Child Task: Site Measurement
|   +-- Child Task: Floor Preparation
|   +-- Child Task: Wall Partitioning
|
+-- Parent Task: Electrical Works
    +-- Child Task: Wiring
    +-- Child Task: Lighting Installation`}</pre>
          </div>
        </div>
      </Section>

      <Section title="4. Dependent Tasks">
        <div className={boxClass}>
          <SubHeading>What Is a Dependent Task?</SubHeading>
          <p className="mb-4">
            A dependent task is a task that cannot be properly completed until
            another task is finished first. In ERPNext, dependent tasks help
            teams manage sequence and timing.
          </p>
          <MiniHeading>Example Workflow</MiniHeading>
          <p className="mb-4">
            `Task A: Finalize Design` must be completed before `Task B: Start
            Production`.
          </p>
          <Mermaid chart={dependencyChart} />
        </div>

        <div className={boxClass}>
          <SubHeading>Real Business Analogy</SubHeading>
          <p>
            Think of building kitchen cabinets. You cannot start installation
            before the cabinet measurements and design approval are completed.
            In the same way, dependent tasks stop teams from treating later work
            as finished before prerequisite work is done.
          </p>
        </div>
      </Section>

      <Section title="5. Task Progress">
        <div className={boxClass}>
          <SubHeading>What Does % Progress Mean?</SubHeading>
          <p className="mb-4">
            `% Progress` shows how much of a task is complete, expressed as a
            percentage from `0%` to `100%`.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>`0%` means the work has not started.</li>
            <li>`50%` means the task is partly complete.</li>
            <li>`100%` means the task is fully complete.</li>
          </ul>

          <MiniHeading>Status vs Progress</MiniHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Status</strong> describes the stage of work, such as
              `Open` or `Working`.
            </li>
            <li>
              <strong>Progress</strong> shows the numeric completion level, such
              as `40%` or `85%`.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Manual vs Timesheet-Based Updates</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Manual update:</strong> A user directly enters or revises
              the task progress.
            </li>
            <li>
              <strong>Timesheet-based update:</strong> Timesheets update actual
              start and end timing information and support costing and billing.
              Teams often still review progress manually based on actual work
              done.
            </li>
          </ul>
        </div>

        <Callout title="Project Completion Methods in ERPNext" tone="green">
          At project level, ERPNext can track completion manually or calculate
          it using <strong>Task Completion</strong>, <strong>Task Progress</strong>,
          or <strong>Task Weight</strong>. Choose the method that matches how
          your business measures delivery.
        </Callout>
      </Section>

      <Section title="6. Task Weight">
        <div className={boxClass}>
          <SubHeading>What Is Task Weight?</SubHeading>
          <p className="mb-4">
            Task Weight is the relative importance of a task in the overall
            project. It is used when the project completion method is based on
            task weight.
          </p>
          <p>
            This is useful when not all tasks are equally important. A major
            implementation phase may deserve more weight than a short review
            meeting.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>How It Affects Project Progress</SubHeading>
          <p className="mb-4">
            In the `Task Weight` completion method, larger or more important
            tasks contribute more to total project completion.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Example:

Task                     Weight   Progress   Contribution
Planning                 20%      100%       20
Configuration            50%       60%       30
User Training            30%        0%        0

Overall Project Progress = 50%`}</pre>
          </div>
        </div>

        <div className={boxClass}>
          <SubHeading>Real-World Use Cases</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Construction: structural work may carry more weight than final cleaning.
            </li>
            <li>
              Consulting: core implementation may carry more weight than documentation.
            </li>
            <li>
              Software delivery: development and testing may carry more weight
              than kickoff meetings.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="7. Timesheets">
        <div className={boxClass}>
          <SubHeading>What Is a Timesheet?</SubHeading>
          <p className="mb-4">
            A Timesheet records the hours an employee spends on a Project or
            Task. In ERPNext, Timesheets are central to service delivery,
            costing, utilization, and hourly billing.
          </p>

          <MiniHeading>Why It Is Used in Projects</MiniHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>To record actual work done</li>
            <li>To calculate internal project cost</li>
            <li>To support time-based billing</li>
            <li>To analyze employee utilization and task effort</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Key Billing and Costing Terms</SubHeading>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Is Billable / Bill checkbox:</strong> Marks whether that
              timesheet row should be billed to the customer.
            </li>
            <li>
              <strong>Worked Hours:</strong> The actual hours spent by the employee.
            </li>
            <li>
              <strong>Billing Hours:</strong> The hours the customer will be
              charged for. These can be the same as worked hours, or different
              if your contract allows minimum blocks, rounded hours, or capped billing.
            </li>
            <li>
              <strong>Billing Rate:</strong> The rate charged to the customer.
            </li>
            <li>
              <strong>Costing Rate:</strong> The internal cost rate of the work,
              often based on employee/activity cost.
            </li>
            <li>
              <strong>Billing Amount:</strong> `Billing Hours x Billing Rate`.
            </li>
            <li>
              <strong>Costing Amount:</strong> `Worked Hours x Costing Rate`.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Revenue vs Cost</SubHeading>
          <p className="mb-4">
            In project billing, <strong>revenue</strong> is what you charge the
            customer, while <strong>cost</strong> is what the work actually
            costs your company.
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">{`Example:
Worked Hours   = 8
Billing Hours  = 8
Billing Rate   = 100
Costing Rate   = 60

Revenue        = 8 x 100 = 800
Cost           = 8 x 60  = 480
Margin         = 320`}</pre>
          </div>
        </div>
      </Section>

      <Section title="8. Project Billing">
        <div className={boxClass}>
          <SubHeading>Two Common Billing Methods</SubHeading>

          <MiniHeading>A. Sales Order-Based Billing (Fixed Price Project)</MiniHeading>
          <p className="mb-4">
            Use this when the customer agreed to a fixed contract value. The
            Sales Order represents the approved commercial value of the job.
            Billing is then done through one or more Sales Invoices, often based
            on milestones, percentage completion, or agreed payment stages.
          </p>

          <MiniHeading>B. Timesheet-Based Billing (Hourly or Service Project)</MiniHeading>
          <p>
            Use this when the customer is charged for actual time worked. Team
            members submit billable Timesheets, and Sales Invoices are created
            from those Timesheets.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Important Difference</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sales Order:</strong> The agreed contract, scope, or
              expected project value.
            </li>
            <li>
              <strong>Sales Invoice:</strong> The actual billing document that
              records revenue.
            </li>
          </ul>
          <p className="mt-4">
            A Sales Order is <strong>not</strong> the same as actual billing.
            Revenue is recognized when Sales Invoices are created and submitted,
            not just because a Sales Order exists.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Creating a Sales Invoice from a Sales Order</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Create or confirm the Sales Order.</li>
            <li>Open the Sales Order.</li>
            <li>Create a Sales Invoice from the Sales Order.</li>
            <li>Invoice the full amount or only part of it, depending on the billing plan.</li>
            <li>Submit the Sales Invoice to record revenue.</li>
          </ol>
        </div>

        <div className={boxClass}>
          <SubHeading>Creating a Sales Invoice from a Timesheet</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Submit the Timesheet.</li>
            <li>Click `Create Sales Invoice` from the Timesheet.</li>
            <li>Enter the Customer and the Item to bill.</li>
            <li>Review the fetched timesheet rows and amounts.</li>
            <li>Save and submit the Sales Invoice.</li>
          </ol>
        </div>

        <Callout title="Accuracy Note for ERPNext v15" tone="amber">
          In standard ERPNext behavior, a Timesheet-based Sales Invoice focuses
          on billable time. It does <strong>not</strong> automatically mean the
          invoice will consume or reconcile against a linked Sales Order in the
          same way a Sales Order-based invoice does, unless your workflow or
          customization explicitly handles that relationship.
        </Callout>
      </Section>

      <Section title="9. Sales Order vs Sales Invoice in Projects">
        <div className={boxClass}>
          <SubHeading>Clear Distinction</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sales Order = Contract / Total Value</strong>
            </li>
            <li>
              <strong>Sales Invoice = Actual Revenue</strong>
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Partial Billing and Progress Billing</SubHeading>
          <p className="mb-4">
            Many projects are not billed in one single invoice. Instead, billing
            may happen in stages such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>30% advance on project start</li>
            <li>40% after implementation milestone</li>
            <li>30% after completion and sign-off</li>
          </ul>
          <p>
            In this case, the Sales Order may still be for the full contract
            value, while multiple Sales Invoices record the actual staged revenue.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Why a Timesheet Invoice May Not Always Auto-Link to the Sales Order</SubHeading>
          <p>
            Timesheet invoicing is designed around billable service time. If
            your business also needs contract tracking against a Sales Order,
            you may need a disciplined process, such as using project references
            consistently, billing rules, or custom automation. This prevents a
            misunderstanding where teams assume all time-based invoices reduce
            Sales Order value automatically in every scenario.
          </p>
        </div>
      </Section>

      <Section title="10. Project Costing">
        <div className={boxClass}>
          <SubHeading>Estimated Cost vs Actual Cost</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Estimated Cost:</strong> What you expect the project to cost.
            </li>
            <li>
              <strong>Actual Cost:</strong> What the project has really cost
              based on real transactions and time logged.
            </li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Costing from Timesheets</SubHeading>
          <p className="mb-4">
            ERPNext updates project and task costing from submitted Timesheets.
            This uses the Costing Rate and actual hours worked.
          </p>
          <p>
            Example: If a consultant worked `10` hours at a costing rate of
            `50`, the project cost from that entry is `500`.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Costing from Expenses and Purchase Invoices</SubHeading>
          <p className="mb-4">
            Project cost is not only labor. In real projects, you may also have:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Travel reimbursements and expense claims</li>
            <li>Subcontractor charges</li>
            <li>Materials purchased for the project</li>
            <li>Vendor service invoices</li>
          </ul>
          <p className="mt-4">
            When these are linked properly to the project, they improve cost
            visibility and make profitability reporting more realistic.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Gross Margin</SubHeading>
          <p>
            Gross Margin is the difference between what you billed the customer
            and what the project cost your business.
          </p>
        </div>
      </Section>

      <Section title="11. Project Profitability">
        <div className={boxClass}>
          <SubHeading>How ERPNext Looks at Profit</SubHeading>
          <p className="mb-4">
            A practical profitability view is:
          </p>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-sm whitespace-pre-wrap">{`Gross Margin = Sales Invoice Value - Project Costing`}</pre>
          </div>
          <p>
            In simple business terms, your project is profitable when invoiced
            revenue is higher than total project cost.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Why Margin Can Be Negative</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>Too many hours were spent compared to what was billed</li>
            <li>Timesheets captured real effort but customer billing was capped</li>
            <li>Materials or subcontractor cost exceeded the estimate</li>
            <li>The team billed too late, so cost is recorded before revenue</li>
            <li>The project was underpriced from the start</li>
          </ul>
        </div>

        <div className={boxClass}>
          <SubHeading>Real-World Interpretation</SubHeading>
          <p>
            A negative margin does not always mean the project is a failure. It
            may mean invoicing is still pending, project scope has expanded
            without a change order, or the job is genuinely over budget. That
            is why project managers should review both the commercial side
            and the delivery side together.
          </p>
        </div>
      </Section>

      <Section title="12. Common Mistakes">
        <div className={boxClass}>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Not linking tasks to projects:</strong> This causes weak
              reporting, fragmented costing, and poor visibility.
            </li>
            <li>
              <strong>Missing timesheets:</strong> If people do the work but do
              not log time, labor cost and billable time will be understated.
            </li>
            <li>
              <strong>Confusing Sales Order with Sales Invoice:</strong> A Sales
              Order shows agreed value, but a Sales Invoice records actual
              revenue.
            </li>
            <li>
              <strong>Using the wrong billing method:</strong> Fixed-price
              projects should usually follow contract billing, while hourly
              service work should usually follow timesheet billing.
            </li>
            <li>
              <strong>Ignoring task dependencies:</strong> Teams may report
              progress on work that should not have started yet.
            </li>
            <li>
              <strong>Using equal progress for unequal work:</strong> When tasks
              have very different business importance, use task weight.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="13. Billing Workflow Best Practices">
        <div className={boxClass}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Decide at project start whether billing is fixed-price or time-based.</li>
            <li>Use a Sales Order for contract value and commercial approval.</li>
            <li>Require timely Timesheet submission for all billable service work.</li>
            <li>Review billable vs non-billable hours before invoicing.</li>
            <li>Use milestone or staged invoices for long fixed-price projects.</li>
            <li>
              If you want timesheet invoices to follow a special contract logic,
              define that process clearly or automate it through configuration or customization.
            </li>
          </ul>
        </div>

        <Callout title="Optional Automation Note" tone="blue">
          ERPNext can support efficient time-based billing workflows, and many
          companies add automation around invoice preparation from Timesheets.
          Even so, teams should validate customer, item, rates, and whether any
          Sales Order reference is required before submitting the invoice.
        </Callout>
      </Section>

      <Section title="14. Summary Flow">
        <Mermaid chart={lifecycleChart} />

        <div className={boxClass}>
          <SubHeading>Project Lifecycle</SubHeading>
          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto mb-4">
            <pre className="text-sm whitespace-pre-wrap">{`Project
  -> Tasks
  -> Timesheets
  -> Billing
  -> Costing
  -> Profit`}</pre>
          </div>

          <p className="mb-4">
            This is the core logic of the Projects module in ERPNext v15:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create the Project to define the job.</li>
            <li>Break the work into Tasks.</li>
            <li>Capture time through Timesheets.</li>
            <li>Bill the customer through Sales Invoices.</li>
            <li>Track actual cost from labor and project-related expenses.</li>
            <li>Measure profit by comparing invoiced revenue against total cost.</li>
          </ul>
        </div>

        <Callout title="Final Takeaway" tone="green">
          If your team understands the difference between <strong>contract
          value</strong>, <strong>actual billing</strong>, and <strong>actual
          cost</strong>, the ERPNext Projects module becomes a very effective
          tool for delivery control, customer billing, and profitability management.
        </Callout>
      </Section>
    </div>
  )
}
