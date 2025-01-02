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
    <div className='space-y-7 md:space-y-10'>
      <div className='space-y-2 md:space-y-4'>
        <h1 className='custom-header-sm'>
          All reviews {doctorProfileData?.reviews ? `(${doctorProfileData?.reviews?.length})` : "0" }
        </h1>
        <div className='space-y-2 md:space-y-4'>
          {doctorProfileData?.reviews?.map((item, index) => (
          <div key={index} className='grid grid-cols-[50px_auto] md:grid-cols-[60px_auto] grid-rows-[auto auto auto] gap-2 
                        border-b-2 p-2'>
            <div className="col-start-1 row-start-1 ">
              <div className="aspect-square  overflow-hidden rounded-full">
                <img className="object-cover w-full " src={item?.reviewer?.photo ? item?.reviewer?.photo : avatar}/>
              </div>
            </div>
            <div className="col-start-2 row-start-1">
              <h1 className='text-[16px] leading-6 text-primaryColor font-bold'>{item?.reviewer?.name}</h1>

              <div className='flex items-center gap-1'>
                {[...Array(item?.rating).keys()].map((_, index) => (
                  <AiFillStar key={index} className="text-yellowColor"/>
                ))}
                <span className='text-[12px] text-headingColor'>{`(${item?.rating})`}</span>
              </div>                
              <p className='text-[12px] leading-6 text-headingColor'>{formateDate(item?.updatedAt)}</p>
            </div>
            <div className="col-span-2  md:col-start-2 md:row-start-2">
              <p className='custom-paragraph rounded-md py-1 px-2 md:py-2 md:px-4 text-textColor bg-gray-100'>
                {item?.reviewText}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>

      {!doctorViewMode && 
      <form onSubmit={handleSubmit(handleSubmitReview)}>
        <div className='space-y-6 md:space-y-8'>
            <div className='space-y-1 md:space-y-3'>
              <h1 className='custom-header-sm'>How would you rate the overall experience?</h1>
                {[...Array(5).keys()].map((_, index) => {
                    index += 1
                    return (
                        <button key={index} type="button"
                            className={`${index <= (hover || rating) ? 'text-yellowColor': 'text-gray-400'} 
                                bg-transparent border-none outline-none text-[18px] md:text-[22px] cursor-pointer`}
                            onClick={() => setValue("rating", index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(watch("rating"))}>
                            <span><AiFillStar/></span>
                        </button>
                    )
                })}
            </div>
            <div className='space-y-1 md:space-y-2'>
                <h1 className='text-headingColor text-[16px] leading-6 font-semibold'>
                    Share your review or suggestions
                </h1>
                <div>
                  <textarea rows={5} placeholder="Write a review" 
                      className='w-full px-2 py-1 md:px-2 md-py-3 text-sm md:text-base rounded-md bg-gray-100 border border-solid border-[#0066ff34] focus:otline outline-primaryColor'
                      {...register("reviewText", {required: "Review text cannot be empty "})}>
                  </textarea>
                  <p className={` text-red-600 ${errors.reviewText?.message ? "block" : "hidden"}`}>
                    {errors.reviewText?.message}.
                  </p>
                </div>
            </div>
            <div className='w-full flex items-center justify-start'>
              <button className='custom-button w-[200px]'>
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
