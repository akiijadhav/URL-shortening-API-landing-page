import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Shorten from './components/Shorten/Shorten';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import './App.css';


//Theme Styles the entire App with style.md
const theme = {
  PrimaryBtnColor: '#2acfcf',
  PrimaryBgColor: '#3b3054',
  
  SecondaryRed: '#f46262',
  White: '#ffffff',
  ScrollBarTrack: '#edf2f7',
  LightBg: '#f0f1f6',
  Gray: '#bfbfbf',
  GrayishViolet: '#9e9aa7',
  VeryDarkBlue: '#35323e',
  VeryDarkViolet: '#232127',

  PrimaryFntSz: '1.125rem',

  padTbLr8: '1rem',
  PadTb48Lr0: '3rem 0',
  padTb16Lr0: '1rem 0',
  PadTbAutoLr16: 'auto 1rem',
  PadTb16Lr24: '1rem 1.5rem',
  PadTb32Lr0: '2rem 0',
  PadTb16Lr32: '1rem 2rem',
  PadTb8Lr32: '0.5rem 2rem',

  MarTb16LrAuto: '1rem auto',
  MarTb16Lr0: '1rem 0',
  MarTb32Lr0: '2rem 0',
  MarTb0Lr16: '0 1rem',


  BrdrRdsSm: '0.5rem',
  BrdrRdsMd: '1.5rem',

  FntW500: 500,
  FntW700: 700,

}

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Navbar />
        <Hero />
        <Shorten />
        <Statistics />
        <Boost />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
