# Full Stack App

## Tools

- [Firebase](https://firebase.google.com/)
- [Flutter](https://flutter.dev/)

## Steps

### Initialize a Firebase app

Initialize a app repository by:

```bash
firebase init
```

::: tip Note
Follow the prompted instructions to setup a Firebase project.
:::

```bash
flutter create [app name]
# After the app is created, rename the directory
# name to 'app' for clarity.
# This will not break anything.
```

Ideally, you will end up with a repository structure like this:

```bash
Repository
  ├── CODEOWNERS
  ├── CODE_OF_CONDUCT.md
  ├── CONTRIBUTING.md
  ├── LICENSE
  ├── README.md
  ├── app
  │   ├── android
  │   ├── ios
  │   ├── lib
  │   ├── linux
  │   ├── macos
  │   ├── pubspec.lock
  │   ├── pubspec.yaml
  │   ├── test
  │   ├── test_driver
  │   ├── web
  │   └── windows
  ├── database.rules.json
  ├── firebase.json
  ├── firestore.indexes.json
  ├── firestore.rules
  ├── functions
  │   ├── package.json
  │   ├── src
  │   ├── tsconfig.json
  │   └── tslint.json
  ├── docs
  │   └── ...
  ├── scripts
  │   └── ...
  └── storage.rules
```
