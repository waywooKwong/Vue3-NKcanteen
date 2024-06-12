# 项目日志

## 进程记录

1. 讨论项目选题 20240515

2. 分工确定任务 20240520

3. 基本完成分块组件设计 v1.0 20240604

4. 组合全部组件 v2.0 20240611

## 代码规范

### Prettier

规范代码格式

1. 文件： .prettierrc,  .prettierigonre

2. jsconfig.json中添加 ：

```
"scripts": 
{
    "_comments": "prettier 配置文件",
    "format": "prettier --write \"src/**/*.{js,vue,css,scss,html,json,md}\"" 
},
```

3. 运行npm run format
