import { client } from '@/libs/client'

type RSS = {
  title: string
}

export default async function Home() {
  const data = await client.get({
    endpoint: 'rss',
  })

  return (
    <main>
      <ul>
        {data.contents.map((rss: RSS) => {
          return (
            rss.title
          )
        })}
      </ul>
    </main>
  )
}