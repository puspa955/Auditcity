"use client";
import { useCompany } from '../context/CompanyContext'; 
import CompanyProfile from "../components/CompanyProfile";

const ProfilePage = () => {
  const { company } = useCompany();

  if (!company) {
    return <p>No company data available. Please search for a company.</p>; 
  }

  return <CompanyProfile />;
};

export default ProfilePage;
