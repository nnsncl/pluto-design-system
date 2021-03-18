import React from 'react';

import Typography from './index';

// eslint-disable-next-line
export default {
  title: 'Atoms/Typography',
  component: Typography
};

const TypographySmallTemplate = (args) => <Typography.Small {...args} />;
const TypographyLabelTemplate = (args) => <Typography.Label {...args} />;
const TypographyTemplate = (args) => <Typography {...args} />;
const TypographyLargeTemplate = (args) => <Typography.Large {...args} />;
const Title100Template = (args) => <Typography.Title100 {...args} />;
const Title200Template = (args) => <Typography.Title200 {...args} />;
const Title300Template = (args) => <Typography.Title300 {...args} />;
const Title400Template = (args) => <Typography.Title400 {...args} />;
const Title500Template = (args) => <Typography.Title500 {...args} />;
const Title600Template = (args) => <Typography.Title600 {...args} />;

export const Small = TypographySmallTemplate.bind({});
Small.args = {
  modifier: 'regular',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Label = TypographyLabelTemplate.bind({});
Label.args = {
  htmlFor: 'label-sample',
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Body = TypographyTemplate.bind({});
Body.args = {
  modifier: 'regular',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Large = TypographyLargeTemplate.bind({});
Large.args = {
  modifier: 'regular',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title100 = Title100Template.bind({});
Title100.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title200 = Title200Template.bind({});
Title200.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title300 = Title300Template.bind({});
Title300.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title400 = Title400Template.bind({});
Title400.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title500 = Title500Template.bind({});
Title500.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};

export const Title600 = Title600Template.bind({});
Title600.args = {
  modifier: 'bold',
  children: 'The quick brown fox jumps over the lazy dog.'
};
