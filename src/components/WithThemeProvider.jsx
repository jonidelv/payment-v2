import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { theme } from '../constants'

const WithThemeProvider = (Component, newTheme = {}) => props => {
  const customTheme = createMuiTheme({ ...theme, ...newTheme })

  return (
    <MuiThemeProvider theme={customTheme}>
      <Component {...props} />
    </MuiThemeProvider>
  )
}

export default WithThemeProvider
