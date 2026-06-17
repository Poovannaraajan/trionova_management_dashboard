import React, { useState } from 'react';
import './HomeDashboard.css';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function HomeDashboard() {
  const [expandedSections, setExpandedSections] = useState({
    client: false,
    supplier: true,
    erection: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Chart Data
  const revenueData = [
    { name: 'Fuso Glass', value: 40987, color: '#A00B7B' }, // Purple
    { name: 'Gencor', value: 80434, color: '#A38B00' }, // Gold/Brown
    { name: 'Grascim', value: 65000, color: '#90C020' }, // Light Green
    { name: 'SFC', value: 30000, color: '#00B4B4' }, // Teal
    { name: 'Cater', value: 42654, color: '#0052CC' }, // Blue
  ];

  const purchaseOrderData = [
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 30000 },
    { name: 'Mar', value: 82000 },
    { name: 'Apr', value: 101000 },
    { name: 'May', value: 52000 },
    { name: 'Jun', value: 82000 },
    { name: 'Jul', value: 26000 },
    { name: 'Aug', value: 18000 },
    { name: 'Sep', value: 44000 },
    { name: 'Oct', value: 22000 },
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="dashboard-content home-dashboard">
      <div className="dashboard-header" style={{ marginBottom: '24px' }}>
        <div className="dashboard-title">
          <h1 style={{ fontSize: '20px', margin: 0 }}>Overall Dashboard</h1>
        </div>
      </div>

      {/* Accordion: Client */}
      <div className="accordion-section" style={{ borderLeftColor: '#4285F4' }}>
        <div className="accordion-header" onClick={() => toggleSection('client')}>
          <div className="accordion-title" style={{ color: '#4285F4' }}>
            {expandedSections.client ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            Client
          </div>
          <div className="accordion-actions" onClick={e => e.stopPropagation()}>
            <button className="filter-btn"><Filter size={14} /> Filter</button>
            <select className="year-select">
              <option>2025 - 2026</option>
            </select>
          </div>
        </div>
        {expandedSections.client && (
          <div className="accordion-body">
            <p style={{ color: 'var(--text-muted)' }}>No data available.</p>
          </div>
        )}
      </div>

      {/* Accordion: Supplier */}
      <div className="accordion-section" style={{ borderLeftColor: '#34A853' }}>
        <div className="accordion-header" onClick={() => toggleSection('supplier')}>
          <div className="accordion-title" style={{ color: '#34A853' }}>
            {expandedSections.supplier ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            Supplier
          </div>
          <div className="accordion-actions" onClick={e => e.stopPropagation()}>
            <button className="filter-btn"><Filter size={14} /> Filter</button>
            <select className="year-select">
              <option>2025 - 2026</option>
            </select>
          </div>
        </div>
        {expandedSections.supplier && (
          <div className="accordion-body table-container">
            <table>
              <thead>
                <tr>
                  <th>Supplier Name</th>
                  <th>PO Count</th>
                  <th>Supplied Amount</th>
                  <th>Paid Amount</th>
                  <th>Outstanding</th>
                  <th>Last PO Date</th>
                  <th>Last Payment Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jayam Steels</td>
                  <td>12</td>
                  <td>₹ 14,50,000</td>
                  <td>₹ 12,00,000</td>
                  <td>₹ 2,50,000</td>
                  <td>28-May-2025</td>
                  <td>30-May-2025</td>
                </tr>
                <tr>
                  <td>Smart Electric</td>
                  <td>10</td>
                  <td>₹ 13,00,000</td>
                  <td>₹ 5,00,000</td>
                  <td>₹ 2,50,000</td>
                  <td>30-May-2025</td>
                  <td>01-Jun-2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Accordion: Erection */}
      <div className="accordion-section" style={{ borderLeftColor: '#D81B60' }}>
        <div className="accordion-header" onClick={() => toggleSection('erection')}>
          <div className="accordion-title" style={{ color: '#D81B60' }}>
            {expandedSections.erection ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            Erection
          </div>
          <div className="accordion-actions" onClick={e => e.stopPropagation()}>
            <button className="filter-btn"><Filter size={14} /> Filter</button>
            <select className="year-select">
              <option>2025 - 2026</option>
            </select>
          </div>
        </div>
        {expandedSections.erection && (
          <div className="accordion-body table-container">
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Client Name</th>
                  <th>Start Date</th>
                  <th>Target Date</th>
                  <th>Status</th>
                  <th>Billed</th>
                  <th>Paid</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Metro Wiring</td>
                  <td>Harshath & Co.,</td>
                  <td>06-May-25</td>
                  <td>29-Jun-25</td>
                  <td><span className="badge-status badge-ongoing">Ongoing</span></td>
                  <td>₹ 25,00,000</td>
                  <td>₹ 18,00,000</td>
                  <td>₹ 7,00,000</td>
                </tr>
                <tr>
                  <td>Construction</td>
                  <td>Tenner Ltd.,</td>
                  <td>01-May-25</td>
                  <td>30-Jun-25</td>
                  <td><span className="badge-status badge-completed">Completed</span></td>
                  <td>₹ 20,00,000</td>
                  <td>₹ 16,00,000</td>
                  <td>₹ 4,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Total Revenue Donut Chart */}
        <div className="chart-card">
          <h3 className="chart-title">Total Revenue</h3>
          <div className="chart-content revenue-chart-layout">
            <div className="donut-wrapper">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={revenueData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                    stroke="none"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {revenueData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="custom-legend">
              {revenueData.map((item, i) => (
                <div key={i} className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: item.color }}></span>
                  <span className="legend-text">{item.name} - ₹{item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Order Bar Chart */}
        <div className="chart-card">
          <div className="chart-header-row">
            <h3 className="chart-title">Purchase Order</h3>
            <div className="chart-actions">
              <select className="chart-select"><option>Delphi TVS</option></select>
              <select className="chart-select"><option>2025</option></select>
            </div>
          </div>
          <div className="chart-content">
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={purchaseOrderData} margin={{ top: 20, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={true} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis axisLine={true} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} domain={[0, 120000]} ticks={[0, 20000, 40000, 60000, 80000, 100000, 120000]} />
                <Bar dataKey="value" fill="#0052CC" radius={[0, 0, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Placeholders */}
      <div className="charts-grid" style={{ marginTop: '24px' }}>
        <div className="chart-card" style={{ minHeight: '200px' }}>
          <div className="chart-header-row">
            <h3 className="chart-title">Sales Order</h3>
            <div className="chart-actions">
              <select className="chart-select"><option>Delhi TVS</option></select>
              <select className="chart-select"><option>2025</option></select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
            Sales Order component will be added later
          </div>
        </div>
        <div className="chart-card" style={{ minHeight: '200px' }}>
          <div className="chart-header-row">
            <h3 className="chart-title">Invoices by Status</h3>
            <div className="chart-actions">
              <select className="chart-select"><option>2025</option></select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
            Invoices component will be added later
          </div>
        </div>
      </div>

    </div>
  );
}
