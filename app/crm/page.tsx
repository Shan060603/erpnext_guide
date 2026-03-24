import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const crmFlowchart = `flowchart TD
  %% ===========================
  %% CRM Module (ERPNext)
  %% ===========================

  %% ===========================
  %% Sales Pipeline
  %% ===========================
  H[Lead] --> I{Qualify Lead?}
  I -->|No| J[Lead Disqualified / Archive]
  I -->|Yes| K[Convert to Opportunity]
  K --> L{Opportunity Won?}
  L -->|No| M[Continue Negotiation / Follow-up]
  L -->|Yes| N[Create Customer]
  N --> O[Contract]
  O --> P[Appointment Scheduling]
  P --> Q[Communication / Newsletter]

  %% ===========================
  %% Campaigns
  %% ===========================
  R[Campaign] --> S[Email Campaign]
  R --> T[SMS Center]
  S --> U[Email Group]
  T --> V[SMS Log]

  %% ===========================
  %% Maintenance
  %% ===========================
  W[Maintenance Schedule] --> X[Maintenance Visit]
  X --> Y[Warranty Claim]`

export default function CRMPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">CRM Module</h1>
      
      <Mermaid chart={crmFlowchart} />
      
      <Section title="Overview">
        <p>
          The CRM (Customer Relationship Management) module in ERPNext helps you manage your sales pipeline 
          from initial lead capture to converting them into customers. This module tracks all interactions 
          with potential and existing customers, helping your sales team stay organized and close more deals.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Lead"
            description="Capture potential customers who have shown interest in your products or services."
            bullets={[
              'Create new leads from website forms, trade shows, or cold calls',
              'Capture contact information: name, email, phone, company',
              'Add lead source and campaign details for tracking',
              'Set lead status: New, Contacted, Qualified, Converted',
            ]}
          />
          <StepCard
            title="2. Lead Assignment"
            description="Assign leads to sales team members for follow-up and conversion."
            bullets={[
              'Automatically assign leads based on territory or product line',
              'Manual assignment for specific accounts',
              'Set up lead distribution rules for fair allocation',
              'Track assignment history and ownership changes',
            ]}
          />
          <StepCard
            title="3. Opportunity"
            description="Track qualified leads that have shown serious purchase intent."
            bullets={[
              'Convert qualified leads into opportunities',
              'Define deal value and expected closing date',
              'Track competitor information and customer requirements',
              'Add next steps and activity reminders',
            ]}
          />
          <StepCard
            title="4. Appointment"
            description="Schedule and track meetings with prospects for demonstrations or discussions."
            bullets={[
              'Create appointments linked to opportunities',
              'Set location, attendees, and agenda',
              'Send calendar invites to participants',
              'Log meeting notes and follow-up actions',
            ]}
          />
          <StepCard
            title="5. Quotation"
            description="Create price proposals for customers based on their requirements."
            bullets={[
              'Generate quotations from opportunities',
              'Add products/services with pricing and discounts',
              'Set validity period and payment terms',
              'Send quotations directly via email',
            ]}
          />
          <StepCard
            title="6. Customer"
            description="Convert successful opportunities into permanent customer records."
            bullets={[
              'Create customer master with billing/shipping addresses',
              'Set credit limits and payment terms',
              'Link all historical transactions to customer',
              'Start ongoing relationship management',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Always capture lead source to measure marketing effectiveness</li>
          <li>✓ Use the activity log to track every customer interaction</li>
          <li>✓ Convert quotations to Sales Orders when accepted</li>
          <li>✓ Set up email alerts for follow-up reminders</li>
          <li>✓ Use the CRM dashboard to monitor sales pipeline health</li>
        </ul>
      </Section>
    </div>
  )
}