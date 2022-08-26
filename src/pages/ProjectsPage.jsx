import { useEffect, useState } from 'react'
// components
import Header from '../components/header'
import SocialBar from '../components/socialBar'
import Projects from '../components/projects'
import Loader from '../components/loader'
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