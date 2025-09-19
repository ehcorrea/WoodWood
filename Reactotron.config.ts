import Reactotron from 'reactotron-react-native';
import reactotronPluginZustand from 'reactotron-plugin-zustand';

import { catalogoStore } from '@/features/catalogo/store';
import { carrinhoStore } from '@/shared/stores/carrinhoStore';

console.log = Reactotron.log;

Reactotron.configure({ name: 'WoodWood' })
  .useReactNative()
  .use(
    reactotronPluginZustand({
      stores: [
        { name: 'catalogoStore', store: catalogoStore },
        { name: 'carrinhoStore', store: carrinhoStore },
      ],
      omitFunctionKeys: true,
    })
  )
  .connect();
