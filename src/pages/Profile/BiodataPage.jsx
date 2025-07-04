import React, { useState } from "react";
import { User } from "lucide-react";
import BiodataTabs from "../../components/ProfilePage/BiodataTabs";
import BiodataContent from "../../components/ProfilePage/BiodataContent";

function BiodataPage() {
  const tabs = ["Data Diri", "Data Sekolah"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full bg-gray-50 p-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-300 pb-2">
        <User className="w-12 h-12 text-red-700" />
        <h1 className="text-3xl font-bold text-gray-400 tracking-wide">
          Biodata
        </h1>
      </div>

      {/* Tabs */}
      <BiodataTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Content */}
      <BiodataContent activeTab={activeTab} />
    </div>
  );
}

export default BiodataPage;
