import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import {
	Wrapper, SkillsWrapper, Details, Thumbnail,
} from './styles'

export const Skills = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper id="about">
			<SkillsWrapper as={Container}>
				<Thumbnail>
					<img src={dev} alt="I’m Patrick and I’m a software engineer!" />
				</Thumbnail>
				<Details theme={theme}>
					<h1>About me</h1>
					<p>
						Software engineer at Travelers.
						<br />
						Currently working with React, GatsbyJs, and GraphQL.
					</p>
					<Button as={AnchorLink} href="#contact">
						Contact me
					</Button>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	)
}
