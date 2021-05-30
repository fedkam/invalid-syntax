import { createGlobalStyle } from 'styled-components';

const pathFonts = '../../../assets/fonts/';

export const InitFonts = createGlobalStyle`
    @font-face {
        font-family: 'SB Sans Display';
        src: url(${pathFonts}+'SBSansDisplay-Bold.eot');
        src: url(${pathFonts}+'Display-Bold.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Display-Bold.woff2') format('woff2'),
            url(${pathFonts}+'Display-Bold.woff') format('woff'),
            url(${pathFonts}+'Display-Bold.ttf') format('truetype'),
            url(${pathFonts}+'Display-Bold.svg#SBSansDisplay-Bold') format('svg');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Display';
        src: url(${pathFonts}+'Display-Light.eot');
        src: url(${pathFonts}+'Display-Light.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Display-Light.woff2') format('woff2'),
            url(${pathFonts}+'Display-Light.woff') format('woff'),
            url(${pathFonts}+'Display-Light.ttf') format('truetype'),
            url(${pathFonts}+'Display-Light.svg#SBSansDisplay-Light') format('svg');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Display';
        src: url(${pathFonts}+'Display-Bold_1.eot');
        src: url(${pathFonts}+'Display-Bold_1.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Display-Bold_1.woff2') format('woff2'),
            url(${pathFonts}+'Display-Bold_1.woff') format('woff'),
            url(${pathFonts}+'Display-Bold_1.ttf') format('truetype'),
            url(${pathFonts}+'Display-Bold_1.svg#SBSansDisplay-Bold') format('svg');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Display';
        src: url(${pathFonts}+'Display-Regular.eot');
        src: url(${pathFonts}+'Display-Regular.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Display-Regular.woff2') format('woff2'),
            url(${pathFonts}+'Display-Regular.woff') format('woff'),
            url(${pathFonts}+'Display-Regular.ttf') format('truetype'),
            url(${pathFonts}+'Display-Regular.svg#SBSansDisplay-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Display';
        src: url(${pathFonts}+'Display-Semibold.eot');
        src: url(${pathFonts}+'Display-Semibold.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Display-Semibold.woff2') format('woff2'),
            url(${pathFonts}+'Display-Semibold.woff') format('woff'),
            url(${pathFonts}+'Display-Semibold.ttf') format('truetype'),
            url(${pathFonts}+'Display-Semibold.svg#SBSansDisplay-Semibold') format('svg');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Text';
        src: url(${pathFonts}+'Text-Bold.eot');
        src: url(${pathFonts}+'Text-Bold.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Text-Bold.woff2') format('woff2'),
            url(${pathFonts}+'Text-Bold.woff') format('woff'),
            url(${pathFonts}+'Text-Bold.ttf') format('truetype'),
            url(${pathFonts}+'Text-Bold.svg#SBSansText-Bold') format('svg');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Text';
        src: url(${pathFonts}+'Text-Regular.eot');
        src: url(${pathFonts}+'Text-Regular.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Text-Regular.woff2') format('woff2'),
            url(${pathFonts}+'Text-Regular.woff') format('woff'),
            url(${pathFonts}+'Text-Regular.ttf') format('truetype'),
            url(${pathFonts}+'Text-Regular.svg#SBSansText-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Text';
        src: url(${pathFonts}+'Text-Medium.eot');
        src: url(${pathFonts}+'Text-Medium.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Text-Medium.woff2') format('woff2'),
            url(${pathFonts}+'Text-Medium.woff') format('woff'),
            url(${pathFonts}+'Text-Medium.ttf') format('truetype'),
            url(${pathFonts}+'Text-Medium.svg#SBSansText-Medium') format('svg');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'SB Sans Text';
        src: url(${pathFonts}+'Text-Semibold.eot');
        src: url(${pathFonts}+'Text-Semibold.eot?#iefix') format('embedded-opentype'),
            url(${pathFonts}+'Text-Semibold.woff2') format('woff2'),
            url(${pathFonts}+'Text-Semibold.woff') format('woff'),
            url(${pathFonts}+'Text-Semibold.ttf') format('truetype'),
            url(${pathFonts}+'Text-Semibold.svg#SBSansText-Semibold') format('svg');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`;