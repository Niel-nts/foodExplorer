import React from 'react'
import ReactDOM from 'react-dom/client'
import {Details} from './pages/Details'
import { ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { Home } from './pages/Home'
import { SingIn } from './pages/SingIn'
import { SingUp } from './pages/SingUp'
import { Profile } from './pages/Profile'
import { New } from './pages/New'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      {/* <Details /> */}
      {/* <Home/> */}
      {/* <SingIn/> */}
      {/* <SingUp/> */}
      {/* <Profile/> */}
      <New/>
    </ThemeProvider>
  </React.StrictMode>,
)
