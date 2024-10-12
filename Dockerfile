# 使用官方 Node.js 作为构建环境
FROM node:16 AS build-stage

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY . .

# 安装依赖
RUN npm install

# 构建项目
RUN npm run build

# 使用 nginx 作为生产环境的服务器
FROM nginx:alpine

# 复制构建的文件到 nginx 服务器的 html 目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制自定义的 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
