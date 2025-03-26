import React from 'react';
import { MoreDetailData } from '../../data/appConsts';
import {
  FileText,
  Server,
  UserCircle,
  BarChart2,
} from 'lucide-react';

import CardSection from '../common/cardSection'; // Import reusable component
import './MoreDetailView.css';

interface MoreDetailViewProps {
  data: MoreDetailData;
}

const MoreDetailView: React.FC<MoreDetailViewProps> = ({ data }) => {
  return (
    <div className="more-detail-container">
      <CardSection title="Deal Detail" icon={<FileText size={16} />}>
        <div className="md-grid">
          <p><strong>Deal ID:</strong> {data.dealDetail.dealId}</p>
          <p><strong>Account Name:</strong> {data.dealDetail.accountName}</p>
          <p><strong>Expected Service:</strong> {data.dealDetail.expectedService}</p>
          <p><strong>Expected Product:</strong> {data.dealDetail.expectedProduct}</p>
          <p><strong>Stage:</strong> {data.dealDetail.stage}</p>
          <p><strong>Expected Book Date:</strong> {data.dealDetail.expectedBookDate}</p>
          <p><strong>Forecast Status:</strong> {data.dealDetail.forecastStatus}</p>
          <p><strong>Opportunity Owner:</strong> {data.dealDetail.opportunityOwner}</p>
          <p><strong>Account Site:</strong> {data.dealDetail.accountSite}</p>
        </div>
      </CardSection>

      <CardSection title="Technology & Services" icon={<Server size={16} />}>
        <div className="md-table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Product</th>
                <th>Deal ID</th>
                <th>Partner</th>
                <th>Quote</th>
                <th>Quote Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.technologyServices.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.product}</td>
                  <td>{item.dealId}</td>
                  <td>{item.partner}</td>
                  <td>{item.quote}</td>
                  <td>{item.quoteAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardSection>

      <CardSection title="Account Detail" icon={<UserCircle size={16} />}>
        <div className="md-grid">
          <p><strong>Account Owner:</strong> {data.accountDetail.owner}</p>
          <p><strong>Account Name:</strong> {data.accountDetail.accountName}</p>
          <p><strong>Website:</strong> <a href={data.accountDetail.website} target="_blank" rel="noopener noreferrer">{data.accountDetail.website}</a></p>
          <p><strong>Phone:</strong> {data.accountDetail.phone}</p>
          <p><strong>Industry:</strong> {data.accountDetail.industry}</p>
          <p><strong>Parent Account:</strong> {data.accountDetail.parent}</p>
          <p><strong>Vertical Market (Top):</strong> {data.accountDetail.verticalTop}</p>
          <p><strong>Vertical Market (Sub):</strong> {data.accountDetail.verticalSub}</p>
          <p><strong>Vertical Market (Detail):</strong> {data.accountDetail.verticalDetail}</p>
        </div>
      </CardSection>

      <CardSection title="Financials" icon={<BarChart2 size={16} />}>
        <div className="md-grid single">
          <p><strong>3yr Average Bookings:</strong> {data.financials.avgBookings3Yr}</p>
          <p><strong>Install Base:</strong> {data.financials.installBase}</p>
          <p><strong>Whitespace Solutions:</strong> {data.financials.whitespaceSolutions.join(', ')}</p>
        </div>
      </CardSection>
    </div>
  );
};

export default MoreDetailView;
