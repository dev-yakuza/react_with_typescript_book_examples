import type { Meta, StoryObj } from '@storybook/react';

import { InputToDo } from '.';

const meta = {
  title: 'Organisms/InputToDo',
  component: InputToDo,
  tags: ['autodocs'],
} satisfies Meta<typeof InputToDo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
