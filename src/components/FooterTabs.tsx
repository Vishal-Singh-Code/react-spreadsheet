import { useState } from "react";
import { Plus } from "lucide-react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

function FooterTabs() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="border-t px-6 py-2 flex items-center bg-white">
      {/* Tabs + Add Button */}
      <div className="flex gap-2 text-base font-medium">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              console.log(`${tab} clicked`);
            }}
            className={`px-[10px] py-[10px] border-t-2 ${activeTab === tab
                ? "border-[#3E5741] text-blue-600 font-semibold bg-[#E8F0E9] text-[#3E5741]"
                : "border-transparent text-gray-600 hover:text-[#3E5741]"
              } transition-colors duration-150`}
          >
            {tab}
          </button>
        ))}

        {/*Add Button */}
        <button
          onClick={() => console.log("Add (+) clicked")}
          className=" py-[2px] text-blue-600 hover:text-blue-700 border-b-2 border-transparent"
        >
          <div className="flex items-center gap-1">
            <Plus size={25} className="text-[#3E5741]" />
          </div>
        </button>
      </div>
    </div>

  );
}

export default FooterTabs;
