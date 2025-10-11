import React from 'react'

export default function Dashboard() {
  const quickActions = [
    { title: 'Users', description: 'Manage accounts', icon: '👤' },
    { title: 'Gallery', description: 'Organize media', icon: '🖼️' },
    { title: 'Settings', description: 'System preferences', icon: '⚙️' },
  ]

  return (
    <div className="p-4 space-y-6">
      {/* Welcome */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-600 text-sm">Manage your application from here.</p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <button key={index} className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 text-center">
              <div className="text-2xl mb-2">{action.icon}</div>
              <h3 className="font-medium text-gray-900">{action.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="font-bold text-gray-900 mb-4">Guidelines</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900">User Management</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Update permissions regularly</li>
              <li>• Remove inactive accounts</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Content</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Review uploads</li>
              <li>• Organize categories</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">All systems operational</span>
        </div>
      </div>
    </div>
  )
}
