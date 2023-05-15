import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import styles from './loginForm.module.css'

const SignupSchema = Yup.object().shape({
  login: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
})

export const LoginForm = () => {
  return (
    <Formik
      validationSchema={SignupSchema}
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
