import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react';

import { Landing } from './Landing';

export default {
    title: 'Landing Page',
    component: Landing,
} as Meta;

const Template: Story = args => <Landing {...args} />;

export const Test = Template.bind({});
Test.args = {};
