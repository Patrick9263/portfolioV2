import React from 'react'
import { Layout, Seo } from 'components/common'
import { InvalidPage } from '../components/404'

const NotFound = () => (
	<Layout>
		<Seo title="404: Not found" location="/404" />
		<InvalidPage />
	</Layout>
)

export default NotFound
