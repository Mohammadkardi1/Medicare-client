import {useEffect} from 'react'
import { useLocation } from 'react-router-dom';


const formLabelStyle = ``
const formInputStyle = ` `

const Contact = () => {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <section className='mt-6 md:mt-10 px-4 mx-auto max-w-screen-md space-y-12'>
      <div className='text-center space-y-2 md:space-y-4'>
        <h1 className='custom-header'>Contact Us</h1>
        <p className='custom-paragraph text-textColor'>
          Experiencing a technical issue or want to provide feedback about a company feature? Let us know!
        </p>
      </div>
      <form action='#' className=' space-y-6 lg:space-y-10'>
        <div>
          <label className='form__label'>Your Email</label>
          <input type='text' placeholder='example@gmail.com' className='form__input'/>
        </div>
        <div>
          <label className='form__label'>Subject</label>
          <input type='text' placeholder='Let us know how we can help you' className='form__input'/>
        </div>
        <div>
          <label className='form__label'>Your Message</label>
          <textarea rows={5} placeholder='Leave a comment...' className='form__textarea'>
          </textarea>
        </div>
        <div>
          <button type='submit' className='custom-button rounded mt-0'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
