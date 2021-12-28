import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import {Provider} from "react-redux";
import {store} from './src/appStore/app/store';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {

    const STYLES = ['default', 'dark-content', 'light-content'];
    return (
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />

            {/*<StatusBar
                animated={true}
                backgroundColor="#61dafb"
                hidden={false}
            />*/}
          </SafeAreaProvider>
        </Provider>
    );
  }
}
