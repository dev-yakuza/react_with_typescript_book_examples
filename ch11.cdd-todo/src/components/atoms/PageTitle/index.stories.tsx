import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageTitle } from '.';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '할 일 목록',
};
