import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useFonts() {

  const [allFonts, setAllFonts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [fontsSerif, setFontsSerif] = useState([]);
  const [fontsSansSerif, setFontsSansSerif] = useState([]);
  const [fontsMono, setFontsMono] = useState([]);

  const [currentFontSerif, setCurrentFontSerif] = useState('serif');
  const [currentFontSansSerif, setCurrentFontSansSerif] = useState('san-serif');
  const [currentFontMono, setCurrentFontMono] = useState('monospace');

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL).then(({data}) => {
      setAllFonts(data.items || [])
      setError(false);
      setIsLoading(false);
    })
    .catch(error => {
      setError(error);
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    setFontsSerif(allFonts.filter(font => font.category === 'serif'))
    setFontsSansSerif(allFonts.filter(font => font.category === 'sans-serif'))
    setFontsMono(allFonts.filter(font => font.category === 'monospace'))
  }, [allFonts]);

  const getRandomFont = (array) => array[Math.floor(Math.random() * array.length)].family

  const handleClick = () => {
    setCurrentFontSerif(getRandomFont(fontsSerif))
    setCurrentFontSansSerif(getRandomFont(fontsSansSerif))
    setCurrentFontMono(getRandomFont(fontsMono))
  }
  return [currentFontSerif, currentFontSansSerif, currentFontMono, error, handleClick, isLoading];
}
