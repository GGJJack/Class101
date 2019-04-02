[API Document](https://documenter.getpostman.com/view/4767648/S17xrkSd)

# Hello

Class 101 코딩 테스트 과제 풀이 <br />
작업기간 : 1일

# API 명세

과제 풀이를 위하여 구현한 API 명세

## 유저 API
 
 * 회원가입 : POST /user
 * 유저 조회 : GET /user/`userId`
 * 유저 포스트 조회 : GET /user/`userId`/posts
 * 유저 코멘트 조회 : GET /user/`userId`/comments

## 포스트 API

 * 포스트 목록 조회 : GET /post
 * 포스트 쓰기 : POST /post
 * 단일 포스트 조회 : GET /post/`postId`
 * 포스트 수정 : PUT /post/`postId`
 * 포스트 삭제 : DEL /post/`postId`
 * 코멘트 목록 조회 : GET /post/`postId`/comment
 * 코멘트 쓰기 : POST /post/`postId`/comment
 * 단일 코멘트 조회 : GET /post/`postId`/comment/`commentId`
 * 코멘트 수정 : PUT /post/`postId`/comment/`commentId`
 * 코멘트 삭제 : DEL /post/`postId`/comment/`commentId`

## 기타 API

 * 서버 상태 확인 : GET /status

# 구성

## 기본
 
 * NodeJS
 * MongoDB
  > MongoDB의 실행에 사용한 Docker Shell Script는 /db.sh 에 기록되어있습니다.

## 라이브러리

 * express
 * mongoose
 * graphql
 * express-graphql
 * dotenv