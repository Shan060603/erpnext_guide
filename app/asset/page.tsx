import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const assetLifecycleChart = `flowchart TD
  A["Asset Purchased"] --> B["Asset Created in System"]
  B --> C["Annual Depreciation Calculated"]
  C --> D{"Asset Useful Life<br/>End?"}
  D -->|No| E["Depreciation Entry Posted<br/>Dr Depreciation / Cr Accumulated Depreciation"]
  E --> C
  D -->|Yes| F["Fully Depreciated"]
  F --> G{"Still Usable?"}
  G -->|Yes| H["Scrap or Transfer"]
  G -->|No| I["Disposal Process Started"]
  I --> J["Book Value Reconciled"]
  J --> K["Gain/Loss Calculated"]
  K --> L["Disposal Entry Posted"]
  L --> M["Asset Removed from System"]

  style A fill:#e3f2fd
  style E fill:#fff9c4
  style K fill:#ffebee
  style M fill:#c8e6c9`

const depreciationExampleChart = `flowchart TD
  A["Computer Equipment"] --> B["Cost: 100,000"]
  B --> C["Salvage Value: 10,000"]
  C --> D["Depreciable Amount: 90,000"]
  D --> E["Useful Life: 5 years"]
  E --> F["Depreciation Method: Straight Line"]
  F --> G["Annual Depreciation: 18,000"]
  
  H["Year 1"] --> H1["Opening Book Value: 100,000<br/>Depreciation: 18,000<br/>Ending Book Value: 82,000"]
  I["Year 2"] --> I1["Opening Book Value: 82,000<br/>Depreciation: 18,000<br/>Ending Book Value: 64,000"]
  J["Year 3"] --> J1["Opening Book Value: 64,000<br/>Depreciation: 18,000<br/>Ending Book Value: 46,000"]
  
  style G fill:#c8e6c9
  style H1 fill:#e3f2fd
  style I1 fill:#e3f2fd
  style J1 fill:#e3f2fd`

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

