import React, { useState } from 'react';
import Banner from '../../../bannerProps/Banner';
import ContentManageProps from '../contentManagements/ContentManageProps';

const ContentManagement = () => {
 
  return (
    <main>
      <div >
       <Banner title='Content Management' pipesimbol='|' logoName='Admin' link='/admin'/>
        <section className="py-12 px-20 bg-white">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Manage Page Content</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              <thead>
                <tr className="text-left border-b">
                  <ContentManageProps tableheading='Page Name'/>
                  <ContentManageProps tableheading='Content'/>
                  <ContentManageProps tableheading='Actions'/>               
                </tr>
              </thead>

              <tbody>
                  <tr  className="border-b">
                    <td className="px-6 py-4">Rooms</td>
                    <td className="px-6 py-4">Explore our cozy and affordable rooms for your stay</td>
                    <td className="px-6 py-4"><button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">Update</button></td>
                  </tr>         
              </tbody>
              
            </table>
          </div>
        </section>    
      </div>
    </main>
  );
};

export default ContentManagement;


// id: 1 pageName: About    content: Welcome to KL Nest. Your home away from home.
// id: 2 pageName: Contact  content: Feel free to reach out to us via email or phone. 
// id: 3 pageName: Rooms    content: Explore our cozy and affordable rooms for your stay. 