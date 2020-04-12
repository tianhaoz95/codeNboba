# Firebase Emulator

## Communicate with emulator

### Firestore with client

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
```

<Disqus/>
