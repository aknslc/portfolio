// main components
import Header from '../components/header'
import SocialBar from '../components/socialBar'
import PageContent from '../components/content'
import Loader from '../components/loader'
import { useEffect, useState } from 'react'



function Home() {
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
          <PageContent />
        </>
      )}

    </>
  )
}

export default Home