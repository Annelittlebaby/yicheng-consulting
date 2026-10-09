# 翼乘咨询 V4｜克制出版物式移动品牌画册

公开网址：https://annelittlebaby.github.io/yicheng-consulting/

## 本版变化
- 14 页采用企业年度报告式视觉系统：暖白纸张、深蓝灰文字、严格网格、纪实摄影与单一钴蓝强调线。
- 原版翼形 Logo 仅作为小比例品牌署名使用；目录、favicon 与 Knocket 同样使用该原版 Logo。
- 每页使用 JPG 轻量网页资源，PNG 高分辨率原图在本地交付包中保留。
- 图片完整显示，无裁切；可上下翻页、左右轻扫、键盘切换和目录导航；支持动态视口、安全区、减少动态偏好。浏览器双指放大可查看细节。
- 图中文字之外保留语义文案以支持搜索与读屏。

## 仓库结构
index.html、style.css、app.js、config.js、knocket-install.js、content.json、logo-original.png、share.jpg、slide-01.jpg 至 slide-14.jpg、README.md、.nojekyll。

## Knocket
已使用你账号中的官方公开安装 identifier，前端不含密码或 AI API 密钥。欢迎页与对话页采用中文、原版 Logo、品牌浅蓝色。
客服气泡移至翻页栏上方，避免遮挡导航。AI Agent 已连接 DeepSeek，知识库覆盖服务范围、案例边界、价格与周期、客户适配和人工转接。访问 https://console.trtc.io/knocket-inbox 登录后，可在 Inbox 查看客户留言、接管会话并回复；手机可访问 https://console.trtc.io/knocket-inbox-h5。

网站已发送一条“网站联调测试”消息并在 Inbox 确认收到，该消息不是客户线索。

## 维护
- 修改画面：替换对应 slide-XX.jpg；文字同步更新 index.html 的 alt 和语义文本及 content.json。
- 修改客服：在 Knocket 控制台 Web Widget 中修改，再 Save。
- 更换客服项目：更新 knocket-install.js 的公开安装 identifier。
- 在 config.js 可增设真实预约 URL、邮箱、电话或微信。当前留空。
- 所有案例均为场景示例，非客户案例；不得将模拟业务场景或 AI 画面写成真实业绩。

GitHub Pages 发布来源为 main 分支根目录，无需构建。AI 生成图中文字已做视觉检查，但用户可继续逐页修订；本版不是可编辑文字的 PPTX。
