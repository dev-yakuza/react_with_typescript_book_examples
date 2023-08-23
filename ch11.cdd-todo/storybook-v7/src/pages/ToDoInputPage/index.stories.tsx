import type { Meta, StoryObj } from '@storybook/react';

import { ToDoInputPage } from '.';

const meta = {
  title: 'Pages/ToDoInputPage',
  component: ToDoInputPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoInputPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
