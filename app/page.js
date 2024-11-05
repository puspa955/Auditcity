"use client";
import { CompanyProvider } from './context/CompanyContext';
import CompanySearch from "./components/CompanySearch"; 

const HomePage = () => {
  return (
    <div className="p-8">
      <CompanySearch />
    </div>
  );
};

export default HomePage;
