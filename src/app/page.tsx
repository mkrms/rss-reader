import { client, getList } from '@/libs/client'
import styles from './FrontPage.module.scss'
import Parser from 'rss-parser'

import ArticleCard from '@/public/components/card/ArticleCard'

const FrontPage = async () => {
  const { contents } = await getList();
  const parse = new Parser();

  return (
    <div className='p-front-page'>
      <ul className={styles['p-front-page__list']}>
        {contents.map(async (rss) => {
          const feed = await parse.parseURL(rss.url)
          return feed.items.map((item) => {
            return (
              <ArticleCard
                date={item.pubDate ?? item.date}
                link={item.link}
                title={item.title}
                site_title={rss.title}
              />
            )
          })
        })}
      </ul>
    </div>
  )
}

export default FrontPage