# Bash Note

## Get script directory

The following script will get the location of the currently running script and store the value as `SCRIPT_DIR`:

```bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
```

## Get parent directory

Assuming that you want your bash script to always start from the project root directory to ensure robustness. If you have a `script` directory under the project root directory, then you can use [this trick](#get-script-directory) to get the location of the `script` directory and use the following to evaluate the parent directory of `script` which is project root:

```bash
PROJ_ROOT="$(dirname "$SCRIPT_DIR")"
```

<Disqus/>
