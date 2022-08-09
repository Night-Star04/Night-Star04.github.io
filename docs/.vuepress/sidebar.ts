import type { SidebarConfig } from "@vuepress/theme-default";

const sidebar: SidebarConfig = {
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
	"/en/": [
		{
			text: "Home",
			collapsible: true,
			children: ["/en/"],
		},
		{
			text: "Project",
			collapsible: true,
			children: [
				{ text: "Home", link: "/en/Project/" },
			],
		},
	],
};

export default sidebar;
