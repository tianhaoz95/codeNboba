# Action Conditions

## Releases

### Check if prerelease

```yml
name: release flow
on:
  release:
    types:
      - "published"
      - "prereleased"
  push: ...
jobs:
  prerelease-work:
    name: do something when prerelease
    runs-on: ...
    if: contains(github.event_name,'release')&&(github.event.release.prerelease)
    steps: ...
  release-work:
    name: do something when release
    runs-on: ...
    if: contains(github.event_name,'release')&&(!github.event.release.prerelease)
    steps: ...
```
