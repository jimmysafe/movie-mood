import { AsyncStorage } from 'react-native';

export const _storeData = async (key, data) => {
try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
} catch (error) {
    console.log(error)
}
};

export const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        } else return []
    } catch (error) {
        console.log(error)
    }
};