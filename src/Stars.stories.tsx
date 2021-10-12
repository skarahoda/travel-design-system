import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stars } from "./Stars";

export default {
  title: 'Components / Stars',
  component: Stars
} as ComponentMeta<typeof Stars>;

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  rate: 0
};

export const Half = Template.bind({});
Half.args = {
  rate: 2.5
};

export const Full = Template.bind({});
Full.args = {
  rate: 5
};
