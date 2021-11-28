DESIGN DECISIONS:

1. In the homepage the user is asked to enter the text and select preferd language which he wishes to translate
2. Then the page containing translated text is loaded, this page contains options to translate that text further.
3. If user wishes to retranslate then page containing retranslated text is loaded.

NOTE:
when user initiates translation in homepage , the text is not only translated to user's selection but also to all other languages and these texts gets stored in MongoDB server. When the user retranslates, it is easily retranslated.



HOW TO RUN THE SERVER:

1. Copy or download all the files from github and store them in a folder of your choice
2. Make sure you have Nodejs(v14.16.0.) and npm installed, then open the file in vscode or other code editor.
3. Open command terminal and type 'npm install' this will install all the dependencies.
4. Once installed run 'supervisor server.js' or 'node server.js' command.
5. The server will be started at port 5500.


FURTHER IMPROVEMENTS:


