import VersionNumber from 'react-native-version-number';
import moment from 'moment';


export const getAppVersion = () => VersionNumber.appVersion

export const delay = async (delayInms, result = 2) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, delayInms);
    });
}

export const convertHMS = (value) => {
    if (!value || isNaN(value))
        return "00:00"
    const sec = parseInt(value, 10);
    let minutes = Math.floor((sec) / 60); // get minutes
    let seconds = sec - (minutes * 60); //  get seconds


    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds; // Return is HH : MM : SS
}

export const arrayIds = (mArray, key = 'id') => {
    const ids = mArray?.map(item => item[key])
    return ids
}