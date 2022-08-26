import { useEffect, useState } from 'react'
// components
import Header from '../components/header'
import SocialBar from '../components/socialBar'
import About from '../components/aboutme'
import Loader from '../components/loader'

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