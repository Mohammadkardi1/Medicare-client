import { useEffect } from "react"
import {  Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { verifyEmail } from './../redux/thunks/authThunks';
import successImg from "../assets/images/success.png"
import failure from "../assets/images/failure.png"
import LoadingModel from '../components/Loading/LoadingModel';
import { showToastSuccess } from './../utils/toastUtils';



const VerifyEmail = () => {
	const param = useParams()
	const dispatch = useDispatch()

    const {isVerified, authError, authLoading} = useSelector(state => state.auth)


	useEffect(() => {
		const verifyEmailAsync = async () => {
			try {
				const res = await dispatch(verifyEmail({ role: param.role, id: param.id, token: param.token }));
				if (!res.error) {
					showToastSuccess("You have registered successfully!", { position: "top-right", autoClose: 3000 });
				}
			} catch (error) {
				console.log(error);
			}
		}
	
		verifyEmailAsync()
	}, [])


	if (authLoading) {
		return (
		<div className="flex justify-center items-center">
			<LoadingModel styles='h-[250px] w-[250px]'/>
		</div>
		)
	}

	return (
		<div className='h-[40vh] flex flex-col justify-center items-center
		
		
		gap-2 md:gap-4 mt-4 md:mt-10 text-textColor font-semibold'>
			{isVerified === true &&
				<>
					<img src={successImg} alt="success_img" className='w-[150px] lg:w-[250px]' />
					<h1 className="font-light text-[0.9rem] md:text-[1.1rem] text-neutral-500">
						Email verified successfully! Please Log in.
						<Link to='/login' className=' text-primaryColor ml-2 underline'>
							Login
						</Link>
					</h1>
				</>}
				{isVerified === false &&
					<>
						<img src={failure} alt="failure_img" className='w-[150px] lg:w-[250px]' />
						<h1 className=" font-semibold text-[0.9rem] md:text-[1.1rem] text-neutral-500 mt-2">
							{authError}
						</h1>
					</>
				}
		</div>
	)
}

export default VerifyEmail