import React from 'react';
import { Plus, MoreHorizontal } from 'lucide-react';

export default function ClientDashboard() {
  const MOCK_CLIENTS = [
    { id: 1, name: 'Delphi TVS', email: 'info@delphitvs.com', address: '18, Builders Lane, Coimbatore', phone: '98400 99887', pan: 'AADCS9988H', gst: '33AADCS9988H1ZV', vendorCode: 'VEND001' },
    { id: 2, name: 'Trident Group', email: 'contact@electrovolt.in', address: 'Sector 17, Adyar, Chennai', phone: '98760 22345', pan: 'AAATT7890L', gst: '55VCDCS003854DD', vendorCode: 'VEND002' },
    { id: 3, name: 'ElectroVolt Pvt Ltd', email: 'contact@electrovolt.in', address: '22, SIDCO Industrial Park, Hosur', phone: '98845 65432', pan: 'AACCE4567R', gst: '29AACCE4567R1ZB', vendorCode: 'VEND003' },
  ];

  return (
    <div className="dashboard-content">
      <div className="table-section">
        <div className="table-filters" style={{ borderBottom: '1px solid var(--border-color)', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Client</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              <Plus size={16} />
              New
            </button>
            <button className="btn-outline" style={{ padding: '8px', color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                </th>
                <th>Client Name</th>
                <th>Email Address</th>
                <th>Address</th>
                <th>Phone</th>
                <th>PAN No.</th>
                <th>GST No.</th>
                <th>Vendor Code</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CLIENTS.map((client) => (
                <tr key={client.id}>
                  <td style={{ textAlign: 'center' }}>
                    <input type="checkbox" style={{ cursor: 'pointer' }} />
                  </td>
                  <td style={{ color: '#2563EB', cursor: 'pointer' }}>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.address}</td>
                  <td>{client.phone}</td>
                  <td>{client.pan}</td>
                  <td>{client.gst}</td>
                  <td>{client.vendorCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
