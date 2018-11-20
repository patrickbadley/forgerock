# Pull base image
From tomcat:8-jre8

# Copy to images tomcat path
ADD forgerock-am.war /usr/local/tomcat/webapps/

CMD ECHO "127.0.0.1 http://forgerock-am-bmw.azurewebsites.net" > /etc/hosts