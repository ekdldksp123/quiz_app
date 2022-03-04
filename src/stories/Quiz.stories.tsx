import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Quiz } from './Quiz';

export default {
    component: Quiz,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args} />;

export const Test = Template.bind({});

Test.args = {
    quizzes: '[{"index":0,"amount":10,"category":"Celebrities","question":"When%20was%20Elvis%20Presley%20born%3F","type":"multiple","difficulty":"medium","correct":"January%208%2C%201935","incorrect":["December%2013%2C%201931","July%2018%2C%201940","April%2017%2C%201938"],"options":["July%2018%2C%201940","December%2013%2C%201931","April%2017%2C%201938","January%208%2C%201935"]},{"index":1,"amount":10,"category":"Entertainment%3A%20Film","question":"In%20the%20original%20Star%20Wars%20trilogy%2C%20David%20Prowse%20was%20the%20actor%20who%20physically%20portrayed%20Darth%20Vader.","type":"boolean","difficulty":"easy","correct":"True","options":["True","False"]},{"index":2,"amount":10,"category":"Science%3A%20Computers","question":"Time%20on%20Computers%20is%20measured%20via%20the%20EPOX%20System.","type":"boolean","difficulty":"easy","correct":"False","options":["True","False"]},{"index":3,"amount":10,"category":"Entertainment%3A%20Music","question":"In%20the%20Panic%21%20At%20the%20Disco%27s%20song%20%22Nothern%20Downpour%22%2C%20which%20lyric%20follows%20%27I%20know%20the%20world%27s%20a%20broken%20bone%27.","type":"multiple","difficulty":"hard","correct":"%22So%20melt%20your%20headaches%20call%20it%20home%22","incorrect":["%22So%20sing%20your%20song%20until%20you%27re%20home%22","%22So%20let%20them%20know%20they%27re%20on%20their%20own%22","%22So%20start%20a%20fire%20in%20their%20cold%20stone%22"],"options":["%22So%20start%20a%20fire%20in%20their%20cold%20stone%22","%22So%20let%20them%20know%20they%27re%20on%20their%20own%22","%22So%20sing%20your%20song%20until%20you%27re%20home%22","%22So%20melt%20your%20headaches%20call%20it%20home%22"]}]',
};