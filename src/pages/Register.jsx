import React from 'react'
import signupImg from '../assets/images/signup.gif'
import avatar from '../assets/images/doctor-img01.png'

const formInputStyle = 'w-full pr-3 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor'


const Register = () => {
  return (
    <section className='px-5 xl:px-0 mt-6'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* ========= img box ========= */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg'/>
            </figure>
          </div>

          {/* ========= register form ========= */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h1 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className=' text-primaryColor'>account</span>
            </h1>

            <form>
              <div className='mb-5'>
                <input type='text' placeholder='Full Name' name='name' required
                    value= ''
                    className={formInputStyle}/>
              </div>


              <div className='mb-5'>
                <input type='email' placeholder='Email' name='email' required
                    value= ''
                    className={formInputStyle}/>
              </div>


              <div className='mb-5'>
                <input type='password' placeholder='Password' name='password' required
                    value= ''
                    className={formInputStyle}/>
              </div>


              <div className='mb-5 flex items-center justify-between'>
                <label htmlFor='userRole' className='text-headingColor font-bold text-[16px] leading-7'>
                  Your Role:
                  <select name='userRole' id='userRole'
                          className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="" disabled>Choose an option</option>
                    <option value='patient'>Patient</option>
                    <option value='doctor'>Doctor</option>
                  </select>
                </label>


                <label htmlFor='gender' className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select name='gender' id='gender'
                          className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option value="" disabled>Choose an option</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3 '>
                <fingure className='w-[60px] h-[60px] rounded-full border-2 border-solid  border-primaryColor 
                                    flex items-center justify-center'>
                  <img src={avatar} alt='' className='w-full rounded-full'/>

                </fingure>

                <div className='relative w-[130px] h-[50px]'>
                  <input
                    type='file'
                    name='photo'
                    id='customerFile'
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10'
                  />
                  <label htmlFor='customFile' 
                          className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] 
                            leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate z-1
                            cursor-pointer'>

                    Upload Photo
                  </label>
                </div>

              </div>



            </form>



          </div>


        </div>
        
      </div>
      
    </section>
  )
}

export default Register