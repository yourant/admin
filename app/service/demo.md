
# markdown-it-vue

## Image size and Viewer



## GitHub Table of Contents

[toc]

Note: Only `h2` and `h3` are shown in toc.


## AsciiMath

Inline AsciiMath: `@(1/2[1-(1/2)^n])/(1-(1/2))=s_n@`

```AsciiMath
oint_Cx^3 dx+4y^2 dy

2=(((3-x)xx2)/(3-x))

sum_(m=1)^oosum_(n=1)^oo(m^2 n)/(3^m(m3^n+n3^m)
```

```ASCIIMath
phi_n(kappa) = 1/(4pi^2 kappa^2)
 int_0^oo (sin(kappa R))/(kappa R)
 del/(del R)
[R^2 (del D_n (R))/(del R)] del R
```

[AsciiMath Documentation](http://asciimath.org/)


```echarts
{
  "width": 500,
  "height": 400,
  "series": [
    {
      "name": "访问来源",
      "type": "pie",
      "radius": "55%",
      "data": [
        {
          "value": 235,
          "name": "视频广告"
        },
        {
          "value": 274,
          "name": "联盟广告"
        },
        {
          "value": 310,
          "name": "邮件营销"
        },
        {
          "value": 335,
          "name": "直接访问"
        },
        {
          "value": 400,
          "name": "搜索引擎"
        }
      ]
    }
  ]
}
```


``` image
  url http://www.aqcoder.com/gvf-project.png
  url https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0

  container-style
  display flex
  align-items center

  image-style
  width        300px
  object-fit   contain
  border-radius 5px  
```
``` image
  url https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_UHD.jpg&pid=hp&w=3840&h=2160&rs=1&c=4&r=0

  container-style
  display flex
  align-items center

  image-style
  width        300px
  object-fit   contain
  border-radius 5px  
```

## code

### c
```c
#include <stdio.h>
int main(int argc char* argv[]) {
  printf("Hello, World!");
  return 0;
}
```

### json

``` json
{
  "name": "markdown-it-vue"
}
```

### javascript
``` javascript
import MarkdownItVue from 'markdown-it-vue'
export default {
  components: {
    MarkdownItVue
  }
}
```

### bash
``` bash
npm install markdown-it-vue
```

## alter

Markup is similar to fenced code blocks. Valid container types are `success`, `info`, `warning` and `error`.

::: success
You have got it.
:::

::: info
You have new mail.
:::

::: warning
You have new mail.
:::

::: error
Staying up all night is bad for health.
:::


## mermaid charts

### mermaid Flowchart

[Flowchart Syntax](http://knsv.github.io/mermaid/#flowcharts-basic-syntax)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
```

## Definition list

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

[Definition List Syntax](http://pandoc.org/README.html#definition-lists)



## Subscript: H~2~O

You can also use inline math: `$H_2O$`


## Superscript: 29^th^

You can also use inline math: `$29^{th}$`


## Emoji: :panda_face: :sparkles: :camel: :boom: :pig:

[Emoji Cheat Sheet](http://www.emoji-cheat-sheet.com/)

## Fontawesome: :fa-car: :fa-flag: :fa-bicycle: :fa-leaf: :fa-heart: :fa-university:

[All the Font Awesome icons](http://fontawesome.io/icons/)

## Echarts

[Documentation for Echarts](http://echarts.baidu.com)

The width and height is the size for chart container.




## table

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

## flowchart.js

``` flowchart.js
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...
para=>parallel: parallel tasks

st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1

```

``` flowchart.js

st=>start: 开始
e=>end: 结束
op1=>operation: 作业1
sub1=>subroutine: 子程序
cond=>condition: Yes or No?
io=>inputoutput: 输入输出
para=>parallel: 并行任务
st->op1->cond
cond(yes)->io->e
cond(no)->para
para(path1, bottom)->sub1(right)->op1
para(path2, top)->op1

st@>op1({"stroke":"Red"})@>cond({"stroke":"Red"})@>para({"stroke":"Red","stroke-width":4,"arrow-end":"classic-wide-long"})@>sub1({"stroke":"Red"})@>e({"stroke":"Red"})

```

