/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../constants/logo'
import { maxWidth, layoutPadding } from '../constants'

const styles = {
  header: css`
    height: 100px;
    display: flex;
    align-items: center;
    max-width: ${maxWidth}px;
    padding-right: ${layoutPadding}px;
    padding-left: ${layoutPadding}px;
    margin: auto;
    width: 100%;
    @media (max-width: 650px) {
      height: 60px;
    }
  `,
  logo: css`
    cursor: pointer;
    @media (max-width: 425px) {
      transform: scale(0.7);
      margin-left: -10px;
      margin-top: -5px;
    }
  `,
}

function Header() {
  return (
    <header css={styles.header}>
      <img src={logo} alt="logo" height="33" css={styles.logo} onClick={() => alert('Go to home')} role="button" />
    </header>
  )
}

export default Header
