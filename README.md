# 电子木鱼 App - MVP版本

## 项目概述
这是一个极简的电子木鱼应用，专注于提供纯粹的"敲木鱼"体验。

## 核心功能
- 点击木鱼图片增加功德数
- 每次点击播放敲击音效
- 显示"功德+1"动画效果
- 功德数计数器显示

## MVP特点
- 零配置：下载即用
- 单一功能：只专注敲木鱼
- 即时反馈：点击立即响应
- 无数据持久化：重启应用重置计数

## 安装运行

### 前置条件
- Node.js (推荐 16.x 或更高版本)
- npm 或 yarn
- Expo CLI

### 安装依赖
```bash
npm install
```

### 运行应用
```bash
# 启动开发服务器
npm start

# 在iOS模拟器中运行
npm run ios

# 在Android模拟器中运行
npm run android

# 在Web浏览器中运行
npm run web
```

## 项目结构
```
woodfish/
├── App.js                 # 主应用组件
├── components/            # 组件文件夹
│   ├── MainScreen.js      # 主屏幕组件
│   ├── WoodenFishImage.js # 木鱼图片组件
│   ├── MeritCounterText.js# 功德计数器组件
│   └── MeritPlusOneAnimation.js # +1动画组件
├── assets/               # 资源文件夹
│   ├── wooden_fish.png   # 木鱼图片（需添加）
│   └── tap_sound.mp3     # 敲击音效（需添加）
└── package.json          # 项目配置
```

## 待完成
1. 添加真实的木鱼图片 (wooden_fish.png)
2. 添加敲击音效文件 (tap_sound.mp3)
3. 添加应用图标和启动画面

## 技术栈
- React Native + Expo
- expo-av (音频播放)
- React Hooks (状态管理)