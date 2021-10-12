import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ApplePayButton } from "./ApplePayButton";

export default {
  title: 'Components / Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: 'Title',
  disabled: false
};
Primary.parameters = {
  zeplinLink: [{
    name: "default",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c4a56703a633cbc654c"
  }, {
    name: "pressed",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c49ad918108c5fc0a4e"
  }, {
    name: "disabled",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c4a671662023330f736"
  }]
}

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: 'Title',
  disabled: false
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  children: 'Title',
  disabled: false
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: 'Title',
  disabled: false
};

export const ApplePay = () => <ApplePayButton />;
ApplePay.parameters = {
  component: ApplePayButton
};
