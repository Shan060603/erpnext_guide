import Section from '@/components/Section'
import StepCard from '@/components/StepCard'
import Mermaid from '@/components/Mermaid'

const serviceFlowchart = `flowchart TD
  %% ===========================
  %% Support & Service Module (ERPNext v15)
  %% ===========================

  %% Customer Interaction
  A[Customer Contact] --> B{Issue Type?}
  B -->|Support Request| C[Create Issue]
  B -->|Maintenance| D[Maintenance Schedule]
  B -->|Warranty| E[Warranty Claim]

  %% Issue Management
  C --> F[Assign Priority]
  F --> G{Urgent?}
  G -->|Yes| H[Immediate Response]
  G -->|No| I[Assign to Technician]
  H --> J[SLA Tracking]
  I --> J
  J --> K{Resolved?}
  K -->|Yes| L[Close Issue]
  K -->|No| M[Escalation]

  %% Maintenance Process
  D --> N[Generate Visit]
  N --> O[Maintenance Visit]
  O --> P[Log Time & Parts]
  P --> Q{Complete?}
  Q -->|Yes| R[Customer Sign-off]
  Q -->|No| S[Schedule Follow-up]

  %% Warranty Process
  E --> T[Validate Serial No]
  T --> U{Warranty Valid?}
  U -->|Yes| V[Process Claim]
  U -->|No| W[Reject Claim]
  V --> X{Repair/Replace?}
  X -->|Repair| Y[Schedule Service]
  X -->|Replace| Z[Issue Replacement]

  %% Reports & Analytics
  L --> AA[First Response Report]
  R --> BB[Maintenance History]
  V --> CC[Warranty Claims Report]
  M --> DD[SLA Breach Report]

  %% Style nodes
  style A fill:#e3f2fd
  style C fill:#e8f5e9
  style D fill:#fff3e0
  style E fill:#fce4ec
  style L fill:#c8e6c9
  style R fill:#c8e6c9
  style V fill:#c8e6c9`

export default function ServicePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Support & Service Module</h1>
      
      <Section title="Overview">
        <p>
          The Support & Service module manages post-sales customer support including issue tracking, maintenance scheduling,
          SLAs, warranty claims, and service delivery. Key doctypes: Issue, Maintenance Schedule, Maintenance Visit,
          Service Level Agreement, Warranty Claim, Serial No, Support Settings.
        </p>
      </Section>
      
      <Section title="Support Workflow">
        <Mermaid chart={serviceFlowchart} />
      </Section>
      
      <Section title="Core Doctypes & Workflow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StepCard
            title="1. Issues"
            description="Capture and track customer support requests."
            bullets={[
              'Issue Type (Bug, Feature, Support)',
              'Issue Priority (Low, Medium, High, Urgent)',
              'Assign to service personnel',
              'Track first response time',
            ]}
          />
          <StepCard
            title="2. Maintenance Schedule"
            description="Plan recurring preventive maintenance."
            bullets={[
              'Set frequency (weekly, monthly, yearly)',
              'Auto-generate maintenance visits',
              'Track completion status',
              'Maintenance history log',
            ]}
          />
          <StepCard
            title="3. Maintenance Visit"
            description="Record actual service visits."
            bullets={[
              'Log technician time and work done',
              'Parts consumed tracking',
              'Customer sign-off',
              'Visit feedback',
            ]}
          />
          <StepCard
            title="4. Service Level Agreement"
            description="Define response and resolution targets."
            bullets={[
              'Priority-wise response times',
              'Resolution time commitments',
              'SLA breach notifications',
              'Performance reporting',
            ]}
          />
          <StepCard
            title="5. Warranty Claim"
            description="Process warranty service requests."
            bullets={[
              'Serial No validation',
              'Warranty period check',
              'Claim approval workflow',
              'Replacement/repair tracking',
            ]}
          />
          <StepCard
            title="6. Serial No"
            description="Track serialized products for warranty/service."
            bullets={[
              'Link to sales delivery',
              'Warranty expiry tracking',
              'Service history per serial',
              'Guarantee extension',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Settings">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="Support Settings"
            description="Configure support operations."
            bullets={[
              'Service person configuration',
              'SLA policy setup',
              'Support email templates',
              'Auto-assignment rules',
              'Working hours and holidays',
              'Escalation matrix',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Reports">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="First Response Time"
            description="Monitor initial response performance."
            bullets={[
              'Average response time by priority',
              'SLA compliance percentage',
              'Technician response metrics',
              'Trend analysis over time',
            ]}
          />
          <StepCard
            title="Other Reports"
            description="Additional support analytics."
            bullets={[
              'Territory/Service Person Summary',
              'SLA Met SLAs Missed',
              'Issue Aging Analysis',
              'Customer Satisfaction Scores',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Best Practices">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Respond to high-priority issues within SLA targets</li>
          <li>✓ Use preventive maintenance to reduce reactive tickets</li>
          <li>✓ Validate serial numbers for warranty claims</li>
          <li>✓ Monitor First Response Time KPIs regularly</li>
          <li>✓ Review SLA breach reports weekly</li>
        </ul>
      </Section>
    </div>
  )
}
