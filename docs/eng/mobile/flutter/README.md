# Flutter Notebook

## Integration test

### Test with Firebase emulator

If the app uses Firebase as backend, running it against a fake backend (instead of the real server) is preferrable.

The following script runs the integration test on top of a Firebase emulator:

```bash
firebase emulators:exec \
  --only functions,firestore \
  "cd app && flutter drive --target=test_driver/emulator.dart"
```

### Wait for completion

```dart
await driver.tap(find.byValueKey('some_button'));
await driver.waitFor(find.byValueKey('something_that_should_show_up'));
```

### Conditional testing

For apps that caches the authentication data, we can use conditional testing to mitigate the accidentally cached data:

```dart
import 'package:flutter_driver/flutter_driver.dart';

Future<bool> isSignedIn(FlutterDriver driver) async {
  try {
    await driver.waitFor(
      find.byValueKey('something_that_shows_up_after_signed_in'),
      timeout: Duration(seconds: 20),
    );
    return true;
  } catch (err) {
    return false;
  }
}

test('conditional testing', () async {
  bool signedIn = await isSignedIn(driver);
  if (signedIn) {
    // sign out first
  }
  // test app behaviors
});
```

### Take screenshots

```dart
import 'dart:io';
import 'package:flutter_driver/flutter_driver.dart';

Future<void> takeScreenshot(FlutterDriver driver, String path) async {
  final List<int> pixels = await driver.screenshot();
  final File file = new File(path);
  await file.writeAsBytes(pixels);
}
```

<Disqus/>
