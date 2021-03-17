import React from 'react';

import InputField from './index';

// eslint-disable-next-line
export default {
  title: 'Molecules/InputField',
  component: InputField
};


const Template = (args) => <InputField {...args} />;

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
