import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Patrick Smith</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer" target="_blank">
            Gatsby
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
