/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { theme } from '../../constants'

const styles = {
  container: css`
    width: 100%;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 41px;
    color: ${theme.palette.common.black};
    margin-bottom: 15px;
    display: flex;
  `,
  previousCost: css`
    font-size: 23px;
    color: ${theme.palette.common.grey};
    text-decoration: line-through;
    margin-left: 7px;
    position: relative;
    top: 4px;
  `,
}

function Price({ cost, previousCost }) {
  return (
    <div css={styles.container}>
      {cost === 0 ? 'Free' : `$${cost}`} {previousCost && <span css={styles.previousCost}>${previousCost}</span>}
    </div>
  )
}

Price.defaultProps = {
  previousCost: null,
}

Price.propTypes = {
  cost: PropTypes.number.isRequired,
  previousCost: PropTypes.number,
}

export default Price
