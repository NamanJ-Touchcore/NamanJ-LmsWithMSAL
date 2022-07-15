export const environment = {
  production: true,

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
