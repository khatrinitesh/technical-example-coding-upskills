import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './2';

function App() {
  const [htmlContent,setHtmlContent] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const fetchedHtml = '<h1>dynamically</h1><p>Amet nostrud incididunt ad deserunt voluptate nostrud esse fugiat eiusmod aliquip eiusmod consectetur consequat anim.</p>'
      setHtmlContent(fetchedHtml)
    },2000)
  })

  return (
    <>
    <Example/>
     <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
    </>
  )
}

export default App
