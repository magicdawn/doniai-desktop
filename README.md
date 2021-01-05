<h1 align="center">Doniai Desktop Tools</h1>

<p align="center">:tada: 基于Electron开发个人工具助手软件。</p>

![Build Status](https://img.shields.io/travis/livissnack/doniai-desktop)
![Version](https://img.shields.io/github/package-json/v/livissnack/doniai-desktop)
[![Issues](https://img.shields.io/github/issues/livissnack/doniai-desktop.svg)](https://github.com/livissnack/doniai-desktop/issues)
![Forks](https://img.shields.io/github/forks/livissnack/doniai-desktop.svg)

## 说明

```
说明注意事项：
1、目前只配置了windows打包适配
2、项目还在迭代开发阶段
3、个人兴趣使然的一个项目
```

## 安装

```sh
$ git clone git@github.com:livissnack/doniai-desktop.git new_name
$ cd new_name
$ yarn install
```

## 配置

在使用本应用之前，你需要去 electron/config 目录下进行相应的配置

## 使用

```node
$ yarn electron-dev
```

## 打包

### Exe软件 打包编译

```node
$ cd new_name
$ yarn electron-build
```

### 页面效果

#### 聊天功能
![effect](/example/images/1.png)

#### 文件管理
![effect](/example/images/2.png)

#### 个人笔记
![effect](/example/images/3.png)

#### 待办事项
![effect](/example/images/4.png)

## 所用依赖，感谢这些好用的扩展包

- [Electron](https://www.electronjs.org/)
- [IconPark](http://iconpark.bytedance.com/)
- [ArtPlayer](https://artplayer.org/)

## License

the MIT License, http://livissnack.mit-license.org
