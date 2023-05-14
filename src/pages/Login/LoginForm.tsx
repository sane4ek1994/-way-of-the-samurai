import { Formik, Field, Form } from 'formik'

import styles from './loginForm.module.css'

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        isRememberMe: false
      }}
      onSubmit={values => console.log(values)}
    >
      <Form className={styles.form}>
        <Field id='login' name='login' placeholder='Login' type='text' />
        <Field id='password' name='password' placeholder='write password' type='password' />

        <Field id='isRemember' name='isRememberMe' type='checkbox' />
        <button type='submit'>Login</button>
      </Form>
    </Formik>
  )
}
