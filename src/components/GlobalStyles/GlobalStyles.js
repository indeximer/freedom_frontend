import { createGlobalStyle } from 'styled-components'
import { customColors } from './customColors'

import RobotLight from '@/assets/fonts/roboto-light-webfont.woff2'
import RobotRegular from '@/assets/fonts/roboto-regular-webfont.woff2'
import RobotMedium from '@/assets/fonts/roboto-medium-webfont.woff2'
import RobotBold from '@/assets/fonts/roboto-bold-webfont.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body{
    font-family: 'Roboto';
    background-color: ${customColors.body.light};
  }

  .MuiFormControl-root{
    width: 100%;
    margin-bottom: 30px;
    .MuiFormHelperText-root{
      position: absolute;
      bottom: -20px;
    }
  }

`
