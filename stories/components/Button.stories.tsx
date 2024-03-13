// Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button'; // Adjust the import path as necessary

export default {
 title: 'Components/Button',
 component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
 children: 'Primary Button',
 loading: false,
 spinnerColor: 'white',
 size: 'medium',
 theme: { containerTheme: {}, textTheme: {} },
};

export const Secondary = Template.bind({});
Secondary.args = {
 ...Primary.args,
 children: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
 ...Primary.args,
 size: 'large',
 children: 'Large Button',
};

export const Small = Template.bind({});
Small.args = {
 ...Primary.args,
 size: 'small',
 children: 'Small Button',
};

export const Loading = Template.bind({});
Loading.args = {
 ...Primary.args,
 loading: true,
 children: 'Loading Button',
};
