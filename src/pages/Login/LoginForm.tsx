import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import styles from './loginForm.module.css'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(3, 'Too Short!').max(70, 'Too Long!').required('Required'),
  isRememberMe: Yup.bool().oneOf([true], 'Is you remember?')
})

export const LoginForm = (props: any) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        isRememberMe: false
      }}
      validationSchema={SignupSchema}
      onSubmit={values => props.onSubmitLog(values)}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field id='email' name='email' placeholder='Email' type='email' />
          {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}

          <Field id='password' name='password' placeholder='write password' type='password' />
          {errors.password && touched.password ? <div className={styles.error}>{errors.password}</div> : null}

          <Field id='isRemember' name='isRememberMe' type='checkbox' />
          {errors.isRememberMe && <div>{errors.isRememberMe}</div>}
          <button type='submit'>Login</button>
        </Form>
      )}
    </Formik>
  )
}
