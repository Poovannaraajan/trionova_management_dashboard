import React, { useState } from 'react';
import './App.css';
import { 
  Home, 
  Users, 
  ShoppingCart, 
  Landmark, 
  FileText, 
  CreditCard, 
  Files, 
  PenTool, 
  Settings, 
  Package, 
  Search, 
  Plus, 
  Bell, 
  ChevronDown, 
  ChevronRight
} from 'lucide-react';
import InventoryDashboard from './components/InventoryDashboard';
import HomeDashboard from './components/HomeDashboard';
import ClientDashboard from './components/ClientDashboard';
import PaymentReceivedDashboard from './components/PaymentReceivedDashboard';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <img className="logo-image" src="./public/logo.png" alt="" />
          </div>
          TRIONOVA
        </div>

        <nav className="nav-section">
          <div 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            <div className="nav-item-content">
              <Home size={18} />
              <span>Home</span>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-item-content">
              <Users size={18} />
              <span>Client Details</span>
            </div>
            <ChevronRight size={16} />
          </div>
          <div className="nav-sub">
            <span 
              className={`nav-sub-item ${activeTab === 'client' ? 'active' : ''}`}
              onClick={() => setActiveTab('client')}
            >
              Client
            </span>
            <span className="nav-sub-item">Sales Orders</span>
            <span className="nav-sub-item">Client Invoice</span>
            <span className="nav-sub-item">Delivery Challan</span>
            <span 
              className={`nav-sub-item ${activeTab === 'payment-received' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment-received')}
            >
              Payment Received
            </span>
            <span className="nav-sub-item">Credit Notes</span>
          </div>

          <div className="nav-item">
            <div className="nav-item-content">
              <ShoppingCart size={18} />
              <span>Order</span>
            </div>
            <ChevronRight size={16} />
          </div>
          <div className="nav-sub">
            <span className="nav-sub-item">Supplier</span>
            <span className="nav-sub-item">Purchase Orders</span>
            <span className="nav-sub-item">Bills</span>
            <span className="nav-sub-item">Payment Paid</span>
            <span className="nav-sub-item">Credit Notes</span>
          </div>

          <div className="nav-item">
            <div className="nav-item-content">
              <Landmark size={18} />
              <span>Transactions</span>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <FileText size={18} />
              <span>Reports</span>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <CreditCard size={18} />
              <span>Expenses</span>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <Files size={18} />
              <span>Documents</span>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <PenTool size={18} />
              <span>Drawings</span>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-item-content">
              <Settings size={18} />
              <span>Machinery</span>
            </div>
          </div>
          <div 
            className={`nav-item ${activeTab === 'inventory' ? 'active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            <div className="nav-item-content">
              <Package size={18} />
              <span>Inventory Management</span>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="main-wrapper">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search" />
          </div>

          <div className="topbar-right">
            <div className="user-profile">
              Ganesh Electricals
              <ChevronDown size={16} />
            </div>
            
            <div className="topbar-actions">
              <button className="icon-btn">
                <Plus size={20} />
              </button>
              <button className="icon-btn-outline">
                <Bell size={20} />
              </button>
              <button className="icon-btn-outline">
                <Settings size={20} />
              </button>
              <div className="avatar"></div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Switching */}
        {activeTab === 'home' && <HomeDashboard />}
        {activeTab === 'inventory' && <InventoryDashboard />}
        {activeTab === 'client' && <ClientDashboard />}
        {activeTab === 'payment-received' && <PaymentReceivedDashboard />}
      </div>
    </div>
  );
}
