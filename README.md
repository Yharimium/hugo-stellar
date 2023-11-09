## Hugo Stellar

> ~~**因为作者个人原因，Hugo Stellar 主题暂停更新直到今年六月底。**~~ 一直鸽到了 11 月份。🙏🙏🙏

[Hexo theme stellar](https://github.com/xaoxuu/hexo-theme-stellar) 的 Hugo 移植版本。

## Demo

Yharim Area：<https://yharim.com/>

## Preview

![image](https://github.com/Yharimium/hugo-stellar/assets/97100140/01f07272-8959-4d2d-b40e-0dc388daa47a)


## Usage

> 请使用 hugo extended `v0.109.0` 或更新版本。

<!--
本地建站 sh 脚本：

``` sh
hugo new site mysite
cd mysite
git init
git submodule add https://github.com/Yharimium/hugo-stellar themes/stellar
cp -R themes/stellar/exampleSite/* .
rm config.toml
```
-->

请直接下载主题文件并解压到 `themes` 文件夹内，具体细节请参考官网。

预览网站：

```
hugo server
```

如果网站不能实时显示最新效果的话请使用：

```
hugo server --disableFastRender
```

## Content Management

`content` 目录结构：支持 `posts`（博客）和 `docs`（文档）两种模式。

```
content/
├── posts/
│   ├── test.md         <- example.com/posts/test.html
│   └── folder/
│       ├── index.md    <- example.com/posts/index.html
│       └── test.md     <- example.com/posts/folder/test.html
└── docs/
    └── test.md         <- example.com/docs/test.html
```

## Experimental Features

### 扩展语法支持

> ~~注：此功能可能存在 bug，请谨慎使用。~~
>
> 此功能已稳定。

支持在正文中使用 mkdocs 语法，例如：

```
!!! note
    `markdown` text
```

详见 [扩展语法支持](https://yharim.com/posts/%E5%BB%BA%E7%AB%99/%E6%89%A9%E5%B1%95%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81/)
