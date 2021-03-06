import React, { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ThemeContext } from 'providers/ThemeProvider'
import ToggleTheme from 'components/theme/Header/ToggleTheme'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop, is404 }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper desktop={desktop} theme={theme}>
			{!is404 ? (
				<>
					<AnchorLink href="#projects">Projects</AnchorLink>
					<AnchorLink href="#career">Career</AnchorLink>
					<AnchorLink href="#skills">Skills</AnchorLink>
					<AnchorLink href="#education">Education</AnchorLink>
					<AnchorLink href="#contact">Contact</AnchorLink>
				</>
			) : null}
			<ToggleTheme />
		</Wrapper>
	)
}

export default NavbarLinks
