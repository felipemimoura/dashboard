import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    white: '#EEECF6',
    blue: {
      '100': "#C5E7F9",
      '500': '#516CB2',
      '700': "#3A4772",
      '800': "#344755",
      '900': "#1D2A32"
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