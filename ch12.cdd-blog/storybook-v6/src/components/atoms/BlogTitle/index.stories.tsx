import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogTitle } from '.';

export default {
  title: 'Atoms/BlogTitle',
  component: BlogTitle,
} as ComponentMeta<typeof BlogTitle>;

const Template: ComponentStory<typeof BlogTitle> = (args) => <BlogTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '블로그 제목',
};
