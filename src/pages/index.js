import Layout from '@theme/Layout'

import styles from './index.module.css'

import HeroImg from '../../static/img/Hero.jpg'

function MyHero() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          From Zero to Hero, <br /> with Code in between.
        </h1>
        <p className={styles.leftContainer_p}>
          破解未知，探索无限
          <br />
          我在这里记录知识，希望同样能够帮助到你。
        </p>
      </div>
      <div className={styles.rightContainer}>
        <img src={HeroImg} alt="HeroImg" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout
      // title={`${siteConfig.title}`}
      title="Home"
      description="Wiki知识库/vscode/javascript/软件/工具"
    >
      <main>
        <MyHero />
      </main>
    </Layout>
  )
}
