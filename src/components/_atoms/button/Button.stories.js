import React from 'react';

import Button from './index';

// eslint-disable-next-line
export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  modifier: 'large',
  label: 'Button',
  ariaLabel: 'Default Button',
};

export const Medium = Template.bind({});
Medium.args = {
  modifier: 'medium',
  label: 'Button',
  ariaLabel: 'Default Button'
};

export const Small = Template.bind({});
Small.args = {
  modifier: 'small',
  label: 'Button',
  ariaLabel: 'Default Button'
};

