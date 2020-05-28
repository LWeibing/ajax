getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        // 创建 style 标签
        const style = document.createElement("style");
        // 设置 style 标签的内容
        style.innerHTML = request.response;
        // 将 style 标签插入 head 标签
        document.head.appendChild(style);
      } else {
        alert("加载 CSS 失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载 JS 失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载 HTML 失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载 XML 失败");
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        const obj = JSON.parse(request.response);
        myName.innerHTML = "And " + obj.name;
      } else {
        alert("加载 JSON 失败");
      }
    }
  };
  request.send();
};

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 400) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          ulList.appendChild(li);
        });
      } else {
        alert("出错");
      }
      n += 1;
    }
  };
  request.send();
};
