import AsyncStorage from '@react-native-async-storage/async-storage'

export const setStorage = async (key, value) => {
    try {

        await AsyncStorage.setItem(key, value)
        return true
    } catch (e) {
        return false
    }
}
export const getStorage = async (key) => {
    try {
        const item = await AsyncStorage.getItem(key)
        return item
    } catch (e) {
        return null
    }
}
export const removeItem = async (key) => {
    try {
        const item = await AsyncStorage.removeItem(key)
    } catch (e) {

    }
}
export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {

    }
}
export const getMultipleStorage = async (keys) => {

    let values
    try {
        values = await AsyncStorage.multiGet(keys)
        return values
    } catch (e) {

        return []
    }
}
export const rmoveMultipleStorage = async (keys) => {

    let values
    try {
        await AsyncStorage.multiRemove(keys)
    } catch (e) {

    }
}
export default { setStorage, getStorage, removeItem }