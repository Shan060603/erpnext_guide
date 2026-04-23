import Link from 'next/link'
import Section from '@/components/Section'

const boxClass =
  'print-block bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6'

const cardClass =
  'print-block bg-white rounded-xl shadow-sm border border-gray-200 p-5'

const globalRules = [
  'No negative stock allowed.',
  'All transactions must follow chronological dates.',
  'No manual journal entries unless explicitly required.',
  'Always use ERP documents such as Invoice, Payment Entry, and Stock Entry.',
  'Intercompany transactions must follow the standard buying and selling flow.',
  'Currency differences are recognized only at payment.',
  'Projects must be linked to transactions where applicable.',
  'Commission must strictly follow defined rules with no overrides.',
]

const integrityRules = [
  'Final results must be achieved through system-generated transactions only.',
  'Do not manually adjust values to force targets.',
  'Outputs must come from proper configuration, correct document flow, and correct timing.',
  'If numbers do not match, trace and fix the setup or process instead of adjusting totals.',
]

const businessStructure = [
  {
    title: 'Company A — ABC Manufacturing Inc.',
    points: [
      'Manufactures finished goods.',
      'Imports raw materials in USD.',
      'Handles foreign purchasing, RM to WIP to FG flow, BOM and production, and intercompany sales to Company B.',
    ],
  },
  {
    title: 'Company B — ABC Trading & Services Inc.',
    points: [
      'Buys products from Company A and sells to customers.',
      'Provides installation and services.',
      'Handles CRM, customer sales, projects, support, and payroll for sales and technicians.',
    ],
  },
]

const scopeAreas = [
  'Accounting: GL, VAT, AR/AP, FX gain or loss, and financial statements.',
  'Inventory: Raw materials, WIP, finished goods, and stock movements.',
  'Manufacturing: BOM, work orders, and production flow.',
  'Sales and CRM: Leads, opportunities, quotations, sales orders, and sales invoices.',
  'Purchasing: Local intercompany buying and foreign USD procurement.',
  'HR and Payroll: Attendance-based salary, allowances, deductions, cash advances, and commission rules.',
  'Projects: Exactly 2 projects total across January to March.',
  'Support: Exactly 3 issues total across January, February, and March.',
]

const controlTotals = [
  'Company A Output VAT: ₱36,000',
  'Company B Input VAT: ₱36,000',
  'Company B Output VAT: ₱27,000',
  'Company B Net VAT Payable: ₱9,000',
  'Company A FX Loss: ₱7,000',
  'Company B Ending Stock: 170 units',
  'Company A Inventory: ₱222,500',
  'Before March clearing: A/R of Company A = ₱186,000 and A/P of Company B = ₱186,000',
  'After March clearing: both A/R and A/P = ₱0 through Payment Entry only',
  'External Project Revenue: ₱30,000',
  'Support Cost Impact: ₱6,000',
]

