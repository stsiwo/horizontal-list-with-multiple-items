import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { sampleList, ListItemType, backgroundColorList } from './state';
import { useResponsive } from './hooks/responsive';
import { useOrientation } from './hooks/orientation';

/**
 * implementation steps
 *
 *
 **/

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
  }
`

const Container = styled.div`
  
`


const App: React.FunctionComponent<{}> = (props) => {

  return (
    <div>hello</div>
  )
}



export default App;
