# Google-OAuth2.0-NestJS with PassportJS
Creating a NestJS project to use Google Authentication API Services, i.e., Google OAuth2.0

WHAT THIS PROJECT CONTAIN:
- [x] Create Google OAuth2.0 App in Google Console
- [x] Create NestJS Project
- [x] Create Auth Controller
- [x] Create Auth Service
- [x] Create Google Strategy (using *PassportJS*)
- [x] Create Google Auth Guard (*to invoke 'Google Strategy'*)
- [ ] Connect to a Database
- [ ] Configure Sessions 

PROCEDURE:

- Sign-in/up at Google Cloud
- Click at **Console** on the top-right position
- Select the **Existing Project** / create a **New Project**
- Search **Credentials** *(with the **API-icon** not with the **Google Maps-icon**)* in the **search bar**
- If not have **configured consent screen** then a button will appear having a text **CONFIGURE CONSENT SCREEN** on it
- Select **external** *if you're just playing around* & **Internal** *if you're an organization*
- Hit the **Create** Button
- Fill in the required information *(I only Filled*
	- App name
	- user support email (provided mine)
	- developer contact information (again my email)
*)*
- Hit the **Save and Continue** Button
- Click **ADD OR REMOVE SCOPES**
- I checked **email** and **profile** ones *(you can check others as well depending upon your needs) - these 2 will give me the email and other profile details which are public*
- scroll below and click on **UPDATE**
- scroll below and click on **SAVE AND CONTINUE**
- Add Test Users *emails to test on the application*
- *Now you're done with the configurations, Now you can create OAuth2 Client ID*
- Now go to the **Credentials** tab *(in the sub-menu at the left side of the site)*
- Click on **CREATE CREDENTIALS**
- Select **OAuth client ID**
- select **Application Type: ***web application*** *(or whichever you're working on)*
- Name the client
- Add **Authorized redirect URL** *-- I added **http://localhost:3001/api/auth/google/redirect** (add the url where you want user to land after finishing authentication)*
- Click on **CREATE** *(Now we're done!)*
- *Copy & Save* the **Client ID** and **Client Secret** that is generated after clicking at **CREATE**

**Things to know**
- we used ***passportJS*** (library) which allows us to implement Authentication for our application