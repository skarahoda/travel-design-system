import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from "./Card";

export default {
  title: 'Components / Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "SUBTITLE",
  thumbnail: "/card_background.png"
};

export const WithReviews = Template.bind({});
WithReviews.args = {
  title: "Title",
  subtitle: "SUBTITLE",
  thumbnail: "/card_background.png",
  reviews: 200,
  rate: 4.5
};
