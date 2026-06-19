import React, { useState, useMemo } from 'react';
import './PaymentReceivedDashboard.css';
import { Search, SlidersHorizontal, X, Calendar } from 'lucide-react';

export default function PaymentReceivedDashboard() {
  const [filterText, setFilterText] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const formattedPaymentDate = useMemo(() => {
    if (!paymentDate) return '';
    const [year, month, day] = paymentDate.split('-');
    if (!year || !month || !day) return '';
    return `${day}/${month}/${year.slice(-2)}`;
  }, [paymentDate]);
  
  const [invoices, setInvoices] = useState([
    { id: 1, date: '23/11/2024', dueDate: '23/11/2024', invoiceNumber: 'GY_2025_03_05', amount: '2,00,000', amountDue: '3,42,000', payment: '50,000' },
    { id: 2, date: '23/11/2024', dueDate: '23/11/2024', invoiceNumber: 'GY_2025_03_06', amount: '2,00,000', amountDue: '3,42,000', payment: '' },
  ]);

  const handleClearApplied = () => {
    setInvoices(invoices.map(inv => ({ ...inv, payment: '' })));
  };

  const handlePaymentChange = (id: number, value: string) => {
    setInvoices(invoices.map(inv => inv.id === id ? { ...inv, payment: value } : inv));
  };

  const handlePayInFull = (id: number, amountDue: string) => {
    setInvoices(invoices.map(inv => inv.id === id ? { ...inv, payment: amountDue } : inv));
  };

  const filteredInvoices = useMemo(() => {
    return invoices.filter(inv => inv.invoiceNumber.toLowerCase().includes(filterText.toLowerCase()));
  }, [invoices, filterText]);

  const totalPayment = useMemo(() => {
    const total = invoices.reduce((sum, inv) => {
      const val = parseFloat(inv.payment.replace(/,/g, '')) || 0;
      return sum + val;
    }, 0);
    // If it's exactly 0, handle cleanly, otherwise format Indian numbering system.
    return total > 0 ? total.toLocaleString('en-IN') : '0.00';
  }, [invoices]);

  return (
    <div className="dashboard-content" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="payment-dashboard">
        <div className="payment-header">
          Record Payment
        </div>

        <div className="form-grid">
          <div className="form-group-row">
            <div className="form-label">Client Name</div>
            <div className="form-control-wrap">
              <select className="form-input">
                <option>Gayathri & CO.,</option>
              </select>
              <button className="search-btn-small">
                <Search size={16} />
              </button>
            </div>
          </div>

          <div className="form-group-row" style={{ alignItems: 'flex-start' }}>
            <div className="form-label" style={{ marginTop: '10px' }}>Amount received</div>
            <div>
              <div className="form-control-wrap">
                <div className="input-group">
                  <span className="input-group-addon">INR</span>
                  <input type="text" className="form-input" />
                </div>
              </div>
              <div className="checkbox-wrap">
                <input type="checkbox" />
                <span>Received Full Amount (₹5,42,000.00)</span>
              </div>
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-label">Invoice Number</div>
            <div className="form-control-wrap">
              <input type="text" className="form-input" />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-label">Payment Date</div>
            <div className="form-control-wrap" style={{ position: 'relative' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="dd/mm/yy" 
                value={formattedPaymentDate}
                readOnly
                style={{ color: 'var(--text-main)', fontFamily: 'inherit', backgroundColor: 'transparent' }} 
              />
              <Calendar size={16} style={{ position: 'absolute', right: '12px', color: '#64748B', pointerEvents: 'none', zIndex: 1 }} />
              <input 
                type="date" 
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  opacity: 0, 
                  cursor: 'pointer',
                  zIndex: 2
                }} 
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-label">Payment Mode</div>
            <div className="form-control-wrap">
              <select className="form-input">
                <option>Cash</option>
              </select>
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-label">Reference</div>
            <div className="form-control-wrap">
              <input type="text" className="form-input" />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-label">Tax Deducted</div>
            <div className="form-control-wrap">
              <select className="form-input">
                <option>No Tax Deducted</option>
              </select>
            </div>
          </div>
        </div>

        <div className="unpaid-section">
          <div className="unpaid-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              Unpaid Invoices
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input 
                  type="text" 
                  placeholder="Filter by Invoice..." 
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    border: 'none', 
                    fontSize: '12px',
                    outline: 'none',
                    color: 'var(--text-main)',
                    width: '160px'
                  }} 
                />
                {filterText && (
                  <X 
                    size={14} 
                    style={{ position: 'absolute', right: '6px', color: '#64748B', cursor: 'pointer' }} 
                    onClick={() => setFilterText('')}
                  />
                )}
              </div>
            </div>
            <div style={{ cursor: 'pointer' }} onClick={handleClearApplied}>Clear Applied Amount</div>
          </div>
          <table className="unpaid-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Invoice Number</th>
                <th>Amount</th>
                <th>Amount Due</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((inv) => (
                <tr key={inv.id}>
                  <td>
                    {inv.date}<br/>
                    <span style={{ color: 'var(--text-muted)' }}>Due Date: {inv.dueDate}</span>
                  </td>
                  <td>{inv.invoiceNumber}</td>
                  <td>{inv.amount}</td>
                  <td>{inv.amountDue}</td>
                  <td>
                    <input 
                      type="text" 
                      className="form-input" 
                      style={{ width: '100px', textAlign: 'right' }} 
                      value={inv.payment}
                      onChange={(e) => handlePaymentChange(inv.id, e.target.value)}
                    />
                    <br/>
                    <span className="pay-in-full" onClick={() => handlePayInFull(inv.id, inv.amountDue)}>Pay in full</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-row">
            <span style={{ marginRight: '48px' }}>Total :</span>
            <span>{totalPayment}</span>
          </div>
        </div>

        <div className="summary-block">
          <div className="summary-row">
            <span>Amount Received :</span>
            <span>0.00</span>
          </div>
          <div className="summary-row">
            <span>Amount used for Payments :</span>
            <span>{totalPayment}</span>
          </div>
          <div className="summary-row">
            <span>Amount Refunded :</span>
            <span>0.00</span>
          </div>
          <div className="summary-row">
            <span>Amount in Excess :</span>
            <span>0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
