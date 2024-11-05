"use client"; 
import { useState } from 'react';
import { useCompany } from '../context/CompanyContext'; 
const CompanySearch = () => {
  const [input, setInput] = useState('');
  const { setCompany } = useCompany(); 

  const handleSearch = async () => {
    console.log("Fetching company data...");

    try {
      const response = await fetch(`https://auditcity.io/api/data/e7eba98ba5b85dbc98b8def5319ef4c3`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Company data fetched successfully:", data);

      const company = data.data.find((c) =>
        c.name.toLowerCase().includes(input.toLowerCase()) ||
        c.website.url.toLowerCase().includes(input.toLowerCase())
      );

      if (company) {
        setCompany(company);
      } else {
        setCompany(null); 
        alert("No matching company found.");
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
      alert("Failed to fetch company data. Please check the console for more details.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search company name or URL"
        className="border p-2"
      />
      <button onClick={handleSearch} className="ml-2 p-2 bg-blue-600 text-white">
        Search
      </button>
    </div>
  );
};

export default CompanySearch;
