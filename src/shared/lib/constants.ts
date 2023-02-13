import {css} from "styled-components";

export const colors = {
    black: 'rgba(0, 0, 0, 1)',
    blackT30: 'rgba(0, 0, 0, 0.3)',
    blue: 'rgba(120,139,235,1)',
    blueT50 : 'rgba(120,139,235,0.5)',
    red: 'rgb(248,64,64)',
}
export const alignCss = {
    bottomRight: css`
      position: absolute;
      right: 10px;
      bottom: 10px;`,
    topRight: css`
      position: absolute;
      right: 10px;
      top: 10px;
    \`
    `
}
export enum DateFormats {
    DayMonthYear = 'dd MMM yyyy'
}