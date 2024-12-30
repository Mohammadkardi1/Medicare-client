import {useState} from 'react'
import avatar from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formateDate';
import { AiFillStar } from "react-icons/ai";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { submitReview } from '../../redux/thunks/doctorThunks';
import { useSelector } from 'react-redux';
import { showToastFailure, showToastSuccess } from './../../utils/toastUtils';
import { useParams } from 'react-router-dom';
import LoadingModel from './../Loading/LoadingModel';
import { authThunks } from './../../redux/slices/authSlice';
import { PopUpModel } from '../Model/PopUpModel';




const Reveiw = ({doctorProfileData, doctorViewMode= false}) => {


  const dispatch = useDispatch()
  const {doctorID} = useParams()


  const { reviewLoading } = useSelector(state => state.doctor)
  const { loggedInUser } = useSelector(state => state.auth)
  const [isModelOpen, setIsModelOpen] = useState(false)

  
  
  const [hover, setHover] = useState(1)


  const {register, handleSubmit, formState: {errors}, reset, setValue, watch} = useForm({
    defaultValues: { rating: 1, reviewText: "" },

  })


  const rating = watch("rating", 1)
  

  const handleSubmitReview = async (reviewData) => {

    if (!JSON.parse(localStorage.getItem('profile'))?.data?._id ) {
      setIsModelOpen(true)
      return
    }

    try {
      const res = await dispatch(submitReview({doctorID, reviewData}))
      if (!res.error) {
        if (doctorID === loggedInUser._id) {
          dispatch(authThunks.syncLocalStorage())
        }
        reset()
        showToastSuccess("Your review has been submitted successfully!", { position: "top-right", autoClose: 3000 })
      } else {
        showToastFailure("System error! Your review wasn't submitted. Please try again.", { position: "top-right", autoClose: 3000 })
      }
    } catch (error) {
      console.log(error.message)
    }

  }



  return (
    <>
    <div>
      <div className='mb-[50px]'>

        <h1 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews {doctorProfileData?.reviews ? `(${doctorProfileData?.reviews?.length})` : "0" }
        </h1>
        <div className='space-y-4'>
          {doctorProfileData?.reviews?.map((item, index) => (
          <div key={index} className='grid grid-cols-[60px_auto] grid-rows-[auto auto auto] gap-2 border-b-2 p-2'>

            <div className="col-start-1 row-start-1 ">


              <div className="aspect-square  overflow-hidden rounded-full">
                <img className="object-cover w-full "
                      src={item?.reviewer?.photo ? item?.reviewer?.photo : avatar}/>
              </div>

                    
                                
            </div>

            <div className="col-start-2 row-start-1">
              <h1 className='text-[16px] leading-6 text-primaryColor font-bold'>
                {item?.reviewer?.name}
              </h1>

              <div className='flex items-center gap-1'>
                {[...Array(item?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} className="text-yellowColor"/>
                ))}
                <span className=' text-headingColor text-[12px]'>{`(${item?.rating})`}</span>
              </div>                

              <p className='text-[12px] leading-6 text-headingColor'>
                {formateDate(item?.updatedAt)}
              </p>
            </div>

            <div className="col-start-2 row-start-2">
              <p className='text__para mt-0 font-medium text-[16px] rounded-md py-2 px-4 bg-gray-100'>
                {item?.reviewText}
              </p>
            </div>
          </div>
          ))}
        </div>



      </div>

      {!doctorViewMode && 
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
                            className={`${index <= (hover || rating) ? 'text-yellowColor': 'text-gray-400'} 
                                bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                            onClick={() => setValue("rating", index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(watch("rating"))}
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
                <div>
                  <textarea rows={5} placeholder="Write a review" 
                      className='bg-gray-100 border border-solid border-[#0066ff34] focus:otline outline-primaryColor w-full px-4 py-3 rounded-md'
                      {...register("reviewText", {required: "Review text cannot be empty "})}>
                  </textarea>
                  <p className={` text-red-600 ${errors.reviewText?.message ? "visible" : "invisible"}`}>
                    {errors.reviewText?.message}.
                  </p>
                </div>
            </div>


            <div className='w-full flex items-center justify-start'>
              <button className='btn w-[200px] mt-5'>
                {reviewLoading ? <LoadingModel color='#FFFFFF'/> : "Submit Review"}
                  
              </button>
            </div>
            

        </div>
      </form>
      }
    </div>

    <PopUpModel
      isModelOpen={isModelOpen} 
      setIsModelOpen={setIsModelOpen} 
      message="To submit a review, please log in first."
      />
    </>
  )
}

export default Reveiw
