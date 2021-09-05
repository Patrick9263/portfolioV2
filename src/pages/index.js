import React from 'react'
import { Layout, Seo } from 'components/common'
import {
	Intro, Projects, Skills, Education, Contact, Career,
} from 'components/landing'

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Career />
		<Skills />
		<Education />
		<Contact />
	</Layout>
)

export default Home
