# 新年祝福烟花网站

一个用于庆祝新年的网站，包含首页设置、信封展示和烟花效果。

## 功能特性

- **首页设置**：填写发件人、收件人信息和多条祝福语（支持排序）
- **生成链接**：一键生成包含祝福信息的唯一链接
- **信封展示**：显示发件人和收件人信息的信封页面
- **烟花效果**：点击信封后展示绚丽的烟花动画，并在烟花中显示祝福语

## 技术栈

- HTML5
- CSS3
- JavaScript
- Canvas API
- pnpm (包管理)

## 快速开始

### 1. 安装依赖

使用 pnpm 安装项目依赖：

```bash
pnpm install
```

### 2. 启动本地服务器

```bash
pnpm dev
```

或

```bash
pnpm start
```

服务器将在 `http://localhost:3000` 启动，并自动打开首页。

### 3. 使用流程

1. 在首页填写发件人、收件人信息
2. 添加和排序祝福语
3. 点击「发送祝福」按钮生成链接
4. 复制链接发送给收件人
5. 收件人打开链接查看信封
6. 点击信封欣赏烟花表演和祝福语

## 项目结构

```
happy_new_year/
├── index.html         # 首页设置页面
├── envelope.html      # 信封展示页面
├── fireworks.html     # 烟花效果页面
├── package.json       # 项目配置和依赖
└── README.md          # 项目说明
```

## 自定义配置

- **烟花颜色**：在 `fireworks.html` 中的 `getRandomColor()` 方法修改颜色数组
- **烟花数量**：在 `FireworkExplosion` 类中调整 `particleCount` 属性
- **祝福语显示概率**：在 `Firework` 类中修改 `showWish` 变量的阈值

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+