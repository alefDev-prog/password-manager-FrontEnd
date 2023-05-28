# Password manager

![Password manager - Google Chrome 5_25_2023 11_26_33 AM (2)](https://github.com/alefDev-prog/password-manager-FrontEnd/assets/114575583/aaa0277e-1c5e-48bd-b7c4-78f809b61930)


## Description

A full-stack app which allows the user to log in and store passwords from various accounts in one single place.

## How to use it

1. Log in or register.
2. Press the container with the "plus" and insert your account-name and password. 
3. To retrieve passwords, simply click on the container with the account-name you are looking for, the password will be fetched from the database.

## Technical information

The front-end was done with Next.js and the back-end API was done with Express. A MongoDB database is used to store encrypted versions of the user's passwords.

## Attention 

The back-end API is currently deployed on Render.com and after 15 minutes of inactivity, the server spins down. Therefore the first request can be really slow. Try reloading the page if stuck on your first register or login.

