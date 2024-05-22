import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { appStyle } from '@/theme'
import LoginInput from '@/components/TextInput/LoginInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import { IosButton, LoadingButton } from '@/components/Button'
import Layout from '@/containers/Auth'
import * as authAction from '@/store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { regax, color, metrics, AppName } from '@/configs'
import { IosTextButton } from '@/components/Button/IosButton'
import { useNavigation } from '@react-navigation/native'
import Screens from '@/screens'


export default function () {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const phoneNumber = useSelector(state => state.auth.phoneNumber)
    const navigation = useNavigation()


    const submit = async ({ password }) => {
        try {
            setIsLoading(true)
            await dispatch(authAction.signin({ phoneNumber: phoneNumber, password: password })).unwrap()
        } finally {
            setIsLoading(false)
        }
    }

    const resetPass = async () => {
        try {
            setIsLoading(true)
            await dispatch(authAction.sendotp({ phoneNumber: phoneNumber })).unwrap()
            navigation.navigate(Screens.RESET_PASS)
        } finally {
            setIsLoading(false)
        }
    }

    return (

        <Layout>
            <Formik
                // initialValues={{ phoneNumber: phoneNumber, password: 'ss6426251sf' }}
                initialValues={{ phoneNumber: phoneNumber, password: '' }}
                validationSchema={
                    yup.object().shape({
                        phoneNumber: yup.string()
                            .matches(regax.Phone, 'invalid').max(11)
                            .required('required'),
                    })
                }
                onSubmit={submit}
                validateOnMount={true}
            >
                {({
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    isValid,
                }) => (
                    <View style={{ width: '85%' }}>


                        <TouchableOpacity>
                            <Text style={[appStyle.text, { textAlign: 'center', marginTop: 16, color: color.accent }]}>{`ورود`}</Text>
                        </TouchableOpacity>



                        <LoginInput
                            disabled={true}
                            name="phoneNumber"
                            lable="phoneNumber"

                            placeholder=""
                            value={values.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            keyboardType="number-pad"
                            errorMessage={errors.phoneNumber}
                            editable={false}
                            textAlign='left' />
                        <LoginInput
                            name="password"
                            lable="password"

                            placeholder=""
                            value={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            errorMessage={errors.password}
                            textAlign='left' />
                        <TouchableOpacity onPress={() => resetPass()}>
                            <Text style={[appStyle.text, { textAlign: 'center', marginTop: 16, color: color.accent }]}>forget password</Text>
                        </TouchableOpacity>

                        <LoadingButton
                            style={{ marginTop: metrics.m6 }}
                            isLoading={isLoading}
                            disabled={!isValid} title="login"
                            onPress={() => { submit({ phoneNumber: values.phoneNumber, password: values.password }) }}
                        />



                    </View>
                )}
            </Formik>
        </Layout>)
}


const styles = StyleSheet.create({

})
