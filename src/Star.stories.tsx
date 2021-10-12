import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Star } from "./Star";

export default {
  title: 'Components / Star',
  component: Star
} as ComponentMeta<typeof Star>;

const Template: ComponentStory<typeof Star> = (args) => <Star {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  type: "empty"
};

export const Half = Template.bind({});
Half.args = {
  type: "half"
};

export const Full = Template.bind({});
Full.args = {
  type: "full"
};
