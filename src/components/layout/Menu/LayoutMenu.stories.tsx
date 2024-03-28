
import type { Meta, StoryObj } from '@storybook/react';
import LayoutMenu from './LayoutMenu';

const LayoutMenuFoo = {
  title: 'template/LayoutMenu',
  component: LayoutMenu,
  argTypes: {},
} satisfies Meta<typeof LayoutMenu>;

export default LayoutMenuFoo;
type LayoutMenuStory = StoryObj<typeof LayoutMenuFoo>;

export const Test: LayoutMenuStory = {
  args: {
    sampleTextProp: '123',
  },
};
export const Test1: LayoutMenuStory = {
  args: {
    sampleTextProp: '456',
  },
};
