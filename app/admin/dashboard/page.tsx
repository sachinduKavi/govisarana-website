import React from 'react'

export default function Dashboard() {
  const quickActions = [
    { title: 'Users Profiles', description: 'Manage user accounts and permissions', icon: '👤' },
    { title: 'Gallery', description: 'Upload and organize media files', icon: '🖼️' },
    { title: 'Settings', description: 'Configure system preferences', icon: '⚙️' },
  ]

  const guidelines = [
    {
      title: 'User Management',
      points: ['Regularly review and update user permissions', 'Remove inactive accounts monthly', 'Monitor user activity logs'],
    },
    {
      title: 'Content Management',
      points: ['Review gallery uploads for compliance', 'Organize content into categories', 'Monitor storage usage'],
    },
    {
      title: 'System Maintenance',
      points: ['Perform regular backups', 'Update system software', 'Monitor performance metrics'],
    },
  ]

  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Admin Panel</h1>
        <p className="text-gray-600">Manage your application settings, users, and content from this dashboard.</p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <button key={index} className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200 text-center">
              <div className="text-3xl mb-3">{action.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Admin Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guidelines.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">{section.title}</h3>
              <ul className="space-y-3">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">All systems operational</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  )
}
