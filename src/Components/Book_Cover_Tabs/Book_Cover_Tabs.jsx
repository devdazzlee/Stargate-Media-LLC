import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const Book_Cover_Tabs = () => {
  return (
<>

<Tabs  classID='flex'>
    <TabList  style={{"display" :"flex"}}>
    <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>

    </TabList>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
  </Tabs>

</>
  )
}

export default Book_Cover_Tabs