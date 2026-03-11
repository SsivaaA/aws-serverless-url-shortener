# AWS Serverless URL Shortener with Analytics

## Project Overview
This project is a serverless web application that generates short URLs and tracks link analytics using AWS cloud services.

The system allows users to:
- Create short URLs from long URLs
- Redirect users using the generated short link
- Track click analytics

## AWS Services Used
- Amazon S3 – Static website hosting
- AWS Lambda – Backend logic
- Amazon API Gateway – API management
- Amazon DynamoDB – Data storage
- AWS CloudWatch – Monitoring and logs

## Architecture
User → S3 Website → API Gateway → Lambda → DynamoDB

## Features
- Generate unique short URLs
- Store links in DynamoDB
- Redirect users to original URL
- Track link clicks

## Technologies
- HTML
- CSS
- JavaScript
- Python (AWS Lambda)
- AWS Serverless Architecture

## Author
Sivamurugan V
