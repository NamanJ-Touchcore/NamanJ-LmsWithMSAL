export const environment = {
  production: true,

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
