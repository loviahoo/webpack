#webpack是一款模块加载器兼打包工具，它能把各种资源,例如js(含JSX)、coffe、样式（含less/sass）、图片等都作为模块来使用和处理。
优势：
##webpack是以commonJS的形式来书写脚本，但对AMD/CMD的支持也很全面，方便旧项目进行代码迁移,对CommonJS、AMD、ES6的语法做了兼容
##能被模块化的不仅仅是js了
##开发便捷，能替代部分grunt/gulp的工作，比如打包，压缩混淆、图片的base64转码等
##扩展性强，插件机制完善。
##串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性。
##webpack使用异步IO并具有多级缓存。这使得webpack很快且在增量编译上更加快

webpack的配置主要是为了这几大项目：
entry
output
module
resolve
plugins



#常用命令：
$ webpack --display-error-details---方便出错时能查阅更详尽的信息
$ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
$ webpack --watch   //监听变动并自动打包
$ webpack -p    //压缩混淆脚本，这个非常非常重要！
$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
$ webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
$ webpack --profile 输出性能数据，可以看到每一步的耗时



#html-webpack-plugin-----------自动快速的帮我们生成HTML

#webpack-dev-server------------server我们pack以后的代码，并且当代码更新的时候自动刷新浏览器，安装完毕后要在config中添加配置
静态资源服务器：
webpack除了可以对模块进行打包，还提供了一个开发服务器。它的特点是：
1、基于Node.js Express狂啊记得轻量开发服务器
2、静态资源Web服务器
3、开发中会监听文件的变化在内存中实时打包




``````
    在webppack中javascript/css/less/typescript/jsx/coffeescript/图片等静态文件都是模块，不同模块的加载时通过模块加载器
    （webpack-loader）来统一管理。loaders之间是可以串联的，一个加载器的输出可以作为下一个加载器的输入，最终返回到javascript上，
    loader的配置可以写在配置文件中，通过正则表达式的方式对文件进行匹配

``````

#webpack使用loader的方式来处理各种各样的资源，比如说样式文件，我们需要两种loader，
 css-loader-------css-loader会遍历css文件，找到所有的url（）并处理，
 style-loader-----style-loader会把所有的样式插入到你页面的style-tag中
 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
 使用的时候还要在webpack.config.js中配置loader
 ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
loaders的书写方式，test里面包含一个正则，包含需要匹配的文件，loaders是一个数组，包含要处理这些程序的loaders，这里我们用了css和
style，注意loaders的处理顺序还从右到左

webpack的理念时候基于项目处理的，把对应的文件格式给对应的loader处理。
css预编译，sass-loader

url-loader--处理图片和其他的静态文件，根据需求将一些图片自动转成base64编码，减轻很多的网络请求

expose-loader---将js暴露到全局

#//项目库介绍
http://momentjs.cn/docs/
moment.js--可用来管理处理日期时间的问题，经常会拿来处理一大堆处理函数才能完成一个简单的日期时间显示效果。
moment.js，不依赖任何第三方库，支持字符串，Date。、时间戳以及数组等格式，格式化日期时间，计算相对时间，获取特定时间后的日期时间等等。
http://www.jquery123.com/s
jquery--是一个高效、精简并且功能丰富的javascript工具库，它提供的API易于使用且兼容众多浏览器，这让诸如HTML文档遍历和操作、时间处理、动画和Ajax操作更加简单。
https://babeljs.io/
对babel的很详细的介绍，可以参考阮一峰的ES6 [http://es6.ruanyifeng.com/#docs/]

#启用sourceMap
 source map就是一个信息文件，里面储存着位置信息，也就是说，转码后的代码的每一个位置，所对应的转码前的位置。出错的时候，
 除错工具会直接显示原始代码，而不是转换后的代码

 preLoaders和postLoaders
 用于检查js是否jshint的规范，在各种loaders执行之前处理的。webpack的处理顺序是preLoaders-loaders-postLoaders
 发现错误和潜在问题的社区驱动的工具。
[ exports-loader ]
  在AMD/CMD中我们需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行shim处理，这时候我们需要使用exports-loader来帮忙

[ProvidePlugin]
 webpack提供一个插件把一个全局变量插入到所有的代码中，在config.js里面配置

[UglifyJs Plugin]
 webpack自己的插件系统扩展新的功能，压缩js代码代码代码并输出出去。

[html-webpack-plugin]
could create index.html 可以生成一个新的index.html，开发者不用亲自去写index.html，

[open-browser-webpack-plugin]
could open a new browser tab 可以打开一个新的浏览器选项卡，也不用自己去打开一个浏览器
webpack可以帮你处理这些事情

[CommonsChunkPlugin]
当多个script使用相同的功能代码块，可以通过CommonsChunkPlugin来提取出共用模块供多个文件使用，用于提取多个入口文件的公共脚本部分
开发中需要将多个页面的公用模块独立打包，从而可以利用浏览器缓存机制来提高页面加载效率，减少页面初次加载时间，只有当某功能被用到时，才去动态的加载

[extract-text-webpack-plugin]
有时候可能希望项目的样式能不要被打包到脚本中，而是独立出来作为.css，然后在页面中以<link>标签引入
在webpack中编写js文件时，可以通过require的方式引入其他的静态资源，可通过loader对文件自动解析病打包文件。通常会将js文件打包合并，css文件
会在页面的header中嵌入style的方式载入页面，但开发过程中我们并不想将打在脚本中，最好可以独立成css文件，以外链的形式加载。这个插件就可以将
js中的css文件提取，并制定的文件名来进加载

[webpack-dev-middleware]
只能在生产环境中使用，可以实现在内存中实时打包生成虚拟文件，供浏览器访问以及调试。

[HotModuleReplacementPlugin]--[react-hot-loader]
代码热替换，使用代码热替换在开发的时候无须刷新页面即可看见更新。


