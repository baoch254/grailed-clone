# Grailed - Cloned

Grailed is an e-commerce website about fashion.

## 1. Tech stack

- Nx Tool
- Angular, NgRx, NgRx-Slice
- Golang, Go-gin, Gorm
- Mysql

## 2. Prerequisite & versions

### 2.1 Languages

Prerequisite: You need to have Go, NodeJS, and npm installed to run this repo.

```
Nx Tool >= 12.6
Angular >= 12.1
Go >= v1.16
Node >= v16
Mysql >= v8.0
```

### 2.2 VSCode Extensions

- angular.ng-template
- johnpapa.angular2
- dbaeumer.vscode-eslint
- golang.go
- nrwl.angular-console
- esbenp.prettier-vscode

### 2.3 VSCode Setting.json

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[go]": {
    "editor.defaultFormatter": "golang.go"
  },
  "gopls": {
    "formatting.gofumpt": true
  },
}
```

## 3. Nx Tools

## 4. Golang

---

### 4.1 Set Environment

To set any env for database, 3rd parties, etc. Add env to [launch.json](https://github.com/baoch254/grailed-clone/blob/main/.vscode/launch.json).

---

### 4.2 Go with Nx

Project name of golang package such as app, lib must be added prefix 'apps' or 'libs'. Because nx-go v1.7.1 does not support dependencies graph, so I use a custom plugin ([nx-go-project-graph-plugin by FrozenPandaz](https://github.com/nrwl/nx-go-project-graph-plugin)) to make dep-graph. This way will be removed until nx-go support dep-graph.