export default function AssetPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Asset Management Module</h1>

      <Callout title="Purpose" tone="blue">
        The Asset Management module tracks company assets from purchase through
        disposal, calculates depreciation for financial reporting, schedules
        maintenance, and maintains accurate balance sheet valuations.
      </Callout>

      <Section title="1. Overview">
        <div className={boxClass}>
          <SubHeading>Why Asset Management?</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Balance Sheet Accuracy:</strong> Assets and accumulated
              depreciation must be precisely tracked
            </li>
            <li>
              <strong>Tax Compliance:</strong> Depreciation is a tax deductible
              expense
            </li>
            <li>
              <strong>Asset Control:</strong> Prevent loss, theft, and
              unauthorized transfer
            </li>
            <li>
              <strong>Maintenance Planning:</strong> Schedule preventive
              maintenance to extend asset life
            </li>
            <li>
              <strong>Disposal Management:</strong> Calculate gain/loss when
              assets are sold or scrapped
            </li>
            <li>
              <strong>Capital Budgeting:</strong> Track asset investments and
              ROI
            </li>
          </ul>
        </div>
      </Section>

      <Section title="2. Asset Lifecycle Overview">
        <Mermaid chart={assetLifecycleChart} />
      </Section>

      <Section title="3. Asset Acquisition">
        <div className={boxClass}>
          <SubHeading>Creating Assets</SubHeading>
          <p className="mb-4">
            When you purchase a fixed asset (buildings, equipment, vehicles,
            computers), you must record it in the Asset module.
          </p>
          <p>
            <strong>Example:</strong> Purchase company vehicle for ₱800,000.
            Asset Module records this value and schedules depreciation over 5
            years.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Create Asset</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>Go to Assets → Asset</li>
            <li>Click New</li>
            <li>
              Fill in Asset Information:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Asset Name (descriptive: "Office Computer - HP-001")</li>
                <li>Asset Category (Equipment, Vehicle, Furniture, etc.)</li>
                <li>Asset Status (As on date)</li>
              </ul>
            </li>
            <li>
              Enter Asset Details:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Purchase Date</li>
                <li>Gross Amount (cost)</li>
                <li>Salvage value (residual value after useful life)</li>
                <li>Useful Life (years)</li>
              </ul>
            </li>
            <li>
              Configure Depreciation:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Depreciation Method (Straight Line recommended)</li>
                <li>Depreciation start date</li>
                <li>GL accounts for depreciation</li>
              </ul>
            </li>
            <li>Save and Submit</li>
            <li>System creates depreciation schedule automatically</li>
          </ol>
        </div>

        <Callout title="GL Impact on Purchase" tone="blue">
          When asset is created:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Dr. Fixed Asset (on Balance Sheet) or Dr. Accumulated
              Depreciation
            </li>
            <li>Cr. Bank / Payables (payment for asset)</li>
          </ul>
        </Callout>
      </Section>

      <Section title="4. Depreciation - The Core Concept">
        <div className={boxClass}>
          <SubHeading>What is Depreciation?</SubHeading>
          <p className="mb-4">
            <strong>Depreciation</strong> is the systematic allocation of an
            asset's cost over its useful life. As assets are used, they lose
            value over time.
          </p>
          <p>
            This is not actual cash outflow, but an accounting expense that
            reflects asset wear and tear.
          </p>
        </div>

        <Mermaid chart={depreciationExampleChart} />

        <div className={boxClass}>
          <SubHeading>Depreciation Formula (Straight Line)</SubHeading>
          <p className="text-center font-mono bg-gray-100 p-4 rounded-lg">
            Annual Depreciation = (Gross Amount - Salvage Value) / Useful Life
            Years
          </p>
          <p className="mt-4">
            <strong>Example:</strong> Computer costs ₱100,000, salvage value
            ₱10,000, useful life 5 years
          </p>
          <p className="text-center font-mono">
            = (₱100,000 - ₱10,000) / 5 = <strong>₱18,000 per year</strong>
          </p>
        </div>

        <Callout title="Depreciation Entry Posted Monthly/Quarterly/Annually" tone="green">
          Every depreciation period:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Dr. Depreciation Expense (P&L) / Cr. Accumulated Depreciation
              (BS)
            </li>
            <li>Example: Dr 18,000 Depreciation / Cr 18,000 Acc. Depreciation</li>
            <li>This reduces reported asset value on Balance Sheet</li>
            <li>This is a tax deductible expense</li>
          </ul>
        </Callout>

        <div className={boxClass}>
          <SubHeading>Depreciation Methods</SubHeading>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Straight Line:</strong> Equal depreciation each year
              (most common)
            </li>
            <li>
              <strong>Declining Balance:</strong> Higher depreciation in early
              years
            </li>
            <li>
              <strong>Double Declining Balance:</strong> Accelerated early
              depreciation
            </li>
          </ul>
        </div>
      </Section>

      <Section title="5. Asset Maintenance & Upkeep">
        <div className={boxClass}>
          <SubHeading>Maintenance Tracking</SubHeading>
          <p className="mb-4">
            Regular maintenance extends asset life and prevents costly
            breakdowns.
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Create Asset Maintenance Schedule:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Asset to maintain</li>
                <li>Maintenance frequency (monthly, quarterly, annual)</li>
                <li>Responsible person/vendor</li>
                <li>Expected cost</li>
              </ul>
            </li>
            <li>
              Log Maintenance Activities:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Date of maintenance</li>
                <li>Work performed</li>
                <li>Cost incurred</li>
                <li>Hours spent</li>
              </ul>
            </li>
            <li>
              Maintenance costs are expensed immediately (do not capitalize as
              part of asset cost)
            </li>
          </ol>
        </div>

        <Callout title="Maintenance Expense GL Entry" tone="blue">
          When maintenance is performed:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Dr. Repair & Maintenance Expense (P&L)</li>
            <li>Cr. Bank / Payables</li>
          </ul>
          Note: This differs from depreciation (which adjusts Balance Sheet
          asset value).
        </Callout>
      </Section>

      <Section title="6. Asset Transfer & Location Tracking">
        <div className={boxClass}>
          <SubHeading>Recording Asset Movements</SubHeading>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Physical Transfer:</strong> Move asset from one location
              to another
            </li>
            <li>
              <strong>Assignment:</strong> Assign to employee or cost center
            </li>
            <li>
              <strong>Accountability:</strong> Track who is responsible for
              asset
            </li>
          </ul>
          <p>
            <strong>Example:</strong> Office Computer moved from Head Office to
            Branch Office on Jan 15, 2025.
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Transfer Asset</SubHeading>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Open the Asset record</li>
            <li>Go to Finance Tab → Change Location</li>
            <li>Select new location and responsible person</li>
            <li>Note transfer date</li>
            <li>Save and Submit</li>
            <li>System maintains complete movement history</li>
          </ol>
        </div>
      </Section>

      <Section title="7. Asset Disposal">
        <div className={boxClass}>
          <SubHeading>Disposing of Fully Depreciated Assets</SubHeading>
          <p className="mb-4">
            When an asset reaches end of useful life or becomes unusable, it
            must be disposed of properly and removed from the Balance Sheet.
          </p>
          <p>
            <strong>Disposal Methods:</strong> Sell as second-hand, scrap,
            retire, exchange for new
          </p>
        </div>

        <div className={boxClass}>
          <SubHeading>Step-by-Step: Disposal Process</SubHeading>
          <ol className="list-decimal pl-6 space-y-2 mb-4">
            <li>
              Asset Status:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Fully depreciated (or continue depreciating to salvage)</li>
                <li>No longer in use</li>
              </ul>
            </li>
            <li>Go to Asset record → Create Disposal</li>
            <li>
              Fill Disposal Details:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Disposal date</li>
                <li>Disposal method (Sell, Scrap, etc.)</li>
                <li>Sale price (if sold)</li>
              </ul>
            </li>
            <li>
              System calculates Gain/Loss:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  Book Value = Gross Amount - Accumulated Depreciation
                </li>
                <li>Gain/Loss = Sale Price - Book Value</li>
              </ul>
            </li>
            <li>
              GL Entries created:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Dr. Bank (if sold)</li>
                <li>Dr. Accumulated Depreciation</li>
                <li>
                  Dr/Cr. Gain/Loss on Disposal (depends on profit or loss)
                </li>
                <li>Cr. Fixed Asset</li>
              </ul>
            </li>
            <li>Submit disposal</li>
            <li>Asset removed from system and Balance Sheet</li>
          </ol>
        </div>

        <Callout title="Gain/Loss Example" tone="amber">
          Computer purchased 5 years ago for ₱100,000:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Accumulated Depreciation: ₱90,000 (5 years × ₱18,000)</li>
            <li>Book Value: ₱100,000 - ₱90,000 = ₱10,000</li>
            <li>Sold for: ₱12,000</li>
            <li className="font-semibold">Gain on Disposal: ₱2,000 (BS gain)</li>
          </ul>
        </Callout>
      </Section>

      <Section title="8. Asset Reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Asset Register"
            description="Complete list of all assets with current values."
            bullets={[
              'Gross amount',
              'Accumulated depreciation',
              'Book value',
              'Location',
            ]}
          />
          <StepCard
            title="Depreciation Schedule"
            description="Track depreciation over asset life."
            bullets={[
              'Annual depreciation amounts',
              'Accumulated depreciation progression',
              'Book value year-by-year',
            ]}
          />
          <StepCard
            title="Asset Movement Report"
            description="Track asset transfers and assignments."
            bullets={[
              'From location to location',
              'Assigned to / from employees',
              'Transfer dates and history',
            ]}
          />
          <StepCard
            title="Disposal Analysis"
            description="Gains and losses from asset sales."
            bullets={[
              'Disposal date and method',
              'Sale price vs book value',
              'Gain or loss amount',
            ]}
          />
        </div>
      </Section>

      <Section title="9. Key Takeaways">
        <div className={boxClass}>
          <ul className="space-y-3 text-gray-700">
            <li>
              ✅ <strong>Categorize Assets:</strong> Organize by type for
              tracking and reporting
            </li>
            <li>
              ✅ <strong>Set Correct Useful Life:</strong> Impacts tax and
              financial reporting
            </li>
            <li>
              ✅ <strong>Schedule Maintenance:</strong> Preventive maintenance
              extends life
            </li>
            <li>
              ✅ <strong>Track Locations:</strong> Account for all assets
              always
            </li>
            <li>
              ✅ <strong>Monitor Accumulated Depreciation:</strong> Affects
              Balance Sheet presentation
            </li>
            <li>
              ✅ <strong>Calculate Gain/Loss Correctly:</strong> Book value
              matters at disposal
            </li>
          </ul>
        </div>
      </Section>
    </div>
  )
}