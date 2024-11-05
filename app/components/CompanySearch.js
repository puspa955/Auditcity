// components/CompanySearch.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCompany } from '../context/CompanyContext';

const CompanySearch = () => {
  const [input, setInput] = useState('');
  const { setCompany } = useCompany();
  const router = useRouter();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://auditcity.io/api/data/e7eba98ba5b85dbc98b8def5319ef4c3`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const foundCompany = data.data.find((c) => {
        // Normalize input for comparison
        const normalizedInput = input.toLowerCase();

        // Check if name is a string and includes the search term
        const companyNameMatch =
          typeof c.name === 'string' && c.name.toLowerCase().includes(normalizedInput);

        // Check if website is an object and has a url property, then includes the search term
        const companyUrlMatch =
          typeof c.website === 'object' && c.website?.url && c.website.url.toLowerCase().includes(normalizedInput);

        // Allow matching if either condition is true
        return companyNameMatch || companyUrlMatch;
      });

      if (foundCompany) {
        setCompany(foundCompany);
        console.log("Company data found:", foundCompany);
        router.push('/profile'); // Navigate to the profile page
      } else {
        console.log("No matching company found.");
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
