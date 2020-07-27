/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { fontFamily } from '../constants'

const globalStyles = css`
  * {
    font-family: ${fontFamily};
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    line-height: 1;
    height: 100%;
    width: 100%;
  }

  body button,
  body input,
  body textarea {
    font-family: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  strong {
    font-weight: 600;
  }
`

function GlobalStyles() {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
