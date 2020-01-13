# About

This repository is project skeleton for TypeScript CLI application.

# Usage

```
git clone --depth 1 ssh://git@github.com/t-kuni/ts-cli-app-skeleton [ProjectName]
cd [ProjectName]
rm -rf .git 
```

# Build

```
docker build --tag twitter-automator .
```

# Run

```
docker run -e AWS_ACCESS_KEY_ID=xxx -e AWS_SECRET_ACCESS_KEY=xxx -e SLACK_TOKEN=xxx twitter-automator [name]
```