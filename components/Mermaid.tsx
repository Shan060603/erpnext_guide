'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const renderChart = async () => {
      if (!mounted || !containerRef.current) return
      
      try {
        const mermaid = await import('mermaid')
        mermaid.default.initialize({ 
          startOnLoad: false,
          theme: 'default',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          },
          securityLevel: 'loose'
        })
        
        if (containerRef.current) {
          const id = `mermaid-${Math.random().toString(36).substring(7)}`
          const { svg } = await mermaid.default.render(id, chart)
          containerRef.current.innerHTML = svg
        }
      } catch (error) {
        console.error('Mermaid render error:', error)
      }
    }
    
    if (mounted) {
      renderChart()
    }
  }, [chart, mounted])

  if (!mounted) {
    return (
      <div className="mb-8 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-500">Loading flowchart...</p>
      </div>
    )
  }

  return (
    <div className="mb-8 border rounded-xl bg-white shadow-md p-4 overflow-x-auto">
      <div
        ref={containerRef}
        className="min-h-[600px]"
      />
    </div>
  )
}