const daySummaries = [
  {
    day: 'Day 1',
    title: 'System Foundation',
    objective:
      'Configure both companies, chart of accounts, cash and bank setup, VAT, FX, projects, support, employees, and warehouses with no operational transactions yet.',
    highlights: [
      'Create ABC Manufacturing Inc. and ABC Trading & Services Inc. with PHP and Jan 1 fiscal year start.',
      'Enable Accounting, Stock, Manufacturing, HR & Payroll, Projects, and Support.',
      'Set up the locked chart of accounts for assets, liabilities, equity, income, and expenses.',
      'Record opening balances only.',
      'Enable multi-currency and set USD to PHP at 55 for January.',
      'Set stock valuation to Moving Average and keep negative stock off.',
      'Create 10 customers, 10 suppliers, the foreign supplier Global Materials Inc., 10 employees per company, company warehouses, and exactly 2 projects.',
    ],
    checks: [
      'Balance Sheet matches opening balances.',
      'VAT accounts are correctly tagged.',
      'USD and the foreign supplier are ready.',
      'Support is enabled and the 2 projects exist.',
      'No transactions exist beyond opening entries.',
    ],
  },
  {
    day: 'Day 2',
    title: 'Items, Pricing & Structure',
    objective:
      'Create the full item catalog, configure UOM and price lists, assign correct accounts, and enter Company A opening raw material stock.',
    highlights: [
      'Create Item Groups for Raw Materials, Finished Goods, Services, and Expenses.',
      'Create UOMs for Nos, Kg, Hour, and optional Lot.',
      'Create all 40 items: 5 raw materials, 5 finished goods, 5 service items, and 25 non-stock expense items.',
      'Assign item accounting properly: sales items need an Income Account and expense items need an Expense Account.',
      'Create Standard Selling and Standard Buying price lists in PHP and set them as default.',
      'Assign item prices so transactions pull from price lists rather than manual amounts.',
      'Enter Company A opening stock through Stock Entry (Opening) only for raw materials totaling about ₱268,000.',
    ],
    checks: [
      'Item types, UOM, and default accounts are correct, including Income Account for sales items and Expense Account for expense items.',
      'Opening stock is in the correct warehouse with no VAT included.',
      'Stock Balance report shows correct quantities and no negative stock.',
    ],
  },
  {
    day: 'Day 3',
    title: 'Foreign Purchase, BOM & Manufacturing',
    objective:
      'Run Company A foreign procurement, apply landed cost, create the BOM, produce exactly 300 units of FG-001, and preserve final inventory at ₱222,500 after production.',
    highlights: [
      'Buy RM-001 and RM-002 from Global Materials Inc. for $3,500 at PHP 55.',
      'Post Purchase Order, Purchase Receipt on Jan 8, and Purchase Invoice on Jan 9 for ₱192,500.',
      'Add landed costs of ₱20,000 freight and ₱10,000 customs through Landed Cost Voucher.',
      'Create the FG-001 BOM with RM-001 quantity 2, RM-002 quantity 3, and labor at ₱500 per unit.',
      'Create a Work Order for exactly 300 units and process RM to WIP and WIP to FG.',
      'Pay the USD supplier on Feb 15 at PHP 57 and recognize a ₱7,000 FX loss through Payment Entry.',
    ],
    checks: [
      'Finished goods = 300 units.',
      'Raw materials still have remaining balance.',
      'Total inventory value = ₱222,500 after production.',
      'FX Loss = ₱7,000 with no manual FX journal.',
    ],
  },
  {
    day: 'Day 4',
    title: 'Full Dual-Company Flow',
    objective:
      'Execute intercompany sales and buying, customer sales, a cash sale, a return, and commission while preserving VAT, inventory, and open AR/AP targets.',
    highlights: [
      'Company B receives and invoices 300 units from Company A for ₱300,000 plus ₱36,000 input VAT.',
      'Company A delivers and invoices 300 units to Company B for ₱300,000 plus ₱36,000 output VAT.',
      'Company B makes a partial payment of ₱150,000 on Jan 20, leaving ₱186,000 open for both A/R and A/P.',
      'Company B sells 70 units to Customer 1 and 30 units to Customer 2 through Delivery Notes and Sales Invoices.',
      'Company B records a direct cash sale of 50 units on Jan 18.',
      'Company B processes a return of 20 units from Customer 1 through a linked credit note.',
      'Commission is triggered only on the ₱75,000 cash sale at 5%, for ₱3,750.',
    ],
    checks: [
      'Company B ending stock = 170 units valued at ₱170,000.',
      'Company B January output VAT = ₱23,400.',
      'Company A A/R = ₱186,000 and Company B A/P = ₱186,000 after the partial payment.',
      'Commission applies only to collected, commissionable revenue.',
    ],
  },
  {
    day: 'Day 5',
    title: 'HR, Payroll, Attendance & Employee Finance',
    objective:
      'Configure salary components and structures, process payroll, clear payroll and government payables, and separate project-linked installation bonuses from salary expense.',
    highlights: [
      'Target recognized monthly payroll is ₱132,000 for Company A and ₱135,000 for Company B.',
      'Government deductions are ₱1,400 per employee per month, or ₱14,000 per company monthly.',
      'Run two cutoffs per month with payroll payable and statutory liabilities split correctly.',
      'Pay payroll on Jan 15 and Jan 31 and remit government deductions so related payables return to zero.',
      'Record a ₱10,000 cash advance and a ₱4,000 employee expense claim using Accounts Payable.',
      'Map Installation Bonus to Cost of Services only for the external project.',
    ],
    checks: [
      'Payroll totals match the control targets.',
      'Payroll Payable = ₱0 after payment.',
      'SSS, PhilHealth, and Pag-IBIG payables = ₱0 after remittance.',
      'Installation bonus is not double-counted in Salaries Expense and Cost of Services.',
    ],
  },
  {
    day: 'Day 6',
    title: 'FX, AR/AP Aging & Bank Reconciliation',
    objective:
      'Recognize FX loss at payment, let aging move naturally over time, clear intercompany balances only in March, and complete bank and petty cash controls.',
    highlights: [
      'Use the Feb 15 USD payment to recognize the ₱7,000 FX loss.',
      'Let Company A A/R age from Jan 10 through Mar 15 before collection.',
      'Clear Company A A/R and Company B A/P on Mar 15 only.',
      'Record bank charges and interest income and use the Bank Reconciliation tool rather than forced balancing.',
      'Maintain petty cash through an imprest method with funding, spending, and replenishment.',
    ],
    checks: [
      'FX Loss remains exactly ₱7,000.',
      'AR/AP are cleared only in March.',
      'Aging reports show progression rather than instant settlement.',
      'Bank accounts and petty cash are separately and properly controlled.',
    ],
  },
  {
    day: 'Day 7',
    title: 'Financial Statements, Validation & Performance',
    objective:
      'Close the periods, validate inventory, VAT, FX, payroll, and intercompany balances, and confirm the final March 31 targets exactly.',
    highlights: [
      'Close Jan 31, Feb 28, and Mar 31 in order.',
      'Post monthly depreciation of ₱5,000 for Jan to Mar, totaling ₱15,000.',
      'Validate stock ledger against the GL and confirm Moving Average valuation.',
      'Review final Balance Sheet and Income Statement by company.',
      'Run VAT, FX, intercompany, inventory, payroll, and bank validations.',
    ],
    checks: [
      'Financial statements match the locked values exactly.',
      'Company A inventory = ₱222,500.',
      'Company B inventory = 170 units worth ₱170,000.',
      'VAT payable for Company B = ₱9,000.',
      'No negative stock and AR/AP = ₱0.',
    ],
  },
]

const checklist = [
  {
    day: 'Day 1',
    title: 'System Foundation',
    items: [
      'Create ABC Manufacturing Inc. and ABC Trading & Services Inc.',
      'Set currency to PHP and fiscal year start to Jan 1.',
      'Enable Accounting, Stock, Manufacturing, HR & Payroll, Projects, and Support.',
      'Create assets, liabilities, equity, income, and expense accounts.',
      'Verify A/R is Receivable, A/P is Payable, and VAT accounts are properly tagged.',
      'Create BDO Checking, BPI Savings, and Petty Cash.',
      'Verify Petty Cash is Cash type and not Bank type.',
      'Post opening balances for both companies through Opening Entry.',
      'Verify the Balance Sheet matches exactly.',
      'Enable multi-currency and add USD = 55 for January.',
      'Set Moving Average valuation and keep Allow Negative Stock off.',
      'Create VAT templates for Output VAT 12% and Input VAT 12%.',
      'Create 10 customers, 10 suppliers, and Global Materials Inc. in USD.',
      'Create 10 employees per company.',
      'Create RM, WIP, and FG warehouses for Company A and Main Warehouse for Company B.',
      'Create the customer installation project and the internal operations project.',
      'Confirm there are no transactions except opening entries.',
    ],
  },
  {
    day: 'Day 2',
    title: 'Items & Stock',
    items: [
      'Create Item Groups for Raw Materials, Finished Goods, Services, and Expenses.',
      'Create UOMs for Nos, Kg, and Hour.',
      'Create all 40 items with correct type, UOM, and accounts, including Expense Account for expense items and Income Account for sales items.',
      'Create Standard Selling and Standard Buying price lists and set them as default.',
      'Assign RM buying prices, FG buying and selling prices, and service selling prices.',
      'Enter Company A opening stock through Stock Entry (Opening) only.',
      'Verify opening stock totals about ₱268,000 with no VAT.',
      'Run Stock Balance and confirm quantities are correct with no negative stock.',
    ],
  },
  {
    day: 'Day 3',
    title: 'Procurement & Manufacturing',
    items: [
      'Create the foreign supplier quotation, purchase order, purchase receipt, and purchase invoice.',
      'Verify imported inventory posts at ₱192,500.',
      'Create a Landed Cost Voucher for ₱20,000 freight and ₱10,000 customs.',
      'Verify imported material value becomes ₱222,500 before production.',
      'Create the FG-001 BOM and set it as default.',
      'Create a work order for exactly 300 units.',
      'Process material transfer from RM to WIP and manufacture from WIP to FG.',
      'Verify FG = 300 units, RM still has balance, and total inventory remains ₱222,500.',
      'Create the Feb 15 payment entry at rate 57 and verify FX Loss = ₱7,000.',
    ],
  },
  {
    day: 'Day 4',
    title: 'Sales & Intercompany',
    items: [
      'Create Company B purchase receipt for 300 units and the purchase invoice.',
      'Verify Company B inventory = ₱300,000 and Input VAT = ₱36,000.',
      'Create Company A delivery note and sales invoice for the intercompany sale.',
      'Verify Company A A/R = ₱336,000 and Output VAT = ₱36,000.',
      'Create the Jan 20 partial payment entry for ₱150,000.',
      'Verify intercompany balances are both ₱186,000 after the partial payment.',
      'Create customer delivery notes and sales invoices in Company B.',
      'Create the direct cash sale sales invoice.',
      'Create the linked credit note for the customer return.',
      'Verify ending stock = 170 units and VAT = ₱23,400.',
      'Record commission only on the cash sale.',
    ],
  },
  {
    day: 'Day 5',
    title: 'Payroll',
    items: [
      'Create salary components for earnings and deductions.',
      'Assign salary structures to all employees.',
      'Process payroll for Jan 1 to 15 and Jan 16 to 31.',
      'Verify Company A payroll = ₱132,000 and Company B payroll = ₱135,000.',
      'Pay payroll and remit government deductions.',
      'Verify payroll and government payables return to zero.',
      'Record the cash advance and the employee expense claim.',
    ],
  },
  {
    day: 'Day 6',
    title: 'FX, AR/AP & Bank',
    items: [
      'Collect ₱186,000 A/R on Mar 15 for Company A.',
      'Pay ₱186,000 A/P on Mar 15 for Company B.',
      'Verify both A/R and A/P are zero.',
      'Record bank charges and interest income.',
      'Perform bank reconciliation and leave outstanding checks unmatched.',
      'Fund petty cash, record petty cash expenses, and replenish the fund correctly.',
    ],
  },
  {
    day: 'Day 7',
    title: 'Finalization',
    items: [
      'Close Jan, Feb, and Mar in order.',
      'Post monthly depreciation entries.',
      'Verify Company A sales = ₱300,000, COGS = ₱192,000, and net loss = ₱289,000.',
      'Verify Company B total revenue = ₱255,000 and net loss = ₱305,000.',
      'Verify Company A inventory = ₱222,500.',
      'Verify Company B inventory = 170 units.',
      'Verify VAT payable = ₱9,000, FX Loss = ₱7,000, AR/AP = ₱0, and no negative stock exists.',
    ],
  },
]

