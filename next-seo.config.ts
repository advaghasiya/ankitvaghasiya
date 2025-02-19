import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  title: 'ankitvaghasiya.com',
  description: 'The portfolio website of Ankit Vaghasiya, a software developer.',
  openGraph: {
    url: 'https://www.ankitvaghasiya.com',
    title: 'ankitvaghasiya.com',
    description: 'The portfolio website of Ankit Vaghasiya, a software developer.',
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: 'https://www.ankitvaghasiya.com/thumbnail.png',
        width: 800,
        height: 600,
        alt: 'ankitvaghasiya.com thumbnail image',
        type: 'image/png',
      },
    ],
    siteName: 'ankitvaghasiya.com',
  },
  twitter: {
    handle: '@AnkitVaghasiy',
    site: '@AnkitVaghasiy',
    cardType: 'summary_large_image',
  },
}

export default SEO
