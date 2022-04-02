import '../styles/login.css'
import { css } from '@emotion/react'
import { useAuth } from 'hooks/useAuth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory, useLocation } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { loginUser, loginUserWithGoogle } from 'services/auth-service'
import { IoLogoGoogle } from "react-icons/io5";

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
							<IoLogoGoogle size={18} />
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
