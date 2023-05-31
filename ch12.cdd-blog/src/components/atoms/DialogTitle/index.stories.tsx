import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DialogTitle } from '.';

export default {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
} as ComponentMeta<typeof DialogTitle>;

const Template: ComponentStory<typeof DialogTitle> = (args) => <DialogTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '블로그 글 등록',
};
