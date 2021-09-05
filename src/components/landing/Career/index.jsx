import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container } from 'components/common'
import career from 'assets/illustrations/career.jpg'

import {
	SkillsWrapper, Details, Thumbnail, Wrapper,
} from './styles'

export const Career = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper id="career" theme={theme}>
			<SkillsWrapper as={Container} theme={theme}>
				<Details theme={theme}>
					<h1>Career</h1>

					<h2>Travelers Insurance</h2>
					<h3>Associate Software Engineer</h3>
					<h4>React Developer</h4>
					<ul>
						<li>
							React Developer, GraphQL and GatsbyJs developer.
						</li>
						<li>
							Created a dynamic, content-enabled website that
							displays company-wide sustainability information.
						</li>
					</ul>
					<h4>JavaScript Developer</h4>
					<ul>
						<li>
							Ab Initio, Teradata/SQL, Jenkins/UCD, PowerShell.
						</li>
						<li>
							Used Ab Initio and Teradata as an ETL tool to consume and manipulate data used for
							analytics further down the data stream in order to make business decisions.
						</li>
						<li>
							Worked with Jenkins/UCD and PowerShell to automate SQL script deployment.
						</li>
					</ul>
					<h4>ETL Developer</h4>
					<ul>
						<li>
							React/JavaScript, C#, PowerShell.
						</li>
						<li>
							Worked on an application used by agents to quote and issue insurance policies
							made with a custom framework and React.
						</li>
						<li>
							Worked with C# for the backend.
						</li>
						<li>
							Used PowerShell to automate development tasks.
						</li>
					</ul>

					<h2>UConn Information Technology Services</h2>
					<h3>Support Specialist Lead</h3>
					<ul>
						<li>Re-imaged and set up computers, troubleshooted software/hardware-related problems
							for faculty members to maintain and improve faculty productivity.</li>
						<li>Created an Electron app to graphically run PowerShell scripts.
							This was used for automatically performing setup tasks
							for PCs with a fresh install of Windows.</li>
						<li>Hard drives were encrypted on these machines to protect important data.</li>
					</ul>

					<br />

				</Details>
				<Thumbnail>
					<div>
						<img src={career} alt="Career" />
						<a href='https://www.freepik.com/vectors/people'>By pch.vector</a>
					</div>
				</Thumbnail>
			</SkillsWrapper>
		</Wrapper>
	)
}
