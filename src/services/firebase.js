// import messaging from '@react-native-firebase/messaging';
// import firebase from '@react-native-firebase/app'
// import { setStorage } from '@/services/localStorage'


// export const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     // if (enabled) {
//     //     const fcm = await messaging().getToken()
//     //     await setStorage('fcm_token', fcm)
//     // }
// }
// export const refreshToken = async () => {
//     try {
//         await firebase.messaging().deleteToken();
//         const fcm = await messaging().getToken()
//         await setStorage('fcm_token', fcm)
//         return fcm
//     } catch (error) {
//         console.error('fcm_token', error);
//         return 'not avalible token'
//     }
// }

// export default { requestUserPermission, refreshToken }
