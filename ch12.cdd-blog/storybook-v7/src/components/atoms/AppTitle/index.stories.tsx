import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle } from '.';

const meta = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  tags: ['autodocs'],
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
