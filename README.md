# wt-cli

## 说明

- 快速开始一个 wt 项目

## 安装

```bash
$ npm install -g wt-cli
```

## 命令

``` bash
# 版本号
wt -v
```

## 发布远程

```bash
relix --patch
```

以下命令的格式都是 `relix [option]`。

| option                               | 新生成的版本号  | 自动生成的提交信息                     | 解释                                                                                                                                                                    |
| ------------------------------------ | --------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--patch`                            | `1.1.2`         | Bump version 1.1.2                     | 如果你做了一些向后兼容的 bugfix，那么你用这个命令。                                                                                                                     |
| `--minor`                            | `1.2.0`         | Release minor version 1.2.0            | 如果你新增了一些功能，但是没有做 api 上的改动，<br>向后兼容，那么你用这个命令.                                                                                          |
| `--major`                            | `2.0.0`         | Release major version 2.0.0            | 如果你改 api 并且不向后兼容了，那么你用这个命令                                                                                                                         |
| `--prepatch alpha`                   | `1.1.2-alpha.0` | Prerelease alpha version 1.1.2-alpha.0 | 如果你做了一些向后兼容的 bugfix，<br>然后想发布一个预发布版本，那么你用这个命令.                                                                                        |
| `--preminor rc`                      | `1.2.0-rc.0`    | Prerelease rc version 1.2.0-rc.0       | 如果你新增了一些功能，但是没有做 api 上的改动,<br>然后想发布一个预发布版本，那么你用这个命令.                                                                           |
| `--premajor`                         | `2.0.0-beta.0`  | Prerelease beta version 2.0.0-beta.0   | 如果你改 api 并且不向后兼容,<br>然后想发布一个预发布版本，那么你用这个命令.                                                                                             |
| `--prerelease`                       | `1.1.2-beta.0`  | Prerelease beta version 1.1.2-beta.0   | 等同于 `--prepatch`.                                                                                                                                                    |
| `--patch --accessPublic`             | `1.1.2`         | Bump version 1.1.2                     | 如果你的 NPM 包是私有包，比如你的包名称叫`@yourname/packageName`<br>，那么在发布时候需要使用`npm publish --access=public`来发布，<br>这个时候你需要使用`--accessPublic` |
| `--patch --remote upstream/mybranch` | `1.1.2`         | Bump version 1.1.2                     | 用于指定远程和分支                                                                                                                                                      |
