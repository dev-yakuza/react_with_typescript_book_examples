import type { Meta, StoryObj } from '@storybook/react';

import { RegisterBlogDialog } from '.';

const meta = {
  title: 'Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '30rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RegisterBlogDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
