var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号 8888");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/

  // console.log('用户发送了一个请求,路径（带查询参数）为：' + pathWithQuery)
  // console.log("method: ") // GET 或者 POST
  // console.log(method)
  // console.log("request.headers: ") // 获取请求头
  // console.log(request.headers)
  if (path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`在地址栏接上  /index.html  查看详情`);
    response.end();
  } else if (path === "/index.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    let string = fs.readFileSync("public/index.html").toString();
    const page1 = fs.readFileSync("db/page1.json").toString();
    const array = JSON.parse(page1);
    const result = array.map((item) => `<li>${item.id}</li>`).join("");
    string = string.replace("{{page1}}", `<ul id="ulList">${result}</ul>`);
    response.write(string);
    response.end();
  } else if (path === "/main.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    const string = fs.readFileSync("public/main.js").toString();
    response.write(string);
    response.end();
  } else if (path === "/1.css") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    const string = fs.readFileSync("public/1.css").toString();
    response.write(string);
    response.end();
  } else if (path === "/2.js") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    const string = fs.readFileSync("public/2.js").toString();
    response.write(string);
    response.end();
  } else if (path === "/3.html") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    const string = fs.readFileSync("public/3.html").toString();
    response.write(string);
    response.end();
  } else if (path === "/4.xml") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/xml;charset=utf-8");
    const string = fs.readFileSync("public/4.xml").toString();
    response.write(string);
    response.end();
  } else if (path === "/5.json") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    const string = fs.readFileSync("public/5.json").toString();
    response.write(string);
    response.end();
  } else if (path === "/page2") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    const string = fs.readFileSync("db/page2.json").toString();
    response.write(string);
    response.end();
  } else if (path === "/page3") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    const string = fs.readFileSync("db/page3.json").toString();
    response.write(string);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`你访问的页面不存在`);
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log("监听 " + port + " 成功\n预览请打开页面 http://localhost:" + port);
