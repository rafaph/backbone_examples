## Goal

The goal of this project is practice and learn backbone, each directory starting with 'ex' is a example with his own readme.

## Howto

To run a example you need to install dependencies with `npm install` and run a task named `serve` like:

```shell
gulp serve --ex ex1
```

Where the flag `--ex` defines which example you will run following by name of example directory.

The example will running at `localhost:8000`

## Example structure

`static` contains the the compiled javascript by browserify with babelify and assets contains the code.

```
.
├── assets
│   ├── collections
│   ├── views
│   ├── models
│   └── index.js
├── index.html
└── static
    └── js
```
