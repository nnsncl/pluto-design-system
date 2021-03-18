import React from 'react';

import NativeField from './index';

// eslint-disable-next-line
export default {
  title: 'Atoms/NativeField',
  component: NativeField
};


const Template = (args) => <NativeField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default-input',
  type: 'text',
  placeholder: 'Placeholder',
  defaultValue: '',
  disabled: false,
  error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'default-input',
  type: 'text',
  placeholder: 'Placeholder',
  defaultValue: '',
  disabled: true,
  error: false,
};

export const onError = Template.bind({});
onError.args = {
  name: 'default-input',
  type: 'text',
  placeholder: 'Placeholder',
  defaultValue: '',
  disabled: false,
  error: true,
};
