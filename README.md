# 李小萌网页简历与作品集

这是一个无需构建工具、可直接部署到 GitHub Pages / Vercel / Netlify 的静态网站。

## 文件结构

- `index.html`：网页简历首页
- `portfolio.html`：独立作品集页面
- `assets/css/style.css`：全站样式
- `assets/js/main.js`：移动端导航、作品分类与大图预览
- `assets/images/`：头像与作品集页面图片
- `documents/`：PDF 简历与完整作品集

## 本地预览

直接双击 `index.html` 即可浏览。推荐在项目目录运行：

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 新建 GitHub 仓库并上传本文件夹内的全部文件。
2. 打开仓库 `Settings → Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支与 `/ (root)`，保存后等待部署。

## 修改内容

- 简历文字：编辑 `index.html`
- 作品集标题与分组：编辑 `portfolio.html`
- 配色与排版：编辑 `assets/css/style.css` 顶部变量
- 联系方式：搜索并替换电话、邮箱和微信号
