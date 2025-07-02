import { useState } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { EyeOff, Filter, SortAsc, Table2, Upload, Download, Share2, Plus } from "lucide-react";

function Toolbar() {
  const [showTools, setShowTools] = useState(true);

  return (
    <div className="flex justify-between items-center px-6 py-2 border-b bg-white text-sm">
      {/* Left Actions */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <button
          onClick={() => setShowTools(!showTools)}
          className="flex items-center gap-1 text-gray-700 hover:text-black font-lg"
        >
          Toolbar
          <HiChevronDoubleRight size={16} />
        </button>

        {showTools && (
          <>
            <span>|</span>
            <button className="flex items-center text-sm gap-1 hover:text-green-700" onClick={() => console.log("Hide Field clicked")}>
              <EyeOff size={20}
              /> Hide Field
            </button>
            <button className="flex items-center text-sm gap-1 hover:text-green-700" onClick={() => console.log("sort clicked")}>
              <SortAsc size={20}
              /> Sort
            </button>
            <button className="flex items-center text-sm gap-1 hover:text-green-700" onClick={() => console.log("Filter clicked")}>
              <Filter size={20}
              /> Filter
            </button>
            <button className="flex items-center text-sm gap-1 hover:text-green-700" onClick={() => console.log("Cell View clicked")}>
              <Table2 size={20}
              /> Cell View
            </button>
          </>
        )}
      </div>

      {/* Right Actions */}
      {showTools && (
        <div className="flex items-center gap-3 text-gray-700 font-medium">
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md hover:text-green-700"
            onClick={() => console.log("Import Button clicked")}
          >
            <Upload size={20} /> Import
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md  hover:text-green-700"
            onClick={() => console.log("Export Button clicked")}
          >
            <Download size={20} /> Export
          </button>
          <button className="flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-md hover:text-green-700"
            onClick={() => console.log("Share Button clicked")}
          >
            <Share2 size={20} /> Share
          </button>
          <button className="flex items-center gap-1 px-6 py-2 bg-[#4B6A4F] text-white rounded-md" onClick={() => console.log("New Action clicked")}
          >
            <Plus size={20}
            /> New Action
          </button>
        </div>
      )}
    </div>
  );
}

export default Toolbar;
