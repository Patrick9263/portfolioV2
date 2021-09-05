import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Button } from 'components/common'
import monitor from 'assets/illustrations/monitor.png'
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
		<Wrapper id="about" theme={theme}>
			<SkillsWrapper as={Container}>
				<Thumbnail>
					<img src={monitor} alt="monitor" />
					<a href='https://www.cleanpng.com/png-computer-circulatory-system-6607/'>Image by Rhonda</a>
				</Thumbnail>
				<Details theme={theme}>
					<h2>Skills</h2>
					<ul>
						<li>React, JavaScript, GatsbyJs, HTML5/(S)CSS, REST APIs, Markdown, AsciiDocs</li>
						<li>NodeJS, Python, C#, Java, C/C++, MatLab</li>
						<li>PowerShell, Bash, SQL, Git/GitHub</li>
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
