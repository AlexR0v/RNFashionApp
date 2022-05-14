import { Formik }                 from 'formik'
import React, { FC, useState }    from 'react'
import * as Yup                   from 'yup'
import { useNavigationAuth }      from '../../hooks'
import { Box, Button, TextInput } from '../../ui'
import { sleep }                  from '../../utils/sleep'

const ForgotPassSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required')
})

const ForgotPassForm: FC = () => {

  const { navigate } = useNavigationAuth()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (value: any) => {
    setLoading(true)
    console.log(value)
    await sleep(3000)
    setLoading(false)
    navigate('ChangedPass')
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={onSubmit}
      validationSchema={ForgotPassSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched
      }) => (
        <>
          <TextInput
            icon='email'
            placeholder='Enter your email'
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched.email}
            autoComplete='email'
            autoCapitalize='none'
            returnKeyType='next'
            returnKeyLabel='next'
            onSubmitEditing={() => {
              if (!errors.email) {
                onSubmit(values)
              }
            }}
          />
          <Box
            alignItems='center'
            marginTop='l'
          >
            <Button
              variant='primary'
              onPress={handleSubmit}
              loading={loading}
              label='Reset password'
            />
          </Box>
        </>
      )}
    </Formik>
  )
}

export default ForgotPassForm

