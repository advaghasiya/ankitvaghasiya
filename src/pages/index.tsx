import {
  Amazonaws,
  CssThree,
  Docker,
  Git,
  Go,
  Html5,
  Javascript,
  Kotlin,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Python,
  ReactJs,
  Tailwindcss,
  Typescript,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import Layout from '../components/Layout/Layout'
import Loader from '../components/Loader/Loader'
import useWidth from '../hooks/useWidth'

const techStack = [
  { name: 'Python', icon: Python, color: '#4b8bbe', link: 'https://www.python.org' },
  { name: 'JavaScript', icon: Javascript, color: '#F7DF1E', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: Typescript, color: '#3178C6', link: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: ReactJs, color: '#61DAFB', link: 'https://reactjs.org/' },
  { name: 'Next.js', icon: Nextdotjs, color: '#000000', link: 'https://nextjs.org/' },
  { name: 'Go', icon: Go, color: '#00ADD8', link: 'https://go.dev/' },
  { name: 'Kotlin', icon: Kotlin, color: '#7F52FF', link: 'https://kotlinlang.org/' },
  { name: 'HTML5', icon: Html5, color: '#E34F26', link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5' },
  { name: 'CSS3', icon: CssThree, color: '#1572B6', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'AWS', icon: Amazonaws, color: '#232F3E', link: 'https://aws.amazon.com/' },
  { name: 'Tailwind CSS', icon: Tailwindcss, color: '#06B6D4', link: 'https://tailwindcss.com/' },
  { name: 'Node js', icon: Nodedotjs, color: '#5FA04E', link: 'https://nodejs.org/' },
  { name: 'git', icon: Git, color: '#F05032', link: 'https://git-scm.com/' },
  { name: 'docker', icon: Docker, color: '#2496ED', link: 'http://docker.com/' },
  { name: 'PostgreSQL', icon: Postgresql, color: '#4169E1', link: 'https://www.postgresql.org/' },
]

const HomePage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => setLoading(false), 250)
  }, [])

  if (loading) return <Loader />

  return (
    <Layout>
      <Title order={1} mb={30}>
        Hello 🤙

      </Title>
      <Box>
        <Group direction="column" spacing={2}>
          <Text>I&apos;m a Fullstack Developer based in Hamburg, Germany.</Text>
          <Text mt={10}>
            I love to build things with AI.
          </Text>
          <Text mt={10}>
            Find out&nbsp;
            <Link href="/about" passHref prefetch={false}>
              <Anchor component="span" weight={500} underline>
                <strong>more</strong>.
              </Anchor>
            </Link>
          </Text>
        </Group>

        <Group direction="column" mt={60}>
        <Title order={2}>Tech Stack</Title>
        <Paper py="lg" sx={{ background: 'rgba(0,0,0, 0.03)' }}>
          <SimpleGrid cols={9} spacing="lg">
            {techStack.map(({ name, icon: Icon, color, link }) => (
              <Anchor
                key={name}
                href={link}
                target="_blank"
                style={{ 
                  textAlign: 'center',
                  transition: 'transform 0.2s ease-in-out',
                }}
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Icon color={color} size={60} />
                <Text mt={5} weight={500}>{name}</Text>
              </Anchor>
            ))}
          </SimpleGrid>
        </Paper>
      </Group>
      </Box>
    </Layout>
  )
}

export default HomePage
