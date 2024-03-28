import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';

const BaseFoo = {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default BaseFoo;
type BaseStory = StoryObj<typeof BaseFoo>;

export const Test: BaseStory = {
  args: {
    sampleTextProp: '123',
  },
};
export const Test1: BaseStory = {
  args: {
    sampleTextProp: '456',
  },
};
