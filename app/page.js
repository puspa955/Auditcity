"use client"
import { CompanyProvider } from './context/CompanyContext';
import CompanySearch from "./components/CompanySearch"; 
import CompanyProfile from "./components/CompanyProfile";

const HomePage = () => {
  return (
    <CompanyProvider>
      <div className="p-8">
        <CompanySearch />
        <CompanyProfile />
      </div>
    </CompanyProvider>
  );
};

export default HomePage;
