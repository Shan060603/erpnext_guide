import Flowchart from '@/components/Flowchart'
import Section from '@/components/Section'
import StepCard from '@/components/StepCard'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Project Module</h1>
      
      <Section title="Overview">
        <p>
          The Project module helps plan, execute, and monitor projects efficiently. It enables project managers 
          to create tasks, assign resources, track time, and monitor project progress against schedules and budgets.
        </p>
      </Section>
      
      <Section title="Workflow Steps">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StepCard
            title="1. Project Creation"
            description="Start by creating a new project with defined scope."
            bullets={[
              'Define project name and description',
              'Set project type and expected start/end dates',
              'Configure project team members',
              'Set budget and resource allocation',
            ]}
          />
          <StepCard
            title="2. Task Management"
            description="Break down project into manageable tasks."
            bullets={[
              'Create tasks and subtasks',
              'Assign to team members',
              'Set dependencies between tasks',
              'Define start and end dates',
            ]}
          />
          <StepCard
            title="3. Timesheet"
            description="Track time spent on project activities."
            bullets={[
              'Log daily working hours',
              'Break down time by tasks',
              'Submit for manager approval',
              'Analyze time vs. estimates',
            ]}
          />
          <StepCard
            title="4. Material Planning"
            description="Plan and allocate materials for project."
            bullets={[
              'Create material requirements',
              'Link to purchase requests',
              'Track material consumption',
              'Control project costs',
            ]}
          />
        </div>
      </Section>
      
      <Section title="Key Takeaways">
        <ul className="space-y-3 text-gray-700">
          <li>✓ Break projects into smaller tasks for better tracking</li>
          <li>✓ Use Gantt charts for visual project planning</li>
          <li>✓ Track time to monitor project profitability</li>
          <li>✓ Set milestones to track key deliverables</li>
        </ul>
      </Section>
    </div>
  )
}