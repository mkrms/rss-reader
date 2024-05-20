import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Search from '@/public/components/search/Search'

const Header = () => {
  return (
    <header className={styles['c-header']}>
      <Link href={`/`}>
        <h1>UNORSS</h1>
      </Link>

      <nav className={styles['c-header__nav']}>
        <ul className={styles['c-header__nav__list']}>
          <li className={styles['c-header__nav__list__item']}>
            <Link href={`/bookmark`}>
              ブックマーク
            </Link>
          </li>
          <li className={styles['c-header__nav__list__item']}>
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header