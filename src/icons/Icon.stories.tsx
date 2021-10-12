import React from 'react';

import { IconColor } from "./IconColor";
import { ProfileIcon } from "./ProfileIcon";
import { CityIcon } from "./CityIcon";
import { GuideIcon } from "./GuideIcon";
import { HotelIcon } from "./HotelIcon";
import { RestaurantIcon } from "./RestaurantIcon";
import { WeatherIcon } from "./WeatherIcon";
import { TimeIcon } from "./TimeIcon";
import { PlusIcon } from "./PlusIcon";
import { MinusIcon } from "./MinusIcon";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { SearchIcon } from "./SearchIcon";

export default {
  title: 'Icons',
  argTypes: {
    color: {
      options: Object.values(IconColor),
      control: { type: 'select' }
    }
  }
};


export const Profile = (args) => <ProfileIcon {...args} />;
Profile.parameters = {
  component: ProfileIcon
};

export const City = (args) => <CityIcon {...args} />;
City.parameters = {
  component: CityIcon
};

export const Guide = (args) => <GuideIcon {...args} />;
Guide.parameters = {
  component: GuideIcon
};

export const Hotel = (args) => <HotelIcon {...args} />;
Hotel.parameters = {
  component: HotelIcon
};

export const Restaurant = (args) => <RestaurantIcon {...args} />;
Restaurant.parameters = {
  component: RestaurantIcon
};

export const Weather = (args) => <WeatherIcon {...args} />;
Weather.parameters = {
  component: WeatherIcon
};

export const Time = (args) => <TimeIcon {...args} />;
Time.parameters = {
  component: TimeIcon
};

export const Plus = (args) => <PlusIcon {...args} />;
Plus.parameters = {
  component: PlusIcon
};

export const Minus = (args) => <MinusIcon {...args} />;
Minus.parameters = {
  component: MinusIcon
};

export const ArrowDown = (args) => <ArrowDownIcon {...args} />;
ArrowDown.parameters = {
  component: ArrowDownIcon
};

export const Search = (args) => <SearchIcon {...args} />;
Search.parameters = {
  component: SearchIcon
};

