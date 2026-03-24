import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const inventoryFlowchart = `flowchart TD
%% ===========================
%% Stock / Inventory Module (ERPNext v15)
%% ===========================

%% Masters / Items Catalogue
A[Item] --> B[Item Group]
B --> C[Product Bundle]
C --> D[Shipping Rule]
D --> E[Item Alternative]
E --> F[Item Manufacturer]

%% Stock Settings / Configuration
G[Stock Settings] --> H[Warehouse]
H --> I[Unit of Measure]
I --> J[Item Variant Settings]
J --> K[Brand]
K --> L[Item Attribute]
L --> M[UOM Conversion Factor]

%% Stock Transactions
N[Material Request] --> O[Stock Entry]
O --> P{Transaction Type}
P -->|Delivery| Q[Delivery Note]
P -->|Receipt| R[Purchase Receipt]
P -->|Transfer Pick| S[Pick List Delivery Trip]
R --> T[Update Stock Ledger Stock Balance]
Q --> T
S --> T

%% Serial No / Batch Tracking
U[Serial No] --> V[Serial No Status]
V --> W[Installation Note]
W --> X[Serial No Warranty Expiry]
X --> Y[Serial No Service Contract Expiry]

Z[Batch] --> AA[Batch Status]
AA --> AB[Batch Item Expiry Status]

%% Tools / Stock Maintenance
AC[Stock Reconciliation] --> AD[Update Stock Ledger]
AE[Landed Cost Voucher] --> AD
AF[Packing Slip] --> T
AG[Quality Inspection] --> AH[Quality Inspection Template]
AI[Quick Stock Balance] --> AJ[Stock Balance Verification]

%% Stock Reports
T --> AK[Stock Ledger]
T --> AL[Stock Balance]
T --> AM[Stock Projected Qty]
T --> AN[Stock Summary]
T --> AO[Stock Ageing]
T --> AP[Item Price Stock]
T --> AQ[Warehouse Wise Stock Balance]

%% Key Reports
T --> AR[Stock Analytics]
Q --> AS[Delivery Note Trends]
R --> AT[Purchase Receipt Trends]
O --> AU[Sales Order Analysis]
O --> AV[Purchase Order Analysis]
T --> AW[Item Shortage Report]
Z --> AX[Batch-Wise Balance History]

%% Other Reports
N --> AY[Requested Items To Be Transferred]
Z --> AZ[Batch Item Expiry Status]
K --> BA[Item Prices]
B --> BB[Itemwise Recommended Reorder Level]
J --> BC[Item Variant Details]
AU --> BD[Subcontracted Raw Materials To Be Transferred]
AV --> BE[Subcontracted Item To Be Received]

%% Optional Trigger Box
T --> BF[Triggers Accounting Inventory Updates]`

