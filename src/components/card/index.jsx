/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import Heading from '../Heading'
import { theme } from '../../constants'
import heart from '../../assets/heart.svg'
import IncludedList from './IncludedList'
import Price from './Price'
import Button from '../Button'
import arrowImg from '../../assets/arrow.svg'

const cardSidePadding = 18

const styles = {
  card: css`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    flex-direction: column;

    &.order-1 {
      width: 24.5%;
      padding-left: 0;
      padding-right: ${cardSidePadding}px;
      @media (max-width: 1080px) {
        width: calc(50% - ${cardSidePadding / 2}px);
        padding-left: ${cardSidePadding}px;
        padding-right: ${cardSidePadding}px;
        border: 1px solid ${theme.palette.common.grey};
        margin-bottom: ${cardSidePadding}px;
        margin-right: ${cardSidePadding / 2}px;
        & .separator {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        & .top-heading {
          margin-top: 0;
        }
      }

      @media (max-width: 650px) {
        width: 100%;
        margin: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: ${cardSidePadding}px;
        & .top-heading {
          height: auto;
          min-height: 0;
          margin-bottom: 13px;
        }
      }

      & .separator {
        margin-left: 0;
        margin-right: -${cardSidePadding}px;
      }
    }

    &.order-2 {
      width: 24.5%;
      padding-left: ${cardSidePadding}px;
      padding-right: ${cardSidePadding}px;
      @media (max-width: 1080px) {
        width: calc(50% - ${cardSidePadding / 2}px);
        padding-left: ${cardSidePadding}px;
        padding-right: ${cardSidePadding}px;
        border: 1px solid ${theme.palette.common.grey};
        margin-bottom: ${cardSidePadding}px;
        margin-left: ${cardSidePadding / 2}px;
        & .separator {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        & .top-heading {
          margin-top: 0;
        }
      }

      @media (max-width: 650px) {
        width: 100%;
        margin: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: ${cardSidePadding}px;
        & .top-heading {
          height: auto;
          min-height: 0;
          margin-bottom: 13px;
        }
      }

      & .separator {
        margin-left: -${cardSidePadding}px;
        margin-right: -${cardSidePadding}px;
      }
    }

    &.order-3 {
      width: 26.5%;
      padding-left: ${cardSidePadding}px;
      padding-right: ${cardSidePadding}px;
      @media (max-width: 1080px) {
        width: calc(50% - ${cardSidePadding / 2}px);
        padding-left: ${cardSidePadding}px;
        padding-right: ${cardSidePadding}px;
        margin-right: ${cardSidePadding / 2}px;
        & .separator {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }

      @media (max-width: 680px) {
        & .top-heading {
          height: 42px;
        }
      }

      @media (max-width: 650px) {
        width: 100%;
        margin: 0;
        margin-bottom: ${cardSidePadding}px;
        & .top-heading {
          height: auto;
          min-height: 0;
          margin-bottom: 13px;
        }
      }

      & .separator {
        margin-left: -${cardSidePadding}px;
        margin-right: -${cardSidePadding}px;
      }
    }

    &.order-4 {
      width: 24.5%;
      padding-left: ${cardSidePadding}px;
      padding-right: 0;
      @media (max-width: 1080px) {
        width: calc(50% - ${cardSidePadding / 2}px);
        padding-left: ${cardSidePadding}px;
        padding-right: ${cardSidePadding}px;
        border: 1px solid ${theme.palette.common.grey};
        margin-left: ${cardSidePadding / 2}px;
        & .separator {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
      }

      @media (max-width: 680px) {
        & .top-heading {
          height: 42px;
        }
      }

      @media (max-width: 650px) {
        width: 100%;
        margin: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        margin-bottom: ${cardSidePadding}px;
        & .top-heading {
          margin-top: 0;
          height: auto;
          min-height: 0;
          margin-bottom: 13px;
        }
      }
    }
  `,
  favBadge: css`
    background: ${theme.palette.common.yellow};
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 38px;
    width: 240px;
    border-radius: 40px;
    padding: 0px 15px;
    font-weight: 600;
    font-size: 13px;
    top: 23px;

    img {
      margin-right: 10px;
    }
  `,
  descriptionBox: css`
    min-height: 90px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: ${theme.palette.common.black};
    line-height: 22px;
    @media (max-width: 1220px) {
      min-height: 110px;
    }
    @media (max-width: 1080px) {
      min-height: 90px;
    }
    @media (max-width: 650px) {
      height: auto;
      min-height: 0;
      margin-bottom: 25px;
    }
  `,
  separator: css`
    height: 1px;
    background: ${theme.palette.common.lightGrey};
    margin-bottom: 23px;
    position: relative;
  `,
  includedTitle: css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: ${theme.palette.common.grey};
    margin-bottom: 20px;
    display: flex;
    @media (max-width: 425px) {
      margin-bottom: 15px;
    }
  `,
  includedA: css`
    @media (max-width: 425px) {
      display: none;
    }
  `,
  arrowImg: css`
    display: none !important;
    display: inline-block;
    cursor: pointer;
    margin-left: 15px;
    position: relative;
    top: 3px;

    @media (max-width: 425px) {
      display: block !important;
    }

    &.open {
      transform: rotate(90deg);
    }
  `,
  moneyBackText: css`
    color: ${theme.palette.common.grey};
    margin-top: 18px;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
  `,
}

function Card({ title, description, included, cost, previousCost, yearMoneyBack, chosenBy, isFav, order }) {
  const [respListOpen, setRespListOpen] = React.useState(isFav)

  return (
    <div
      css={css`
        ${styles.card};
        border: ${isFav ? `1px solid ${theme.palette.common.black}` : 'none'};
      `}
      className={`order-${order}`}
    >
      {isFav && chosenBy && (
        <div css={styles.favBadge}>
          <img src={heart} alt="heart" width="18" height="16" />
          Chosen by {chosenBy}% of students
        </div>
      )}
      <Heading
        size={21}
        style={css`
          margin-top: 62px;
          margin-bottom: 19px;
          @media (max-width: 1220px) {
            height: 42px;
          }
          @media (max-width: 1080px) {
            height: auto;
          }
        `}
        className="top-heading"
      >
        {title}
      </Heading>
      <div css={styles.descriptionBox}>{description}</div>
      <div
        css={css`
          ${styles.separator};
          bottom: ${isFav ? '1px' : ''};
        `}
        className="separator"
      />
      <div css={styles.includedTitle}>
        What's included <span css={styles.includedA}>:</span>
        <img
          src={arrowImg}
          alt="title logo"
          width="7"
          height="14"
          css={styles.arrowImg}
          className={respListOpen && 'open'}
          onClick={() => setRespListOpen(prev => !prev)}
          role="button"
        />
      </div>
      <IncludedList includedList={included} respListOpen={respListOpen} />
      <div
        css={css`
          ${styles.separator};
          bottom: ${isFav ? '1px' : ''};
          margin-bottom: 15px;
        `}
        className="separator"
      />
      <Price cost={cost} previousCost={previousCost} />
      <Button
        primary={isFav}
        style={css`
          width: 100%;
        `}
        onClick={() => alert('WIP')}
      >
        Let's do this!
      </Button>
      {yearMoneyBack && <div css={styles.moneyBackText}>· 1 year money back guaranteed ·</div>}
    </div>
  )
}

Card.defaultProps = {
  previousCost: null,
  chosenBy: null,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  included: PropTypes.array.isRequired,
  cost: PropTypes.number.isRequired,
  previousCost: PropTypes.number,
  yearMoneyBack: PropTypes.bool.isRequired,
  chosenBy: PropTypes.number,
  isFav: PropTypes.bool.isRequired,
  order: PropTypes.number.isRequired,
}

export default Card
