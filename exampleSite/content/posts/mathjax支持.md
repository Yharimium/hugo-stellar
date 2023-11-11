---
title: MathJax 支持
categories: [建站]
tags: [Hugo, MathJax]
date: 2023-02-12
description: Hugo MathJax 补丁。
---

## Inline Math

``` mathjax
$abc$ $e^{\pi i}=-1$ $\frac{3}{2}$
```

$abc$ $e^{\pi i}=-1$ $\frac{3}{2}$

## Display Math

``` mathjax {title=Example render = true}
$$
\sum_{i=1}^{n}\int_{0}^{\pi}\log_2{e^n}
$$
```

$$
\sum_{i=1}^{n}\int_{0}^{\pi}\log_2{e^n}
$$

## Using Latex Codeblock

    ``` latex
    f(n)=
    \begin{cases}
        f(n-1)+f(n-2) & n \ge 3 \\
        1 & n=1,2
    \end{cases}
    ```

``` latex
f(n)=
\begin{cases}
    f(n-1)+f(n-2) & n \ge 3 \\
    1 & n=1,2
\end{cases}
```