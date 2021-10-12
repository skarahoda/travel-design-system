import React from 'react';

import { SectionHeader } from './SectionHeader';

export default {
  title: 'Components / Section Header',
  component: SectionHeader
};


export const Default = (args) => <SectionHeader {...args} />;
Default.parameters = {
  zeplinLink: "zpl://components?stid=5cd486b18a64c1414be004fb&coid=5d07d48dc5f4725d7a29d8ec"
};
Default.args = {
  children: 'Title'
};

export const Small = (args) => <SectionHeader {...args} />;
Small.args = {
  size: "small",
  children: 'Title'
};
