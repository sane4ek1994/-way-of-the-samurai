import styles from './post.module.css'

export type TPost = {
  text: string
  src: string
}

export const Post = (props: TPost) => {
  const { text, src } = props

  return (
    <div className={styles.post__item}>
      <img className={styles.post__avatar} src={src} alt='avatar' />
      <p className={styles.post__text}>{text}</p>
    </div>
  )
}
