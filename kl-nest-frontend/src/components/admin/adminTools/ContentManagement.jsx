import React, { useState } from 'react';
import Banner from '../../bannerProps/Banner';

const ContentManagement = () => {
  const [pages, setPages] = useState([
    { id: 1, pageName: 'About', content: 'Welcome to KL Nest. Your home away from home.' },
    { id: 2, pageName: 'Contact', content: 'Feel free to reach out to us via email or phone.' },
    { id: 3, pageName: 'Rooms', content: 'Explore our cozy and affordable rooms for your stay.' },
  ]);

  const handleUpdate = (id) => {
    const updatedContent = prompt('Update Content:', pages.find((page) => page.id === id)?.content);
    if (updatedContent !== null) {
      setPages(
        pages.map((page) =>
          page.id === id ? { ...page, content: updatedContent } : page
        )
      );
    }
  };

  return (
    <main>
      <div >
       <Banner title='Content Management' logoName='Admin' link='/admin'/>

        <section className="py-12 px-20 bg-white">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Manage Page Content</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-blue-50 border rounded-lg">
              <thead>
                <tr className="text-left border-b">
                  <th className="px-6 py-4 font-bold text-blue-950">Page Name</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Content</th>
                  <th className="px-6 py-4 font-bold text-blue-950">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id} className="border-b">
                    <td className="px-6 py-4">{page.pageName}</td>
                    <td className="px-6 py-4">{page.content}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleUpdate(page.id)}
                        className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContentManagement;
