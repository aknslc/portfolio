import { useEffect, useState } from 'react'
// components
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'
import About from '../components/AboutMe'
import Loader from '../components/Loader'

function AboutPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])
  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Header />
          <SocialBar />
          <About />
        </>
      )}
    </>
  )
}

export default AboutPage