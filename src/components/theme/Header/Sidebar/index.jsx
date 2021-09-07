import React, { useContext } from 'react'
import { ThemeContext } from 'providers/ThemeProvider'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Sidebar = ({ sidebar, toggle, is404 }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<Wrapper active={sidebar} onClick={toggle} theme={theme}>
			<NavbarLinks is404={is404} />
		</Wrapper>
	)
}

export default Sidebar
