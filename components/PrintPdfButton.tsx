'use client'

interface PrintPdfButtonProps {
  className?: string
  label?: string
}

export default function PrintPdfButton({
  className,
  label = 'Download PDF',
}: PrintPdfButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={
        className ??
        'inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-sm hover:bg-gray-800 hover:shadow transition focus:outline-none focus:ring-2 focus:ring-gray-300'
      }
    >
      {label}
      <svg
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5 2a2 2 0 0 0-2 2v3h2V4h10v3h2V4a2 2 0 0 0-2-2H5z" />
        <path
          fillRule="evenodd"
          d="M3 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v-2H3v-3h14v3h-4v2h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
          clipRule="evenodd"
        />
        <path d="M6 12a2 2 0 0 0-2 2v4h12v-4a2 2 0 0 0-2-2H6zm0 2h8v2H6v-2z" />
      </svg>
    </button>
  )
}

