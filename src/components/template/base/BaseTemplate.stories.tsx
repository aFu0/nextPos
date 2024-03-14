import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';

const BaseFoo = {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} satisfies Meta<typeof BaseTemplate>;

export default BaseFoo;
type BaseStory = StoryObj<typeof BaseFoo>;

export const test: BaseStory = {
  args: {
    sampleTextProp: '123',
  },
};
