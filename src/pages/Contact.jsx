import React from 'react'


const  formLabelStyle = `block text-[17px] leading-7 font-medium text-headingColor mb-2`
const formInputStyle = `w-full px-2 py-3 text-headingColor text-[17px] leading-7 font-medium  border border-textColor border-solid
                        rounded-md focus:outline-none focus:border-primaryColor placeholder:text-textColor `

const Contact = () => {
  return (
    <section className='mt-10 mx-auto max-w-[700px] space-y-12'>
      <div className='text-center space-y-4'>
        <h1 className='heading'>Contact Us</h1>
        <p className='text-textColor '>
          Experiencing a technical issue or want to provide feedback about a company feature? Let us know!
        </p>
      </div>


      <form className='space-y-10'>
        <div>
          <label className={formLabelStyle}>Your Email</label>
          <input type='text' name='email' id='email' placeholder='example@gmail.com' 
            value='' 
            className={formInputStyle}/>
        </div>


        <div>
          <label className={formLabelStyle}>Subject</label>
          <input type='text' name='subject' id='subject' placeholder='Let us know how we can help you' 
            value='' 
            className={formInputStyle}/>
        </div>


        <div>
          <label className={formLabelStyle}>Your Message</label>
          <textarea rows={5} placeholder='Leave a comment...'
                    className='w-full px-2 py-3 text-[17px] leading-7 font-medium border border-solid border-textColor rounded-md 
                      placeholder:text-textColor focus:outline-none focus:border-primaryColor'>

          </textarea>
        </div>

        <div>
          <button className='btn mt-0'>Submit</button>
        </div>






      </form>
    </section>
  )
}

export default Contact
