/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import { maxWidth, layoutPadding, theme } from '../constants'

const styles = {
  footer: css`
    height: 200px;
    display: flex;
    align-items: center;
    background: ${theme.palette.common.black};
    @media (max-width: 650px) {
      display: none;
    }
  `,
  container: css`
    max-width: ${maxWidth}px;
    padding-right: ${layoutPadding}px;
    padding-left: ${layoutPadding}px;
    margin: auto;
    color: ${theme.palette.common.white};
    width: 100%;
    height: 100%;
  `,
  content: css`
    margin-top: 44px;
    font-size: 16px;
  `,
}

function Footer() {
  return (
    <footer css={styles.footer}>
      <div css={styles.container}>
        <div css={styles.content}>Footer</div>
      </div>
    </footer>
  )
}

export default Footer
