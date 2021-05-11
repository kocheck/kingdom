import { HeadPost } from './HeadPost'
import styles from '../styles/Home.module.css'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <a className={styles.card} href={'/blog' + link}>
      <div>
        <HeadPost meta={meta} />
          <p>Read more →</p>
          </div>
      </a>
  )
}