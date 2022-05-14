import { Formik }                                 from 'formik'
import React, { FC, useRef, useState }            from 'react'
import { TextInput as RNTextInput }               from 'react-native'
import * as Yup                                   from 'yup'
import { useNavigationAuth, useTheme }            from '../../hooks'
import { Box, Button, Checkbox, Text, TextInput } from '../../ui'
import { sleep }                                  from '../../utils/sleep'

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
})

const LoginForm: FC = () => {

  const { navigate } = useNavigationAuth()

  const theme = useTheme()

  const passInput = useRef<RNTextInput>(null)

  const [loading, setLoading] = useState(false)

  const onSubmit = async (value: any) => {
    setLoading(true)
    console.log(value)
    await sleep(3000)
    setLoading(false)
    navigate('Home')
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      onSubmit={onSubmit}
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
            autoComplete='email'
            autoCapitalize='none'
            returnKeyType='next'
            returnKeyLabel='next'
            onSubmitEditing={() => passInput?.current?.focus()}
          />
          <Box height={theme.spacing.ml} />
          <TextInput
            ref={passInput}
            icon='https'
            placeholder='Enter your password'
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            onSubmitEditing={() => {
              if (!errors.email && !errors.password) {
                onSubmit(values)
              }
            }}
            autoComplete='password'
            autoCapitalize='none'
            returnKeyType='send'
            returnKeyLabel='go'
            secureTextEntry
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
              loading={loading}
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

