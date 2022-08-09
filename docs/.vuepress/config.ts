import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

import {
	locales,
	navbartw,
	navbaren,
	sidebartw,
	sidebaren,
	notFound,
	plugins,
} from "./configs";

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

	locales,

	// theme and its config
	theme: defaultTheme({
		home: "/",
		logo: "https://avatars.githubusercontent.com/u/57443207?v=4",

		sidebarDepth: 3,
		repo: "https://github.com/Night-Star04/Night-Star04.github.io",
		docsRepo: "https://github.com/Night-Star04/Night-Star04.github.io",
		docsBranch: "main",
		docsDir: "docs",
		editLink: true,
		editLinkPattern: ":repo/edit/:branch/:path",
		lastUpdated: true,
		contributors: true,

		locales: {
			"/": {
				notFound,
				navbar: navbartw,
				sidebar: sidebartw,
				selectLanguageText: "選擇語言",
				selectLanguageName: "繁體中文",
				lastUpdatedText: "最後更新",
				editLinkText: "在 GitHub 上編輯此頁面",
				contributorsText: "貢獻者",
				backToHome: "回到首頁",
				toggleColorMode: "切換顏色模式",
				openInNewWindow: "在新視窗中開啟",
				toggleSidebar: "切換導覽列",
				tip: "提示",
				warning: "注意",
				danger: "警告",
			},
			"/en/": {
				navbar: navbaren,
				sidebar: sidebaren,
				selectLanguageText: "Select Language",
				selectLanguageName: "English",
				editLinkText: "Edit this page on GitHub",
			},
		},
	}),

	// plugins config
	plugins,
});

export default config;
