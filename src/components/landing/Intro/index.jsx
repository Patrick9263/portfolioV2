import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import webDev from 'assets/illustrations/web-dev.png'

import {
	Wrapper, IntroWrapper, Details, Thumbnail,
} from './styles'

export const Intro = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper theme={theme}>
			<Header />
			<IntroWrapper as={Container}>
				<Details theme={theme}>
					<h1>Hi there!</h1>
					<h4>I’m Patrick and I’m a React developer.</h4>
					<Button as={AnchorLink} href="#contact">
						Contact me
					</Button>
				</Details>
				<Thumbnail>
					<img src={webDev} alt="education" />
					<a href='https://www.cleanpng.com/png-html-responsive-web-design-web-development-softwar-106098/'>Image by Jenuziya</a>
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	)
}
