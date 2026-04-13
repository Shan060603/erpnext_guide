'use client'

import { useEffect, useRef, useState } from 'react'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
          setError(null)
          containerRef.current.innerHTML = ''

          await mermaid.default.parse(chart)
          const id = `mermaid-${Math.random().toString(36).substring(7)}`
          const { svg } = await mermaid.default.render(id, chart)
          containerRef.current.innerHTML = svg

          const svgElement = containerRef.current.querySelector('svg')
          if (svgElement) {
            svgElement.removeAttribute('width')
            svgElement.removeAttribute('height')
            svgElement.style.width = '100%'
            svgElement.style.height = 'auto'
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet')

            if (!svgElement.getAttribute('viewBox')) {
              try {
                const bbox = svgElement.getBBox()
                svgElement.setAttribute(
                  'viewBox',
                  `0 0 ${Math.ceil(bbox.width)} ${Math.ceil(bbox.height)}`
                )
              } catch {
                // Some browsers may throw if SVG isn't fully laid out yet.
              }
            }
          }
        }
      } catch (error) {
        console.error('Mermaid render error:', error)
        const message = error instanceof Error ? error.message : String(error)
        setError(`Mermaid diagram failed to render: ${message}`)
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

  if (error) {
    return (
      <div className="print-block mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-sm text-red-700">{error}</p>
      </div>
    )
  }

  return (
    <div className="mermaid-block print-block mb-8 border rounded-xl bg-white shadow-md p-4 overflow-x-auto">
      <div
        ref={containerRef}
        className="flex justify-center"
      />
    </div>
  )
}
