# About

Project skeleton for TypeScript CLI application.

# Usage

```
git clone --depth 1 https://github.com/t-kuni/ts-cli-app-skeleton.git [ProjectName]
cd [ProjectName]
rm -rf .git 
npm install
```

# Build application

```
npm run build
# or
npm run watch
```

# Run application

```
node dist/example.js
```

# UnitTest settings in PhpStorm

![](https://i.gyazo.com/45c359a605701d9e848710a43e8c7f5d.png) 

# Build container

```
docker build --tag example-container .
```

# Run container

```
docker run example-container example
```

# Update all packages

