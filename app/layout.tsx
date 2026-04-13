import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import PrintPdfButton from '@/components/PrintPdfButton'

export const metadata: Metadata = {
  title: 'ERPNext User Training Manual',
  description: 'Comprehensive guide to ERPNext modules and workflows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
              {children}
            </div>
          </main>
        </div>

        <div className="no-print fixed bottom-6 right-6 z-50">
          <PrintPdfButton
            label="PDF"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </body>
    </html>
  )
}
