function writeCode(prefix, code, fn) {
  let domCode = document.querySelector("#code");
  domCode.innerHTML = prefix || "";
  let n = 0;
  let id = setInterval(() => {
    n += 1;
    domCode.innerHTML = Prism.highlight(
      prefix + code.substring(0, n),
      Prism.languages.css
    );
    styleTag.innerHTML = prefix + code.substring(0, n);
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id);
      fn.call();
    }
  }, 10);
}

function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1;
        domPaper.innerHTML = markdown.substring(0, n);
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
          window.clearInterval(id);
          fn.call();
        }
      }, 10);
}

var result = `/*
*面试官你好，我是袁建楠
*我将以动画的形式来介绍我自己自
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
    transition:all 0.5s;
}

html {
    background: rgb(222,222,222);
    font-size: 16px;
    font-weight:bold;
}
#code{
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; height: 90vh;
}

/* 加点高亮 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/* 加点3D效果 */
html{
    perspective: 1000px;
  }
#code {
    position: fixed; left: 0; top: 0;
    transform: rotateY(10deg) translateZ(-100px) ;
  }

/* 好了接下来该写一张正经的简历 */
`;
var result2 = `
    #paper {
        position: fixed; right: 0; top: 0;
        padding: .5em;  margin: .5em;
        width: 48vw; height: 90vh;
        border: 1px solid;
        background: white; color: #222;
        overflow: auto;
    }
`;
var md = `
我叫 xxx
毕业于 xxx
求职意向：前端工程师
`
writeCode("", result, () => {
  createPaper();
  writeCode(result, result2, ()=>{
      writeMarkdown(md)
  });
});

function createPaper() {
  var paper = document.createElement("div");
  paper.id = "paper";
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper);
}