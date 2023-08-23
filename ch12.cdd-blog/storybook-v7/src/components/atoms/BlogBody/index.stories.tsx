import type { Meta, StoryObj } from '@storybook/react';

import { BlogBody } from '.';

const meta = {
  title: 'Atoms/BlogBody',
  component: BlogBody,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    body: '블로그 글',
  },
};
