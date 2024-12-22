import React, { useState } from 'react';
import Banner from '../../bannerProps/Banner';
import { Link } from 'react-router-dom';

const ReportPage = () => {
  const [reports, setReports] = useState([
    { id: 1, name: 'Monthly Bookings Report', description: 'Summary of bookings for the month.', generatedDate: '2024-12-01' },
    { id: 2, name: 'User Analytics Report', description: 'Detailed user behavior and trends.', generatedDate: '2024-11-28' },
    { id: 3, name: 'Revenue Report', description: 'Overview of monthly revenue.', generatedDate: '2024-12-01' },
  ]);

  const handleGenerateReport = (id) => {
    alert(`Generating report: ${reports.find((report) => report.id === id)?.name}`);
    // Add backend API call for generating reports here
  };

  const handleDownloadReport = (id) => {
    alert(`Downloading report: ${reports.find((report) => report.id === id)?.name}`);
    // Add backend API call or file download logic here
  };

  return (
    <main>
      <div >
       <Banner title='Reports' logoName='Admin' link='/admin'  />

        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Analytics and Reports</h2>
          <p className="text-gray-600 text-lg mb-10">
            View analytics and generate detailed reports for insights on bookings, user behavior, and revenue.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-4 font-bold text-blue-950">Report Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Description</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Generated Date</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id} className="border-b">
                    <td className="px-6 py-4">{report.name}</td>
                    <td className="px-6 py-4">{report.description}</td>
                    <td className="px-6 py-4">{report.generatedDate}</td>
                    <td className="px-6 py-4 flex gap-4">
                      <button
                        onClick={() => handleGenerateReport(report.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                      >
                        Generate
                      </button>
                      <button
                        onClick={() => handleDownloadReport(report.id)}
                        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* <div className='flex justify-center'>
    <Link to='/admin'><button className='bg-blue-950 text-white p-3 rounded-xl px-8'>Back</button></Link>
    </div> */}
    </main>
  );
};

export default ReportPage;
