import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle } from '.';

const meta = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '할 일 목록',
  },
};
