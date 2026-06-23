'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { LogOut, Package, MapPin, Lock } from 'lucide-react'

type Tab = 'overview' | 'orders' | 'addresses' | 'settings'

// Mock user data
const mockUser = {
  firstName: 'Sarah',
  lastName: 'Anderson',
  email: 'sarah.anderson@example.com',
  phone: '+1 (555) 123-4567',
}

const mockOrders = [
  {
    id: '#LX-2024-001',
    date: '2024-01-15',
    status: 'Delivered',
    total: 2890.00,
    items: 3,
  },
  {
    id: '#LX-2024-002',
    date: '2024-01-10',
    status: 'In Transit',
    total: 1450.00,
    items: 1,
  },
  {
    id: '#LX-2024-003',
    date: '2024-01-05',
    status: 'Delivered',
    total: 890.00,
    items: 1,
  },
]

const mockAddresses = [
  {
    id: 1,
    type: 'Home',
    name: 'Sarah Anderson',
    address: '123 Luxury Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    default: true,
  },
  {
    id: 2,
    type: 'Work',
    name: 'Sarah Anderson',
    address: '456 Fashion Ave',
    city: 'New York',
    state: 'NY',
    zipCode: '10022',
    country: 'USA',
    default: false,
  },
]

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const [showChangePassword, setShowChangePassword] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl font-bold text-foreground">My Account</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="md:col-span-1">
              <div className="bg-secondary p-6 rounded-lg sticky top-20">
                <nav className="space-y-2">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'orders', label: 'Orders' },
                    { id: 'addresses', label: 'Addresses' },
                    { id: 'settings', label: 'Settings' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as Tab)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeTab === item.id
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-foreground hover:bg-background'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Logout Button */}
                <button className="w-full mt-8 px-4 py-2 flex items-center justify-center gap-2 text-destructive border border-destructive rounded-md hover:bg-red-50 transition-colors">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="md:col-span-3 space-y-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                      Welcome, {mockUser.firstName}!
                    </h2>
                    <p className="text-muted-foreground">
                      Manage your account information, view your orders, and update your preferences.
                    </p>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-secondary p-8 rounded-lg">
                    <h3 className="font-semibold text-lg text-foreground mb-6">
                      Personal Information
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">First Name</p>
                          <p className="font-semibold text-foreground">
                            {mockUser.firstName}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Last Name</p>
                          <p className="font-semibold text-foreground">
                            {mockUser.lastName}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-semibold text-foreground">
                            {mockUser.email}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-semibold text-foreground">
                            {mockUser.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="mt-6 px-6 py-2 border border-foreground text-foreground font-semibold hover:bg-background transition-colors">
                      Edit Information
                    </button>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-secondary p-6 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary mb-1">
                        {mockOrders.length}
                      </p>
                      <p className="text-sm text-muted-foreground">Total Orders</p>
                    </div>
                    <div className="bg-secondary p-6 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary mb-1">
                        ₹{(mockOrders.reduce((sum, o) => sum + o.total, 0)).toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">Total Spent</p>
                    </div>
                    <div className="bg-secondary p-6 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary mb-1">
                        {mockAddresses.length}
                      </p>
                      <p className="text-sm text-muted-foreground">Saved Addresses</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Order History</h2>
                  {mockOrders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-secondary p-6 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-semibold text-foreground">
                            {order.id}
                          </p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <span
                          className={`px-4 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                          {order.items} item{order.items > 1 ? 's' : ''} • Total: ₹{order.total.toFixed(2)}
                        </p>
                        <button className="text-primary font-semibold hover:underline">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === 'addresses' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Saved Addresses
                    </h2>
                    <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                      Add New Address
                    </button>
                  </div>
                  {mockAddresses.map((addr) => (
                    <div key={addr.id} className="bg-secondary p-6 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-semibold text-foreground">{addr.type}</p>
                            {addr.default && (
                              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-foreground">{addr.name}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-primary text-sm hover:underline">
                            Edit
                          </button>
                          <button className="text-destructive text-sm hover:underline">
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {addr.address}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {addr.city}, {addr.state} {addr.zipCode}
                      </p>
                      <p className="text-sm text-muted-foreground">{addr.country}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-8">
                  <h2 className="font-serif text-2xl font-bold text-foreground">Settings</h2>

                  {/* Password Section */}
                  <div className="bg-secondary p-8 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground flex items-center gap-2">
                          <Lock className="w-5 h-5" />
                          Password
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Update your password regularly for account security
                        </p>
                      </div>
                      <button
                        onClick={() => setShowChangePassword(!showChangePassword)}
                        className="text-primary font-semibold hover:underline"
                      >
                        {showChangePassword ? 'Cancel' : 'Change'}
                      </button>
                    </div>

                    {showChangePassword && (
                      <form className="space-y-4 mt-6 pt-6 border-t border-border">
                        <input
                          type="password"
                          placeholder="Current Password"
                          className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="password"
                          placeholder="New Password"
                          className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                          type="password"
                          placeholder="Confirm New Password"
                          className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                          type="submit"
                          className="px-6 py-2 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                        >
                          Update Password
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Preferences Section */}
                  <div className="bg-secondary p-8 rounded-lg space-y-4">
                    <h3 className="font-semibold text-lg text-foreground">Preferences</h3>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="text-foreground">
                        Receive promotional emails and updates
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="text-foreground">
                        Notify me about new collections
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                      />
                      <span className="text-foreground">
                        Receive SMS order updates
                      </span>
                    </label>
                    <button className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                      Save Preferences
                    </button>
                  </div>

                  {/* Danger Zone */}
                  <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
                    <h3 className="font-semibold text-lg text-red-900 mb-2">Danger Zone</h3>
                    <p className="text-sm text-red-800 mb-4">
                      Delete your account permanently. This action cannot be undone.
                    </p>
                    <button className="px-6 py-2 bg-destructive text-white font-semibold hover:opacity-90 transition-opacity">
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
