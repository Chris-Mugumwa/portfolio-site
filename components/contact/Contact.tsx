import { LogoLarge } from '../icons/index'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

type FormTypes = {
	name: string
	email: string
	message: string
}

const schema = yup.object().shape({
	name: yup
		.string()
		.min(2, 'Name too short')
		.max(30, 'Name too long')
		.required('Required'),
	email: yup.string().required('Required').email(),
	message: yup.string().required('Required').min(4, 'Mesage too short'),
})

const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormTypes>({
		resolver: yupResolver(schema),
	})

	const sendEmail = (formData: FormTypes) => {
		emailjs
			.send(
				'service_rv0veow',
				'template_jc55xxc',
				formData,
				'stBOcJ1cyUbkjWW0E',
			)
			.then(
				() => {
					toast.success('Thank you for reaching out to me.')
				},
				error => {
					toast.error(error.text)
				},
			)
		reset()
	}

	if (errors.name) {
		toast.error(`${errors.name?.message}`)
	}

	if (errors.email) {
		toast.error(`${errors.email?.message}`)
	}

	if (errors.message) {
		toast.error(`${errors.message?.message}`)
	}

	return (
		<div className='contact' id='contact'>
			<Toaster position='top-right' reverseOrder={true} />
			<div className='contact__container'>
				<LogoLarge />
			</div>

			<div className='contact__wrapper'>
				<h2 className='contact__heading'>Thanks for reaching out.</h2>
				<form
					className='contact__form'
					autoComplete='off'
					onSubmit={handleSubmit(sendEmail)}>
					<div className='contact__form--container'>
						<div className='contact__text'>
							<label className='contact__text--label' htmlFor='name'>
								Name
							</label>
							<input
								className='contact__text--input'
								type='text'
								{...register('name')}
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
								{...register('email')}
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
							rows={4}
							id='message'
							{...register('message')}
						/>
					</div>

					<button className='contact__button'> Submit </button>
				</form>
			</div>
		</div>
	)
}

export default Contact
