# Friends Tutor


<img
  src="./readme-src/welcome.png"
  alt="mainlogo"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 400px">

> ## Learn from your friends. 

Friends Tutor is a lecture provider platform where lectures recorded by students are shared worldwide.



![Netlify](https://img.shields.io/netlify/83f6fb77-5507-4db6-9adf-18b0a42229c1?style=for-the-badge) ![GitHub](https://img.shields.io/github/license/2ood/friend-mentor-frontend?style=for-the-badge) 

![GitHub contributors](https://img.shields.io/github/contributors/2ood/friend-mentor-frontend?style=for-the-badge) ![Scrutinizer code quality (GitHub/Bitbucket)](https://img.shields.io/scrutinizer/quality/g/2ood/friend-mentor-frontend?style=for-the-badge) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/2ood/friend-mentor-frontend?style=for-the-badge)


# Table of Contents
[1. Backgrounds](#1)

&nbsp;&nbsp;&nbsp;&nbsp;[1.1) What is the problem?](#1-1)

&nbsp;&nbsp;&nbsp;&nbsp;[1.2) What is the solution?](#1-2)

&nbsp;&nbsp;&nbsp;&nbsp;[1.3) What software is needed?](#1-3)

[2. Introducing Friend Mentor](#2)

&nbsp;&nbsp;&nbsp;&nbsp;[2.1) Login and Signup](#2-1)

&nbsp;&nbsp;&nbsp;&nbsp;[2.2) Browse Lectures & Give upvotes](#2-2)
  

&nbsp;&nbsp;&nbsp;&nbsp;[2.3) Upload my lectures](#2-3)

&nbsp;&nbsp;&nbsp;&nbsp;[2.4) Certificates](#2-4)

[3. Setup & Requisites](#3)


[4. Project Architecture](#4)

&nbsp;&nbsp;&nbsp;&nbsp;[4.1) Project structure](#4-1)

&nbsp;&nbsp;&nbsp;&nbsp;[4.2) Techs Used](#4-2)

&nbsp;&nbsp;&nbsp;&nbsp;[4.3) Deployment](#4-3)


[5. Contributors](#5)



<a name="1"></a>
# 1. Backgrounds

<a name="1-1"></a>
## 1.1) What is the problem?

As a student, our team understands how hard it is to learn a piece of knowledge by oneself. It is very hard to 


<a name="1-2"></a>
## 1.2) What is the solution?

Project 'Friends Tutor' is motivated by one of Albert Einstein's quotes.

> If you can't explain it simply, you don't understand it enough.

This quote implies that once a student learned something thouroughly, one can also explain it to others. Also, thinking backwards, if we evaluate whether students can explain well about a topic they learned, we can 'grade them' without exams.

 Our goal is to build a 'Stack overflow','Coursera', and 'Wikipedia' on school basic subjects. We dreamed an online website( or an app) where kids can freely access peer's explaination on things they didn't understand on school 

Project 'Friends Tutor' tries to achieve the <u>4th goal of UN SDG sustainable Goals</u>, which is **Quality Education**. Specifically, this project aims to gain progress on **indicator 4.1.1. and 4.c.1.**

> 4.1.1<br/>
Proportion of children and young people (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics, by sex

> 4.c.1 <br/>Proportion of teachers with the minimum required qualifications, by education level


<a name="1-3"></a>
## 1.3) What software is needed?

<a name="2"></a>
# 2. Introducing Friend Mentor

<a name="2-1"></a>
## 2.1) Login & Sign up

<img
  src="./readme-src/login.png"
  alt="mainlogo"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 400px">


<a name="2-2"></a>
## 2.2) Browse Lectures & Give upvotes

<img
  src="./readme-src/watch_lectures_and_give_upvotes.png"
  alt="mainlogo"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 400px">

<a name="2-3"></a>
## 2.3) Upload my lectures

<img
  src="./readme-src/upload_lectures.png"
  alt="mainlogo"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 400px">


<a name="2-4"></a>
## 2.4) Certificates

<img
  src="./readme-src/certificates.png"
  alt="mainlogo"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 400px">


<a name="3"></a>
# 3. Setup & Requisites

Minimum environment requirements versions are as follows.


> OS : (ubuntu) 18.04 LTS <br>Node.js : 16.19.1 (Gallium) <br>npm : 9.6.2

First. clone files from git.
```bash
git clone https://github.com/2ood/friends-tutor.git 
# web communicates through demo backend domain.
# (which is https://www.gdsc-gist-lms.page:443)
```
Currently, main branch is <u>connected to demo backend domain.</u> 
If you want to run in the same local machine of backend, you should clone branch **'localhost-branch'**.

```bash
git clone -b localhost-branch https://github.com/2ood/friends-tutor.git
# web communicates with http://localhost:8080.
```

Then, install dependencies and run.
```bash
cd friends-tutor/friends-tutor
npm install
npm start
```

<a name="4"></a>
# 4. Project Architecture

<a name="4-1"></a>
## 4.1) Project structure

<img src="./readme-src/project-flow2.drawio.png" alt="project_structure"
  style="display: flex; margin: auto; align-items:center; justify-content : center; max-width: 300px">

The project is version-controlled by git. 

Following is the git repository for web-backend.

[https://github.com/kimtks456/friend-tutor-backend]https://github.com/kimtks456/friend-tutor-backend/tree/demo)


<a name="4-2"></a>
## 4.2) Techs Used


<a name="4-3"></a>
## 4.3) Deployment

Demo of project 'Friends Tutor' is being deployed upon Netlify.

[https://friends-tutor.netlify.app/](https://friends-tutor.netlify.app/)


<a name="5"></a>
# 5. Contributors






