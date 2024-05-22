import React, { useState } from 'react'
import { View, StyleSheet, Text, Linking } from 'react-native'
import { appStyle } from '@/theme'
import LoginInput from '@/components/TextInput/LoginInput'
import { Formik } from 'formik'
import * as yup from 'yup'
import { IosButton, LoadingButton } from '@/components/Button'
import Layout from '@/containers/Auth'
import * as authAction from '@/store/authSlice'
import { useDispatch } from 'react-redux'
import { regax, color, metrics, AppName } from '@/configs'
import { IosTextButton } from '@/components/Button/IosButton'
import { useNavigation } from '@react-navigation/native'
import Screens from '@/screens'


export default function Singup() {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()


    const submit = async ({ phoneNumber }) => {
        try {
            setIsLoading(true)
            const res = await dispatch(authAction.checkPhone({ phoneNumber: phoneNumber })).unwrap()
            // if (res.isUser)
            //     navigation.navigate(Screens.SIGNIN)
            // else
            //     navigation.navigate(Screens.OTP)
        } catch (error) {
            console.log('in sign up', error.data);
            if (error.data.code == 400 && error.data.message == 'User Exist') {
                navigation.navigate(Screens.SIGNIN)
            } else if (error.data.code == 404 && error.data.message == 'User Not Exist') {
                await dispatch(authAction.sendotp({ phoneNumber }))
                navigation.navigate(Screens.OTP)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (

        <Layout>
            <Formik
                initialValues={{ phoneNumber: '', }}
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


                        <LoginInput
                            name="phoneNumber"
                            lable="Phone"
                            placeholder=""
                            value={values.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                            keyboardType="number-pad"
                            errorMessage={errors.phoneNumber}
                            textAlign='left' />

                        <LoadingButton
                            style={{ marginTop: metrics.m6 }}
                            isLoading={isLoading}
                            disabled={!isValid} title="next"
                            onPress={() => { submit({ phoneNumber: values.phoneNumber }) }}
                        />
                    </View>
                )}
            </Formik>
        </Layout>)
}


const styles = StyleSheet.create({

})
