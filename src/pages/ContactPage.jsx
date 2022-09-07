import { useEffect, useState } from 'react'

// components
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'
import Contact from '../components/Contact'
import Loader from '../components/Loader'

function ContactPage() {
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
          <Contact />
        </>
      )}
    </>
  )
}

export default ContactPage