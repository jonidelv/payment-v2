/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { css, jsx } from '@emotion/core'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { maxWidth, layoutPadding } from '../constants'
import WithThemeProvider from '../components/WithThemeProvider'
import Payments from './payments'

const cards = [
  {
    id: 1,
    title: 'Free FAFSA',
    description: 'Best if you only want to submit your FAFSA',
    included: ['FAFSA form made easy'],
    cost: 0,
    previousCost: null,
    yearMoneyBack: false,
    chosenBy: null,
    isFav: false,
  },
  {
    id: 2,
    title: 'Mos Application',
    description:
      "Best if you want to apply to all 500+ aid programs at once, but you don't need extra help from an expert",
    included: [
      'The Mos application (includes FAFSA submission if you need it!)',
      'Instructions and reminders for any extra steps to get your funds',
    ],
    cost: 149,
    previousCost: null,
    yearMoneyBack: true,
    chosenBy: null,
    isFav: false,
  },
  {
    id: 3,
    title: 'Mos Application & Advisor',
    description: 'Best if you want to apply to 500+ aid programs at once, and want an expert to maximize your aid',
    included: [
      'The Mos application (includes FAFSA submission if you need it!)',
      'Instructions and reminders for any extra steps to get your funds',
      'Expert aid advisor (yes, a real human!)',
      'Written appeal for more aid',
    ],
    cost: 149,
    previousCost: 229,
    yearMoneyBack: true,
    chosenBy: 53,
    isFav: true,
  },
  {
    id: 4,
    title: 'Appeal & Aid Advisor ',
    description: 'Best if you need more aid or you or your family had a life change (like losing a job)',
    included: ['Expert aid advisor (yes, a real human!)', 'Written appeal for more aid'],
    cost: 79,
    previousCost: null,
    yearMoneyBack: true,
    chosenBy: null,
    isFav: false,
  },
]

const styles = {
  appWrapper: css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  mainContent: css`
    display: flex;
    max-width: ${maxWidth}px;
    padding-right: ${layoutPadding}px;
    padding-left: ${layoutPadding}px;
    margin: auto;
    flex: 1;
    width: 100%;
  `,
}

function App() {
  return (
    <div css={styles.appWrapper}>
      <Header />
      <main css={styles.mainContent}>
        <Payments name="Sophia" cards={cards} />
      </main>
      <Footer />
    </div>
  )
}

export default WithThemeProvider(App)
