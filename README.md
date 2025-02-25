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