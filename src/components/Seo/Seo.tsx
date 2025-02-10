import { NextSeo } from 'next-seo'
import { NextRouter, useRouter } from 'next/router'
import React, { FC } from 'react'

const Seo: FC = () => {
  const router: NextRouter = useRouter()

  const canonicalUrl = `https://ankitvaghasiya.com${
    router.asPath === '/' ? '' : router.asPath
  }`.split('?')[0]

  const pathname = router.asPath
  const title = pathname === '/' ? 'home' : pathname.substring(1)
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <NextSeo
      title="ankitvaghasiya.com"
      titleTemplate={`${capitalizedTitle} | %s`}
      description="The portfolio website of Ankit Vaghasiya, a software developer."
      openGraph={{
        url: 'https://www.ankitvaghasiya.com',
        title: 'ankitvaghasiya.com',
        description:
          'The portfolio website of Ankit Vaghasiya, a software developer.',
        type: 'website',
        locale: 'en_IE',
        images: [
          {
            url: 'https://user-images.githubusercontent.com/74212439/199986276-7c72cb14-1e54-4dc0-a355-a1f6ad7b9d18.png',
            width: 800,
            height: 600,
            alt: 'ankitvaghasiya.com thumbnail image',
            type: 'image/png',
          },
        ],
        siteName: 'ankitvaghasiya.com',
      }}
      twitter={{
        handle: '@bleedeleventh',
        site: '@bleedeleventh',
        cardType: 'summary_large_image',
      }}
      canonical={canonicalUrl}
    />
  )
}

export default Seo
