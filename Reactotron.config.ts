import Reactotron from 'reactotron-react-native';

console.log = Reactotron.log;

Reactotron.configure({ name: 'WoodWood' }).useReactNative().connect();
