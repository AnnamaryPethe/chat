import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming'

configure(require.context('../src', true, /\.stories\.tsx?$/), module);
addParameters({
    options: {
        theme: themes.dark
    }
});