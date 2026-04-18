import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const manufacturingFlowChart = `flowchart TD
  A["Sales Order / Forecast"] --> B["Production Plan"]
  B --> C["Work Order Created"]
  C --> D["Raw Materials Reserved"]
  D --> E["Production Starts"]
  E --> F["Job Cards for Operations"]
  F --> G["Labor & Machine Time Logged"]
  G --> H["Finished Goods Receipt"]
  H --> I["GL: Dr FG Inventory / Cr WIP"]
  I --> J["Quality Inspection"]
  J --> K{Pass?}
  K -->|Yes| L["Ready for Delivery"]
  K -->|No| M["Rework or Scrap"]
  L --> N["Sales Invoice / Delivery"]

  style A fill:#e3f2fd
  style C fill:#e8f5e9
  style F fill:#fff3e0
  style H fill:#f3e5f5
  style I fill:#fff9c4
  style L fill:#c8e6c9`

const bomStructureChart = `flowchart TD
  A["Product: Electronic Assembly"] --> B["Raw Materials"]
  A --> C["Operations"]
  
  B --> B1["50 Microchips @ 10 each"]
  B --> B2["100 Solder @ 0.5 each"]
  B --> B3["2 PCB Board @ 20 each"]
  
  C --> C1["Assembly Operation<br/>Time: 2 hours<br/>Workstation: A1"]
  C --> C2["Testing Operation<br/>Time: 1 hour<br/>Workstation: A2"]
  C --> C3["Packing Operation<br/>Time: 0.5 hours<br/>Workstation: A3"]

  style A fill:#e3f2fd
  style B fill:#e8f5e9
  style C fill:#e8f5e9`

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

