import React from 'react';
import './App.css';
import Content from './Content/Content';
import spinner from './spinner.gif'
import GoogleFontLoader from 'react-google-font-loader';
import useFonts from './hooks/useFonts'

function App() {

  const [currentFontSerif, currentFontSansSerif, currentFontMono, error, handleClick, isLoading] = useFonts();

  if (isLoading) {
    return <div className="loader"><img alt="Loading" src={spinner} /></div>
  } else if (error) {
    return <div>Error: {error}</div>
  } else {
    return (
      <div className="app">
        <GoogleFontLoader
          fonts={[
            {font: currentFontMono},
            {font: currentFontSansSerif},
            {font: currentFontSerif},
          ]}
        />
        <Content fontSerif={currentFontSerif} fontSansSerif={currentFontSansSerif} fontMono={currentFontMono} handleClick={handleClick}/>
      </div>
    );
  }
}

export default App;
