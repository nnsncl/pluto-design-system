import React from 'react';

import NativeControlledField from './index';

// eslint-disable-next-line
export default {
  title: 'Molecules/Controlled Inputs/NativeControlledField',
  component: NativeControlledField
};


const Template = (args) => <NativeControlledField {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default-input',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  defaultValue: '',
  helper: '',
  disabled: false,
  error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'default-input',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  defaultValue: '',
  helper: '',
  disabled: true,
  error: false,
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  name: 'default-input',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  defaultValue: '',
  helper: 'Helper Text',
  disabled: false,
  error: false,
};

export const onError = Template.bind({});
onError.args = {
  name: 'default-input',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  defaultValue: '',
  helper: 'Helper Text',
  disabled: false,
  error: true,
};
