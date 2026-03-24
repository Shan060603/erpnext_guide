'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [scale, setScale] = useState(1.0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleZoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.25, 3))
  }, [])

  const handleZoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.25, 0.5))
  }, [])

  const handleReset = useCallback(() => {
    setScale(1.0)
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
    <div className="mb-8">
      {/* Centered Toggle Buttons */}
      <div className="flex justify-center gap-2 mb-2 items-center">
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-lg font-bold"
          title="Zoom Out"
        >
          −
        </button>
        <button
          onClick={handleReset}
          className="px-3 h-8 flex items-center justify-center bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-medium"
          title="Reset Zoom"
        >
          Reset
        </button>
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-lg font-bold"
          title="Zoom In"
        >
          +
        </button>
        <span className="text-xs text-gray-500 ml-2">
          {Math.round(scale * 100)}%
        </span>
      </div>

      {/* Centered Flowchart Container */}
      <div className="flex justify-center overflow-x-auto border rounded-xl bg-white shadow-md p-8">
        <div
          ref={containerRef}
          className="w-full flex justify-center items-center"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            minHeight: '600px',
            minWidth: '100%'
          }}
        />
      </div>
    </div>
  )
}