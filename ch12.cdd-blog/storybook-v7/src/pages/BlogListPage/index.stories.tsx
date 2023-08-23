import type { Meta, StoryObj } from '@storybook/react';

import { BlogListPage } from '.';

const meta = {
  title: 'Pages/BlogListPage',
  component: BlogListPage,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
