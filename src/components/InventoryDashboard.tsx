import React, { useState } from 'react';
import './InventoryDashboard.css';
import { Package, ChevronDown, Download, Edit2, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';

export default function InventoryDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const MOCK_DATA = [
    { id: 1, name: 'Copper Wire 12/2', sku: 'CW-122-THHN', category: 'Wiring', quantity: '2500 ft', unitPrice: '₹0.85/ft', status: 'IN STOCK' },
    { id: 2, name: 'LED Panel', sku: 'LP-24-FLAT', category: 'Lighting', quantity: '2500 ft', unitPrice: '₹0.85/ft', status: 'IN STOCK' },
    { id: 3, name: 'Copper Wire 12/2', sku: 'CW-122-THHN', category: 'Wiring', quantity: '2500 ft', unitPrice: '₹0.85/ft', status: 'IN STOCK' },
    { id: 4, name: 'Copper Wire 12/2', sku: 'CW-122-THHN', category: 'Wiring', quantity: '2500 ft', unitPrice: '₹0.85/ft', status: 'IN STOCK' },
    { id: 5, name: 'Copper Wire 12/2', sku: 'CW-122-THHN', category: 'Wiring', quantity: '2500 ft', unitPrice: '₹0.85/ft', status: 'IN STOCK' },
    { id: 6, name: 'Circuit Breaker 20A', sku: 'CB-20A-1P', category: 'Breakers', quantity: '150 units', unitPrice: '₹350/unit', status: 'IN STOCK' },
    { id: 7, name: 'PVC Conduit 3/4"', sku: 'PVC-075-10', category: 'Conduit', quantity: '1000 ft', unitPrice: '₹12/ft', status: 'LOW STOCK' },
    { id: 8, name: 'Switch Box 1-Gang', sku: 'SB-1G-PL', category: 'Boxes', quantity: '500 units', unitPrice: '₹45/unit', status: 'IN STOCK' },
    { id: 9, name: 'Grounding Rod 8ft', sku: 'GR-8-CU', category: 'Grounding', quantity: '50 units', unitPrice: '₹1200/unit', status: 'IN STOCK' },
    { id: 10, name: 'Wire Nuts (Yellow)', sku: 'WN-YL-100', category: 'Connectors', quantity: '200 packs', unitPrice: '₹150/pack', status: 'IN STOCK' },
    { id: 11, name: 'GFCI Receptacle 15A', sku: 'GFCI-15A-WH', category: 'Receptacles', quantity: '100 units', unitPrice: '₹850/unit', status: 'IN STOCK' },
    { id: 12, name: 'Romex 14/2 250ft', sku: 'RX-142-250', category: 'Wiring', quantity: '20 rolls', unitPrice: '₹6500/roll', status: 'IN STOCK' },
    { id: 13, name: 'Ceiling Fan Box', sku: 'CFB-1', category: 'Boxes', quantity: '0 units', unitPrice: '₹120/unit', status: 'OUT OF STOCK' },
    { id: 14, name: 'EMT Conduit 1/2"', sku: 'EMT-050-10', category: 'Conduit', quantity: '500 ft', unitPrice: '₹25/ft', status: 'IN STOCK' },
    { id: 15, name: 'Electrical Tape (Blk)', sku: 'ET-BLK-33', category: 'Supplies', quantity: '300 rolls', unitPrice: '₹40/roll', status: 'IN STOCK' },
  ];

  const totalPages = Math.ceil(MOCK_DATA.length / itemsPerPage);
  const displayedData = MOCK_DATA.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleExportCSV = () => {
    const headers = ['S.No', 'Item Name', 'SKU', 'Category', 'Quantity', 'Unit Price', 'Status'];
    const escapeCsv = (str: string | number) => `"${String(str).replace(/"/g, '""')}"`;

    const rows = MOCK_DATA.map(item => [
      item.id,
      escapeCsv(item.name),
      escapeCsv(item.sku),
      escapeCsv(item.category),
      escapeCsv(item.quantity),
      escapeCsv(item.unitPrice),
      escapeCsv(item.status)
    ]);
    
    const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'inventory_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-content">
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
            <div className="filter-dropdown" style={{ color: 'var(--text-muted)' }}>
              All Categories <ChevronDown size={16} />
            </div>
            <div className="filter-dropdown" style={{ color: 'var(--text-muted)' }}>
              All Statuses <ChevronDown size={16} />
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }} onClick={handleExportCSV}>
            <Download size={16} />
            Export CSV
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>S.No</th>
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
              {displayedData.map((item) => (
                <tr key={item.id}>
                  <td style={{ textAlign: 'center' }}>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.sku}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <span className="badge" style={{
                      backgroundColor: item.status === 'LOW STOCK' ? '#FEF3C7' : item.status === 'OUT OF STOCK' ? '#FEE2E2' : '#F1F5F9',
                      color: item.status === 'LOW STOCK' ? '#D97706' : item.status === 'OUT OF STOCK' ? '#EF4444' : 'var(--text-muted)'
                    }}>
                      {item.status}
                    </span>
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
            Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, MOCK_DATA.length)} of {MOCK_DATA.length} items
            <div className="rows-dropdown">
              5 <ChevronDown size={14} />
            </div>
          </div>

          <div className="pagination-controls">
            <button 
              className="page-btn" 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i + 1} 
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button 
              className="page-btn"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
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
