import React from 'react';
import './DocumentsDashboard.css';
import { Upload, MoreHorizontal, FileText } from 'lucide-react';

export default function DocumentsDashboard() {
  const documents = [
    { id: 1, name: 'DFC Document.pdf', author: 'Admin', date: '24/05/2025' },
    { id: 2, name: 'SRS Document.pdf', author: 'Admin', date: '22/05/2025' },
    { id: 3, name: 'Bank Statement Document.pdf', author: 'Admin', date: '20/04/2025' },
  ];

  return (
    <div className="dashboard-content" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="documents-dashboard">
        <div className="documents-header">
          <div className="documents-title">All Documents</div>
          <div className="documents-header-actions">
            <button className="upload-btn">
              <Upload size={16} />
              Upload File
            </button>
            <button className="more-btn">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
        
        <table className="documents-table">
          <thead>
            <tr>
              <th className="checkbox-cell">
                <input type="checkbox" className="custom-checkbox" />
              </th>
              <th>File Name</th>
              <th>Upload By</th>
              <th>Upload On</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td className="checkbox-cell">
                  <input type="checkbox" className="custom-checkbox" />
                </td>
                <td>
                  <div className="file-name-cell">
                    <FileText size={18} className="pdf-icon" />
                    <span>{doc.name}</span>
                  </div>
                </td>
                <td>{doc.author}</td>
                <td>{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
