import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { ThemeContext } from 'providers/ThemeProvider'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
	Wrapper, Details, ContentWrapper,
} from './styles'

export const InvalidPage = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper theme={theme}>
			<Header is404 />
			<ContentWrapper as={Container}>
				<Details theme={theme}>
					<h1>404 - NOT FOUND</h1>
					<h4>You just hit a route that doesn&#39;t exist... :(</h4>
					<Button as={Link} to="/">
						Home Page
					</Button>
				</Details>
			</ContentWrapper>
		</Wrapper>
	)
}
