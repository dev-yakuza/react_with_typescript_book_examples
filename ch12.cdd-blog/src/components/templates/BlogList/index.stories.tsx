import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogList } from '.';

export default {
  title: 'Templates/BlogList',
  component: BlogList,
} as ComponentMeta<typeof BlogList>;

const Template: ComponentStory<typeof BlogList> = (args) => <BlogList {...args} />;

export const Default = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
  posts: [
    { id: 1, title: 'blog title 1', body: 'blog body 1' },
    { id: 2, title: 'blog title 2', body: 'blog body 2' },
    { id: 3, title: 'blog title 3', body: 'blog body 3' },
  ],
};
