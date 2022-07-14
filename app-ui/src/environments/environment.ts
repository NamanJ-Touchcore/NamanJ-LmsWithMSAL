// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // for msal
  authClientId: '784e37cc-bdad-4b92-88c6-ecb18a4e792e',
  authRedirectUrl: 'https://lmsapp-ui.azurewebsites.net/',
  authAuthority: 'https://login.microsoftonline.com/66ef5926-739b-495d-a8f5-ef4fc8f1c936',
  cacheLocation: 'localStorage',
  authStateInCookie: false,
  authScope: 'user.read',

  graphUrl: 'https://graph.microsoft.com/v1.0/me',
  graphPicUrl: 'https://graph.microsoft.com/v1.0/me/photo/$value',

  postLogoutUrl: 'https://lmsapp-ui.azurewebsites.net/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
