import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nostalgiapp.app',
  appName: 'nostalgiapp',
  bundledWebRuntime: false,
  webDir: 'out',
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
  cordova: {},
};
