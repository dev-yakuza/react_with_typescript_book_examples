import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegisterBlogDialog } from '.';

export default {
  title: 'Organisms/RegisterBlogDialog',
  component: RegisterBlogDialog,
} as ComponentMeta<typeof RegisterBlogDialog>;

const Template: ComponentStory<typeof RegisterBlogDialog> = (args) => (
  <RegisterBlogDialog {...args} />
);

export const Default = Template.bind({});
