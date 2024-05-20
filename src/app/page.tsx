import styles from './FrontPage.module.scss'
import { client } from '@/libs/client'

type RSS = {
  title: string
}

export default async function Home() {
  const data = await client.get({
    endpoint: 'rss',
  })

  return (
    <main className={styles['p-front-page']}>
      <ul className={styles['p-front-page__list']}>
        {data.contents.map((rss: RSS) => {
          return (
            <div className={styles['p-front-page__list__item']}>
              <h2 className={styles['p-front-page__list__item--title']}>
                {rss.title}
              </h2>
            </div>
          )
        })}
      </ul>
    </main>
  )
}