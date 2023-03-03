# Finize is a budgeting web application.

## What you can do with Finize:
Sign up and set a budget for the month. Then you can add expense or add income from the dashboard and see how much is left for spending generally or by category.

## Technologies used
1. FRONTEND
- React.js was used for frontend development since it is a small scale web application
2. BACKEND
- Firebase Authentication for light weight user authentication
- Utilized Firebase Realtime Database since it is lightweight enough to be ideal for a small scale project


## Project timeline :
- Week 1 - planning, structure wireframe and information architecture
- Week 2 - design
- Week 3 - Development
- Week 4 - Finishing touches
- Developed 3-5 times/week, 2-3 hrs/day
- Total hours : average of 42 hrs

## To run this application locally,
1. `git clone` this repository
2. `npm install`
3. `npm start`

## To access access Finize through web,
https://finize-d94b5.web.app/

## How to use Finize

### Landing Page
![image](https://user-images.githubusercontent.com/95195467/222322762-3ede7ba3-60ff-47f5-a521-8c6320336a18.png)
- To access the dashboard page, you need to sign up or login first.

### Login Page (Auth with Firebase Authentication)
![image](https://user-images.githubusercontent.com/95195467/222322897-84161a9e-5aea-47bd-b78b-f06396192922.png)
- You can sign up with your own credentials or use the following credentials :
- Email : hf@email.com
- Password : 123123

### Sign up Page (Auth with Firebase Authentication and storage with Realtime Database)
![image](https://user-images.githubusercontent.com/95195467/222323007-03eceddb-d2de-4162-ac96-9e776f5631d2.png)
- Sign up with your email and a password of your choice.
- Please make sure your password is at least 6 characters

### Starter Page (Storage with Realtime Database)
![image](https://user-images.githubusercontent.com/95195467/222323105-14d02040-09f2-4a92-9c60-6a6733b5e994.png)
- Enter your budget for the month and click done to move to your dashboard

### Dashboard (CRUD application with Realtime Database)
![image](https://user-images.githubusercontent.com/95195467/222323268-c91f63aa-1be9-44c0-9838-6c995e3f17cf.png)
- Enter your expenses or income with your category

## References
1. Deploying the project with Firebase
- https://www.youtube.com/watch?v=5n1-wQFoZtU
- https://www.youtube.com/watch?v=dQzIKaNzW84
2. Loading data on state change (useEffect)
- https://www.youtube.com/watch?v=j1ZRyw7OtZs
3. Inspiration
- https://www.youtube.com/watch?v=gnkrDse9QKc&t=1708s
4. Persist login (saving state on local storage)
- https://www.youtube.com/watch?v=rWfhwW9forg
5. `console.log` logging twice
- https://www.youtube.com/watch?v=XUwzASyHr4Q&t=243s


## MIT License

Copyright (c) [2023] [Yubin Jo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
