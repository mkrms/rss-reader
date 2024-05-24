import Link from 'next/link'
import React from 'react'
import dayjs from 'dayjs';
import styles from './ArticleCard.module.scss';

type Props = {
  date: string | undefined
  link: string | undefined
  title: string | undefined
  thumbnail: string | undefined
  site_title: string
}

function getOrder(millis: number, asc = false) {
  return (asc ? 1 : -1) * Math.floor(millis / 1000); // order は昇順なので、降順に見せたい場合は -1 を掛ける
}

const ArticleCard = (props: Props) => {
  return (
    <li style={{ order: getOrder(dayjs(props.date).valueOf()) }} className={styles['c-article-card']}>
      <Link href={`${props.link}`}>
        <img src={`${props.thumbnail}`} alt="" className={styles['c-article-card--img']} />
        <time className={styles['c-article-card--time']}>{dayjs(props.date).format('YYYY-MM-DD')}</time>
        <h2 className={styles['c-article-card--title']}>{props.title}</h2>
        <span className={styles['c-article-card--site-title']}>{props.site_title}</span>
      </Link>
    </li>
  )
}

export default ArticleCard