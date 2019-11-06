## fs
### 打开文件
#### 异步打开文件
```fs.open(path,flags[,mode],callback);```
参数说明：
- path:文件的路径
- flags：文件打开的行为
- mode:设置文件模式(权限) 文件创建默认权限为0o666(可读写) mode设置文件模式(权限和粘滞位) 但仅限于创建创建文件的情况
- callback:回调函数 带有两个参数 callback(err,fd)
#### 同步打开文件
```fs.openSync(path,flags[,mode])```
### 关闭文件
#### 异步关闭文件
```fs.close(fd,callback)```
参数说明:
- fd:通过fs.open()方法返回的文件描述符
- callback:回调函数 除了可能的一场 完成回调没有其他参数
