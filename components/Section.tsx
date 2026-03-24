interface SectionProps {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  )
}