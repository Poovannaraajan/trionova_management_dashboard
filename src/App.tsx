import React, { useState } from 'react';
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
  ChevronRight,
  ChevronLeft,
  Download,
  Edit2,
  X
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          TRIONOVA
        </div>

        <nav className="nav-section">
          <div className="nav-item">
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
            <span className="nav-sub-item">Client</span>
            <span className="nav-sub-item">Sales Orders</span>
            <span className="nav-sub-item">Client Invoice</span>
            <span className="nav-sub-item">Delivery Challan</span>
            <span className="nav-sub-item">Payment Received</span>
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
          <div className="nav-item active">
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

        {/* Dashboard Content */}
        <main className="dashboard-content">
          <div className="dashboard-header">
            <div className="dashboard-title">
              <h1>Inventory Management</h1>
              <p>Real-time tracking of electrical components and supply chain status.</p>
            </div>
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
              <Plus size={18} />
              Add New Item
            </button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Package size={24} />
              </div>
              <div>
                <div className="stat-label">TOTAL INVENTORY</div>
                <div className="stat-value">1,248</div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-wrapper stat-icon-danger">
                <Package size={24} />
              </div>
              <div>
                <div className="stat-label">LOW STOCK ALERTS</div>
                <div className="stat-value danger">1,248</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Package size={24} />
              </div>
              <div>
                <div className="stat-label">OUT OF STOCK</div>
                <div className="stat-value">1,248</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Package size={24} />
              </div>
              <div>
                <div className="stat-label">VALUE OF INVENTORY</div>
                <div className="stat-value">1,248</div>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="table-section">
            <div className="table-filters">
              <div className="filter-group">
                <div className="filter-dropdown">
                  All Payments <ChevronDown size={16} />
                </div>
                <div className="filter-dropdown" style={{color: 'var(--text-muted)'}}>
                  All Categories <ChevronDown size={16} />
                </div>
                <div className="filter-dropdown" style={{color: 'var(--text-muted)'}}>
                  All Statuses <ChevronDown size={16} />
                </div>
              </div>
              <button className="btn-primary" style={{padding: '8px 16px', fontSize: '13px'}}>
                <Download size={16} />
                Export CSV
              </button>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th style={{textAlign: 'center'}}>S.No</th>
                    <th>Item Name</th>
                    <th>SKU</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <tr key={item}>
                      <td style={{textAlign: 'center'}}>{item}</td>
                      <td>{index === 1 ? 'LED Panel' : 'Copper Wire 12/2'}</td>
                      <td>{index === 1 ? 'LP-24-FLAT' : 'CW-122-THHN'}</td>
                      <td>{index === 1 ? 'Lighting' : 'Wiring'}</td>
                      <td>2500 ft</td>
                      <td>₹0.85/ft</td>
                      <td>
                        <span className="badge">IN STOCK</span>
                      </td>
                      <td>
                        <button className="action-btn">
                          <Edit2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="pagination-area">
              <div className="showing-text">
                Showing 1-5 of 1,248 items
                <div className="rows-dropdown">
                  5 <ChevronDown size={14} />
                </div>
              </div>
              
              <div className="pagination-controls">
                <button className="page-btn"><ChevronLeft size={16} /></button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Inventory Item</h2>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Item Name</label>
                <input type="text" placeholder="e.g. Copper Wire 12/2" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>SKU</label>
                  <input type="text" defaultValue="CW-122-THHN" />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select>
                    <option>Wiring</option>
                    <option>Lighting</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Quantity</label>
                  <input type="number" defaultValue="0" />
                </div>
                <div className="form-group">
                  <label>Unit Price</label>
                  <input type="text" placeholder="$0.00" />
                </div>
              </div>

              <div className="form-group">
                <label>Initial Stock Status</label>
                <select>
                  <option>In Stock</option>
                  <option>Low Stock</option>
                  <option>Out of Stock</option>
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className="btn-dark">Save Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
