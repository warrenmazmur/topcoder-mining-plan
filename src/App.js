import { useState } from 'react';

// material tabs
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './App.scss';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabsChange = (evt, newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <div className="app">
      <Tabs value={selectedTab} onChange={handleTabsChange}>
        <Tab id="tabTable" label="Table" />
        <Tab id="tabCard" label="Timeline" />
      </Tabs>
    </div>
  );
}

export default App;
