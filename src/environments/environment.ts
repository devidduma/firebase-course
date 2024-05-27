// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulator: true,
  firebase: {
    apiKey: "AIzaSyDODGEJur8UDOFW5gVJjMZqCNf-fM2HHGw",
    authDomain: "fir-course-recording-aa35c.firebaseapp.com",
    databaseURL: "https://fir-course-recording-aa35c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-course-recording-aa35c",
    storageBucket: "fir-course-recording-aa35c.appspot.com",
    messagingSenderId: "103457880443",
    appId: "1:103457880443:web:14d58e7a637c00c57be5de",
    measurementId: "G-KVRH98H54X"
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
