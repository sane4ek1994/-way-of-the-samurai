import { Field, Form, Formik } from 'formik'

import styles from './post.module.css'

export const PostForm = (props: any) => {
  return (
    <Formik
      initialValues={{
        postText: ''
      }}
      onSubmit={props.onAddPosts}
    >
      <Form>
        <Field name='postText' id='postText' placeholder='Write a new post...' className={styles.post__input} />
        <button type='submit'>Add post</button>
      </Form>
    </Formik>
  )
}
