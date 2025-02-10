import { List, Timeline as MantineTimeline, Text, Title, Stack, Anchor } from '@mantine/core'
import { Circle, CircleDashed } from 'tabler-icons-react'
import Layout from '../../components/Layout/Layout'

const Timeline = () => (
  <Layout>
    <Title order={1} mb={30}>
      Professional Experience
    </Title>
    <MantineTimeline active={1} color="violet">
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Software Engineer and Data Acquisition"
      >
          <Text>
            <Anchor href="https://theodorhealth.com/" target="_blank" weight={500} >
              <strong>Theodor Health GmbH</strong>
            </Anchor>
            &nbsp;| Hamburg, Germany.
          </Text>
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              Collaborated with hospitals to set up clinical trials, enabling data exchange and research.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Developing Label studio for data annotations.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Designing API for scalable backend.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Building android application for healthcare profession for data collection and future customers.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Designed dashboard for incoming data flow.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Designed ETL pipeline for training AI.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Developed Fraud detection for incoming data quality and cost cutting for company.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          09/2024 – Present
        </Text>
      </MantineTimeline.Item>

      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Software Developer"
      >
        <Text>
          <Anchor href="https://contra-infra.com/" target="_blank" weight={500} >
            <strong>Contra</strong>
          </Anchor>
          &nbsp;| Hamburg, Germany.
        </Text>
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              Created a GIS dataset for ML model from opensource database, design ETL to train AI.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Developed Semantic segmentations using ViT for areal image and deployed on local server.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Server Administrator for Nvidia DGX and used for training and Inference AI models.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Developing backend and APIs for future B2B Customers and Designed UI/UX and Developed frontend.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          08/2023 – 10/2024
        </Text>
      </MantineTimeline.Item>

      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Data Science and Data Engineering"
      >
        <Text>
          <Anchor href="https://kundligpt.com/" target="_blank" weight={500} >
            <strong>KundliGPT.com</strong>
          </Anchor>
        </Text>
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              Business analysis for product strategy and market positioning.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Data collection: Web scraping of Indian astrology data.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Data cleaning and post-processing for structured storage.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Pipeline development for data structuring and compatibility with LLMs (OpenAI).
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Data engineering: developed ETL pipeline, designed and optimized PostgreSQL database.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Data science: Fine-tuning LLMs using curated datasets.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              Deployment and web development for SaaS platform.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          04/2023 – Present
        </Text>
      </MantineTimeline.Item>
    </MantineTimeline>
    <Title order={1} mt={50} mb={30}>
      Education
    </Title>
    <Stack spacing="xl">
      <div>
        <Text weight={700} size="lg">M.Sc. in Physics (Astrophysics)</Text>
        <Text>Universität Hamburg | Hamburg, Germany</Text>
        <Text size="sm" color="dimmed" mt={4}>
          10/2019 – 2024
        </Text>
      </div>
      <div>
        <Text weight={700} size="lg">M.Sc. in Physics (Condensed Matter Physics)</Text>
        <Text>Sardar Patel University, Vallabh Vidyanagar | Gujarat, India</Text>
        <Text size="sm" color="dimmed" mt={4}>
          07/2015 – 05/2017
        </Text>
      </div>
    </Stack>
  </Layout>
)

export default Timeline