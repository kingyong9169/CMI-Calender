import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --bg: #f6f6ef; /*배경색*/
        --line: #aaaaaa; /*상단과 하단을 나눠줄 줄 색*/
        --sat: #8282ff; /*토요일 배경색*/
        --sun: #ff88a7; /*일요일 배경색*/
        --today: #ffb900; /*오늘 날짜의 테투리색*/
        --font: "Lobster", cursive; /*폰트 정의*/
    }
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol,
    ul {
    list-style: none;
    }
    blockquote,
    q {
    quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }
    a,
    a:hover,
    a:visited {
    text-decoration: none;
    color: inherit;
    }
    input:focus,
    button:focus,
    select:focus,
    textarea:focus {
    outline: none;
    }
    button{
    border: 0;
    background-color: transparent;
    cursor: pointer;
    }
    body {
        align-items: center;
        display: flex;
        flex-direction: column;
        top: 50%;
        transform: translateY(50%);
        background-color: #c1aeee;
        font-family: var(--font);
    }
`;

export default GlobalStyle;
