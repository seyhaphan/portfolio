'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/cv', label: 'CV', icon: '📄' },
  ]

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="text-green-400 font-mono text-lg font-bold">
              <span className="text-blue-400">class</span>{' '}
              <span className="text-yellow-300">Developer</span>
              <span className="text-gray-400">&#123;&#125;</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-sm font-mono transition-colors duration-200 flex items-center space-x-2 ${
                    isActive
                      ? 'bg-green-400 text-gray-900 font-bold'
                      : 'text-green-400 hover:bg-gray-700 hover:text-green-300'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-mono">Available</span>
          </div>
        </div>
      </div>
    </nav>
  )
}