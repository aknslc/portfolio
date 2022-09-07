import { useEffect, useState } from 'react'
// components
import Header from '../components/Header'
import SocialBar from '../components/SocialBar'
import Projects from '../components/Projects'
import Loader from '../components/Loader'
function ProjectsPage() {
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
          <Projects />
        </>
      )}
    </>
  )
}

export default ProjectsPage