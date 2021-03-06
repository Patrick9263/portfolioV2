import React, { useContext } from 'react'
import { Container } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { ThemeContext } from 'providers/ThemeProvider'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper as={Container} id="contact">
			<Details theme={theme}>
				<h1>Contact</h1>
				<ContactForm />
			</Details>
			<Thumbnail>
				<img src={contact} alt="I’m Patrick and I’m a software engineer!" />
			</Thumbnail>
		</Wrapper>
	)
}
