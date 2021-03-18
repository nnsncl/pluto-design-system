import React from 'react';

import ControlledPasswordField from './index';

// eslint-disable-next-line
export default {
    title: 'Molecules/Controlled Inputs/ControlledPasswordField',
    component: ControlledPasswordField
};


const Template = (args) => <ControlledPasswordField {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'password-input',
    label: 'Password Input',
    placeholder: '',
    defaultValue: '',
    helper: '8 Characters, 1 Uppercase, 1 Lowercase, 1 Number.',
    disabled: false,
    error: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'password-input',
    label: 'Password Input',
    placeholder: '',
    defaultValue: '',
    helper: '8 Characters, 1 Uppercase, 1 Lowercase, 1 Number.',
    disabled: true,
    error: false,
};


export const onError = Template.bind({});
onError.args = {
    name: 'password-input',
    label: 'Password Input',
    placeholder: '',
    defaultValue: '',
    helper: '8 Characters, 1 Uppercase, 1 Lowercase, 1 Number.',
    disabled: false,
    error: true,
};
