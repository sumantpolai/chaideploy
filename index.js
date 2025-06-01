require('dotenv').config() 
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
// import express from "express";
const app = express()
const port = 8000

const githubData ={
  "login": "sumantpolai",
  "id": 137427323,
  "node_id": "U_kgDOCDD5ew",
  "avatar_url": "https://avatars.githubusercontent.com/u/137427323?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sumantpolai",
  "html_url": "https://github.com/sumantpolai",
  "followers_url": "https://api.github.com/users/sumantpolai/followers",
  "following_url": "https://api.github.com/users/sumantpolai/following{/other_user}",
  "gists_url": "https://api.github.com/users/sumantpolai/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sumantpolai/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sumantpolai/subscriptions",
  "organizations_url": "https://api.github.com/users/sumantpolai/orgs",
  "repos_url": "https://api.github.com/users/sumantpolai/repos",
  "events_url": "https://api.github.com/users/sumantpolai/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sumantpolai/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sumanta Kumar Polai",
  "company": "intern at @ Weld-x IT sol.",
  "blog": "",
  "location": "Bhubaneswar",
  "email": null,
  "hireable": null,
  "bio": "Full stack Web Developer                 \r\n                  ",
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 2,
  "following": 0,
  "created_at": "2023-06-22T15:51:49Z",
  "updated_at": "2025-04-05T05:22:31Z"
} 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('sumantdotcom')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.get('/login',(req, res)=>{
 res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=>{
  res.send('<h1>Chai aur code</h>')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
