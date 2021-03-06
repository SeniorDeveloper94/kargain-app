import React, { useContext, useEffect } from 'react'
import Link from 'next-translate/Link'
import { useForm } from 'react-hook-form'
import { Container, Col, Row } from 'reactstrap'
import nextCookies from 'next-cookies'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import EmailInput from '../../components/Form/Inputs/EmailInput'
import PasswordInput from '../../components/Form/Inputs/PasswordInput'
import { MessageContext } from '../../context/MessageContext'
import FieldWrapper from '../../components/Form/FieldWrapper'
import SSOProviders from '../../components/SSOProviders'
import CTAButton from '../../components/CTAButton'
import AuthService from '../../services/AuthService'
import { useAuth } from '../../context/AuthProvider'
import UserModel from '../../models/user.model'
import useSocket from '../../hooks/useSocket'
import makeStyles from '@material-ui/core/styles/makeStyles'
import clsx from 'clsx'
import customColors from '../../theme/palette'

const useStyles = makeStyles(()=>({

	button: {
		border: "none !important",
		padding: '6px 2rem',
		borderRadius: '20px',
		color: 'white',
		fontSize: '14px',
		fontWeight: 'bold',
		background: customColors.gradient.main
	},

}))

export default ({ forceLogout }) => {
	const router = useRouter()
	const { logout } = useAuth()
	const { t } = useTranslation()
	const { initializeAuth } = useAuth()
	useSocket()
	const classes = useStyles()
        
	const { redirect } = router.query
	const { dispatchModalError } = useContext(MessageContext)
	const { control, errors, handleSubmit } = useForm({
		mode: 'onChange',
		validateCriteriaMode: 'all'
	})

	useEffect(() => {
		if (forceLogout) logout()
	}, [])

	const onSubmit = async (form) => {
		const { email, password } = form
		try {
			const user = await AuthService.login({
				email,
				password
			})
			await initializeAuth()

			const User = new UserModel(user)

			if (redirect) {
				router.push(`/auth/callback?redirect=${redirect}`)
			} else {
				const isAdmin = User.getIsAdmin
				if (isAdmin) {
					router.push(`/auth/callback?redirect=/admin`)
				} else {
					router.push(`/auth/callback?redirect=/profile/${User.getUsername}`)
				}
			}
		}
		catch (err) {
			dispatchModalError({ err })
			if (redirect) router.push({ pathname: redirect })
		}
	}

	return (
		<Container>
			<h3 style={{textAlign:"center", fontSize:"24px", marginTop:'40px'}}>{t('vehicles:login')}</h3>
			<Row>
				<Col className="m-auto" sm="12" md="10">
					{/* <SSOProviders/> */}
					<form className="p-3 mx-auto"
						onSubmit={handleSubmit(onSubmit)}
						style={{
							borderRadius: '5px',
							maxWidth: '500px'
						}}
					>

						<FieldWrapper label="Email">
							<EmailInput
								name="email"
								inline
								errors={errors}
								control={control}
								rules={{ required: t('form_validations:required') }}
							/>
						</FieldWrapper>

						<FieldWrapper label={t('vehicles:password')}>
							<PasswordInput
								className = {clsx('txt', classes.text)}
								name="password"
								errors={errors}
								control={control}
								rules={{
									required: t('form_validations:required'),
									pattern: {
										value: /^(?=.*\d).{4,16}$/,
										message: t('form_validations:regexPwd{min}{max}', {
											min: 4, max: 16
										})
									}
								}}
							/>
						</FieldWrapper>

						<div className="text-right">
							<Link href="/auth/forgotten">
								<a className="" style={{fontSize: "14px"}}>{t('vehicles:password-forgotten')} </a>
							</Link>
						</div>

						<div className="submit">
							<CTAButton
								
								className={clsx('btn', classes.button)}
								title={t('vehicles:login')}
								submit
							/>
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	)
}

export async function getServerSideProps(ctx) {
	const cookies = nextCookies(ctx)
	return {
		props: {
			forceLogout: !!cookies.token
		}
	}
}
