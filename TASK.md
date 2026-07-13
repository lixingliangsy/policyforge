# WorkBuddy 派发任务简报

> 项目目录：`E:/AgentCPM/07_一人公司出海项目/12_Micro_SaaS出海/policyforge`
> 本文件由 WorkBuddy（一人公司专家团·总指挥）自动派发。
> **执行方式**：用对应 IDE（Cursor / Trae / CodeBuddy）打开本项目，启动其内置 AI Agent / Composer，将下方任务交给它执行；完成后回到 WorkBuddy 做构建与验收。


---
### 📋 任务简报 @ 2026-07-09 21:26
**generate_code**

- 目标工具/语言：Next.js (Pages Router) + TypeScript
- 任务描述：
为产品 policyforge（App 法律文档生成器）新增'文档导出'功能：
1. 在现有'生成法律文档'结果展示区，新增 'Download .md' 与 'Download .txt' 两个按钮，用前端 Blob 把生成的文档内容下载为文件（无需后端）。
2. 保持现有 Mock 模式可跑（无 API key 也能演示导出）。
3. 不改现有页面路由结构；`npm run build` 必须通过；不引入任务以外的依赖。

- 验收标准：
  1. 代码可运行、通过类型检查与 `npm run build`
  2. 不引入任务以外的依赖（必要新增须说明）
  3. 核心逻辑不留占位 TODO；仅在需外部密钥/DB 处标注 TODO 并附 `.env.example`
  4. 改动保持与现有 Next.js Pages Router 结构一致


---
### 📋 任务简报 @ 2026-07-09 22:48
**generate_code**

- 目标工具/语言：Next.js (Pages Router) + TypeScript
- 任务描述：
为 policyforge 增加测试与发布质量加固（在现有导出功能之上，不要改动已实现的 Download .md/.txt）：
1. 在 Tool 渲染文档前对 appname 等用户输入做 HTML 转义，避免 XSS（pasted app name 被插入文档标题）。
2. 新增 scripts/smoke.mjs：启动 `next start -p 3124`，curl POST /api/tool (mock) 断言 200 且 result 含 'PRIVACY POLICY' 类字样；完成后 kill。package.json 加 "test:smoke"。
3. 新增 public/terms.html 与 public/privacy.html（静态页，简短占位），让页脚 Terms/Privacy 链接不再 404。
4. `npm run build` 必须通过；不引入任务以外的依赖。

- 验收标准：
  1. 代码可运行、通过类型检查与 `npm run build`
  2. 不引入任务以外的依赖（必要新增须说明）
  3. 核心逻辑不留占位 TODO；仅在需外部密钥/DB 处标注 TODO 并附 `.env.example`
  4. 改动保持与现有 Next.js Pages Router 结构一致
