Click configure with default values

Enter a password

On Dashboard click the default realm

Click configure OAuth Provider

Click configure OpenIDConnect

Leave default values and click create in the top right

Click Applications > Oauth 2.0

Click Add Client

Choose a ClientId such as myangularapp

Enter a secret (it doesnt matter)

Add the url to your angular app in the redirection URIs (be mindful of slashes)

Add openid and profile to the scopes

Click Create

Click your client name

Click OpenId Connect

Add your angular url to the Post-logout Redirect URIs (be mindful of slashes)

Click Signing and Encryption

Clear the Json Web Key URI field and click save changes