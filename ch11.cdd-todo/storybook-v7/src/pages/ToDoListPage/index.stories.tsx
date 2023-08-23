import type { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';

const meta = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
