import {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from "react-icons/ai";


const Feedback = ({doctorInfo, patientViewMode}) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')

  

  const handleSubmitReview = async e => {
      e.preventDefault()

      // Later I will have to use API
  }


  return (
    <div>
      <div className='mb-[50px]'>

        <h1 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews ({doctorInfo?.totalRating})
        </h1>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className=''>

            <div className='flex items-center gap-4'>
              <figure className='w-10 h-10 rounded-full'>
                <img src={avatar} alt='avatar-icon' className='w-full'/>
              </figure>

              <div>
                <h1 className='text-[16px] leading-6 text-primaryColor font-bold'>
                  Ali Ahmad
                </h1>

                <p className='text-[14px] leading-6 text-textColor'>
                  {formateDate('02-14-2023')}
                </p>
              </div>
            </div>

            <div>
              <p className='text__para mt-3 font-medium text-[15px]'>
                Good services, highly recommended
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(3).keys()].map((_, index) => (
              <AiFillStar key={index} className="text-yellowColor"/>
            ))}
          </div>

        </div>
      </div>



      {patientViewMode && 
      <form action='#'>
        <div>
            <h1 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
                How would you rate the overall experience?
            </h1>

            <div>
                {[...Array(5).keys()].map((_, index) => {
                    index += 1
                    return (
                        <button key={index} type="button"
                            className={`${
                                index <= ((rating & hover) || hover)
                                ? 'text-yellowColor'
                                : 'text-gray-400'
                            } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            onDoubleClick={() => {
                                setHover(0)
                                setRating(0)
                            }}
                            >
                            <span>
                                <AiFillStar />
                            </span>
                        </button>
                    )
                })}
            </div>

            <div className='mt-[30px]'>
                <h1 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                    Share your review or suggestions
                </h1>

                <textarea id='review' name='review' rows={5} placeholder="Write a review"
                    className='border border-solid border-[#0066ff34] focus:otline outline-primaryColor w-full px-4 py-3 rounded-md'
                    onChange={e => setReviewText(e.target.value)}>
                </textarea>
            </div>

            <button type='submit' onClick={handleSubmitReview} className='btn'>
                Submit Review
            </button>

        </div>
      </form>
       }


    </div>
  )
}

export default Feedback
