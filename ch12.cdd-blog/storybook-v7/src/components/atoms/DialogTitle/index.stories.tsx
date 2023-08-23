import type { Meta, StoryObj } from '@storybook/react';

import { DialogTitle } from '.';

const meta = {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '블로그 글 등록',
  },
};
