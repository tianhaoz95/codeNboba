# Flutter Notebook

Flutter notebook documents the **tricky** situations developers might encounter while working with Flutter.

It is **NOT** a fully fledged Flutter tutorial since the [official Flutter docs](<(https://flutter.dev/docs)>) has already done a great job explaining the basics.

## References

- [Flutter official website](https://flutter.dev/)

## Life of a widget

### Fire a async update when widget starts

There are scenarios where the app naviagtes to a screen and then fires a http or other type of async actions.

To ensure the async action fires right after the widget initializes, do it in `didChangeDependencies` like the following:

```dart
import 'package:flutter/material.dart';

class AwesomeWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _AwesomeWidget();
  }
}

class _AwesomeWidget extends State<AwesomeWidget> {
  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    asyncUpdate();
  }

  Future<void> asyncUpdate() async {
    // some async updates
  }
}
```

::: tip Note
It is tempting to do async updates in `initState`, but in many cases that leads to crashes because the widget builds according to the states set in `initState` which can be corrupted by the async actions.
:::

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

To make sure that the next action behaves correctly, we want to wait for the required widgets to show up:

```dart
await driver.tap(find.byValueKey('some_button'));
await driver.waitFor(find.byValueKey('something_that_should_show_up'));
await driver.tap(find.byValueKey('something_that_should_show_up'));
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
