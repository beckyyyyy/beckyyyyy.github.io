export type Work = {
	title: string;
	details: string[];
	tags: string[];
	github?: string;
	live?: string | {label: string; url: string}[];
	image?: string;
	accent: string;
};

export const works: Work[] = [
	{
		title: 'PX Mart Official Website',
		details: ['首次採用前後端分離架構，快速掌握 <span class="hl">Next.js 搭配 Strapi Headless CMS</span> 的開發節奏', '導入 <span class="hl">Storybook</span> 進行組件驅動開發（CDD），確保 UI 高度一致性', '建立標準化元件庫，為後續團隊協作奠定規範基礎'],
		tags: ['React', 'CSS/Sass', 'Tailwind CSS', 'Next.js', 'Strapi CMS', 'Storybook'],
		live: 'https://www.pxmart.com.tw/',
		image: 'img-work-pxmart.png',
		accent: '#ffb7b7',
	},
	{
		title: 'LCY Group Official Website',
		details: ['深度實作 <span class="hl">i18n 國際化</span>，解決路由渲染、語系切換快取等技術細節', '處理跨語系版型適應問題，如不同語言<span class="hl">字串長度差異</span>造成的排版問題', '運用 <span class="hl">Storybook</span> 管理可複用的多國語系組件，確保複雜架構下程式碼的可讀性與擴充性'],
		tags: ['React', 'CSS/Sass', 'Tailwind CSS', 'Next.js', 'Strapi CMS', 'Storybook', 'i18n'],
		image: 'img-work-lcy.png',
		accent: '#a8f0d8',
	},
	{
		title: 'Simmons Taiwan Official Website',
		details: ['獨立處理<span class="hl">視覺動態呈現與 UX 細節優化</span>，精準掌控技術決策與開發時程', '嚴格執行 <span class="hl">Storybook 組件文件化</span>與代碼架構規範，確保個人開發也符合專業團隊標準'],
		tags: ['React', 'CSS/Sass', 'Tailwind CSS', 'Next.js', 'Strapi CMS', 'Storybook'],
		live: 'https://beckyyyyy.github.io/rock-paper-scissors-game/',
		image: 'img-work-simmons.png',
		accent: '#d4bfff',
	},
	{
		title: 'Isobar Official Website',
		details: ['<span class="hl">短時間內</span>完成公司官網從零到上線，統籌全程開發節奏與技術決策', '實作<span class="hl">頁面過場動畫</span>，提升瀏覽體驗的視覺流暢度', '搭配 <span class="hl">Storybook</span> 管理組件規範，確保獨立開發維持團隊級代碼品質'],
		tags: ['React', 'CSS/Sass', 'Next.js', 'Strapi CMS', 'Storybook'],
		live: 'https://beckyyyyy.github.io/bootstrap-newspage/',
		image: 'img-work-isobar.png',
		accent: '#b8e0ff',
	},
	{
		title: 'Echo&Trace',
		details: ['從零規劃<span class="hl">資料庫結構</span>，以 bookId 為核心串聯身份驗證與音檔儲存邏輯', '整合 <span class="hl">Cloudflare D1 與 R2</span>，支援音檔上傳、儲存與跨裝置串流回放', '打造供書籍購買者使用的<span class="hl">錄音平台</span>，透過 bookId 完成身份驗證與個人化音檔管理', '以 <span class="hl">Cloudflare Pages</span> 部署上線，串接 D1、R2 與 Workers 形成完整全端架構'],
		tags: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare D1', 'Cloudflare R2'],
		live: 'https://voice.echoandtrace.com/',
		image: 'img-work-echotrace.png',
		accent: '#b8e0ff',
	},
	{
		title: 'Digi Asia 2024/2026',
		details: ['首次採用 <span class="hl">Astro</span> 框架，掌握 Islands 架構與靜態生成開發模式', '2024 AI 工具普及前，手工實作<span class="hl">手勢監聽與時間軸拖曳</span>互動動畫，展現紮實的原生開發能力', '2026 版本善用 <span class="hl">AI 輔助開發</span>，導入 Three.js 等複雜動畫效果，大幅提升視覺表現力'],
		tags: ['Astro', 'Three.js', 'Tailwind CSS'],
		live: [
			{label: '2024', url: 'https://digiasia.org.tw/2024/'},
			{label: '2026', url: 'https://digiasia.org.tw/2026/'},
		],
		image: 'img-work-digiasia.png',
		accent: '#ffe599',
	},
];
