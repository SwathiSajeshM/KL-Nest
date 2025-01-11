import React from 'react';
import { Link } from 'react-router-dom';

const ToolTitle = ({ title, para, viewButton, link }) => {
  return (
    //___________________ AdminContent-Section tools ________________________

    <div className="p-6 bg-blue-50 rounded-lg shadow-lg flex flex-col items-center text-center">  
      <h3 className="text-xl font-bold text-blue-950">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{para}</p>
      <Link to={link} className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">{viewButton}</Link>
    </div>   
  );
};

export default ToolTitle;
