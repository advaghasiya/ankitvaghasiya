import {
  Github,
  Gmail,
  Linkedin,
  Medium,
  Twitter,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import Layout from '../../components/Layout/Layout'

const GitHubCalendar = dynamic(() => import('react-github-calendar'))
const NowPlaying = dynamic(
  () => import('../../components/NowPlaying/NowPlaying')
)

const About = () => {
  const { colorScheme } = useMantineColorScheme()
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000'

  const socialMediaIcons: { component: ReactNode; url: string }[] = [
    {
      component: <Github color={iconColor} size={32} />,
      url: 'https://www.github.com/advaghasiya',
    },
    {
      component: <Linkedin color={iconColor} size={32} />,
      url: 'https://www.linkedin.com/in/ankit-vaghasiya',
    },
    {
      component: <Twitter color={iconColor} size={32} />,
      url: 'https://twitter.com/AnkitVaghasiy',
    },
    {
      component: <Gmail color={iconColor} size={32} />,
      url: 'mailto:ankit.d.vaghasiya@gmail.com',
    },
  ]

  return (
    <Layout>
      <Box>
        <Title order={1} mb={30}>
          About
        </Title>
        <Text weight={500} mt={8}>
          <strong>Ankit Vaghasiya</strong>.
        </Text>
        <Text weight={500} mt={20}>
        I am a passionate software developer and data engineer with a strong academic background in Physics and Astrophysics. My journey into the world of technology began with a curiosity for solving complex problems, which has since evolved into a career focused on building innovative software solutions and leveraging data to drive impactful results.
        With expertise in Python, Go, React.js, and cloud technologies, I have developed scalable backend systems, intuitive frontend applications, and machine learning models for diverse industries, including healthcare and geospatial analytics. My experience spans the entire development lifecycle—from conceptualization and design to deployment and optimization.
        At Theodor Health GmbH, I led the development of a custom data annotation platform and built an Android application for healthcare professionals, ensuring seamless data exchange and high-quality medical research. At Contra, I designed semantic segmentation algorithms for aerial images and managed high-performance computing clusters, delivering scalable and reliable solutions.
        What drives me is the challenge of solving real-world problems through technology. I thrive in collaborative environments where I can contribute my technical skills, strategic thinking, and adaptability to deliver solutions that make a difference.
      
        </Text>
        <Text weight={500} my={20}>
          Currently, I&apos;m working as a Software Enginner at 
          <Anchor
            href="https://theodorhealth.com/"
            target="_blank"
            variant="link"
            weight={500}
            underline
          >
            <strong> &nbsp;Theodor Health GmbH</strong>
          </Anchor>
          .
        </Text>
        <Text weight={500} mt={20}>
        When I’m not coding, you’ll find me exploring Hamburg as a city guide, cycling, or playing table tennis. I’m always eager to take on new challenges and learn new technologies to push the boundaries of what’s possible.
        Let’s connect and build something amazing together!.
        </Text>
        {/* <Text weight={500} mt={20}>
          Find out more about me&nbsp;
          <Anchor
            variant="link"
            href="https://read.cv/aycanogut"
            target="_blank"
            weight={500}
            underline
          >
            <strong>by visiting this page</strong>.
          </Anchor>
        </Text> */}
      </Box>
      <Box>
        <Title order={2} mt={50} mb={30}>
          Contact Me
        </Title>
        <Group>
          {socialMediaIcons.map(
            (icon: { component: ReactNode; url: string }) => (
              <Anchor key={icon.url} href={icon.url} target="_blank">
                {icon.component}
              </Anchor>
            )
          )}
        </Group>
      </Box>
      <Box>
        <Title order={3} mt={50} mb={30}>
          My Github Stats
        </Title>
        <GitHubCalendar
          username="advaghasiya"
          year="last"
          style={{ maxWidth: '960px' }}
        />
      </Box>
    </Layout>
  )
}

export default About
