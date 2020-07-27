/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const styles = {
  button: css`
    border-radius: 4px;
    text-transform: none;
    font-weight: 500;
    font-size: 16px;
    min-width: 188px;
    height: 50px;
    width: fit-content;
  `,
}

function CustomButton({ children, primary, style, ...props }) {
  return (
    <Button
      css={css`
        ${styles.button};
        ${style}
      `}
      color={primary ? 'primary' : 'secondary'}
      variant="contained"
      disableElevation
      {...props}
    >
      {children}
    </Button>
  )
}

CustomButton.defaultProps = {
  primary: false,
  style: {},
}

CustomButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  primary: PropTypes.bool,
  style: PropTypes.object,
}

export default CustomButton
