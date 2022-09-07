// main components
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'
import PageContent from '../components/Content'
import Loader from '../components/Loader'
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