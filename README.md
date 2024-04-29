# vueproject1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 代码注释部分
.container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;
  }
width: 1200px;: 这行规则指定了 .container 元素的宽度为 1200 像素。
margin: 0 auto;: 这行规则指定了 .container 元素的上下外边距为 0，左右外边距自动设置为相等，以实现水平居中。
display: flex;: 这行规则将 .container 元素的显示属性设置为 Flexbox 布局，这意味着其子元素可以使用弹性盒模型进行布局。
position: relative;: 这行规则指定了 .container 元素的定位属性为相对定位，这意味着它的子元素可以使用相对于该容器定位的绝对定位。
综合起来，这段代码的含义是：.container 元素被设置为一个固定宽度的容器，宽度为 1200 像素，并且水平居中显示。该容器使用 Flexbox 布局，允许其子元素进行灵活的布局，并且子元素可以相对于该容器进行定位。

 &:hover {
    .item-list {
        display: block;
    }
}

