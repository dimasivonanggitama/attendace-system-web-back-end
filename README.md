# attendance-system-web-back-end

## What i did:

1. mkdir "Mini Project 4"
2. cd "Mini Project 4"
3. mkdir backend
4. cd backend
5. npm init --y
6. new-Item .env
7. npm install express --save
8. npm install --save-dev sequelize-cli
9. npm install sequelize
10. npm install mysql2
11. npx sequelize-cli init
12. npm install dotenv
13. npm install bcrypt
14. npm install jsonwebtoken
15. npm install nodemailer
16. mkdir src
17. cd src
18. npx sequelize-cli init
19. cd ../
20. git init
21. [.gitignore] Added .env
22. [.gitignore] Added node_modules
23. git add .
24. git commit -m "BE-PREP-v1 Initial commit of backend/server side"
25. [Github website] Create new repository on Github Website (without any options): attendace-system-web-back-end
26. git remote add origin https://github.com/dimasivonanggitama/attendance-system-web-back-end.git
27. git push origin master
28. git checkout -b development
29. cd src

• ORM: Sequelize
1. Create migration file
npx sequelize-cli migration:generate --name create-user-table
npx sequelize-cli migration:generate --name create-blog-table

2. Execute create table from migration file:
npx sequelize-cli db:migrate
npx sequelize db:migrate

## System flow:

index.js (paling luar) -> routes -> controllers -> models

## Version code:
• Preparation:\
&emsp;BE-PREP = Preparation\
&emsp;BE-IXSR = index.js of src (main backend/outer than any index.js)

• Routes:\
&emsp;BE-IXRO = index.js of routes\
&emsp;BE-ROUT = App Routes\
&emsp;BE-RORO = Role of Routes


• Controllers:\
&emsp;BE-IXCO = index.js of controllers\
&emsp;BE-ROCO = Role controllers

• Models:\
&emsp;BE-IXMO = index.js of models\
&emsp;BE-ROMO = Role model

• Migrations:\
&emsp;BE-MIGR = Migrations of Role table\
&emsp;BE-MIGU = Migrations of Users table