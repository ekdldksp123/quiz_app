import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuizMain } from './QuizMain';

export default {
    component: QuizMain,
    parameters: {
        layout: 'fullscreen',
    }
} as ComponentMeta<typeof QuizMain>;

const Template: ComponentStory<typeof QuizMain> = (args) => <QuizMain {...args} />;

export const QuizMainTest = Template.bind({});
