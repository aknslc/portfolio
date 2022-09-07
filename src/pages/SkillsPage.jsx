import { useEffect, useState } from 'react'
// components
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'
import Skills from '../components/Skills'
import Loader from '../components/Loader'
function SkillsPage() {
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
          <Skills />
        </>
      )}
    </>
  )
}

export default SkillsPage