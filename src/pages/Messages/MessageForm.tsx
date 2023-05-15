import { Field, Form, Formik } from 'formik'

export const AddMessageForm = (props: any) => {
  return (
    <Formik
      initialValues={{
        newMessageBody: ''
      }}
      onSubmit={props.addNewMessageBody}
    >
      <Form>
        <Field name='newMessageBody' id='newMessageBody' placeholder='Write a message...' />
        <button type='submit'>Post message</button>
      </Form>
    </Formik>
  )
}
