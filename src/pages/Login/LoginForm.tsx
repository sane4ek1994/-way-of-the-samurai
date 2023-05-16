import { Formik, Field, Form } from 'formik'

import styles from './loginForm.module.css'

export const LoginForm = (props: any) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        isRememberMe: false
      }}
      onSubmit={values => props.onSubmitLog(values)}
    >
      <Form className={styles.form}>
        <Field id='email' name='email' placeholder='Email' type='email' />
        <Field id='password' name='password' placeholder='write password' type='password' />

        <Field id='isRemember' name='isRememberMe' type='checkbox' />
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}
