import React from 'react';
import CustomGoogleMap from './../components/CustomGoogleMap';
import { Tabs } from './../components/Tabs';
import { CustomCollapse } from './../components/CustomCollapse';
import { CustomCollapseSmooth } from './../components/CustomCollapseSmooth';
import { Shell } from '../components/Shell';

export const TabsPage = () => {
  const tabLinks = [
    { name: 'map', label: 'Google Map' },
    { name: 'collapse', label: 'React Collapse' },
    { name: 'collapseSmooth', label: 'React Collapse Smooth' },
  ];

  const tabContent = [
    {
      content: () => <CustomGoogleMap />,
      name: 'map',
    },
    {
      content: () => (
        <CustomCollapse>
          <p>1</p>
        </CustomCollapse>
      ),

      name: 'collapse',
    },
    {
      content: () => (
        <CustomCollapseSmooth>
          <p style={{ border: '1px solid black', minHeight: '200px' }}>1</p>
        </CustomCollapseSmooth>
      ),
      name: 'collapseSmooth',
    },
  ];

  return (
    <Shell>
      <div>
        <Tabs tabLinks={tabLinks} tabContent={tabContent} />;
      </div>
    </Shell>
  );
};
