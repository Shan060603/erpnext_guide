'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { name: 'Dashboard', href: '/' },
  { name: 'CRM', href: '/crm' },
  { name: 'Selling', href: '/selling' },
  { name: 'Buying', href: '/buying' },
  { name: 'Inventory', href: '/inventory' },
  { name: 'Accounting', href: '/accounting' },
  { name: 'Project', href: '/project' },
  { name: 'Service', href: '/service' },
  { name: 'HR', href: '/hr' },
  { name: 'Payroll', href: '/payroll' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Asset Management', href: '/asset' },
  { name: 'Reports', href: '/reports' },
  { name: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 shadow-sm overflow-y-auto z-40 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
        {/* Header with toggle button */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              ERPNext Manual
            </h1>
            <p className="text-sm text-gray-500 mt-1">User Training Guide</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
            aria-label="Collapse sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            v1.0 • ERPNext Documentation
          </p>
        </div>
      </aside>

      {/* Expand button - visible when sidebar is collapsed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
          aria-label="Expand sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Spacer element - adjusts based on sidebar state */}
      <div className={`fixed left-0 top-0 h-screen transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`} />
    </>
  )
}