import { useState } from 'react';

// material tabs
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './components/TabPanel';
import DataTable from './components/DataTable';
import OrderedTimeline from './components/OrderedTimeline';

import './App.scss';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);

  const handleTabsChange = (evt, newTab) => {
    setSelectedTab(newTab);
  };

  const handleDataChange = (newData) => {
    setData(newData)
  }

  return (
    <div className="app">
      <Tabs value={selectedTab} onChange={handleTabsChange}>
        <Tab id="tabTable" label="Table" />
        <Tab id="tabCard" label="Timeline" disabled={data.length === 0} />
      </Tabs>
      <TabPanel class="tabPanel" value={selectedTab} index={0}>
        <DataTable onDataChange={handleDataChange} />
      </TabPanel>
      <TabPanel class="tabPanel" value={selectedTab} index={1}>
        <OrderedTimeline data={data} />
      </TabPanel>
    </div>
  );
}

export default App;
