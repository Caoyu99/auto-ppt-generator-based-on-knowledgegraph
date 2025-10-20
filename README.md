
### 安装依赖

```bash
//electron的安装请注意npm换源或vpn
npm install

```
### 开发

```bash
npm run dev
```
### 打包选项
```bash
npm run build:win 
npm run build:mac 
npm run build:linux 
//打包过程中可能存在各种异常情况，猜测可能与electron版本、网络状态和路径命名有关，如果不追求桌面应用，可以单独把render文件夹视为vue3项目，按网页方式打包。
```
### 注意事项
 - 尽量放在英文路径下，运行时如果控制台出现乱码可以尝试输入chcp 65001
 - src目录下的renderer.zip可以视作一个完整的vue3项目，如果需要向网页移植可以使用该压缩包。
 - vite.config.js中的api路径请设置为服务端的地址，否则无法正确访问接口。当前配置为loaclhost。
