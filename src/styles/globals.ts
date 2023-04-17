import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    white: '#EEECF6',
    blue: {
      '100': "#C5E7F9",
      '300': "#0581A9",
      '500': '#516CB2',
      '600': '#D3D0E2',
      '700': "#3A4772",
      '800': '#344755',
      '900': "#1D2A32"
    },
    green : {
      '100': '#F3F3C1',
      '200': '#C6DC74',
      '500': "#98C93C",
     
      '700':'#799A38',
  
      '900':"#4B7520"
    }
  },
  styles:{
    global:{
      body: {
        bg: 'blue.900'
      }
    }
  }
})