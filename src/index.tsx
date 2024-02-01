import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme} from '@chakra-ui/react'





//extending the thmes

const colors={
  box1:{
    900:'#D9D9D9',
  
  },

  "box2": {
    900:'#6E9CC7'
  },

  "buttonL":{
    900:'#000000'
  },

  "buttonT":{
    900:'#FFFFFF'
  },

  "buttonC":{
    900:'#FFFFFF'
  },

  "buttonS":{
    900:'#004F95'
  },
 


  "moreC":{
    600:'#08337DBA'
  },

  "footer":{
    500:'#738CE2AD'
  },

  "SpcelistC":{
    900:'#D1D6E0'
  }


}

const fonts={
  heading:"stoke",
  header:'Roborto',
  body:'poppins'
}


const theme= extendTheme({colors, fonts})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
);


