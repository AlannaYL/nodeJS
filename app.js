// fs (file system)
const fs = require("fs");

// fs.writeFile("myFile.txt", "今天天氣不錯", (e) => {
//   if (e) throw e;
//   console.log("文件已經撰寫完畢")
// })

fs.readFile("myFile.txt", "utf8", (e, data) => {
  if (e) throw e;

  console.log(data);
})

// http module 可以創建網頁伺服器

