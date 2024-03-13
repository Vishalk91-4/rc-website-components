import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Input from './Input';

interface CustomInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  borderRadius?: string;
  backgroundColor?: string;
}

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    borderRadius: {
      control: 'number',
      description: 'Border radius of the input',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the input',
    },
  },
} as Meta;

const Template: StoryFn<CustomInputProps> = (args) => {
  return (
    <textarea
      {...args}
      style={{
        borderRadius: args.borderRadius,
        backgroundColor: args.backgroundColor || 'lightgrey',
        padding: '10px',
        resize: 'both',
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
  borderRadius: '10',
  backgroundColor: 'lightgrey',
};