const day1Companies = [
  {
    company: 'ABC Manufacturing Inc.',
    country: 'Philippines',
    currency: 'PHP',
    fiscal_year_start: 'Jan 1',
    group_company: 'Off',
  },
  {
    company: 'ABC Trading & Services Inc.',
    country: 'Philippines',
    currency: 'PHP',
    fiscal_year_start: 'Jan 1',
    group_company: 'Off',
  },
]

const coaRows = [
  { category: 'Assets', accounts: 'Cash, Petty Cash, Bank – BDO Checking, Bank – BPI Savings, Accounts Receivable, Inventory, Work In Progress (WIP), Employee Advances' },
  { category: 'Liabilities', accounts: 'Accounts Payable, VAT Payable (Output VAT), VAT Receivable (Input VAT), Payroll Payable, SSS Payable, Pag-IBIG Payable, PhilHealth Payable' },
  { category: 'Equity', accounts: "Owner’s Capital / Retained Earnings" },
  { category: 'Income', accounts: 'Sales Revenue, Service Revenue, Interest Income' },
  { category: 'Expenses', accounts: 'Cost of Goods Sold, Cost of Services, Salaries Expense, Utilities Expense, Rent Expense, FX Gain/Loss, Bank Charges Expense, Sales Returns and Allowances' },
]

const openingEntries = [
  { company: 'ABC Manufacturing Inc.', debit_1: 'Cash ₱200,000', debit_2: 'Bank ₱800,000', credit: 'Equity ₱1,000,000' },
  { company: 'ABC Trading & Services Inc.', debit_1: 'Cash ₱150,000', debit_2: 'Bank ₱600,000', credit: 'Equity ₱750,000' },
]

const day1MasterData = [
  { type: 'Customers', input: 'Create 10 customers total. Customer 1 and Customer 2 are used in Day 4 sales.' },
  { type: 'Suppliers', input: 'Create 10 suppliers total.' },
  { type: 'Foreign Supplier', input: 'Global Materials Inc. with Currency = USD' },
  { type: 'Projects', input: 'Customer 1 Installation Project (Revenue) and Internal Operations Improvement (Cost)' },
  { type: 'Warehouses', input: 'Company A: Raw Materials Warehouse, WIP Warehouse, Finished Goods Warehouse. Company B: Main Warehouse.' },
]

const rawMaterialRows = [
  { code: 'RM-001', name: 'Steel Component', uom: 'Kg', buying: '110', default_warehouse: 'Raw Materials Warehouse' },
  { code: 'RM-002', name: 'Plastic Resin', uom: 'Kg', buying: '85', default_warehouse: 'Raw Materials Warehouse' },
  { code: 'RM-003', name: 'Aluminum Sheet', uom: 'Kg', buying: '95', default_warehouse: 'Raw Materials Warehouse' },
  { code: 'RM-004', name: 'Copper Wiring', uom: 'Kg', buying: '120', default_warehouse: 'Raw Materials Warehouse' },
  { code: 'RM-005', name: 'Packaging Material', uom: 'Nos', buying: '20', default_warehouse: 'Raw Materials Warehouse' },
]

const finishedGoodsRows = [
  { code: 'FG-001', name: 'Industrial Panel', reference_cost: '640', selling: '1,000', default_warehouse: 'Finished Goods Warehouse' },
  { code: 'FG-002', name: 'Control Box', reference_cost: '700', selling: '1,100', default_warehouse: 'Finished Goods Warehouse' },
  { code: 'FG-003', name: 'Power Unit', reference_cost: '800', selling: '1,300', default_warehouse: 'Finished Goods Warehouse' },
  { code: 'FG-004', name: 'Sensor Kit', reference_cost: '500', selling: '900', default_warehouse: 'Finished Goods Warehouse' },
  { code: 'FG-005', name: 'Wiring Assembly', reference_cost: '400', selling: '800', default_warehouse: 'Finished Goods Warehouse' },
]

