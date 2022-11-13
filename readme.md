# About

Project template for TypeScript CLI application.

# Usage

```
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
dist/main.js cmd1
```

# Run tests

```
npm run test
```

# Run lint

```
npm run lint

# With fix
npm run lint-fix
```

# Build container

```
docker build --tag example-container .
```

# Run container

```
docker run example-container main.js cmd1
```

## Release new version

[Document](https://gist.github.com/t-kuni/3d0a5cc86ab63cab3188160f5535afc0#%E6%96%B0%E3%81%97%E3%81%84%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%82%92%E6%8E%A1%E7%95%AA%E3%81%99%E3%82%8B)

# Update all packages

```
npm install -g npm-check-updates
npx npm-check-updates -u
npm install

# Check
npm run test
npm run build
dist/main.js cmd1 --message="Test Message" --config=config.example.yml
```