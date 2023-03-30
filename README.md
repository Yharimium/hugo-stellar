## Hugo Stellar

[Hexo theme stellar](https://github.com/xaoxuu/hexo-theme-stellar) 的 Hugo 移植版本。

> **注意！此移植版本尚未完善，仅供 debug！**

## Demo

模板网站：[https://cyolc932/Stellar-Hugo-Template/](https://hugo-template.github.io/Stellar-Hugo-Template/)

Yharim Area：[https://yharim.com/](https://yharim.com/)

## Preview

![image](https://user-images.githubusercontent.com/97100140/221884782-32708529-22f2-4054-afe3-05eea0d2646f.png)

![image](https://user-images.githubusercontent.com/97100140/221884615-096120de-c29e-4241-9cdf-cfc7a03d0e35.png)

## Usage

### 方案 1：GitHub Actions + Pages 建站

[Hugo Stellar 一键模板](https://github.com/cyolc932/Stellar-Hugo-Template)

九分甚至十分感谢由用户 [cyolc932](https://github.com/cyolc932) 提供的大力支持。

### 方案 2：本地建站

> 请使用 hugo extended `v0.109.0` 或更新版本。

本地建站 sh 脚本：

```sh
hugo new site mysite
cd mysite
git init
git submodule add https://github.com/Yharimium/hugo-stellar themes/stellar
cp -R themes/stellar/exampleSite/* .
rm config.toml
```

预览网站：

```
hugo server
```

> 注：
>
> 1. 请务必保证您的站点配置文件（如 `config.yaml`）中包含有下列配置：
>
> ```
> markup:
>   _merge: deep
> ```
>
> 否则将导致代码块渲染异常。
> 2. 请务必检查路径下 `/content/posts/至少有一篇文章.md`, 否则无法正常预览
> 3. 请务必检查您的站点配置文件（如 `config.yaml`）中包含有：
>
> ```
> theme:
> - stellar
> ```

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

> 注：此功能可能存在 bug，请谨慎使用。

支持在正文中使用 mkdocs 和 hexo stellar 语法，例如：

```
!!! note
    `markdown` text
```

```
{% poetry 独不见 author:唐·沈佺期 footer:诗词节选 %}
卢家少妇郁金堂，海燕双栖玳瑁梁。
**九月寒砧催木叶，十年征戍忆辽阳。**
白狼河北音书断，丹凤城南秋夜长。
谁为含愁独不见，更教明月照流黄？
{% endpoetry %}
```

详见 [扩展语法支持](https://yharim.com/posts/%E5%BB%BA%E7%AB%99/%E6%89%A9%E5%B1%95%E8%AF%AD%E6%B3%95%E6%94%AF%E6%8C%81/)
