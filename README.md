# NamanJ-LmsWithMSAL
 > Library Management System
 
## Technologies implemented
 - ASP.NET 6.0 (with .NET Core 6.0)
 - ASP.NET WebApi Core with JWT Bearer Authentication
 - ASP.NET Identity Core
 - Entity Framework Core
 - Angular
 - Azure AD
 - MSAL

## Installation

Clone the repo

```
git clone --depth https://github.com/NamanJ-Touchcore/NamanJ-LmsWithMSAL.git
```

### Server Setup

Change the value of database connection string present in ```LmsApi/appsettings.json```. Install dependencies for server, run the command
```
cd LmsApi
dotnet restore
dotnet database update
```
and run server locally by ``` dotnet run ``` command


### Client Setup

Install dependencies of client by running command,
```
cd app-ui
npm install
```
Run ```ng serve``` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

