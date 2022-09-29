// index.js是入口文件，这里可以导入其他资源文件
//1. 使用ES6语法导入jq
import $ from 'jquery'

//导入css文件，但是默认webpack只能打包.js的文件
import '@/css/index.css'
import '@/css/index.less';
import logo from './images/dot2.gif' //需要url-loader和file-loader
$(function () {
    console.log(logo); //会被url-loader解析为base64格式的图片

    //2. 奇数行变为红色
    $('li:odd').css('background-color', 'green')
    // 3. 偶数行变为粉色
    $('li:even').css('background-color', 'cyan')

    $('.box').attr('src',logo)
})

// 定义一个装饰器函数
function info(target){
    target.info = 'Person info'
}

// 绑定类
@info
class Person {

}

console.log(Person.info);

consle.log('hello')