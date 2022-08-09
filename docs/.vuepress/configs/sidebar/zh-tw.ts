import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebartw: SidebarConfig = {
	"/": [
		{
			text: "首頁",
			collapsible: true,
			children: ["/"],
		},
		{
			text: "專案",
			collapsible: true,
			children: [
				{ text: "Home", link: "/Project/" },
			],
		},
	],
};