const serviceRows = [
  { name: 'Installation Service', rate: '1,000/hr', uom: 'Hour', income_account: 'Service Revenue' },
  { name: 'Maintenance Service', rate: '800/hr', uom: 'Hour', income_account: 'Service Revenue' },
  { name: 'Consulting Service', rate: '1,200/hr', uom: 'Hour', income_account: 'Service Revenue' },
  { name: 'Customization Service', rate: '1,500/hr', uom: 'Hour', income_account: 'Service Revenue' },
  { name: 'Training Service', rate: '900/hr', uom: 'Hour', income_account: 'Service Revenue' },
]

const openingStockRows = [
  { item: 'RM-001', qty: '1,000', rate: '100', value: '100,000' },
  { item: 'RM-002', qty: '1,000', rate: '80', value: '80,000' },
  { item: 'RM-003', qty: '500', rate: '90', value: '45,000' },
  { item: 'RM-004', qty: '300', rate: '110', value: '33,000' },
  { item: 'RM-005', qty: '500', rate: '20', value: '10,000' },
]

const day3PurchaseRows = [
  { item: 'RM-001', qty: '1,000', rate: '$2.00', amount: '$2,000' },
  { item: 'RM-002', qty: '1,000', rate: '$1.50', amount: '$1,500' },
]

const landedCostRows = [
  { component: 'Purchase', amount: '₱192,500' },
  { component: 'Freight', amount: '₱20,000' },
  { component: 'Customs', amount: '₱10,000' },
  { component: 'Total Imported Material Value', amount: '₱222,500' },
]

const bomRows = [
  { component: 'RM-001', qty_per_unit: '2', total_for_300_units: '600' },
  { component: 'RM-002', qty_per_unit: '3', total_for_300_units: '900' },
  { component: 'Labor', qty_per_unit: '₱500', total_for_300_units: '₱150,000 operating cost basis' },
]

const companyBCustomerSales = [
  { date: 'Jan 14 Delivery / Jan 15 Invoice', customer: 'Customer 1', qty: '70', sales: '₱105,000', vat: '₱12,600' },
  { date: 'Jan 14 Delivery / Jan 15 Invoice', customer: 'Customer 2', qty: '30', sales: '₱45,000', vat: '₱5,400' },
  { date: 'Jan 18', customer: 'Cash Sale', qty: '50', sales: '₱75,000', vat: '₱9,000' },
  { date: 'Jan 22', customer: 'Customer 1 Return', qty: '(20)', sales: '(₱30,000)', vat: '(₱3,600)' },
]

const companyAEmployees = [
  { id: 'A-001', name: 'Juan Dela Cruz', daily_rate: '900', monthly: '19,800' },
  { id: 'A-002', name: 'Maria Santos', daily_rate: '950', monthly: '20,900' },
  { id: 'A-003', name: 'Pedro Reyes', daily_rate: '850', monthly: '18,700' },
  { id: 'A-004', name: 'Ana Lopez', daily_rate: '1,000', monthly: '22,000' },
  { id: 'A-005', name: 'Carlo Mendoza', daily_rate: '1,100', monthly: '24,200' },
  { id: 'A-006', name: 'Luis Garcia', daily_rate: '900', monthly: '19,800' },
  { id: 'A-007', name: 'Rosa Bautista', daily_rate: '950', monthly: '20,900' },
  { id: 'A-008', name: 'Mark Torres', daily_rate: '850', monthly: '18,700' },
  { id: 'A-009', name: 'Nina Flores', daily_rate: '1,050', monthly: '23,100' },
  { id: 'A-010', name: 'Joel Ramos', daily_rate: '1,200', monthly: '26,400' },
]

const companyBEmployees = [
  { id: 'B-001', name: 'Mark Sales', dept: 'Sales', daily_rate: '1,000', monthly: '22,000' },
  { id: 'B-002', name: 'Jane Cruz', dept: 'Sales', daily_rate: '1,100', monthly: '24,200' },
  { id: 'B-003', name: 'Paul Lim', dept: 'Sales', daily_rate: '950', monthly: '20,900' },
  { id: 'B-004', name: 'Lisa Ong', dept: 'Sales', daily_rate: '1,200', monthly: '26,400' },
  { id: 'B-005', name: 'Eric Tan', dept: 'Ops', daily_rate: '1,000', monthly: '22,000' },
  { id: 'B-006', name: 'Ryan Go', dept: 'Ops', daily_rate: '1,050', monthly: '23,100' },
  { id: 'B-007', name: 'Alex Yu', dept: 'Ops', daily_rate: '1,100', monthly: '24,200' },
  { id: 'B-008', name: 'Karen Admin', dept: 'Admin', daily_rate: '900', monthly: '19,800' },
  { id: 'B-009', name: 'Victor Finance', dept: 'Finance', daily_rate: '1,200', monthly: '26,400' },
  { id: 'B-010', name: 'Mia Support', dept: 'Support', daily_rate: '850', monthly: '18,700' },
]

const earningComponentRows = [
  { component: 'Basic Salary', account: 'Salaries Expense' },
  { component: 'Overtime', account: 'Salaries Expense' },
  { component: 'Regular Bonus', account: 'Salaries Expense' },
  { component: 'Regular Holiday Pay', account: 'Salaries Expense' },
  { component: 'Special Non-Working Holiday Pay', account: 'Salaries Expense' },
  { component: 'Installation Bonus', account: 'Cost of Services' },
]

const deductionComponentRows = [
  { component: 'SSS', account: 'SSS Payable' },
  { component: 'PhilHealth', account: 'PhilHealth Payable' },
  { component: 'Pag-IBIG', account: 'Pag-IBIG Payable' },
  { component: 'Cash Advance Repayment', account: 'Employee Advances' },
]

const payrollEntryRows = [
  { cutoff: 'Jan 1–15', company: 'Company A', debit: 'Dr Salaries Expense ₱66,000', credit_1: 'Cr Payroll Payable ₱59,000', credit_2: 'Cr Gov Payables ₱7,000' },
  { cutoff: 'Jan 1–15', company: 'Company B', debit: 'Dr Salaries Expense ₱67,500', credit_1: 'Cr Payroll Payable ₱60,500', credit_2: 'Cr Gov Payables ₱7,000' },
  { cutoff: 'Jan 16–31', company: 'Company A', debit: 'Dr Salaries Expense ₱66,000', credit_1: 'Cr Payroll Payable ₱49,000', credit_2: 'Cr Gov Payables ₱7,000 + Cr Employee Advances ₱10,000' },
  { cutoff: 'Jan 16–31', company: 'Company B', debit: 'Dr Salaries Expense ₱67,500', credit_1: 'Cr Payroll Payable ₱50,500', credit_2: 'Cr Gov Payables ₱7,000 + Cr Employee Advances ₱10,000' },
]

