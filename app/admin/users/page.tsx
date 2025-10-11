'use client'

import { loadUserDetails } from '@/model/System'
import React, { useEffect, useState } from 'react'

interface UserDetail {
  recordId: string
  fullName: string | null
  address: string | null
  email: string | null
  mobileNumber: string | null
  telephoneNumber: string | null
  divisionalSectaryDivision: string | null
  nic: string | null
  religion: string | null
  race: string | null
  userId: number | null
  account: boolean
  createdAt: string
  updatedAt: string | null
  isHidden: boolean
  gender: string | null
  birthday: string | null
  geoLocation: string | null
  studentDetails: any
  occupationDetails: any
  physicalDiseases: any
  mentalIllness: any
  deceasedDetails: any
  familyFinancial: any
  nonPermanentEmployment: any
  loanInformation: any
  itSkills: any
  artisticAbilities: any
  sportingAbilities: any
  communicationMethods: any
  expertiseContribution: any
  retiredIndividuals: any
  communityVoluntaryWork: any
  vocationalCandidates: any
  agricultureDetails: any
  additionalJobsData: any
  animalHusbandryRecord: any
  fruitTreeRecord: any
  seedsRecord: any
  vegetableRecord: any
  familyEntertainment: any
  waterSource: any
  vehicles: any
  landOwnership: any
  membershipDetails: any
  foodProductRecord: any
}

