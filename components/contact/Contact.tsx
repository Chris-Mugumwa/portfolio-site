import { useRef } from 'react'
import { LogoLarge } from '../icons/index'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
	const form = useRef<any>()
	const sendMail = () => {
		const sendEmail = (event: any) => {
			event.preventDefault()

			emailjs
				.sendForm(
					'gmail',
					'template_jc55xxc',
					form.current,
					'stBOcJ1cyUbkjWW0E',
				)
				.then(
					result => {
						toast.success(result.text)
					},
					error => {
						toast.error(error.text)
					},
				)
		}
	}

	return (
		<div className='contact' id='contact'>
			<Toaster position='top-right' reverseOrder={true} />
			<div className='contact__container'>
				<LogoLarge />
			</div>

			<div className='contact__wrapper'>
				<h2 className='contact__heading'>
					Thanks for taking the time to reach out.
				</h2>
				<form
					className='contact__form'
					autoComplete='off'
					ref={form}
					onSubmit={sendMail}>
					<div className='contact__form--container'>
						<div className='contact__text'>
							<label className='contact__text--label' htmlFor='name'>
								Name
							</label>
							<input
								className='contact__text--input'
								type='text'
								name='name'
								id='name'
								autoComplete='false'
							/>
						</div>

						<div className='contact__text'>
							<label className='contact__text--label' htmlFor='email'>
								Email
							</label>
							<input
								className='contact__text--input'
								type='email'
								name='email'
								id='email'
								autoComplete='false'
							/>
						</div>
					</div>

					<div className='contact__textbox'>
						<label className='contact__text--label' htmlFor='message'>
							Message
						</label>
						<textarea
							className='contact__text--input'
							name='message'
							rows={4}
							id='message'></textarea>
					</div>

					<input className='contact__button' type='submit'>
						Submit
					</input>
				</form>
			</div>
		</div>
	)
}

export default Contact
