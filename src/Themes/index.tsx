import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
        text: string;
    }
}

export const lightTheme: DefaultTheme = {
    body: '#FAFAFA',
    text: '##111517',
};

export const darkTheme: DefaultTheme = {
    body: '#202C37',
    text: '#FFFFFF',
};