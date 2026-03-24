import Mermaid from '@/components/Mermaid'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

const hrFlowchart = `flowchart TD
    %% ===========================
    %% Employee Lifecycle / Recruitment
    %% ===========================
    A[Staffing Plan] --> B[Job Requisition]
    B --> C{Approve Requisition?}
    C -->|No| Z[Revise Requisition]
    C -->|Yes| D[Job Opening]
    D --> E[Publish Job Opening]
    E --> F[Job Applicant]
    F --> G{Screen Applicant?}
    G -->|Reject| H[Rejected Applicant]
    G -->|Proceed| I[Interview Round Setup]
    I --> J[Schedule Interview]
    J --> K[Conduct Interview]
    K --> L[Interview Feedback]
    L --> M{Pass Interview?}
    M -->|No| H
    M -->|Yes| N[Job Offer]
    N --> O{Accept Offer?}
    O -->|No| P[Offer Rejected]
    O -->|Yes| Q[Create Employee Record]
    Q --> R[Appointment Letter]

    %% ===========================
    %% Performance / Appraisal
    %% ===========================
    S[Appraisal Template] --> T[Create Appraisal Cycle]
    T --> U[Assign Employees to Cycle]
    U --> V[Employee Self Assessment]
    V --> W[Manager Assessment]
    W --> X[HR Review & Consolidation]
    X --> Y{Finalize Appraisal?}
    Y -->|No| U
    Y -->|Yes| AA[Generate Appraisal Report]
    AA --> AB[Update Employee Records]
    AB --> AC[Set Goals / KRA for Next Cycle]

    %% ===========================
    %% Shift & Attendance
    %% ===========================
    AD[Shift Type & Schedule Setup] --> AE[Assign Shifts to Employees]
    AE --> AF[Employee Checkin / Checkout]
    AF --> AG{Attendance Issue?}
    AG -->|Yes| AH[Leave / Correction Request]
    AG -->|No| AI[Mark Attendance]
    AH --> AJ[Manager Approval]
    AJ --> AI
    AI --> AK[Update Monthly Attendance Sheet]
    AK --> AL[Timesheet / Activity Tracking]`

const attendanceFlowchart = `flowchart TD
    %% ===========================
    %% Shift & Attendance
    %% ===========================
    AD[Shift Type & Schedule Setup] --> AE[Assign Shifts to Employees]
    AE --> AF[Employee Checkin / Checkout]
    AF --> AG{Attendance Issue?}
    AG -->|Yes| AH[Leave / Correction Request]
    AG -->|No| AI[Mark Attendance]
    AH --> AJ[Manager Approval]
    AJ --> AI
    AI --> AK[Update Monthly Attendance Sheet]
    AK --> AL[Timesheet / Activity Tracking]
    AL --> AM[Reports: Employee Hours / Project Profitability]`

const leaveFlowchart = `flowchart TD
    %% ===========================
    %% Leave Management
    %% ===========================
    AN[Leave Application] --> AO{Leave Type?}
    AO -->|Annual / Sick Leave| AP[Check Leave Balance]
    AO -->|Compensatory Leave| AQ[Check Compensatory Balance]
    AP --> AR{Sufficient Balance?}
    AQ --> AR
    AR -->|No| AS[Reject Leave / Notify Employee]
    AR -->|Yes| AT[Submit Leave Application]
    AT --> AU[Manager Approval]
    AU --> AV{Approved?}
    AV -->|No| AS
    AV -->|Yes| AW[Update Employee Attendance & Reports]`

export default function HRPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">HR Module</h1>
      
      <Section title="HR Workflow - Employee Lifecycle">
        <Mermaid chart={hrFlowchart} />
      </Section>

      <Section title="Attendance Workflow">
        <Mermaid chart={attendanceFlowchart} />
      </Section>

      <Section title="Leave Management">
        <Mermaid chart={leaveFlowchart} />
      </Section>
      
      <Section title="Overview">
        <p>
          The HR module manages the complete employee lifecycle from hiring to separation.
          It handles recruitment, attendance tracking, leave management, and performance appraisals.
          This module ensures efficient HR operations and compliance with labor regulations.
        </p>
      </Section>
      
      <Section title="Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Recruitment"
            description="Manage the hiring process from job requisition to employee creation."
            bullets={[
              'Create staffing plan and job requisitions',
              'Publish job openings and receive applications',
              'Schedule and conduct interviews',
              'Make job offers and create employee records',
            ]}
          />
          <StepCard
            title="2. Employee Setup"
            description="Create and maintain employee records."
            bullets={[
              'Add personal details and contact information',
              'Set up employment details and department',
              'Configure salary structure assignment',
              'Manage employment history and documents',
            ]}
          />
          <StepCard
            title="3. Attendance"
            description="Track employee attendance and working hours."
            bullets={[
              'Set up shift schedules for employees',
              'Record daily checkins and checkouts',
              'Process leave requests and corrections',
              'Generate monthly attendance reports',
            ]}
          />
          <StepCard
            title="4. Leave Management"
            description="Handle employee leave requests and approvals."
            bullets={[
              'Employees submit leave applications',
              'Managers review and approve/reject',
              'System updates leave balances',
              'Generate leave reports and analytics',
            ]}
          />
          <StepCard
            title="5. Performance Appraisal"
            description="Conduct employee performance reviews."
            bullets={[
              'Create appraisal templates and cycles',
              'Employee self-assessment',
              'Manager evaluation and feedback',
              'Generate appraisal reports',
            ]}
          />
          <StepCard
            title="6. Timesheet"
            description="Track employee work hours."
            bullets={[
              'Log daily working hours',
              'Submit for manager approval',
              'Analyze time vs. estimates',
              'Integration with payroll',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Use staffing plans to forecast hiring needs</li>
          <li>✓ Configure shift schedules for accurate attendance tracking</li>
          <li>✓ Review and approve leave requests promptly</li>
          <li>✓ Run regular attendance reports for workforce planning</li>
        </ul>
      </Section>
    </div>
  )
}