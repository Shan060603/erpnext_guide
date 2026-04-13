interface StepCardProps {
  title: string
  description: string
  bullets?: string[]
}

export default function StepCard({ title, description, bullets }: StepCardProps) {
  return (
    <div className="print-block bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-3 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
