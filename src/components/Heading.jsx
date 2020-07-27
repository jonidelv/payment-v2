/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import { theme } from '../constants'
import PropTypes from 'prop-types'

const styles = {
  heading: css`
    color: ${theme.palette.common.black};
    font-weight: 800;
    margin-bottom: 25px;
  `,
}

function Heading({ children, size, style, className }) {
  return (
    <div
      css={css`
        ${styles.heading};
        font-size: ${size}px;
        ${style};
      `}
      className={className}
    >
      {children}
    </div>
  )
}

Heading.defaultProps = {
  size: 24,
  style: {},
  className: '',
}

Heading.propTypes = {
  size: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Heading
