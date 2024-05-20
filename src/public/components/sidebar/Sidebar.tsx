import React from 'react'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles['c-sidebar']}>
      <ul className={styles['c-sidebar__card']}>
        <p className={styles['c-sidebar__card--title']}>配信元別</p>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
      </ul>
      <ul className={styles['c-sidebar__card']}>
        <p className={styles['c-sidebar__card--title']}>カテゴリ別</p>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
      </ul>
      <ul className={styles['c-sidebar__card']}>
        <p className={styles['c-sidebar__card--title']}>月別</p>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
        <li className={styles['c-sidebar__card__item']}>
          <a href="/">リンク</a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar