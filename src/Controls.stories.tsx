import React from 'react';

import { Tag as TagComponent } from "./Tag";
import { Stepper as StepperComponent } from "./Stepper";
import { Dropdown as DropdownComponent } from "./Dropdown";
import { SearchBar as SearchBarComponent } from "./SearchBar";

export default {
  title: 'Components / Controls'
};

export const Tag = (args) => <TagComponent {...args}/>;
Tag.parameters = {
  component: TagComponent
};
Tag.args = {
  children: "Title"
}

export const Stepper = (args) => <StepperComponent {...args}/>;
Stepper.parameters = {
  component: StepperComponent
};
Stepper.args = {
  children: "Title"
}

export const Dropdown = (args) => <DropdownComponent {...args}/>;
Dropdown.parameters = {
  component: DropdownComponent
};
Dropdown.args = {
  children: "Title"
}

export const SearchBar = (args) => <SearchBarComponent {...args}/>;
SearchBar.parameters = {
  component: SearchBarComponent
};
SearchBar.args = {
  placeholder: "Search for a…"
}

