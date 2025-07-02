import TopBar from './components/Topbar';
import Toolbar from './components/Toolbar';
import Spreadsheet from './components/Spreadsheet';
import FooterTabs from './components/FooterTabs';
import { useState } from 'react';
function App() {
  const [globalFilter, setGlobalFilter] = useState('');

  return (
    <div className="h-screen flex flex-col">
      <TopBar globalFilter={globalFilter} setGlobalFilter={setGlobalFilter}/>
      <Toolbar/>
      <div className="flex flex-1 overflow-hidden">
         <Spreadsheet globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      </div>
      <FooterTabs />
    </div>
  );
}

export default App;
