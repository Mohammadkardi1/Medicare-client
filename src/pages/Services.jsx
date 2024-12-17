import {useEffect} from 'react'
import ServicesList from '../components/ServicesList/ServicesList';
import { useLocation } from 'react-router-dom';


const Services = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <section>
      <div className='container'>

        <ServicesList/>
      </div>
    </section>
  )
}

export default Services