export default function ManufacturingPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Manufacturing Module</h1>

      <Callout title="Purpose" tone="blue">
        The Manufacturing module transforms raw materials into finished products
        through structured production processes, tracking costs, quality, and
        resource utilization.
      </Callout>

      <Section title="1. Overview">
        <div className={boxClass}>
          <SubHeading>Why Manufacturing Module?</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Material Planning:</strong> Know exactly what raw materials
              are needed for production
            </li>
            <li>
              <strong>Cost Control:</strong> Track labor, machine, and material
              costs per product
            </li>
            <li>
              <strong>Production Scheduling:</strong> Coordinate work across
              multiple operations
            </li>
            <li>
              <strong>Quality Assurance:</strong> Inspect and validate at each
              stage
            </li>
            <li>
              <strong>Capacity Planning:</strong> Ensure workstations and labor
              available
            </li>
            <li>
              <strong>Inventory Control:</strong> Track WIP and finished goods
            </li>
          </ul>
        </div>
      </Section>

      <Section title="2. Manufacturing Flow Overview">
        <Mermaid chart={manufacturingFlowChart} />
      </Section>

      <Section title="3. Bill of Materials (BOM) - The Recipe">
        <div className={boxClass}>
          <SubHeading>What is a BOM?</SubHeading>
          <p className="mb-4">
            A <strong>Bill of Materials</strong> is the "recipe" for your product.
            It lists every component, raw material, and operation needed to make
            one unit.
          </p>
          <p>
            <strong>Real Example:</strong> To make an electronic assembly, you need
            50 microchips, 100 solder units, 2 PCBs, plus 3 operations
            (assembly, testing, packing).
          </p>
        </div>

        <Mermaid chart={bomStructureChart} />

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create a BOM</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to Manufacturing → Bill of Materials</li>
            <li>Click New</li>
            <li>
              Select Product to manufacture (must be marked "Is Manufactured")
            </li>
            <li>
              Add Raw Materials:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Item (component)</li>
                <li>Quantity (how many per unit)</li>
                <li>UOM (unit of measure)</li>
              </ul>
            </li>
            <li>
              Add Operations (if applicable):
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Workstation</li>
                <li>Operation time (hours)</li>
                <li>Sequence order</li>
              </ul>
            </li>
            <li>Set Quantity (basis) = 1 (per unit produced)</li>
            <li>Submit</li>
          </ol>
        </div>

        <Callout title="Best Practice: Multiple BOMs" tone="green">
          You can create multiple BOMs for the same product:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>BOM v1.0 - Original design</li>
            <li>BOM v1.1 - Cost-reduced variant</li>
            <li>BOM Export - With cheaper components for export markets</li>
          </ul>
          When creating a Work Order, choose which BOM to use.
        </Callout>
      </Section>

      <Section title="4. Production Planning">
        <div className={boxClass}>
          <SubHeading>Production Plan Overview</SubHeading>
          <p className="mb-4">
            <strong>Production Plan</strong> forecasts how much to manufacture
            based on sales orders and inventory levels.
          </p>
          <p>
            <strong>Purpose:</strong> Determine material requirement dates and
            create planned work orders.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Production Plan</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Go to Manufacturing → Production Plan</li>
            <li>Click New</li>
            <li>
              Add items to produce:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Item</li>
                <li>Quantity to produce</li>
                <li>Expected date of completion</li>
              </ul>
            </li>
            <li>Save as Draft</li>
            <li>
              Click "Get Material Request" - calculates raw material needs
            </li>
            <li>
              Review material requirements and costs
            </li>
            <li>
              Click "Create Work Order" - generates work orders for each item
            </li>
            <li>Submit</li>
          </ol>
        </div>

        <Callout title="MRP Logic" tone="blue">
          When you create a Production Plan:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>System fetches BOM for selected item</li>
            <li>Calculates total material needed (Item Qty × BOM Qty)</li>
            <li>Compares against current stock</li>
            <li>Creates Material Requests for shortfall</li>
            <li>Creates Work Orders to manufacture finished goods</li>
          </ul>
        </Callout>
      </Section>

      <Section title="5. Work Order - Production Authorization">
        <div className={boxClass}>
          <SubHeading>What is a Work Order?</SubHeading>
          <p className="mb-4">
            A <strong>Work Order</strong> is an authorization to manufacture a
            specific quantity of a product. It pulls raw materials from inventory,
            schedules operations, and tracks progress.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Work Order</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>
              <strong>Option A - Manual:</strong> Manufacturing → Work Order →
              New
            </li>
            <li>
              <strong>Option B - From Production Plan:</strong> Plan generates
              automatically
            </li>
            <li>
              Fill in:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Product Item</li>
                <li>Quantity to produce</li>
                <li>BOM to use</li>
                <li>Target completion date</li>
                <li>Planned start date</li>
              </ul>
            </li>
            <li>Save</li>
            <li>
              Review Materials automatically pulled from BOM
            </li>
            <li>
              Review Operations from BOM
            </li>
            <li>
              Click "Create Job Cards" - creates task cards per operation
            </li>
            <li>Submit</li>
          </ol>
        </div>

        <Callout title="Material Reservation" tone="amber">
          When Work Order is submitted:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Raw materials are reserved from inventory</li>
            <li>Stock becomes unavailable for sale orders</li>
            <li>If insufficient stock, Work Order stays pending</li>
            <li>Once stock arrives, Work Order can proceed</li>
          </ul>
        </Callout>
      </Section>

      <Section title="6. Job Cards - Operation Tracking">
        <div className={boxClass}>
          <SubHeading>What is a Job Card?</SubHeading>
          <p className="mb-4">
            A <strong>Job Card</strong> is a task card for a single operation in
            the production flow. It tracks who did the work, how long it took, and
            what materials were consumed.
          </p>
          <p>
            <strong>Example:</strong> Job Card #WO001-01 for "Assembly" operation
            on Work Order WO001.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Complete Job Card</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Work Order generates Job Cards automatically</li>
            <li>Worker/Supervisor receives Job Card</li>
            <li>
              Complete operation:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Log start time and end time</li>
                <li>Note any issues or delays</li>
                <li>Perform quality check</li>
              </ul>
            </li>
            <li>Submit Job Card</li>
            <li>
              System records:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Hours spent (for labor cost)</li>
                <li>Status: Completed</li>
              </ul>
            </li>
            <li>Transfer to next operation or finish</li>
          </ol>
        </div>
      </Section>

      <Section title="7. Finished Goods Receipt & GL Impact">
        <div className={boxClass}>
          <SubHeading>Completing Production</SubHeading>
          <p className="mb-4">
            Once all operations are complete, manufacturing is finished. The
            finished goods are received into inventory and GL entries posted.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>All Job Cards submitted and completed</li>
            <li>Quality inspection passed</li>
            <li>
              Click "Complete" on Work Order
            </li>
            <li>
              Create Stock Entry: Manufacturing → Finished Goods
            </li>
            <li>
              GL Entry posted: <code>Dr Finished Goods Inventory / Cr WIP</code>
            </li>
            <li>Finished goods now available for sale</li>
          </ol>
        </div>

        <Callout title="Cost Calculation" tone="green">
          Manufacturing cost of finished goods = Raw Material Cost + Labor Cost
          + Machine Overhead
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Raw Material:</strong> From BOM (Item cost × Qty)
            </li>
            <li>
              <strong>Labor:</strong> From Job Cards (Hours × Labor Rate)
            </li>
            <li>
              <strong>Overhead:</strong> Allocated from shared costs
            </li>
          </ul>
          This cost becomes the inventory value per unit produced.
        </Callout>
      </Section>

      <Section title="8. Quality Control">
        <div className={boxClass}>
          <SubHeading>Quality Inspection in Manufacturing</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>At Receipt:</strong> Inspect raw materials before accepting
            </li>
            <li>
              <strong>At Operations:</strong> Inspect after each critical
              operation
            </li>
            <li>
              <strong>At Completion:</strong> Final inspection before releasing
              to inventory
            </li>
            <li>
              <strong>Rejection:</strong> If fails inspection, mark as scrap or
              rework
            </li>
          </ul>
        </div>
      </Section>

      <Section title="9. Manufacturing Reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="BOM Report"
            description="List all BOMs with material details."
            bullets={['All BOMs per item', 'Material quantities', 'Operations list']}
          />
          <StepCard
            title="Work Order Status"
            description="Track production progress."
            bullets={[
              'Pending work orders',
              'In progress',
              'Completed',
            ]}
          />
          <StepCard
            title="Production Cost Analysis"
            description="Actual vs planned manufacturing costs."
            bullets={[
              'Material cost variance',
              'Labor cost variance',
              'Overhead allocation',
            ]}
          />
          <StepCard
            title="Job Card Report"
            description="Track labor and time per operation."
            bullets={['Operator performance', 'Operation cycle time', 'Downtime tracking']}
          />
        </div>
      </Section>

      <Section title="10. Key Takeaways">
        <div className={boxClass}>
          <ul className="space-y-3 text-gray-700">
            <li>
              ✅ <strong>Accurate BOMs:</strong> Are critical for material
              planning and cost
            </li>
            <li>
              ✅ <strong>Production Balance:</strong> Match production to sales
              demand
            </li>
            <li>
              ✅ <strong>Job Card Discipline:</strong> Track every operation for
              costing
            </li>
            <li>
              ✅ <strong>Quality First:</strong> Implement checks at critical
              stages
            </li>
            <li>
              ✅ <strong>Cost Analysis:</strong> Review actual vs planned
              regularly
            </li>
            <li>
              ✅ <strong>Workstation Capacity:</strong> Plan around your
              bottlenecks
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}