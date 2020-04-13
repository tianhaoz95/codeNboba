# GitHub Actions + VuePress

## Example repositories

- [Code & Boba](https://github.com/tianhaoz95/codeNboba)

## Steps

### Set up environment

```yml
steps:
  - uses: actions/checkout@v2
  - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
```

### Install dependencies

```yml
steps:
  - name: install dependencies
    run: yarn
  - name: compile design docs
    run: yarn docs:build
```

### Push to GitHub Pages

```yml
steps:
  - name: upload to github pages
    env:
      GITHUB_ID: ${{ secrets.MY_GITHUB_ID }}
      GITHUB_TOKEN: ${{ secrets.MY_GITHUB_TOKEN }}
      GITHUB_EMAIL: ${{ secrets.MY_GITHUB_EMAIL }}
      GITHUB_NAME: ${{ secrets.MY_GITHUB_NAME }}
    run: |
      mkdir -p ~/upload
      cp -r docs/.vuepress/dist ~/upload/site
      cd ~/upload/site
      touch .nojekyll
      touch CNAME
      echo "tianhaoz.com" >> CNAME
      git config --global user.email "$GITHUB_EMAIL"
      git config --global user.name "$GITHUB_NAME"
      git init
      git add -A
      git commit -m "docs: update docs"
      git remote add origin https://github.com/tianhaoz95/tianhaoz95.github.io.git
      echo "machine github.com login $GITHUB_ID password $GITHUB_TOKEN" > ~/.netrc
      git push -u -f origin master
```
