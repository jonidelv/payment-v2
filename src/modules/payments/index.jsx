/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { theme, maxWidth, layoutPadding } from '../../constants'
import aidhelplogo from '../../assets/aidhelplogo.svg'
import Heading from '../../components/Heading'
import Button from '../../components/Button'
import titleImg from '../../assets/titleImg.svg'
import Card from '../../components/card/index'

const styles = {
  container: css`
    width: 100%;
    position: relative;

    p {
      font-size: 16px;
      line-height: 22px;
      color: ${theme.palette.common.black};
      font-style: normal;
      font-weight: normal;
      margin: 0;
      margin-bottom: 25px;
    }
  `,
  title: css`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 41px;
    margin-top: 55px;
    margin-bottom: 60px;
    @media (max-width: 670px) {
      margin-top: 10px;
    }
    @media (max-width: 650px) {
      margin-top: 20px;
      margin-bottom: 50px;
    }
    @media (max-width: 650px) {
      font-size: 24px;
      line-height: 24px;
    }
  `,
  titleImg: css`
    position: absolute;
    right: 0;
    top: -20px;
    @media (max-width: 1080px) {
      top: -60px;
    }
    @media (max-width: 670px) {
      display: none;
    }
  `,
  cardsWrapper: css`
    margin-bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      margin-bottom: 30px;
    }
  `,
  estimateContainer: css`
    height: 290px;
    display: flex;
    background: ${theme.palette.common.pink};
    margin-bottom: 60px;
    padding: 54px;

    & > div {
      flex: 1;
      display: flex;
    }

    @media (max-width: ${maxWidth}px) {
      margin-bottom: ${layoutPadding}px;
    }
    @media (max-width: 880px) {
      padding: ${layoutPadding}px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      padding: 30px;
    }
  `,
  aidImageContent: css`
    justify-content: center;
    align-items: center;
    img {
      @media (max-width: 768px) {
        margin-top: -10px;
        margin-bottom: 35px;
      }
      @media (max-width: 425px) {
        transform: scale(0.8);
        margin-bottom: 10px;
      }
    }
  `,
  aidTitleWrapper: css`
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
  `,
  aidText: css`
    margin-bottom: 30px !important;
    padding-right: 70px;
    @media (max-width: 800px) {
      padding-right: 0;
      margin-bottom: 20px !important;
    }
    @media (max-width: 768px) {
      margin-bottom: 25px !important;
    }
    @media (max-width: 425px) {
      font-size: 13px !important;
    }
  `,
  aidTitleWrapperContent: css`
    @media (max-width: 768px) {
      text-align: center;
    }
    @media (max-width: 425px) {
      text-align: left;
    }
  `,
}

function Payments({ name, cards }) {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>
        {name}, let's help <br />
        you pay for college!
      </h1>
      <img src={titleImg} alt="title logo" width="263" height="205" css={styles.titleImg} />
      <div css={styles.cardsWrapper}>
        {cards.map((card, idx) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            included={card.included}
            cost={card.cost}
            previousCost={card.previousCost}
            yearMoneyBack={card.yearMoneyBack}
            chosenBy={card.chosenBy}
            isFav={card.isFav}
            order={idx + 1}
          />
        ))}
      </div>
      <div css={styles.estimateContainer}>
        <div css={styles.aidImageContent}>
          <img src={aidhelplogo} alt="aid help" width="375" height="190" />
        </div>
        <div css={styles.aidTitleWrapper}>
          <div css={styles.aidTitleWrapperContent}>
            <Heading
              size={24}
              style={css`
                @media (max-width: 800px) {
                  margin-bottom: 15px !important;
                }
                @media (max-width: 768px) {
                  margin-bottom: 20px !important;
                }
                @media (max-width: 425px) {
                  font-size: 16px;
                }
              `}
            >
              Unsure which package to pick?
            </Heading>
            <p css={styles.aidText}>
              We can help you decided by calculating how much you would get, so the investment of the service fee is
              worth it
            </p>
            <Button
              onClick={() => alert('WIP')}
              style={css`
                @media (max-width: 425px) {
                  font-size: 14px !important;
                }
              `}
            >
              Get aid estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Payments.propTypes = {
  name: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
}

export default Payments
