import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 64,
  children: 'Default Heading',
};

export const DisplaySize = Template.bind({});
DisplaySize.args = {
  size: 'display',
  children: 'Display Size Heading',
};

export const UsageExamples = () => (
  <>
    <Heading size={64}>
      This is a heading
    </Heading>

    <Heading size="display">
      This is a display size heading
    </Heading>
  </>
);

UsageExamples.storyName = 'Usage Examples';