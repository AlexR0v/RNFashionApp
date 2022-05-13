import { Formik }                 from 'formik'
import React, { FC }              from 'react'
import * as Yup                   from 'yup'
import { useTheme }               from '../../hooks'
import { Box, Button, TextInput } from '../../ui'

const RegisterSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
  confirm: Yup.string()
    .min(6)
    .when('password', {
      is: (val: string) => (!!(val && val.length > 0)),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Both password need to be the same'
      )
    })
    .required('Confirm Password Required'),
  email: Yup.string().email('Invalid email').required('Required')
})

const RegisterForm: FC = () => {

  const theme = useTheme()

  const onSubmit = (value: any) => {
    console.log(value)
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', confirm: '' }}
      onSubmit={onSubmit}
      validationSchema={RegisterSchema}
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
            autoComplete='password-new'
            autoCapitalize='none'
            returnKeyType='next'
            returnKeyLabel='next'
            secureTextEntry
          />
          <Box height={theme.spacing.ml} />
          <TextInput
            icon='https'
            placeholder='Confirm your password'
            onChangeText={handleChange('confirm')}
            onBlur={handleBlur('confirm')}
            value={values.confirm}
            error={errors.confirm}
            touched={touched.confirm}
            autoComplete='password-new'
            autoCapitalize='none'
            returnKeyType='send'
            returnKeyLabel='go'
            secureTextEntry
            onSubmitEditing={() => onSubmit(values)}
          />
          <Box
            alignItems='center'
            marginTop='l'
          >
            <Button
              variant='primary'
              onPress={handleSubmit}
              label='Create your account'
            />
          </Box>
        </>
      )}
    </Formik>
  )
}

export default RegisterForm

