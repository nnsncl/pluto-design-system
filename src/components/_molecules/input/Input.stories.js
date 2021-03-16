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
  label: 'Text Field Label',
  placeholder: '',
  defaultValue: 'This is a default value',
  helper: 'Helper Text',
  disabled: false,
};
