import Banner from '../../bannerProps/Banner';

const ReportPage = () => {
    
  return (
    <main>
      <div >
       <Banner title='Reports' logoName='Admin' pipesimbol='|' link='/admin'  />

        <section className="py-12 px-20 bg-white">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Analytics and Reports</h2>
            <p className="text-gray-600 text-lg mb-10">View analytics and generate detailed reports for insights on bookings, user behavior, and revenue.</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              {/*___________________ headings of table ________________*/}
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-4 font-bold text-blue-950">Report Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Description</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Generated Date</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Actions</th>
                </tr>
              </thead>

              {/*___________________ Body of datas in table ________________*/}
              <tbody>               
                  <tr className="border-b">
                    <td className="px-6 py-4">Monthly Bookings Report</td>
                    <td className="px-6 py-4">Summary of bookings for the month.</td>
                    <td className="px-6 py-4">2024-12-01</td>
                    <td className="px-6 py-4 flex gap-4">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">Generate </button>
                      <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">Download </button>
                    </td>
                  </tr>             
              </tbody>

            </table>
          </div>

        </section>
      </div>
     
    </main>
  );
};

export default ReportPage;
