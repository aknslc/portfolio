import { useEffect, useState } from 'react'

// components
import Header from '../components/header'
import SocialBar from '../components/socialBar'
import Contact from '../components/contact'
import Loader from '../components/loader'

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