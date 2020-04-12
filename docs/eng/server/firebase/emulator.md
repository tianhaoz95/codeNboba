# Firebase Emulator

## Use cases

Firebase emulator is great for:

- Local prototyping
- Regression tests
- Interactive debugging

## Cloud functions

During development, it's a good practice to verify user-facing behaviors.

To get user-facing experience, we should avoid calling functions internally.

Instead, it should connect with server over protocols only which requires establishing communication with Firebase emulator like a user.

Let's take a look at how to communicate with Firebase emulator in various lanugages and frameworks.

### Use in Flutter client

The following code connects a Flutter/Dart client with Firebase emulator:

```dart
import 'package:cloud_functions/cloud_functions.dart';

CloudFunctions cloudFunc = CloudFunctions.instance;
/// This function overrides the cloud function to use emulator.
/// It's always a good practice to control this behavior with some
/// app-level configuration.
cloudFunc.useFunctionsEmulator(origin: 'http://localhost:5001');
callableFunc = cloudFunc.getHttpsCallable(functionName: 'callableFunc');
await callableFunc.call();
```

## Firestore

### Use in TypeScript client

The following code connects a TypeScript client with Firebase emulator:

```js
// config.ts
export const DatabaseEmulatorAddress: string = "localhost:8080";

export const EmulatedAppConfig = {
  projectId: "iwfpapp",
};

export const DatabaseSettings = {
  host: DatabaseEmulatorAddress,
  ssl: false,
};

// main.ts
import * as firebase from "firebase";

let app: firebase.app.App;
let db: firebase.firestore.Firestore;

app = firebase.initializeApp(EmulatedAppConfig);
db = app.firestore();
db.settings(DatabaseSettings);
const data = await db.collection("book").doc("page").get();
```

<Disqus/>
