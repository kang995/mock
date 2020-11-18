#模拟数据

1. `mockData`模拟数据文件夹，可在该文件夹下创建多个json数据

2. `src/server.js`服务启动文件,可修改服务端口
  
   监听端口 `prot`可随意修改
   >```javascript
   >const port = 22222
   >app.listen(port, () => 
   >    console.log(`本机服务已启动>>> http://${getIP()}:${port}`)
   >);
   >```
   
3. 启动项目

   ```shell
   # 同步依赖
   npm install
   # 启动项目
   npm run serve
   ```
4. 数据请求访问连接该项目ip和端口，访问需要模拟数据的文件名即可

   `server.js`已对`method`做定向，目前只测试到`get`、`post`请求方法可用
   
   axios框架示例
   >```javascript
   >axios.get('/data.json')
   >axios.post('/data.json')
   >```# mock
# mock
