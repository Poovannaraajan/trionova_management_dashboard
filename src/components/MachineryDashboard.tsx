import React, { useState } from 'react';
import './MachineryDashboard.css';
import { Plus, MoreHorizontal, ChevronDown, Calendar, Paperclip, ArrowLeft } from 'lucide-react';

export default function MachineryDashboard() {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [category, setCategory] = useState<'Office' | 'Rent'>('Office');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const machineryData = [
    { id: 1, client: 'Delphi TVS', machinery: 'Office', serial: '7654329', material: 'LED 36W Panel Light', unit: 'Piece', qty: 2, from: '25-May-2025', due: '29-May-2025' },
    { id: 2, client: 'Ashok Leyland', machinery: 'Office', serial: '4567892', material: 'LT Panel Board', unit: 'Set', qty: 1, from: '20-May-2025', due: '23-May-2025' },
  ];

  const rentData = [
    { id: 1, po: 'Delphi TVS', machinery: 'Office', bill: '7654329', from: '25-May-2025', due: '26-May-2025', doc: 'https://images.unsplash.com/photo-1581404094191-4d375bb627b0?q=80&w=100&auto=format&fit=crop', remarks: 'Thank you' },
    { id: 2, po: 'Ashok Leyland', machinery: 'Office', bill: '4567892', from: '29-May-2025', due: '01-Jun-2025', doc: 'https://images.unsplash.com/photo-1541888087-3c3260c6d7a5?q=80&w=100&auto=format&fit=crop', remarks: 'Panel Board' },
  ];

  const handleCategoryChange = (cat: 'Office' | 'Rent') => {
    setCategory(cat);
    setIsDropdownOpen(false);
    setView('list');
  };

  const renderDropdown = () => {
    if (!isDropdownOpen) return null;
    return (
      <div className="category-dropdown">
        <div className="category-dropdown-item" onClick={(e) => { e.stopPropagation(); handleCategoryChange('Office'); }}>
          Office - Machinery
        </div>
        <div className="category-dropdown-item" onClick={(e) => { e.stopPropagation(); handleCategoryChange('Rent'); }}>
          Rent - Machinery
        </div>
      </div>
    );
  };

  if (view === 'add') {
    return (
      <div className="dashboard-content" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="machinery-dashboard">
          <div className="machinery-header">
            <div className="machinery-title-wrap">
              <button className="back-btn" onClick={() => setView('list')}>
                <ArrowLeft size={20} />
              </button>
              <div className="machinery-title">
                {category === 'Rent' ? 'Rent' : 'Machinery'}
              </div>
            </div>
            <div className="machinery-header-actions">
              <button className="machinery-more-btn">
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>
          
          <div className="machinery-form-container">
            {category === 'Rent' ? (
              <>
                <div className="form-row">
                  <label>Machinery</label>
                  <div className="input-wrap">
                    <select defaultValue="Rent">
                      <option>Rent</option>
                      <option>Purchase</option>
                    </select>
                    <ChevronDown size={16} className="select-icon" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Supplier PO Num</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="56789043" defaultValue="56789043" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Bill Number</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="#4567980" defaultValue="#4567980" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Machinery Image</label>
                  <div className="input-wrap">
                    <div className="upload-input-wrap">
                      <input type="text" readOnly value="JCB.img" />
                      <button className="upload-inside-btn">Upload</button>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <label>From Date</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Select Date" />
                    <Calendar size={16} className="calendar-icon" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Due Date</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Select Date" />
                    <Calendar size={16} className="calendar-icon" />
                  </div>
                </div>
                <div className="form-row">
                  <label>Remarks</label>
                  <div className="input-wrap">
                    <textarea placeholder="Remarks"></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-row">
                  <label>Select Client</label>
                  <div className="input-wrap">
                    <select defaultValue="Delphi TVS">
                      <option>Delphi TVS</option>
                      <option>Ashok Leyland</option>
                    </select>
                    <ChevronDown size={16} className="select-icon" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Machinery</label>
                  <div className="input-wrap">
                    <select defaultValue="Office">
                      <option>Office</option>
                      <option>Factory</option>
                    </select>
                    <ChevronDown size={16} className="select-icon" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Serial Number</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Serial Number" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Material</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Material" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Unit</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Unit" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Quantity</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Quantity" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Machinery Image</label>
                  <div className="input-wrap">
                    <div className="upload-input-wrap">
                      <input type="text" readOnly value="JCB.img" />
                      <button className="upload-inside-btn">Upload</button>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <label>From Date</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Select Date" />
                    <Calendar size={16} className="calendar-icon" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Due Date</label>
                  <div className="input-wrap">
                    <input type="text" placeholder="Select Date" />
                    <Calendar size={16} className="calendar-icon" />
                  </div>
                </div>

                <div className="form-row">
                  <label>Remarks</label>
                  <div className="input-wrap">
                    <textarea placeholder="Remarks"></textarea>
                  </div>
                </div>
              </>
            )}

            <div className="form-actions">
              <button className="add-attachment-btn">
                <Paperclip size={16} className="paperclip-icon" />
                Add Attachments
              </button>
              
              <button className="add-fields-btn">
                <Plus size={14} className="plus-icon" />
                Add More Fields
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-content" style={{ backgroundColor: '#F8FAFC' }}>
      <div className="machinery-dashboard">
        <div className="machinery-header">
          <div className="machinery-title" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {category === 'Office' ? 'Office - Machinery' : 'Rent - Machinery'}
            <ChevronDown size={16} style={{ marginLeft: 8, color: '#3B82F6', cursor: 'pointer' }} />
            {renderDropdown()}
          </div>
          <div className="machinery-header-actions">
            <button className="blue-add-btn" onClick={() => setView('add')}>
              <Plus size={16} />
              Add
            </button>
            <button className="machinery-more-btn">
              <MoreHorizontal size={16} />
            </button>
          </div>
        </div>
        
        <div className="table-responsive">
          <table className="machinery-table">
            <thead>
              {category === 'Rent' ? (
                <tr>
                  <th className="checkbox-cell">
                    <input type="checkbox" className="custom-checkbox" />
                  </th>
                  <th>Supplier PO Num</th>
                  <th>Machinery</th>
                  <th>Bill Number</th>
                  <th>From Date</th>
                  <th>Due Date</th>
                  <th>Doc</th>
                  <th>Remarks</th>
                </tr>
              ) : (
                <tr>
                  <th className="checkbox-cell">
                    <input type="checkbox" className="custom-checkbox" />
                  </th>
                  <th>Client</th>
                  <th>Machinery</th>
                  <th>Serial Number</th>
                  <th>Material</th>
                  <th>Unit</th>
                  <th>Quantity</th>
                  <th>From Date</th>
                  <th>Due Date</th>
                </tr>
              )}
            </thead>
            <tbody>
              {category === 'Rent' ? (
                rentData.map((row) => (
                  <tr key={row.id}>
                    <td className="checkbox-cell">
                      <input type="checkbox" className="custom-checkbox" />
                    </td>
                    <td>{row.po}</td>
                    <td>{row.machinery}</td>
                    <td>{row.bill}</td>
                    <td>{row.from}</td>
                    <td>{row.due}</td>
                    <td>
                      <img src={row.doc} alt="Machinery Doc" className="doc-thumbnail" />
                    </td>
                    <td>{row.remarks}</td>
                  </tr>
                ))
              ) : (
                machineryData.map((row) => (
                  <tr key={row.id}>
                    <td className="checkbox-cell">
                      <input type="checkbox" className="custom-checkbox" />
                    </td>
                    <td>{row.client}</td>
                    <td>{row.machinery}</td>
                    <td>{row.serial}</td>
                    <td>{row.material}</td>
                    <td>{row.unit}</td>
                    <td>{row.qty}</td>
                    <td>{row.from}</td>
                    <td>{row.due}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
