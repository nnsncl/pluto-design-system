import React from 'react';

import Field from './index';

// eslint-disable-next-line
export default {
  title: 'Atoms/Field',
  component: Field
};


const Template = (args) => <Field {...args} />;

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
