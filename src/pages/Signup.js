import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useForm } from 'react-hook-form'
import { registerUser, loginUserWithGoogle } from 'services/auth-service'
import { useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'
import 'react-toastify/dist/ReactToastify.min.css'
import { IoLogoGoogle } from "react-icons/io5";

const override = css`
	display: block;
	margin: 0 auto;
`

const Singup = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { register, handleSubmit } = useForm()
	const location = useLocation()
	const history = useHistory()

	// sign user up
	const onSubmit = (data) => {
		setIsSubmitting(true)
		registerUser(data.email, data.password)
			.then((response) => {
				toast.success('Sign up successful!')
				setIsSubmitting(false)
				history.push(location?.state?.from?.pathname)
			})
			.catch((err) => {
				toast.error(err.message)
				setIsSubmitting(false)
			})
		// setIsSubmitting(true)
		// history.push('/login')
	}

	const handleLoginWithGoogle = () => {
		loginUserWithGoogle()
			.then(() => history.push('/'))
			.catch((err) => console.log(err.message))
	}
	return (
		<section className='signup'>
			<div className='container'>
				<section>
					<h2>Sign Up</h2>

					<div
						className='social-btns'
						onClick={() => handleLoginWithGoogle()}>
						<button>
							<IoLogoGoogle size={18} />
							signup with Google
						</button>
					</div>

					<h3>OR</h3>

					<form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
						<div>
							{/* <!-- <label for="email">Email</label> --> */}
							<input
								type='email'
								name='email'
								id='email'
								required
								placeholder='Enter your email address'
								{...register('email')}
							/>
						</div>

						{/* <!-- password --> */}
						<div>
							{/* <!-- <label for="name">Password</label> --> */}
							<input
								type='password'
								name='name'
								id='name'
								placeholder='Type to create a password'
								{...register('password')}
							/>
						</div>

						<div>
							<button type='submit' className='btn signup-btn'>
								{isSubmitting ? (
									<ClipLoader
										color='#ffffff'
										loading={isSubmitting}
										css={override}
										size={20}
									/>
								) : (
									<span>Register</span>
								)}
							</button>

							<p className='text'>
								Already with us? <Link to='/login'>Login</Link>
							</p>
						</div>
					</form>
				</section>
			</div>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
		</section>
	)
}

export default Singup
