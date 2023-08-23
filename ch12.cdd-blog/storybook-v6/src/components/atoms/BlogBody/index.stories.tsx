import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogBody } from '.';

export default {
  title: 'Atoms/BlogBody',
  component: BlogBody,
} as ComponentMeta<typeof BlogBody>;

const Template: ComponentStory<typeof BlogBody> = (args) => <BlogBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  body: '블로그 글',
};
