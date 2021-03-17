import React from 'react';

import TextField from './index';

// eslint-disable-next-line
export default {
  title: 'Molecules/TextField',
  component: TextField
};


const Template = (args) => <TextField {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  name: 'default-input',
  type: 'url',
  label: 'Text Field Label',
  placeholder: 'Placeholder',
  defaultValue: '',
  helper: 'Helper Text',
  disabled: false,
  error: false,
};
