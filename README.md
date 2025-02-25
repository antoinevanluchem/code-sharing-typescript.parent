## How to create the submodule relationship

### 1. Add the submodule 

```shell
git submodule add git@github.com:antoinevanluchem/code-sharing-typescript.child.git ./packages/child
```

### 2. Add alias
In `tsconfig.json`, add an alias:

```json
"paths": {
    "@child/*": ["./packages/child/build/*"]
}
```




## Usage

The first time you clone this project from Git, the submodules are not automatically initialized. Run following command in the root of the project.

```bash
git submodule update --init
```

Before running the examples, you will also have to install the submodule dependencies and build it:

```shell
cd packages/dash/
npm install
npm run build
cd -
```

> [!WARNING]
> Everytime you change something in `packages/dash`, you will have to **_rebuild_** it.