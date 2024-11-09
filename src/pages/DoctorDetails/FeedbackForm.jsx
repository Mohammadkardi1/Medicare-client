import React, {useState} from 'react'
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState(0)



  return (
    <form action=''>
        <div>
            <h1 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
                How would you rate the overall experience?
                How would you rthr
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
                    Share your feedback or suggestions
                </h1>

                <textarea 
                    className='border border-solid border-[#0066ff34] focus:otline outline-primaryColor w-full px-4 py-3 rounded-md'
                    rows={5} placeholder="Write a review">

                </textarea>
            </div>

            <button type='submit' className='btn'>
                Submit Feedback
            </button>

        </div>
    </form>
  )
}

export default FeedbackForm
