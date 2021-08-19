import React from 'react'
import { Layout, Seo } from 'components/common'
import {
	Intro, Projects, Skills, Education, Contact,
} from 'components/landing'

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Skills />
		<Education />
		<Contact />
	</Layout>
)

export default Home