export default function Users() {
  const [userDetails, setUserDetails] = useState<UserDetail[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedUser, setExpandedUser] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUserDetails = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Fetching user details...')

      // Define a type for the possible response structure
      type UserDetailsResponse = UserDetail[] | { content: UserDetail[] } | { proceed: boolean; content: UserDetail[] }

      const res = (await loadUserDetails()) as UserDetailsResponse
      console.log('API Response:', res)

      // Handle the response based on your actual data structure
      if (res && Array.isArray(res)) {
        // If the response is directly the array
        setUserDetails(res)
        console.log(`Loaded ${res.length} users directly from array`)
      } else if (res && typeof res === 'object' && 'content' in res && Array.isArray(res.content)) {
        // If the response has a content property with the array
        setUserDetails(res.content)
        console.log(`Loaded ${res.content.length} users from res.content`)
      } else if (res && typeof res === 'object' && 'proceed' in res && 'content' in res && Array.isArray(res.content)) {
        // If the response has proceed and content properties
        setUserDetails(res.content)
        console.log(`Loaded ${res.content.length} users from res.content with proceed`)
      } else {
        setError('Invalid data format received from server')
        console.error('Invalid response format:', res)
      }
    } catch (error) {
      console.error('Error fetching user details:', error)
      setError('Failed to load user details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserDetails()
  }, [])

  const toggleUser = (recordId: string) => {
    setExpandedUser(expandedUser === recordId ? null : recordId)
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not specified'
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return 'Invalid date'
    }
  }

  const getNonNullValues = (obj: Record<string, any>) => {
    if (!obj || typeof obj !== 'object') return {}

    const result: Record<string, any> = {}

    Object.entries(obj).forEach(([key, value]) => {
      // Skip ID fields, recordId, and empty values
      if (key.toLowerCase().includes('id') || key === 'recordId' || key === 'createdAt' || key === 'updatedAt') return

      if (value !== null && value !== '' && value !== undefined) {
        result[key] = value
      }
    })

    return result
  }

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/_/g, ' ')
      .trim()
  }

  const renderDetailSection = (title: string, data: Record<string, any>) => {
    const nonNullData = getNonNullValues(data)
    if (Object.keys(nonNullData).length === 0) return null

    return (
      <div className="detail-section bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3 text-blue-600 border-b pb-2">{title}</h3>
        <div className="space-y-2">
          {Object.entries(nonNullData).map(([key, value]) => (
            <div key={key} className="flex justify-between items-start">
              <span className="font-medium text-gray-700 text-sm flex-shrink-0 mr-4 min-w-[120px]">{formatKey(key)}:</span>
              <span className="text-gray-900 text-right text-sm break-words flex-1">{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : Array.isArray(value) ? value.join(', ') : String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderUserDetails = (user: UserDetail) => {
    const sections = []

    // Basic Information (always show)
    const basicInfo = {
      'Full Name': user.fullName,
      NIC: user.nic,
      'Mobile Number': user.mobileNumber,
      Gender: user.gender,
      Birthday: formatDate(user.birthday),
    }
    sections.push(renderDetailSection('Basic Information', basicInfo))

    // Contact Information
    const contactInfo = {
      Address: user.address,
      Email: user.email,
      'Telephone Number': user.telephoneNumber,
      'Divisional Sectary Division': user.divisionalSectaryDivision,
      'Geo Location': user.geoLocation,
    }
    sections.push(renderDetailSection('Contact Information', contactInfo))

    // Personal Details
    const personalInfo = {
      Religion: user.religion,
      Race: user.race,
    }
    sections.push(renderDetailSection('Personal Details', personalInfo))

    // Account Information
    const accountInfo = {
      'User ID': user.userId,
      'Account Status': user.account ? 'Active' : 'Inactive',
      'Created At': formatDate(user.createdAt),
      'Updated At': formatDate(user.updatedAt),
      Hidden: user.isHidden ? 'Yes' : 'No',
    }
    sections.push(renderDetailSection('Account Information', accountInfo))

    // Additional sections - only render if data exists
    const additionalSections = [
      { key: 'studentDetails', title: 'Student Details' },
      { key: 'occupationDetails', title: 'Occupation Details' },
      { key: 'agricultureDetails', title: 'Agriculture Details' },
      { key: 'additionalJobsData', title: 'Additional Jobs' },
      { key: 'animalHusbandryRecord', title: 'Animal Husbandry' },
      { key: 'fruitTreeRecord', title: 'Fruit Trees' },
      { key: 'seedsRecord', title: 'Seeds' },
      { key: 'vegetableRecord', title: 'Vegetables' },
      { key: 'familyEntertainment', title: 'Family Entertainment' },
      { key: 'waterSource', title: 'Water Source' },
      { key: 'vehicles', title: 'Vehicles' },
      { key: 'landOwnership', title: 'Land Ownership' },
      { key: 'membershipDetails', title: 'Membership Details' },
      { key: 'foodProductRecord', title: 'Food Products' },
      { key: 'physicalDiseases', title: 'Physical Diseases' },
      { key: 'mentalIllness', title: 'Mental Illness' },
      { key: 'deceasedDetails', title: 'Deceased Details' },
      { key: 'nonPermanentEmployment', title: 'Non-Permanent Employment' },
      { key: 'itSkills', title: 'IT Skills' },
      { key: 'vocationalCandidates', title: 'Vocational Candidates' },
    ]

    additionalSections.forEach(({ key, title }) => {
      if (user[key as keyof UserDetail]) {
        sections.push(renderDetailSection(title, user[key as keyof UserDetail]))
      }
    })

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">{sections.filter(Boolean)}</div>
  }

  const filteredUsers = userDetails?.filter((user) => user.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) || user.nic?.toLowerCase().includes(searchTerm.toLowerCase()) || user.mobileNumber?.includes(searchTerm) || user.email?.toLowerCase().includes(searchTerm.toLowerCase())) || []

  const stats = {
    totalMembers: userDetails?.length || 0,
    activeAccounts: userDetails?.filter((user) => user.account).length || 0,
    withCompleteInfo: userDetails?.filter((user) => user.fullName && user.nic && user.mobileNumber).length || 0,
    hiddenAccounts: userDetails?.filter((user) => user.isHidden).length || 0,
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading user details...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button onClick={fetchUserDetails} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Community Member Registry</h1>
          <p className="text-xl text-gray-600">Comprehensive details of all community members</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input type="text" placeholder="Search members by name, NIC, mobile number, or email..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full max-w-2xl mx-auto block px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200" />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 text-center border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-600">{stats.totalMembers}</div>
            <div className="text-gray-600 text-sm mt-1">Total Members</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600">{stats.activeAccounts}</div>
            <div className="text-gray-600 text-sm mt-1">Active Accounts</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-purple-600">{stats.withCompleteInfo}</div>
            <div className="text-gray-600 text-sm mt-1">Complete Profiles</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center border-l-4 border-orange-500">
            <div className="text-2xl font-bold text-orange-600">{stats.hiddenAccounts}</div>
            <div className="text-gray-600 text-sm mt-1">Hidden Accounts</div>
          </div>
        </div>

        {/* Users Accordion */}
        <div className="space-y-3">
          {filteredUsers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500 text-lg">{userDetails.length === 0 ? 'No members found in the system.' : 'No members found matching your search criteria.'}</p>
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div key={user.recordId} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md">
                {/* Accordion Header */}
                <button onClick={() => toggleUser(user.recordId)} className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${user.account ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {user.fullName || 'Unnamed Member'}
                        {user.isHidden && <span className="ml-2 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Hidden</span>}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {user.nic && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">NIC: {user.nic}</span>}
                        {user.mobileNumber && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Mobile: {user.mobileNumber}</span>}
                        {!user.account && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Inactive</span>}
                      </div>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-200 ${expandedUser === user.recordId ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content */}
                {expandedUser === user.recordId && <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">{renderUserDetails(user)}</div>}
              </div>
            ))
          )}
        </div>

        {/* Footer Info */}
        {filteredUsers.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Showing {filteredUsers.length} of {stats.totalMembers} members
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        )}
      </div>
    </div>
  )
}