const agingRows = [
  { date: 'Jan 10', bucket: '0–30 Days', note: 'Intercompany receivable created' },
  { date: 'Feb 10', bucket: '31–60 Days', note: 'Still open' },
  { date: 'Mar 10', bucket: '61–90 Days', note: 'Still open before clearing' },
  { date: 'Mar 15', bucket: 'Paid', note: 'Collected and settled' },
]

const bankReconRows = [
  { source: 'Bank Statement', amount: '₱500,000' },
  { source: 'ERP Balance', amount: '₱480,000' },
  { source: 'Outstanding Check', amount: '₱15,000' },
  { source: 'Missing Bank Charge', amount: '₱5,000' },
]

const pettyCashRows = [
  { step: 'Initial Funding', entry: 'Dr Petty Cash ₱20,000 / Cr Bank ₱20,000' },
  { step: 'Office Supplies', entry: 'Dr Supplies Expense ₱3,000' },
  { step: 'Transportation', entry: 'Dr Transportation Expense ₱2,000' },
  { step: 'Petty Cash Credit', entry: 'Cr Petty Cash ₱5,000' },
  { step: 'Replenishment', entry: 'Dr Petty Cash ₱5,000 / Cr Bank ₱5,000' },
]

const finalFsRowsA = [
  { metric: 'Sales', amount: '₱300,000' },
  { metric: 'COGS', amount: '₱192,000' },
  { metric: 'Gross Profit', amount: '₱108,000' },
  { metric: 'Expenses', amount: '₱397,000' },
  { metric: 'Net Loss', amount: '(₱289,000)' },
]

const finalFsRowsB = [
  { metric: 'Product Sales', amount: '₱225,000' },
  { metric: 'Service Revenue', amount: '₱30,000' },
  { metric: 'Total Revenue', amount: '₱255,000' },
  { metric: 'COGS', amount: '₱150,000' },
  { metric: 'Gross Profit', amount: '₱105,000' },
  { metric: 'Expenses', amount: '₱410,000' },
  { metric: 'Net Loss', amount: '(₱305,000)' },
]

const finalVatRows = [
  { company: 'Company A', type: 'Output VAT', amount: '₱36,000' },
  { company: 'Company B', type: 'Input VAT', amount: '₱36,000' },
  { company: 'Company B', type: 'Output VAT', amount: '₱27,000' },
  { company: 'Company B', type: 'Net VAT Payable', amount: '₱9,000' },
]

function Callout({
  title,
  children,
  tone = 'blue',
}: {
  title: string
  children: React.ReactNode
  tone?: 'blue' | 'amber' | 'green' | 'red'
}) {
  const styles = {
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    green: 'bg-green-50 border-green-200',
    red: 'bg-rose-50 border-rose-200',
  }

  return (
    <div className={`print-block border rounded-xl p-4 mb-6 ${styles[tone]}`}>
      <p className="font-semibold text-gray-900 mb-2">{title}</p>
      <div className="text-gray-700">{children}</div>
    </div>
  )
}

