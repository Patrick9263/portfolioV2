import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Button } from 'components/common'
import programmer from 'assets/illustrations/programmer.jpg'
import resume from './Resume.pdf'

import {
	Wrapper, SkillsWrapper, Details, Thumbnail,
} from './styles'

export const Skills = () => {
	const { theme } = useContext(ThemeContext)

	const handleOpenPdf = (e) => {
		e.preventDefault()
		window.open(resume, '_blank', 'noreferrer')
	}

	return (
		<Wrapper id="about">
			<SkillsWrapper as={Container}>
				<Thumbnail>
					<img src={programmer} alt="programmer" />
					<a href="https://www.vecteezy.com/free-vector/code">Code Vectors by Vecteezy</a>
				</Thumbnail>
				<Details theme={theme}>
					<h1>About me</h1>
					<p>
						Software engineer at Travelers.
						<br />
						Currently working with React, GatsbyJs, and GraphQL.
					</p>

					<h2>Skills</h2>
					<ul>
						<li>React, JavaScript, HTML5, (S)CSS, REST APIs, Markdown, AsciiDocs</li>
						<li>Python, C/C++, C#, Java, MatLab</li>
						<li>PowerShell, Bash, MySQL, Git</li>
						<li>PC hardware</li>
					</ul>

					<h2>Interests</h2>
					<ul>
						<li>Interests</li>
						<li>Photography</li>
						<li>Videogames</li>
						<li>Travel</li>
					</ul>

					<br />

					<Button onClick={(e) => handleOpenPdf(e)}>
						Resume
					</Button>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	)
}
