import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { color2 } from './utils/CommonStyles'

import './App.css'
import 'antd/dist/antd.css'
import EmailArchiveComponent from './containers/EmailArchiveContainer'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding-top: 20px;
    color: #333333;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    @media screen and (min-width: 1024px) {
      padding: 30px;
    }
  }

  h2 { color: ${color2} }

  /* ANTD OVERRIDES */
  .customize-panels .ant-picker-range-wrapper .ant-picker-panel-container .ant-picker-panels {
    display: block;
  }

  .customize-panels.ant-picker-dropdown-hidden {
    display: none !important;
  }

  .hide { display: none !important; }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <EmailArchiveComponent />
    </>
  )
}

export default App;