function DataTable({
  columns,
  rows,
}: {
  columns: { key: string; label: string }[]
  rows: Record<string, string>[]
}) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-xl">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-gray-100 last:border-b-0">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-3 align-top text-gray-700">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ChecklistCard({
  id,
  day,
  title,
  items,
}: {
  id: string
  day: string
  title: string
  items: string[]
}) {
  return (
    <div id={id} className={cardClass}>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">
        {day} — {title}
      </h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item) => (
          <li key={`${day}-${item}`} className="flex items-start gap-3">
            <span className="mt-1 text-gray-400">☐</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SimulationPage() {
  return (
    <div className="pt-12 md:pt-0">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        ERP Simulation Scenario & Checklist
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Final master training page for a 3-month ERPNext simulation covering
        January to March 2026. This scenario is designed to train process
        accuracy, ERP document flow, and accounting reasoning.
      </p>

      <Callout title="Simulation Purpose" tone="blue">
        You are acting as an ERP Consultant or CPA trainee implementing and
        operating a multi-company ERP system. The simulation covers partial
        payments, returns, installations, projects, payroll, FX fluctuations,
        and month-end closing in one continuous business flow.
      </Callout>

      <Callout title="Zero-Tolerance Rule" tone="red">
        This is a controlled simulation. Even small deviations mean the result
        is wrong. If numbers do not match, the issue is in the setup or
        process. Trace and fix it. Do not manually adjust values to force the
        target results.
      </Callout>

      <Section title="Quick Navigation">
        <div className={boxClass}>
          <p className="text-gray-700 mb-4">
            Use these jump links to move through the simulation like a training
            workbook.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Day-by-Day Flow
              </h3>
              <ul className="space-y-2 text-gray-700">
                {daySummaries.map((day, index) => (
                  <li key={`flow-${day.day}`}>
                    <a
                      href={`#day-flow-${index + 1}`}
                      className="text-primary-700 hover:underline"
                    >
                      {day.day} — {day.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Checklist
              </h3>
              <ul className="space-y-2 text-gray-700">
                {checklist.map((day, index) => (
                  <li key={`checklist-${day.day}`}>
                    <a
                      href={`#day-checklist-${index + 1}`}
                      className="text-primary-700 hover:underline"
                    >
                      {day.day} — {day.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="1. Business Scenario">
        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Global System Rules
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {globalRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            System Integrity Rules
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {integrityRules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {businessStructure.map((company) => (
            <div key={company.title} className={cardClass}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {company.title}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {company.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            End-to-End Flow
          </h3>
          <p className="text-gray-700">
            Foreign Supplier (USD) → Company A (Import and Manufacture) →
            Company B (Buy and Sell) → Customer → Installation Project →
            After-Sales Support
          </p>
        </div>
      </Section>

      <Section title="2. Time Coverage, Scope & Fixed Logic">
        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Time Coverage
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>January 2026: Setup and initial transactions.</li>
            <li>February 2026: Continuation, payments, and operations.</li>
            <li>March 2026: Completion, clearing, reconciliation, and reporting.</li>
          </ul>
        </div>

        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Scope of Implementation
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {scopeAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Commission Logic
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Commission applies only when the Sales Invoice is fully paid.</li>
              <li>Only commissionable items qualify, with FG items used in this simulation.</li>
              <li>A Sales Person must be assigned.</li>
              <li>Use 5% on collected revenue only.</li>
              <li>No commission on unpaid invoices, returns, or optional services.</li>
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Project Rules
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Exactly 2 projects total from January to March.</li>
              <li>External Project: Customer installation project with ₱30,000 revenue target.</li>
              <li>Internal Project: Cost tracking only, no revenue.</li>
              <li>Projects require tasks, employee assignment, and cost tracking.</li>
            </ul>
          </div>
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Support Rules
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Exactly 3 support issues total: January, February, and March.</li>
              <li>The issues represent minor fix, follow-up, and final service.</li>
              <li>Total support cost impact must equal ₱6,000.</li>
            </ul>
          </div>
        </div>

        <Callout title="Training Design Note" tone="green">
          This simulation uses controlled target values for inventory, payroll,
          VAT, FX, and related outputs so learners can validate results with
          precision. The objective is process accuracy, ERP document flow, and
          accounting reasoning rather than uncontrolled real-world randomness.
        </Callout>
      </Section>

      <Section title="3. Final March 31, 2026 Target Results">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Company A — ABC Manufacturing Inc.
            </h3>
            <p className="font-semibold text-gray-900 mb-2">Income Statement</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Sales: ₱300,000</li>
              <li>COGS: ₱192,000</li>
              <li>Gross Profit: ₱108,000</li>
              <li>Expenses: ₱397,000</li>
              <li>Net Loss: (₱289,000)</li>
            </ul>
            <p className="font-semibold text-gray-900 mb-2">Balance Sheet</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Cash & Bank: ₱650,000</li>
              <li>Inventory: ₱222,500</li>
              <li>Accounts Receivable: ₱0</li>
              <li>Accounts Payable: ₱0</li>
            </ul>
          </div>

          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Company B — ABC Trading & Services Inc.
            </h3>
            <p className="font-semibold text-gray-900 mb-2">Income Statement</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
              <li>Product Sales: ₱225,000</li>
              <li>Service Revenue: ₱30,000</li>
              <li>Total Revenue: ₱255,000</li>
              <li>COGS: ₱150,000</li>
              <li>Gross Profit: ₱105,000</li>
              <li>Expenses: ₱410,000</li>
              <li>Net Loss: (₱305,000)</li>
            </ul>
            <p className="font-semibold text-gray-900 mb-2">Balance Sheet</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Cash & Bank: ₱420,000</li>
              <li>Inventory: ₱170,000 for 170 units</li>
              <li>Accounts Receivable: ₱0</li>
              <li>Accounts Payable: ₱0</li>
            </ul>
          </div>
        </div>

        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Control Totals
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {controlTotals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="4. Day-by-Day Master Training Flow">
        <div className="space-y-6">
          {daySummaries.map((day, index) => (
            <div id={`day-flow-${index + 1}`} key={day.day} className={boxClass}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {day.day} — {day.title}
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Objective:</strong> {day.objective}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Locked Activities
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {day.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Validation Checks
                  </h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {day.checks.map((check) => (
                      <li key={check}>{check}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="5. Detailed Inputs & Data Pack">
        <div className={boxClass}>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            What This Section Contains
          </h3>
          <p className="text-gray-700">
            This is the detailed source pack for the simulation. It captures the
            actual data inputs, fixed numbers, employee records, item records,
            transaction values, and report targets that drive the locked
            results.
          </p>
        </div>

        <div id="day-detail-1" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 1 Detailed Inputs — System Foundation
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Company Setup</h4>
            <DataTable
              columns={[
                { key: 'company', label: 'Company' },
                { key: 'country', label: 'Country' },
                { key: 'currency', label: 'Currency' },
                { key: 'fiscal_year_start', label: 'Fiscal Year Start' },
                { key: 'group_company', label: 'Group Company' },
              ]}
              rows={day1Companies}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Chart of Accounts Structure</h4>
            <DataTable
              columns={[
                { key: 'category', label: 'Category' },
                { key: 'accounts', label: 'Locked Accounts' },
              ]}
              rows={coaRows}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Opening Entries</h4>
            <DataTable
              columns={[
                { key: 'company', label: 'Company' },
                { key: 'debit_1', label: 'Debit 1' },
                { key: 'debit_2', label: 'Debit 2' },
                { key: 'credit', label: 'Credit' },
              ]}
              rows={openingEntries}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Mandatory Settings</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enable modules: Accounting, Stock, Manufacturing, HR & Payroll, Projects, and Support.</li>
              <li>Enable Multi-Currency and add USD → PHP = 55 for January 2026.</li>
              <li>Set Stock Valuation Method = Moving Average.</li>
              <li>Allow Negative Stock = Off.</li>
              <li>Create Sales Taxes and Charges templates for Output VAT 12% and Input VAT 12%.</li>
              <li>Petty Cash must be Account Type = Cash, not Bank.</li>
              <li>Use the same item codes across both companies. Do not prefix item codes by company.</li>
              <li>Enable standard document flow: SO → DN → SI and PO → PR → PI.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Master Data Requirements</h4>
            <DataTable
              columns={[
                { key: 'type', label: 'Master Data Type' },
                { key: 'input', label: 'Required Input' },
              ]}
              rows={day1MasterData}
            />
          </div>
        </div>

        <div id="day-detail-2" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 2 Detailed Inputs — Items, Pricing & Opening Stock
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Raw Materials</h4>
            <DataTable
              columns={[
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Name' },
                { key: 'uom', label: 'UOM' },
                { key: 'buying', label: 'Buying Price' },
                { key: 'default_warehouse', label: 'Default Warehouse' },
              ]}
              rows={rawMaterialRows}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Finished Goods</h4>
            <DataTable
              columns={[
                { key: 'code', label: 'Code' },
                { key: 'name', label: 'Name' },
                { key: 'reference_cost', label: 'Reference Cost' },
                { key: 'selling', label: 'Selling Price' },
                { key: 'default_warehouse', label: 'Default Warehouse' },
              ]}
              rows={finishedGoodsRows}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Items</h4>
            <DataTable
              columns={[
                { key: 'name', label: 'Service Item' },
                { key: 'rate', label: 'Rate' },
                { key: 'uom', label: 'UOM' },
                { key: 'income_account', label: 'Income Account' },
              ]}
              rows={serviceRows}
            />
          </div>

          <Callout title="Non-Stock Expense Items" tone="amber">
            The simulation requires 25 non-stock expense items linked to the
            correct expense accounts. Your prompt confirms that the full list is
            already correct, but it does not enumerate the 25 item names. This
            page preserves that requirement without inventing unsupplied item
            names. For item setup, assign an `Expense Account` to expense items
            and an `Income Account` to sales items.
          </Callout>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Price List and Default Account Rules</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Create Standard Selling (PHP) and Standard Buying (PHP).</li>
              <li>Mark both price lists as default.</li>
              <li>Raw Materials use buying price only.</li>
              <li>Finished Goods use both buying and selling prices.</li>
              <li>Service Items use selling prices only.</li>
              <li>Expense Items: set an Expense Account.</li>
              <li>Sales Items: set an Income Account.</li>
              <li>Finished Goods: Income = Sales Revenue, Expense = Cost of Goods Sold.</li>
              <li>Raw Materials: Inventory posting must point to an asset account, not an expense account.</li>
              <li>Services: Income = Service Revenue.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Opening Stock Entry — Company A Only</h4>
            <DataTable
              columns={[
                { key: 'item', label: 'Item' },
                { key: 'qty', label: 'Qty' },
                { key: 'rate', label: 'Rate' },
                { key: 'value', label: 'Value' },
              ]}
              rows={openingStockRows}
            />
            <p className="text-gray-700 mt-3">
              Expected opening stock total: approximately ₱268,000, entered via
              Stock Entry (Opening) only, with no VAT.
            </p>
          </div>
        </div>

        <div id="day-detail-3" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 3 Detailed Inputs — Foreign Purchase, Landed Cost & Manufacturing
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Foreign Supplier Quotation — Jan 6</h4>
            <DataTable
              columns={[
                { key: 'item', label: 'Item' },
                { key: 'qty', label: 'Qty' },
                { key: 'rate', label: 'Rate' },
                { key: 'amount', label: 'Amount' },
              ]}
              rows={day3PurchaseRows}
            />
            <p className="text-gray-700 mt-3">
              Supplier: Global Materials Inc. | Currency: USD | Jan 6 exchange
              rate: 55 PHP | Total quotation amount: $3,500.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Purchase Flow and Accounting</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Create Purchase Order, Purchase Receipt dated Jan 8, and Purchase Invoice dated Jan 9.</li>
              <li>Purchase accounting target: Dr Inventory ₱192,500 / Cr Accounts Payable ₱192,500.</li>
              <li>Do not recognize FX gain or loss at invoice stage.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Landed Cost Inputs — Jan 9</h4>
            <DataTable
              columns={[
                { key: 'component', label: 'Component' },
                { key: 'amount', label: 'Amount' },
              ]}
              rows={landedCostRows}
            />
            <p className="text-gray-700 mt-3">
              Allocate freight and customs to RM-001 and RM-002 through Landed
              Cost Voucher.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">FG-001 BOM and Expected Consumption</h4>
            <DataTable
              columns={[
                { key: 'component', label: 'Component' },
                { key: 'qty_per_unit', label: 'Qty per Unit' },
                { key: 'total_for_300_units', label: 'Total for 300 Units' },
              ]}
              rows={bomRows}
            />
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Set FG-001 as the default BOM.</li>
              <li>Turn on Include Operating Cost.</li>
              <li>Create Work Order on Jan 10 for exactly 300 units only.</li>
              <li>Flow must be Raw Materials → WIP → Finished Goods with no extra production.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">FX Payment — Feb 15</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Paid Amount: $3,500 at 57 = ₱199,500.</li>
              <li>Clear payable at historical value of ₱192,500.</li>
              <li>Recognize FX Loss of ₱7,000 only at payment.</li>
              <li>Expected entry: Dr Accounts Payable ₱192,500 / Dr FX Loss ₱7,000 / Cr Bank ₱199,500.</li>
            </ul>
          </div>
        </div>

        <div id="day-detail-4" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 4 Detailed Inputs — Intercompany, Sales, Return & Commission
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Intercompany Buying and Selling — Jan 10</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Company B Purchase Receipt: FG-001, 300 units, Main Warehouse only.</li>
              <li>Company B Purchase Invoice: Dr Inventory ₱300,000 / Dr Input VAT ₱36,000 / Cr Accounts Payable ₱336,000.</li>
              <li>Company A Delivery Note: FG-001, 300 units, mandatory before invoicing.</li>
              <li>Company A Sales Invoice: Dr Accounts Receivable ₱336,000 / Cr Sales Revenue ₱300,000 / Cr Output VAT ₱36,000.</li>
              <li>Post-partial payment on Jan 20 for ₱150,000, leaving ₱186,000 open on both sides.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Company B Customer Sales Data</h4>
            <DataTable
              columns={[
                { key: 'date', label: 'Date' },
                { key: 'customer', label: 'Customer / Flow' },
                { key: 'qty', label: 'Qty' },
                { key: 'sales', label: 'Sales' },
                { key: 'vat', label: 'VAT' },
              ]}
              rows={companyBCustomerSales}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Sales and VAT Reconciliation</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Credit Sales: ₱150,000</li>
              <li>Cash Sale: ₱75,000</li>
              <li>Return: (₱30,000)</li>
              <li>Net Product Sales: ₱195,000 for January movement set.</li>
              <li>VAT: ₱12,600 + ₱5,400 + ₱9,000 - ₱3,600 = ₱23,400.</li>
              <li>Inventory movement: 300 - 100 - 50 + 20 = 170 units final.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Commission Control</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Only commissionable event: Cash Sale of ₱75,000.</li>
              <li>Commission = 5% × ₱75,000 = ₱3,750.</li>
              <li>Expected entry: Dr Commission Expense ₱3,750 / Cr Commission Payable ₱3,750.</li>
              <li>Do not include credit sales, returned items, intercompany sales, or optional services.</li>
            </ul>
          </div>
        </div>

        <div id="day-detail-5" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 5 Detailed Inputs — Employees, Payroll & Employee Finance
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Company A Employee Base Data</h4>
            <DataTable
              columns={[
                { key: 'id', label: 'ID' },
                { key: 'name', label: 'Name' },
                { key: 'daily_rate', label: 'Daily Rate' },
                { key: 'monthly', label: 'Monthly' },
              ]}
              rows={companyAEmployees}
            />
            <p className="text-gray-700 mt-3">
              Raw total = ₱214,500. Recognized payroll target = ₱132,000 per
              month.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Company B Employee Base Data</h4>
            <DataTable
              columns={[
                { key: 'id', label: 'ID' },
                { key: 'name', label: 'Name' },
                { key: 'dept', label: 'Department' },
                { key: 'daily_rate', label: 'Daily Rate' },
                { key: 'monthly', label: 'Monthly' },
              ]}
              rows={companyBEmployees}
            />
            <p className="text-gray-700 mt-3">
              Raw total = ₱227,700. Recognized payroll target = ₱135,000 per
              month.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Earning Components</h4>
              <DataTable
                columns={[
                  { key: 'component', label: 'Component' },
                  { key: 'account', label: 'Account' },
                ]}
                rows={earningComponentRows}
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Deduction Components</h4>
              <DataTable
                columns={[
                  { key: 'component', label: 'Component' },
                  { key: 'account', label: 'Account' },
                ]}
                rows={deductionComponentRows}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Government Deduction Basis</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>SSS = ₱800 per employee per month.</li>
              <li>PhilHealth = ₱400 per employee per month.</li>
              <li>Pag-IBIG = ₱200 per employee per month.</li>
              <li>Total = ₱1,400 per employee per month.</li>
              <li>Per cutoff = ₱700 per employee.</li>
              <li>Per company per month = ₱14,000.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Payroll Entries</h4>
            <DataTable
              columns={[
                { key: 'cutoff', label: 'Cutoff' },
                { key: 'company', label: 'Company' },
                { key: 'debit', label: 'Debit' },
                { key: 'credit_1', label: 'Credit 1' },
                { key: 'credit_2', label: 'Credit 2' },
              ]}
              rows={payrollEntryRows}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Other Employee Finance Inputs</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cash Advance on Jan 15: Dr Employee Advances ₱10,000 / Cr Cash ₱10,000.</li>
              <li>Expense Claim on Jan 18: Dr Expense ₱4,000 / Cr Accounts Payable (Employee) ₱4,000, then settle through payment.</li>
              <li>External project employees: B-005, B-006, B-007.</li>
              <li>Only Installation Bonus posts to Cost of Services for the external project.</li>
              <li>Basic Salary, Overtime, and Regular Bonus stay out of project revenue costing.</li>
            </ul>
          </div>
        </div>

        <div id="day-detail-6" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 6 Detailed Inputs — FX, Aging, Bank Reconciliation & Petty Cash
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Aging Timeline</h4>
            <DataTable
              columns={[
                { key: 'date', label: 'Date' },
                { key: 'bucket', label: 'Aging Bucket' },
                { key: 'note', label: 'Status' },
              ]}
              rows={agingRows}
            />
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Bank Reconciliation Training Scenario</h4>
            <DataTable
              columns={[
                { key: 'source', label: 'Source / Item' },
                { key: 'amount', label: 'Amount' },
              ]}
              rows={bankReconRows}
            />
            <p className="text-gray-700 mt-3">
              Record the missing bank charge before running the reconciliation
              tool. Leave outstanding checks unmatched.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Recurring Bank Transactions</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Jan 31: Dr Bank Charges Expense ₱500 / Cr Bank ₱500.</li>
              <li>Feb 28: Dr Bank ₱1,000 / Cr Interest Income ₱1,000.</li>
              <li>Mar 15 Company A collection: Dr Bank ₱186,000 / Cr Accounts Receivable ₱186,000.</li>
              <li>Mar 15 Company B payment: Dr Accounts Payable ₱186,000 / Cr Bank ₱186,000.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Petty Cash Flow</h4>
            <DataTable
              columns={[
                { key: 'step', label: 'Step' },
                { key: 'entry', label: 'Entry' },
              ]}
              rows={pettyCashRows}
            />
          </div>
        </div>

        <div id="day-detail-7" className={boxClass}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Day 7 Detailed Inputs — Closing, Financial Statements & Final Validation
          </h3>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Closing and Adjustments</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Close Jan 31, Feb 28, and Mar 31 in order.</li>
              <li>Use accruals only if an expense exists without a source document. In this simulation, accruals should be minimal to none.</li>
              <li>Monthly depreciation: Dr Depreciation Expense ₱5,000 / Cr Accumulated Depreciation ₱5,000 for Jan, Feb, and Mar.</li>
              <li>Total depreciation by March 31 = ₱15,000.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Company A Final Income Statement</h4>
              <DataTable
                columns={[
                  { key: 'metric', label: 'Metric' },
                  { key: 'amount', label: 'Amount' },
                ]}
                rows={finalFsRowsA}
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Company B Final Income Statement</h4>
              <DataTable
                columns={[
                  { key: 'metric', label: 'Metric' },
                  { key: 'amount', label: 'Amount' },
                ]}
                rows={finalFsRowsB}
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">VAT Final Check</h4>
            <DataTable
              columns={[
                { key: 'company', label: 'Company' },
                { key: 'type', label: 'VAT Type' },
                { key: 'amount', label: 'Amount' },
              ]}
              rows={finalVatRows}
            />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Final Locked Balance Sheet Targets</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Company A: Cash & Bank ₱650,000, Inventory ₱222,500, A/R ₱0, A/P ₱0.</li>
              <li>Company B: Cash & Bank ₱420,000, Inventory ₱170,000 for 170 units, A/R ₱0, A/P ₱0.</li>
              <li>Inventory, VAT, FX, AR/AP, payroll, project revenue, and bank reconciliation must all match exactly.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="6. Step-by-Step Checklist">
        <p className="text-gray-700 mb-6">
          Use this as the executable checklist while running the simulation. The
          checklist mirrors the locked training flow and gives you a clean pass
          or fail reference for each day.
        </p>

        <div className="space-y-6">
          {checklist.map((day, index) => (
            <ChecklistCard
              key={day.day}
              id={`day-checklist-${index + 1}`}
              day={day.day}
              title={day.title}
              items={day.items}
            />
          ))}
        </div>
      </Section>

      <Section title="7. Final Pass Criteria">
        <div className={boxClass}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Financial statements match the exact target values.</li>
            <li>Company A inventory = ₱222,500.</li>
            <li>Company B inventory = 170 units worth ₱170,000.</li>
            <li>FX Loss = ₱7,000.</li>
            <li>Company B VAT Payable = ₱9,000.</li>
            <li>All intercompany A/R and A/P are cleared to zero by March.</li>
            <li>No negative stock exists anywhere in the simulation.</li>
            <li>Bank balances are reconciled and petty cash is controlled separately.</li>
            <li>Commission is applied only on collected eligible sales.</li>
          </ul>
        </div>

        <Callout title="What This Builds" tone="blue">
          This simulation is already enterprise-level training. It ties together
          multi-company ERP architecture, manufacturing and trading integration,
          VAT control, FX lifecycle, payroll, project costing, service support,
          and a complete audit trail in ERPNext.
        </Callout>

        <div className={boxClass}>
          <p className="text-gray-700">
            Return to the <Link href="/" className="text-primary-700 font-medium hover:underline">dashboard</Link> to continue through the rest of the training manual.
          </p>
        </div>
      </Section>
    </div>
  )
}
