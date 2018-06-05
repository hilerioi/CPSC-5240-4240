Publishing Angular project to Azure
-----------------------------------
1. In the ng project, enable the use of the Hashtag to define an angular route (e.g. https://todoappsu.azurewebsites.net/#/list).  To do this, update the routing exporting definition to include {useHash:true}.
> export const routing = RouterModule.forRoot(routes, {useHash:true});

2. Next, publish the angular CLI output from the ng project into the express project follow these steps:
> ng build --prod

3. Copy the content of the dist directory to a directory on the express project (e.g. angularDist)

4. Update the Express Server (App.ts) to contain a root route pointing to this ng output directory:
> this.expressApp.use('/', express.static(__dirname+'/angularDist'));

5. Update the server port listner on the server (AppServer.ts) definition to include "process.env.PORT"
> server.listen(process.env.PORT || 8080);

6. Publish express project content to Azure and access root URL. For details on how to publish to Azure using git follow the steps outlined here:
> https://azure.microsoft.com/en-us/documentation/articles/app-service-deploy-local-git/

Adding Oauth SSO to your project
--------------------------------
1. Install passport package
> npm install passport

2. Install specific passport provider package.  For example, to enable google auth include the following package:
> npm install passport-google-oauth

3. If using Google Oauth, go to the developer center and create a new Project:
> https://console.developers.google.com/apis/dashboard 

4. Enable APIs and Services on the new project by adding Google+ API
> Select Enable on the Google+ API

5. Add credentials to your project by creating credentials to use this API. If you don't see the OAuth Client option, cancel and go back to the Create credentials pulldown. From the pulldown, select the OAuth Client ID.

6. Configure the consent screen with the information about your web application

7. Next, select the Web application application type. Configure the correct Authorized redirect URIs.  Make sure you include both version of the URL http and https.

8. Use the generated Ids to configure your Oauth passport settings on your express server (e.g. googleOauth2.js).  There should be two values:
> Client ID
> Client Secret

9. In your passport settings (e.g. GooglePassport.ts), configure the callback information for your Oath provider:    
> callbackURL: "/auth/google/callback"
Ensure the callback URL is fully qualified.

10. Ensure your express server (App.ts) contains the google oauth routing for invoking the google login and returning from the authentication.

    router.get('/auth/google', 
        passport.authenticate('google', 
            { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }
        )
    );

    //This should match the URL path for step #7
    router.get('/auth/google/callback', 
        passport.authenticate('google',
            { successRedirect: '/#/list', failureRedirect: '/'
            }
        )
    );

> Update the success redirect to match you specific web application.  This will be the angular page that the application will be redirected after the authentication is successful.

11. Remember to add the necessary imports and recompile the Typescript files.

12. Lastly, deploy the application to Azure and test it.