import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import { Container } from 'components/common'
// import dev from 'assets/illustrations/skills.svg'
import dev from 'assets/illustrations/skills.svg'

import {
	SkillsWrapper, Details, Thumbnail, Wrapper,
} from './styles'

export const Education = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper id="education" theme={theme}>
			<SkillsWrapper as={Container} theme={theme}>
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

					<h3>Senior Design Project</h3>
					<ul>
						<li>
							Developed a web-based application which allows pathologists easy access to
							Copy Number Variation (CNV) calling using Whole Genome Sequencing (WGS)
							data to improve research.
						</li>
						<li>
							Application cross referenced any CNVs found with reputable clinical databases to
							identify CNVs widely known to be associated with disease.
						</li>
						<li>Built a clinically relevant copy number variation database.</li>
						<li>
							Displayed copy number variations and clinical annotations to
							pathologists with a user-friendly GUI.
						</li>
					</ul>

					<br />

				</Details>
				<Thumbnail>
					<img src={dev} alt="I’m Patrick and I’m a software engineer!" />
				</Thumbnail>
			</SkillsWrapper>
		</Wrapper>
	)
}
