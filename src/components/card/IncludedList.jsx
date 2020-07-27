/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import tickImg from '../../assets/tickImg.svg'
import PropTypes from 'prop-types'

const styles = {
  listWrapper: css`
    min-height: 195px;
    @media (max-width: 1200px) {
      min-height: 230px;
    }
    @media (max-width: 1080px) {
      min-height: 195px;
    }
    @media (max-width: 650px) {
      min-height: 0;
      margin-bottom: 13px;
    }

    @media (max-width: 425px) {
      height: 0;
      overflow: hidden;
      &.listOpen {
        height: auto;
      }
    }
  `,
  item: css`
    display: flex;
    margin-bottom: 15px;
  `,
  name: css`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  `,
  tickImg: css`
    margin-right: 6px;
    position: relative;
    top: 5px;
  `,
}

function IncludedList({ includedList, respListOpen }) {
  return (
    <div css={styles.listWrapper} className={respListOpen && 'listOpen'}>
      {includedList.map(name => (
        <div css={styles.item} key={name}>
          <img src={tickImg} alt="tick" width="15" height="10" css={styles.tickImg} />
          <div css={styles.name}>{name}</div>
        </div>
      ))}
    </div>
  )
}

IncludedList.propTypes = {
  includedList: PropTypes.array.isRequired,
  respListOpen: PropTypes.bool.isRequired,
}

export default IncludedList
