import { AsyncStorage } from 'react-native';

export const _storeData = async (data) => {
try {
    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(data));
} catch (error) {
    console.log(error)
}
};

export const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
        // We have data!!
            console.log(value);
        } else console.log('does not exists')
    } catch (error) {
        console.log(error)
    }
};