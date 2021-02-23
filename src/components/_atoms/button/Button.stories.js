import React from 'react';

import Button from './Button';

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
};

export const Medium = Template.bind({});
Medium.args = {
  modifier: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  modifier: 'small',
  label: 'Button',
};

