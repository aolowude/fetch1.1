import * as React from "react";
import { Collapse, Icon } from 'antd';

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
    as a welcome guest in many households across the world.
  </p>
);
export const SearchDropdown = () => {

  const [searchQuery,setSarchQuery] = React.useState('');

  const handleSearchChange = event =>{
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    setSarchQuery(value);

  }
  const genExtra = () => (
    <Icon
      type="search"
     
    />
  );
  return (
    <Collapse bordered={false} defaultActiveKey={[]}>
      <Panel 
        header="Search" 
        key="1"
        extra={genExtra()}
        showArrow={false}
      >
        <input
          type="text"
          name="searchQuery"
          onChange={handleSearchChange}
          value={searchQuery}
          placeholder="Enter Keyword"
        />
      </Panel>
      
    </Collapse>
  )
};