"use client"
import React from 'react';
import { useCompany } from '../context/CompanyContext'; 
import { Button } from '../ui/button'; 

const CompanyProfile = () => {
  const { company } = useCompany(); 

  if (!company) return <p>No company data available.</p>;

  return (
    <div className="border p-4 mb-4">
      <h1 className="text-xl font-bold">{company.name || "Name not available"}</h1>
      {company.website && (
        <a href={company.website.url} target="_blank" rel="noopener noreferrer">
          <Button className="text-blue-600">Visit Website</Button> 
        </a>
      )}
      <p>
        Phone: {company.phone && company.phone.length > 0 ? company.phone[0].number : "No phone available"}
      </p>
      <p>
        Rating: {company.reviews ? `${company.reviews.rating || 'No rating'} (${company.reviews.count || 0} reviews)` : "No reviews available"}
      </p>
      {company.website && (
        <div>
          <h2>{company.website.title || "Website Title not available"}</h2>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
