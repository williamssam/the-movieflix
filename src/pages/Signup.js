import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useForm } from 'react-hook-form'
import { registerUser, loginUserWithGoogle } from 'services/auth-service'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'
import 'react-toastify/dist/ReactToastify.min.css'
// import 'react-toastify/dist/ReactToastify.css'

const override = css`
	display: block;
	margin: 0 auto;
`

const Singup = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { register, handleSubmit } = useForm()
	const history = useHistory()

	// sign user up
	const onSubmit = (data) => {
		setIsSubmitting(true)
		registerUser(data.email, data.password)
			.then((response) => {
				console.log(response)
				toast.success('Sign up successful!')
				setIsSubmitting(false)
				history.push('/login')
			})
			.catch((err) => {
				console.log(err)
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
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
							</svg>
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
