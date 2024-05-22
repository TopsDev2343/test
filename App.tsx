import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from '@/navigations';
import store from '@/store';

// import { persistor, store } from '@/store/index-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import firebase from '@/services/firebase'
// import * as Sentry from '@sentry/react-native';
// import { Platform } from 'react-native';

// Sentry.init({
//   dsn: 'https://47dbc228f58d48678a15136f79ab49f3@o1365940.ingest.sentry.io/6662225',
//   debug: true
// });

const App: () => React$Node = () => {
  // firebase.requestUserPermission()

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <AppNavigation />
      {/* </PersistGate> */}
    </Provider>
  );
};

// export default Sentry.wrap(App);
export default App;
