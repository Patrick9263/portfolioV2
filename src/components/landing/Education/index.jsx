import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container } from 'components/common'
// import dev from 'assets/illustrations/skills.svg'
import dev from 'assets/illustrations/skills.svg'

import {
	SkillsWrapper, Details, Thumbnail,
} from './styles'

export const Education = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<SkillsWrapper as={Container}>
			<Details theme={theme}>
				<h1>Education</h1>
				<h3>
					University of Connecticut
				</h3>
				<ul>
					<li>Bachelor of Science in Engineering</li>
					<li>Major in Computer Science and Engineering</li>
					<li>Concentration in Software Design and Development</li>
					<li>Minor in Mathematics</li>
				</ul>

				<br />

			</Details>
			<Thumbnail>
				<img src={dev} alt="I’m Patrick and I’m a software engineer!" />
				{/* <img src={dev} alt="UConn" /> */}
				{/* <img src={dev} alt="I’m Patrick and I’m a software engineer!" /> */}
			</Thumbnail>
		</SkillsWrapper>
	)
}
