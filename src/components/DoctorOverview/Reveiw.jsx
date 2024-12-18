import {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from "react-icons/ai";
import { useForm } from 'react-hook-form';





const reviews = [
  {
    patient: "Ali Ahmad",
    reviewText: "Very nice doctor",
    rating: 4,
    patientPhoto: avatar,
    timestamps: '02-12-2023'
  },
  {
    patient: "Ibrahiem Omar",
    reviewText: "Thank you for alls",
    rating: 2,
    patientPhoto: avatar,
    timestamps: '11-09-2013'
  }
]




const Reveiw = ({doctorProfileData}) => {


  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)


  const {register, handleSubmit, formState: {errors}, reset, watch} = useForm()


  

  const handleSubmitReview = async e => {
      e.preventDefault()

      // Later I will have to use API
  }


  return (
    <div>
      <div className='mb-[50px]'>

        <h1 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews {doctorProfileData?.totalRating ? `(${doctorProfileData?.totalRating})` : "" }
        </h1>

        <div className='space-y-4'>
          {reviews.map((item, index) => (
          <div key={index} className='grid grid-cols-[60px_auto] grid-rows-2 gap-2'>

            <div className="col-start-1 row-start-1 ">
              <div className="flex items-center justify-center aspect-square w-full overflow-hidden rounded-full">
                <img className="object-cover w-[45px]"
                      src={item?.patientPhoto ? item?.patientPhoto : avatar}/>
              </div>

                    
                                
            </div>

            <div className="col-start-2 row-start-1">
              <h1 className='text-[16px] leading-6 text-primaryColor font-bold'>
                {item?.patient}
              </h1>

              <div className='flex gap-1'>
                {[...Array(item?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} className="text-yellowColor"/>
                ))}
              </div>                

              <p className='text-[12px] leading-6 text-textColor'>
                {formateDate(item?.timestamps)}
              </p>
            </div>

            <div className="col-start-2 row-start-2">
              <p className='text__para mt-0 font-medium text-[16px] '>
                {item?.reviewText}
              </p>
            </div>
          </div>
          ))}
        </div>



      </div>


      <form onSubmit={handleSubmit(handleSubmitReview)}>
        <div>
            <h1 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
                How would you rate the overall experience?
            </h1>

            <div>
                {[...Array(5).keys()].map((_, index) => {
                    index += 1
                    return (
                        <button key={index} type="button"
                            className={`${index <= ((rating & hover) || hover) ? 'text-yellowColor': 'text-gray-400'} 
                                bg-transparent border-none outline-none text-[22px] cursor-pointer`}
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

                <textarea rows={5} placeholder="Write a review" 
                    className='border border-solid border-[#0066ff34] focus:otline outline-primaryColor w-full px-4 py-3 rounded-md'
                    {...register("reviewText", {required: "Review text cannot be empty."})}>
                </textarea>
            </div>
            
            
            <button type='submit' onClick={handleSubmitReview} className='btn'>
                Submit Review
            </button>
            

        </div>
      </form>
    </div>
  )
}

export default Reveiw
