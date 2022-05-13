import { Formik }                                 from 'formik'
import React, { FC }                              from 'react'
import * as Yup                                   from 'yup'
import { useNavigation, useTheme }                from '../../hooks'
import { Box, Button, Checkbox, Text, TextInput } from '../../ui'

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
})

const LoginForm: FC = () => {

  const { navigate } = useNavigation()

  const theme = useTheme()

  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      onSubmit={values => console.log(values)}
      validationSchema={LoginSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
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
          />
          <Box height={theme.spacing.ml} />
          <TextInput
            icon='https'
            placeholder='Enter your password'
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
          />
          <Box
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <Checkbox
              label='Remember me'
              value={values.remember}
              onValueChange={() => setFieldValue('remember', !values.remember)}
            />
            <Button
              variant='transparent'
              onPress={() => navigate('ForgotPass')}
            >
              <Text color='lightBlue'>Forgot password</Text>
            </Button>
          </Box>
          <Box
            alignItems='center'
            marginTop='m'
          >
            <Button
              variant='primary'
              onPress={handleSubmit}
              label='Log into your account'
            />
          </Box>
        </>
      )}
    </Formik>
  )
}

export default LoginForm

