// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // for msal
  authClientId: 'bef4c05a-f512-4a55-bba6-b211321a4874',
  authRedirectUrl: 'https://lmsapp-ui.azurewebsites.net/',
  authAuthority: 'https://login.microsoftonline.com/56324411-9df3-48d6-845e-c7cf6fd3b3b0',
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
