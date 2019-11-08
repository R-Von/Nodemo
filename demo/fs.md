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
### 读写文件
#### 异步读取文件
```fs.read(fd,buffer,offset,length,position)```
参数说明:
- fd:通过fs.open()方法返回的文件描述符
- buffer:数据写入的缓冲区
- offset:是缓冲区中开始写入的偏移量 一般写成0
- position:指定从文件中开始读取的位置
- callback:回调函数 三个参数 err,bytesRead,buffer 
#### 异步写入文件
```fs.write(fd,buffer,offset,length,position,callback)```
参数说明:
- fd:从指定的文件写入数据
- buffer:是数据写入的缓冲区
- offset:指定要写入的buffer部分
- length:是一个整数 指定要写入的字节数
- position:指定应该写入此数据的文件开头的偏移量
- callback:回调有三个参数(err,bytesWritten,buffer)
#### 异步读取文件
```fs.readFile(path,[options],callback)```
- path:文件名或者文件描述符
- options:该参数是一个对象,包含{encoding,flag} encoding默认null flag默认‘r’
#### 同步读取文件
```fs.readFileSync(filename,[options])```
#### 异步写入文件
```fs.writeFile(file,data,[options],callback)```
参数说明:
- file:文件名或文件描述符
- data:要写入文件的数据 String或者Buffer 对象
- options:对象 包含{encoding,mode,flag} 默认值分别为 'utf8' '0o666' 'w'
- callback:回调函数
### 文件操作
#### 获取文件信息
```fs.stat(path,callback)```
参数说明:
- path:文件路径
- callback:回调函数 带两个参数 (err,stats)
#### 截取文件
```fs.ftruncate(fd[,len],callback)```
参数说明:
- fd:通过fs.open()方法返回的文件描述符
- len:文件内容截取的长度 默认为0
- callback: 除了可能的异常 完成回调没有其他参数
#### 删除文件
```fs.unlink(path,callback)```
参数说明:
- path:文件路径
- callback:除了可能得异常 完成回调没有其他参数
#### 修改文件名
```fs.rename(oldPath,newPath,callback)```
- oldPath:原来的文件名字
- newPath:新的文件名字
- callback:回调函数
### 目录操作
#### 新建目录
```fs.mkdir(path[,options],callback)```
参数说明
- path:文件路径
- option:有两个参数 recursive表示是否以递归的方式创建目录 默认false mode设置目录权限 默认0o777
- callback:回调函数
#### 读取目录
```fs.readdir(path[,option],callback)```
参数说明
- path:文件路径
- options:两个参数 encoding,withFileTypes 默认'utf8' false
- callback:回调函数 err为错误信息 files为目录下的文件数组列表
#### 删除目录
```fs.rmdir(path,callback)```
参数说明:
- path:文件路径
- callback:回调函数