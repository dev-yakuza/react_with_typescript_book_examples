import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppTitle } from '.';

export default {
  title: 'Atoms/AppTitle',
  component: AppTitle,
} as ComponentMeta<typeof AppTitle>;

const Template: ComponentStory<typeof AppTitle> = () => <AppTitle />;

export const Default = Template.bind({});
