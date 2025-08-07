# WorkWay 職涯平台

## 專案簡介

WorkWay 是一個現代化的職涯管理平台，幫助用戶進行職涯規劃、預約諮詢服務，以及管理個人職業檔案。本專案使用 Vite + Bootstrap 5 開發，提供響應式設計和優良的使用者體驗。

## Tech Stack

- **前端框架**: Vite 6.3.5
- **UI 框架**: Bootstrap 5.3.6
- **樣式預處理**: SCSS
- **模板引擎**: EJS
- **部署**: GitHub Pages

## Requirement

- Node.js 版本 18 以上
- npm 或 yarn 套件管理器

檢查 Node.js 版本：
```bash
node -v
```

## Quick Start

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
開發伺服器會在 `http://localhost:5173/web-layout-training-WorkWay/pages/index.html` 啟動

### 3. 建構生產版本
```bash
npm run build
```

### 4. 預覽生產版本
```bash
npm run preview
```

## Project Structure

```
web-layout-training-WorkWay/
├── pages/              # 頁面文件
│   ├── index.html     # 首頁
│   ├── user.html      # 用戶管理頁面
│   ├── about.html     # 關於我們
│   └── contact.html   # 聯絡我們
├── layout/            # EJS 模板組件
│   ├── header.ejs     # 頁首組件
│   └── footer.ejs     # 頁尾組件
├── assets/            # 靜態資源
│   ├── images/        # 圖片資源
│   └── scss/          # SCSS 樣式檔案
│       ├── all.scss   # 主要樣式入口
│       ├── base/      # 基礎樣式
│       ├── layout/    # 版面樣式
│       ├── pages/     # 頁面特定樣式
│       └── utils/     # 工具樣式和變數
├── main.js            # JavaScript 入口點
├── vite.config.js     # Vite 設定檔
└── package.json       # 專案設定檔
```

## Deployment

### GitHub Pages 自動部署
```bash
npm run deploy
```

此指令會：
1. 執行 `vite build` 建構專案
2. 使用 `gh-pages` 將建構結果部署到 GitHub Pages

### 手動部署步驟
1. 確保程式碼已推送到 GitHub
2. 執行部署指令
3. 在 GitHub Repository 設定中啟用 GitHub Pages
4. 選擇 `gh-pages` 分支作為來源

## 開發指南

### 可用指令
- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建構生產版本
- `npm run preview` - 預覽生產版本
- `npm run deploy` - 部署到 GitHub Pages

### 樣式開發
- 主要樣式檔案位於 `assets/scss/`
- 使用 SCSS 預處理器
- 支援 Bootstrap 5 客製化
- 開發模式會自動監聽樣式變更

### 頁面開發
- 頁面檔案放在 `pages/` 資料夾
- 使用 EJS 模板引擎進行組件化開發
- 支援 include 語法引入共用組件


## 授權

本專案僅供學習和開發使用。

## 版本歷史

- v1.0.0 - 初始版本發布

---

如有任何問題或建議，歡迎提出 Issue 或 Pull Request。