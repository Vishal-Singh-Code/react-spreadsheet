import { Bell, Search, PanelRight } from 'lucide-react';

type SearchProps = {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
};

function TopBar({ globalFilter, setGlobalFilter }: SearchProps) {
  return (
    <div className="bg-white px-6 py-2 border-b flex items-center justify-between">
      {/* Left: Breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 font-medium">
        <PanelRight size={24} color="#618666" className="w-4 h-4 mr-2" />
        <div
          className="w-[303px] h-[24px] flex items-center overflow-hidden text-ellipsis whitespace-nowrap"
          title="Workspace > Folder > Spreadsheet"
        >
          Workspace &gt; Folder 2 &gt;
          <span className="text-black ml-2">Spreadsheet 3</span>
          <span className="ml-4">...</span>
        </div>
      </div>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative text-gray-600">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search within sheet"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-10 pr-3 py-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Bell Icon */}
        <button className="relative hover:text-black" aria-label="Notifications"
          onClick={() => console.log('Notification icon clicked')}>
          <Bell className="w-6 h-6 text-gray-600" /> {/* 24px = w-6 h-6 */}
          <span
            className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold flex items-center justify-center rounded-full bg-green-700 text-white"
          >
            2
          </span>
        </button>
        {/* Profile Section */}
        <button className="flex items-center space-x-3 hover:text-black"
          onClick={() => console.log('Profile clicked')}
        >
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border"
          />
          <div className="leading-tight text-left">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">@johndoe</div>
          </div>
        </button>
      </div>
    </div >
  );
}

export default TopBar;
