interface FlowchartProps {
  src: string
  title: string
}

export default function Flowchart({ src, title }: FlowchartProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}