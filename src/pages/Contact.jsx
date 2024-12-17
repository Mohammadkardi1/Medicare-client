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
    <section className='mt-10 px-4 mx-auto max-w-screen-md space-y-12'>
      <div className='text-center space-y-4'>
        <h1 className='heading'>Contact Us</h1>
        <p className='text__para font-light'>
          Experiencing a technical issue or want to provide feedback about a company feature? Let us know!
        </p>
      </div>


      <form action='#' className='space-y-10'>
        <div>
          <label htmlFor='email' className='form__label'>Your Email</label>
          <input type='text' id='email' name='email' placeholder='example@gmail.com' 
            className='form__input'/>
        </div>


        <div>
          <label htmlFor='subject' className='form__label'>Subject</label>
          <input type='text' id='subject' name='subject' placeholder='Let us know how we can help you' 
            className='form__input'/>
        </div>


        <div>
          <label htmlFor='comment' className='form__label'>Your Message</label>
          <textarea id='comment' name='cooment' rows={5} placeholder='Leave a comment...'
                    className='w-full px-2 py-3 text-[17px] leading-7 font-medium border border-solid border-textColor rounded-md 
                      placeholder:text-textColor focus:outline-none focus:border-primaryColor'>

          </textarea>
        </div>

        <div>
          <button type='submit' className='btn rounded mt-0'>Submit</button>
        </div>

      </form>
    </section>
  )
}

export default Contact
