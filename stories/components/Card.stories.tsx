// src/components/Card.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
 title: 'Components/Card',
 component: Card,
 argTypes: {
    padding: { control: 'text' },
    radius: { control: 'text' },
    removeShadow: { control: 'boolean' },
 },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args}>Content</Card>;

export const Default = Template.bind({});
Default.args = {
 padding: '16px',
 radius: '8px',
 removeShadow: false,
};
