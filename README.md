# nej-example

这个仓库会与时俱进的写一些NEJ和当代工具配合使用的例子



## karma

karma是一个为单元测试量身定做的容器, 你可以在这个容器内使用任何真实浏览器(包含PhantomJS)以及任意测试框架(mocha, jasmine...etc)来测试你的代码.

这个例子与NEJ的结合依赖于karma插件[karma-nej](https://github.com/NetEaseWD/karma-nej)

流程

```shell
$cd karma-nej
$npm test

```

注意点:

1. `npm test` 实际上运行的是 `./node_modules/.bin/karma start ./karma.conf.js`;
2. coverage信息默认放置在当前的coverage文件夹， 请参考karma社区配置
3. 浏览器请参考karma官网配置， 这里使用的是phantomjs的runner
4. 测试框架请参考官网配置， 这里简单期间使用的是jasmine, 你也可以用更热的mocha + x的组合
5. __所有__ 需要异步载入的文件， 都用`include: false` 标记


任何其它问题请私泡 @郑海波

