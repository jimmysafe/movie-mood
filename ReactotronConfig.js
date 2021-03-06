import Reactotron from 'reactotron-react-native'
import {AsyncStorage} from 'react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ name: "Demo App" }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) //  <- here i am!
  .connect() // let's connect!

  export default reactotron