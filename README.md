# attendance-system-web-back-end

## What i did:

1. mkdir "Mini Project 4"
2. cd "Mini Project 4"
3. mkdir backend
4. cd backend
5. npm init --y
6. new-Item .env
7. npm install --save-dev sequelize-cli
8. npm install sequelize
9. npm install mysql2
10. npx sequelize-cli init
11. npm install dotenv
12. npm install bcrypt
13. npm install jsonwebtoken
14. npm install nodemailer
15. mkdir src
16. cd src
17. npx sequelize-cli init
18. cd ../
19. git init
20. [.gitignore] Added .env
21. [.gitignore] Added node_modules
22. git add .
23. git commit -m "BE-PREP-v1 Initial commit of backend/server side"
23. [Github website] Create new repository on Github Website (without any options): attendace-system-web-back-end
24. git remote add origin https://github.com/dimasivonanggitama/attendance-system-web-back-end.git
25. git push origin master
26. git checkout -b development
27. cd src

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
&emsp;BE-ROUT = App Routes
&emsp;BE-RORO = Routes of Role


• Controllers:\
&emsp;BE-IXCO = index.js of controllers\

• Models:\
&emsp;BE-IXMO = index.js of models\

• Migrations:\
&emsp;BE-MIGR = Migrations of Role table\
&emsp;BE-MIGU = Migrations of Users table