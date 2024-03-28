import type { Meta, StoryObj } from '@storybook/react';
import SvgIcon from './SvgIcon';

const SvgIconStories = {
  title: 'SvgIcon/SvgIcon',
  component: SvgIcon,
  argTypes: {},
} satisfies Meta<typeof SvgIcon>;

export default SvgIconStories;
type SvgIconStory = StoryObj<typeof SvgIconStories>;

export const SvgIcon1: SvgIconStory = {
  args: {
    iconName: 'icon-user1',
  },
};