export default function InventoryPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Inventory Module</h1>
      
      <Mermaid chart={inventoryFlowchart} />
      
      <Section title="Overview">
        <p>
          The Inventory module in ERPNext provides comprehensive stock management capabilities including item masters, 
          warehouse configuration, stock transactions, serial/batch tracking, and powerful reporting tools. It ensures 
          real-time visibility into inventory levels and automatically updates stock ledger and balances for all transactions.
        </p>
      </Section>
      
      <Section title="1. Masters / Items Catalogue">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Item"
            description="The core product/service entity in the system. Each item has attributes like SKU, description, valuation method, and stock units."
            bullets={[
              'Define item code, name, and description',
              'Set default warehouse and UOM',
              'Configure valuation methods (FIFO, Moving Average, Weighted Average)',
              'Enable serial number and batch tracking',
            ]}
          />
          <StepCard
            title="Item Group"
            description="Categorize items for reporting and organizational purposes. Supports hierarchical grouping."
            bullets={[
              'Create parent-child item groups',
              'Set default attributes for group items',
              'Use for filtering and reporting',
            ]}
          />
          <StepCard
            title="Product Bundle"
            description="Bundle multiple items together as a single sellable product."
            bullets={[
              'Define bundle with component items',
              'Set quantities for each component',
              'Auto-update inventory on bundle sale',
            ]}
          />
          <StepCard
            title="Item Alternative"
            description="Define substitute items that can be used when the primary item is unavailable."
            bullets={[
              'Link alternative items',
              'Set preference order',
              'Auto-suggest alternatives in transactions',
            ]}
          />
          <StepCard
            title="Item Manufacturer"
            description="Track manufacturer details for items."
            bullets={[
              'Store manufacturer name and part number',
              'Link to items for traceability',
            ]}
          />
          <StepCard
            title="Shipping Rule"
            description="Define shipping costs based on destination and weight."
            bullets={[
              'Set shipping rates by zone',
              'Configure weight-based calculations',
              'Link to sales transactions',
            ]}
          />
        </div>
      </Section>
      
      <Section title="2. Stock Settings / Configuration">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Stock Settings"
            description="Global configuration for inventory operations."
            bullets={[
              'Set default valuation method',
              'Configure auto-update stock settings',
              'Enable barcode system',
              'Set default warehouse for transactions',
            ]}
          />
          <StepCard
            title="Warehouse"
            description="Physical or logical storage locations for inventory."
            bullets={[
              'Create warehouse hierarchy',
              'Set default bins/shelves',
              'Configure warehouse-specific settings',
              'Track warehouse-wise stock levels',
            ]}
          />
          <StepCard
            title="Unit of Measure (UOM)"
            description="Define different units for buying and selling items."
            bullets={[
              'Create UOMs (each, box, kg, etc.)',
              'Set conversion factors between UOMs',
              'Configure default buy/sell UOMs per item',
            ]}
          />
          <StepCard
            title="Item Variant Settings"
            description="Configure how item variants (size, color) are managed."
            bullets={[
              'Define item attributes (Size, Color, Material)',
              'Create variant based on attributes',
              'Auto-generate variant codes',
            ]}
          />
          <StepCard
            title="Brand"
            description="Organize items by brand for marketing and reporting."
            bullets={[
              'Create brand master',
              'Add brand logo and description',
              'Filter reports by brand',
            ]}
          />
          <StepCard
            title="Item Attribute"
            description="Define attributes for creating item variants."
            bullets={[
              'Create attributes (Color, Size, Material)',
              'Set attribute values',
              'Configure variant generation rules',
            ]}
          />
        </div>
      </Section>
      
      <Section title="3. Stock Transactions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Material Request"
            description="Internal request for stock movement or procurement."
            bullets={[
              'Create request for items',
              'Link to production or purchase',
              'Track request status',
              'Auto-create purchase/s transfer based on requirement',
            ]}
          />
          <StepCard
            title="Stock Entry"
            description="General stock movements including manufacturing and transfers."
            bullets={[
              'Record material receipts',
              'Track manufacturing inputs/outputs',
              'Manage inter-warehouse transfers',
              'Record scrap and waste',
            ]}
          />
          <StepCard
            title="Delivery Note"
            description="Document for outgoing shipments to customers."
            bullets={[
              'Create from sales order',
              'Verify picked quantities',
              'Update stock reservations',
              'Generate packing slip',
            ]}
          />
          <StepCard
            title="Purchase Receipt"
            description="Document for incoming stock from suppliers."
            bullets={[
              'Receive against purchase order',
              'Verify quantities and quality',
              'Record batch/serial numbers',
              'Update stock valuation',
            ]}
          />
          <StepCard
            title="Pick List"
            description="Document for picking items from warehouse for delivery."
            bullets={[
              'Generate from sales order',
              'Guide warehouse picking',
              'Track picked quantities',
              'Verify before delivery',
            ]}
          />
          <StepCard
            title="Delivery Trip"
            description="Plan and track delivery routes."
            bullets={[
              'Plan delivery stops',
              'Assign delivery notes',
              'Track driver and vehicle',
              'Record delivery completion',
            ]}
          />
        </div>
      </Section>
      
      <Section title="4. Serial No / Batch Tracking">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Serial No"
            description="Track individual items with unique serial numbers."
            bullets={[
              'Generate or import serial numbers',
              'Track status (In Stock, Delivered, In Transit)',
              'Record installation notes',
              'Track warranty expiry dates',
              'Manage service contract expiry',
            ]}
          />
          <StepCard
            title="Batch"
            description="Track groups of items with common characteristics."
            bullets={[
              'Create batches with unique IDs',
              'Track batch status',
              'Monitor expiry dates',
              'Track batch-wise inventory',
            ]}
          />
        </div>
      </Section>
      
      <Section title="5. Tools / Stock Maintenance">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Stock Reconciliation"
            description="Adjust stock quantities to match physical count."
            bullets={[
              'Compare system vs physical stock',
              'Create adjustment entries',
              'Update stock ledger',
              'Track reconciliation history',
            ]}
          />
          <StepCard
            title="Landed Cost Voucher"
            description="Allocate additional costs to inventory items."
            bullets={[
              'Add shipping, customs, handling costs',
              'Distribute costs across items',
              'Update item valuation',
            ]}
          />
          <StepCard
            title="Packing Slip"
            description="Document items packed for delivery."
            bullets={[
              'Generate from delivery note',
              'List packed items with quantities',
              'Include packaging details',
            ]}
          />
          <StepCard
            title="Quality Inspection"
            description="Verify item quality during receipt or delivery."
            bullets={[
              'Create inspection templates',
              'Define acceptance criteria',
              'Record inspection results',
              'Block items failing inspection',
            ]}
          />
          <StepCard
            title="Quick Stock Balance"
            description="Rapidly check current stock levels."
            bullets={[
              'View stock by item/warehouse',
              'Check reserved quantities',
              'View projected stock',
            ]}
          />
        </div>
      </Section>
      
      <Section title="6. Reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Stock Ledger"
            description="Detailed transaction history for each item."
            bullets={[
              'View all stock movements',
              'Filter by date, warehouse, item',
              'Export to Excel/PDF',
            ]}
          />
          <StepCard
            title="Stock Balance"
            description="Current stock quantities and values."
            bullets={[
              'View current stock levels',
              'Check valuation amounts',
              'Filter by warehouse/item group',
            ]}
          />
          <StepCard
            title="Stock Projected Qty"
            description="Forecast of available stock considering pending transactions."
            bullets={[
              'View projected stock levels',
              'Include pending receipts and deliveries',
              'Help prevent stockouts',
            ]}
          />
          <StepCard
            title="Stock Ageing"
            description="Analyze how long items have been in inventory."
            bullets={[
              'View stock by age buckets',
              'Identify slow-moving items',
              'Plan clearance sales',
            ]}
          />
          <StepCard
            title="Stock Analytics"
            description="Comprehensive analytics dashboard for inventory."
            bullets={[
              'Visual charts and graphs',
              'Trend analysis',
              'Stock turnover metrics',
            ]}
          />
          <StepCard
            title="Item Shortage Report"
            description="Items below reorder level."
            bullets={[
              'Identify stockouts',
              'Trigger purchase suggestions',
              'Prevent fulfillment delays',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Set up proper warehouse structure for efficient operations</li>
          <li>✓ Use barcode scanning for accurate stock tracking</li>
          <li>✓ Run regular stock reconciliation to ensure inventory accuracy</li>
          <li>✓ Set reorder levels to trigger automatic material requests</li>
          <li>✓ Use batch and serial number tracking for traceability</li>
          <li>✓ Configure quality inspection for incoming and outgoing items</li>
          <li>✓ Monitor stock ageing to identify slow-moving inventory</li>
          <li>✓ All transactions automatically update Stock Ledger & Stock Balance</li>
          <li>✓ Stock transactions trigger accounting & inventory updates</li>
        </ul>
      </Section>
    </div>
  )
}
