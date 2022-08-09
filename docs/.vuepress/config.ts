import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

import navbar from "./navbar";
import sidebar from "./sidebar";
import notFound from "./notFound";

const config = defineUserConfig({
	// 設定檔
	base: "/", // 默認位置
	lang: "zh-TW", // 語言
	title: "Night Star Blog", // 標題
	description: "Night Star Blog", // 描述
	head: [
		// 額外的 head 標籤
		["meta", { charset: "utf-8" }],
		["meta", { name: "theme-color", content: "#22272e" }],
		[
			"link",
			{
				rel: "icon",
				href: "https://avatars.githubusercontent.com/u/57443207?v=4",
			},
		],
	],

	locales: {
		"/": {
			lang: "zh-TW",
			title: "夜辰個人網站",
			description: "夜辰個人網站",
		},
		"/en/": {
			lang: "en-US",
			title: "Night Star Blog",
			description: "Night Star Blog",
		},
	},

	// theme and its config
	theme: defaultTheme({
		home: "/",
		logo: "https://avatars.githubusercontent.com/u/57443207?v=4",
		navbar,
		sidebar,
		sidebarDepth: 3,
		repo: "https://github.com/Night-Star04/Night-Star04.github.io",
		docsRepo: "https://github.com/Night-Star04/Night-Star04.github.io",
		docsBranch: "master",
		docsDir: "docs",

		editLink: true,
		editLinkPattern: ":repo/edit/:branch/:path",
		editLinkText: "在 GitHub 上編輯此頁面",

		lastUpdated: true,
		lastUpdatedText: "最後更新:",

		contributors: true,
		contributorsText: "貢獻者",

		backToHome: "回到首頁",
		notFound,

		openInNewWindow: "在新視窗中開啟",
		toggleColorMode: "切換顏色模式",
		toggleSidebar: "切換導覽列",
		tip: "提示",
		warning: "注意",
		danger: "警告",

		locales: {
			"/": { selectLanguageText: "選擇語言", selectLanguageName: "中文" },
			"/en/": {
				selectLanguageText: "Select Language",
				selectLanguageName: "English",
			},
		},
	}),
});

export default config;
