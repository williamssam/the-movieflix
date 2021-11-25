import { Link } from 'react-router-dom'
import '../styles/login.css'
import { useForm } from 'react-hook-form'
import { loginUser, loginUserWithGoogle } from 'services/auth-service'
import { useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useAuth } from 'hooks/useAuth'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
	display: block;
	margin: 0 auto;
`

const Login = () => {
	const { currentUser } = useAuth()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const { register, handleSubmit } = useForm()
	const history = useHistory()
	const location = useLocation()

	// log user in
	const onSubmit = (data) => {
		setIsSubmitting(true)
		loginUser(data.email, data.password)
			.then((response) => {
				toast.success('Login successful! 🚀')
				setIsSubmitting(false)

				// send user to the previous page before login
				history.push(location?.state?.from?.pathname)
			})
			.catch((err) => {
				toast.error(err.message)
				setIsSubmitting(false)
			})
	}

	const handleLoginWithGoogle = () => {
		loginUserWithGoogle()
			.then(() => history.push(location?.state?.from?.pathname))
			.catch((err) => console.log(err.message))
	}

	return (
		<section className='signup'>
			<div className='container'>
				<section>
					<h2>Login</h2>

					<div className='social-btns'>
						<button onClick={() => handleLoginWithGoogle()}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
							</svg>
							Login with Google
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
									<span>Login</span>
								)}
							</button>

							<p className='text'>
								Not yet with us? Then, <Link to='/signup'>Join us</Link>
							</p>
						</div>
					</form>

					{`The current User is: ${currentUser?.email}`}
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

export default Login
