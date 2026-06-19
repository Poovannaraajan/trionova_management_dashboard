import React, { useState, useMemo } from 'react';
import './ClientInvoiceDashboard.css';
import { Search, Calendar, Plus, Mail, Percent, ChevronDown } from 'lucide-react';

export default function ClientInvoiceDashboard() {
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');

  const formattedInvoiceDate = useMemo(() => {
    if (!invoiceDate) return '';
    const [year, month, day] = invoiceDate.split('-');
    if (!year || !month || !day) return '';
    return `${day}/${month}/${year.slice(-2)}`;
  }, [invoiceDate]);

  const formattedDueDate = useMemo(() => {
    if (!dueDate) return '';
    const [year, month, day] = dueDate.split('-');
    if (!year || !month || !day) return '';
    return `${day}/${month}/${year.slice(-2)}`;
  }, [dueDate]);

  return (
    <div className="dashboard-content" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="invoice-dashboard">
        <div className="invoice-header">
          Client New Invoice
        </div>

        <div className="invoice-form-grid">
          <div className="invoice-form-row">
            <div className="invoice-form-label">Client Name</div>
            <div className="invoice-form-control-wrap">
              <select className="invoice-form-input">
                <option>Client Name</option>
              </select>
              <button className="search-btn-small">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="invoice-form-row">
            <div className="invoice-form-label">Client PO Num</div>
            <div className="invoice-form-control-wrap">
              <input type="text" className="invoice-form-input" placeholder="Client PO Num" />
            </div>
          </div>

          <div className="invoice-form-row">
            <div className="invoice-form-label">Project Name</div>
            <div className="invoice-form-control-wrap">
              <input type="text" className="invoice-form-input" placeholder="Enter Project Name" />
            </div>
          </div>

          <div className="invoice-form-row">
            <div className="invoice-form-label">Invoice Number</div>
            <div className="invoice-form-control-wrap">
              <input type="text" className="invoice-form-input" placeholder="Invoice Number" />
            </div>
          </div>

          <div className="invoice-form-row">
            <div className="invoice-form-label">Invoice Date</div>
            <div className="invoice-form-control-wrap" style={{ position: 'relative' }}>
              <input 
                type="text" 
                className="invoice-form-input" 
                placeholder="dd/mm/yy" 
                value={formattedInvoiceDate}
                readOnly
                style={{ backgroundColor: 'transparent' }} 
              />
              <Calendar size={16} style={{ position: 'absolute', right: '12px', color: '#64748B', pointerEvents: 'none', zIndex: 1 }} />
              <input 
                type="date" 
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} 
              />
            </div>
          </div>

          <div className="invoice-form-row">
            <div className="invoice-form-label">Terms</div>
            <div className="invoice-form-control-wrap" style={{ width: 'auto' }}>
              <select className="invoice-form-input" style={{ width: '250px' }}>
                <option>Due on Receipt</option>
              </select>
            </div>

            <div className="invoice-form-label" style={{ width: 'auto', marginLeft: '32px', marginRight: '16px' }}>Due Date</div>
            <div className="invoice-form-control-wrap" style={{ position: 'relative', width: '250px' }}>
              <input 
                type="text" 
                className="invoice-form-input" 
                placeholder="dd/mm/yy" 
                value={formattedDueDate}
                readOnly
                style={{ backgroundColor: 'transparent' }} 
              />
              <Calendar size={16} style={{ position: 'absolute', right: '12px', color: '#64748B', pointerEvents: 'none', zIndex: 1 }} />
              <input 
                type="date" 
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} 
              />
            </div>
          </div>
        </div>

        <div className="add-more-fields">
          <div className="icon-circle">
            <Plus size={12} strokeWidth={3} />
          </div>
          Add More Fields
        </div>

        <div className="details-grid">
          {/* Billed To */}
          <div className="details-card">
            <div className="details-card-header">
              <div>Billed To <span className="light">Your Details</span></div>
            </div>
            <div className="details-form-group">
              <select className="details-input" defaultValue="India">
                <option>India</option>
              </select>
              <input type="text" className="details-input" placeholder="Your Business Name (required)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                <img src="https://flagcdn.com/w20/in.png" alt="India Flag" style={{ width: '20px' }} />
                <span style={{ fontSize: '14px', color: 'var(--text-main)' }}>+91</span>
                <input type="text" style={{ border: 'none', outline: 'none', flex: 1, fontSize: '14px', backgroundColor: 'transparent' }} />
              </div>
              <input type="text" className="details-input" placeholder="Your GSTIN (optional)" />
              <input type="text" className="details-input" placeholder="Address (optional)" />
              
              <div className="details-row-split">
                <input type="text" className="details-input" placeholder="City (optional)" />
                <input type="text" className="details-input" placeholder="Postal Code / ZIP Code" />
              </div>
              <input type="text" className="details-input" placeholder="State (optional)" style={{ width: '50%' }} />

              <div className="details-actions">
                <div className="details-action-link">
                  <Mail size={16} /> Add Email
                </div>
                <div className="details-action-link">
                  <div className="icon-circle" style={{ border: '1.5px solid var(--primary)', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={12} strokeWidth={3} />
                  </div>
                  Add PAN
                </div>
              </div>
            </div>
          </div>

          {/* Ship To */}
          <div className="details-card">
            <div className="details-card-header">
              <div>Ship To <span className="light">Client's Details</span></div>
              <div className="copy-billing">
                <input type="checkbox" style={{ cursor: 'pointer' }} />
                Copy Billing Address
              </div>
            </div>
            <div className="details-form-group">
              <select className="details-input" defaultValue="India">
                <option>India</option>
              </select>
              <input type="text" className="details-input" placeholder="Client's Business Name (required)" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                <img src="https://flagcdn.com/w20/in.png" alt="India Flag" style={{ width: '20px' }} />
                <span style={{ fontSize: '14px', color: 'var(--text-main)' }}>+91</span>
                <input type="text" style={{ border: 'none', outline: 'none', flex: 1, fontSize: '14px', backgroundColor: 'transparent' }} />
              </div>
              <input type="text" className="details-input" placeholder="Vendor GSTIN (optional)" />
              <input type="text" className="details-input" placeholder="Address (optional)" />
              
              <div className="details-row-split">
                <input type="text" className="details-input" placeholder="City (optional)" />
                <input type="text" className="details-input" placeholder="Postal Code / ZIP Code" />
              </div>
              <input type="text" className="details-input" placeholder="State (optional)" style={{ width: '50%' }} />

              <div className="details-actions">
                <div className="details-action-link">
                  <Mail size={16} /> Add Email
                </div>
                <div className="details-action-link">
                  <div className="icon-circle" style={{ border: '1.5px solid var(--primary)', borderRadius: '50%', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plus size={12} strokeWidth={3} />
                  </div>
                  Add PAN
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-actions">
          <button className="edit-gst-btn">
            <Percent size={16} />
            Edit GST
          </button>
          
          <div className="currency-wrap">
            <span className="currency-label">Currency</span>
            <div className="currency-select-wrap">
              <select className="currency-select">
                <option>Indian Rupee (INR, ₹)</option>
              </select>
              <ChevronDown size={16} className="chevron-icon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
