"use strict";(self.webpackChunkvuepress_theme_reco_demo=self.webpackChunkvuepress_theme_reco_demo||[]).push([[45],{3198:(e,n,l)=>{l.r(n),l.d(n,{comp:()=>x,data:()=>y});var i=l(641);const s=(0,i.Fv)('<h3 id="换肤方案简介" tabindex="-1"><a class="header-anchor" href="#换肤方案简介"><span>换肤方案简介</span></a></h3><table><thead><tr><th style="text-align:left;">实现方案</th><th>问题</th><th><div style="width:120px;">备注信息 </div></th></tr></thead><tbody><tr><td style="text-align:left;">点击切换主题按钮，重启项目，<br>重新引入对应的主题</td><td>H5操作无异常，运行到APP后出现异常：<br>App V3版本不支持在js中引入css，scss文件</td><td>考虑弃用</td></tr><tr><td style="text-align:left;">项目入口文件中App.vue中写一个视图元素<br>配置一个动态style的样式</td><td>uniapp不支持在App.vue里面添加template标签</td><td>无法实现</td></tr><tr><td style="text-align:left;">在每一个页面中根节点添加一个动态style</td><td>页面中不能使用page{}修改页面样式</td><td>可行</td></tr></tbody></table><p><code>App.vue</code> 是 <code>uni-app</code> 的主组件，所有页面都是在 <code>App.vue</code> 下进行切换的，是页面入口文件。但 <code>App.vue</code> 本身不是页面，这里不能编写视图元素，也就是没有 <code>&lt;template&gt;</code>。</p><h3 id="换肤实现原理" tabindex="-1"><a class="header-anchor" href="#换肤实现原理"><span>换肤实现原理</span></a></h3><ol><li>配置主题 <code>css变量</code> 文件</li><li>使用 <code>vuex</code> 缓存同步样式设置， 使用 <code>stroage</code> 缓存样式</li><li>配置全局 <code>SCSS变量</code> 和全局 <code>class</code></li><li>添加 <code>mixin</code> 样式混入</li><li>初始化主题和切换主题</li><li>单个页面使用</li></ol><h3 id="配置主题-css-文件" tabindex="-1"><a class="header-anchor" href="#配置主题-css-文件"><span>配置主题 CSS 文件</span></a></h3>',6),a=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,'import light from "./theme-light";\nimport dark from "./theme-dark";\nconst themes = {\n\tlight,\n\tdark\n}\nexport default themes\n')]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),t=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"const light = {\n  value: [\n    // 黑白色\n    { name: '--white', value: '#ffffff'},\n    { name: '--black', value: '#000000'},\n    // 背景色\n    { name: '--bg-color', value: '#f7f9fc'}, // 页面背景色\n    // 主题色\n    { name: '--primary-color', value: '#286df7'},\n    { name: '--primary-color-disabled', value: '#afcafa'},\n    { name: '--primary-color-light', value: '#e9f2ff'},\n  ],\n  tabBar:{\n    color: '#808080',\n    selectedColor: '#1D61F6',\n    backgroundColor:'#ffffff'\n  },\n  // Android 上的 backgroundColor 参数有限制，黑色大于 rgb(30,30,30), 白色小于 rgb(235,235,235)\n  navbar: { \n    frontColor: '#000000', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000\n    backgroundColor: '#dddddd',\n  }\n}\nexport default light\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),r=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"const dark = {\n  value: [\n    // 黑白色\n    { name: '--white', value: '#ffffff'},\n    { name: '--black', value: '#000000'},\n    // 背景色\n    { name: '--bg-color', value: '#f7f9fc'}, // 页面背景色\n    // 主题色\n    { name: '--primary-color', value: '#286df7'},\n    { name: '--primary-color-disabled', value: '#afcafa'},\n    { name: '--primary-color-light', value: '#e9f2ff'},\n  ],\n  tabBar:{\n    color: \"#ffffff\",\n    selectedColor: \"#1D61F6\",\n    backgroundColor: \"#000000\",\n  },\n  // Android 上的 backgroundColor 参数有限制，黑色大于 rgb(30,30,30), 白色小于 rgb(235,235,235)\n  navbar: { \n    frontColor: '#ffffff', // 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000\n    backgroundColor: '#333333',\n  }\n}\nexport default dark\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),d=(0,i.Fv)('<h3 id="配置全局-scss-变量" tabindex="-1"><a class="header-anchor" href="#配置全局-scss-变量"><span>配置全局 SCSS 变量</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.status_bar {\n  height: var(--status-bar-height);\n  width: 100%;\n}\n\n/* 项目颜色配置 */\n$black: var(--black);\n$white: var(--white);\n\n/* 主色 */\n$primary-color: var(--primary-color);\n$primary-color-disabled: var(--primary-color-disabled);\n$primary-color-light: var(--primary-color-light);\n/* 主色 */\n/* 文字颜色 */\n\n/* 背景颜色 */\n$bg-color: var(--bg-color);\n/* 背景颜色 */\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步并缓存样式" tabindex="-1"><a class="header-anchor" href="#同步并缓存样式"><span>同步并缓存样式</span></a></h3>',3),m=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"// 引入主题\nimport themes from '@/theme/index'\nimport storage from '@/utils/storage'\n \nconst store = {\n\tstate: {\n        // 写上默认皮肤的数据\n\t\tskin: '',\n\t\tskinMap: {},\n\t\ttheme: themes[storage.getItem('theme') || 'light']\n\t},\n\tgetters: {\n \n\t},\n\tmutations: {\n\t\t// 皮肤更换\n\t\tskinPeeler(state,skin = []){\n\t\t\t// 将皮肤配置JSON转为以 ; 分割的字符串（style 值）\n\t\t\tlet styleMap = {}\n\t\t\tlet style = skin.map((item,index)=>{\n\t\t\t\tstyleMap[item.name] = item.value\n\t\t\t\treturn `${item.name}:${item.value}`\n\t\t\t}).join(\";\");\n\t\t\tstate.skin = style;\n\t\t\tstate.skinMap = styleMap;\n\t\t\tconsole.log(skin,styleMap, style, 'mutations')\n\n\t\t},\n\t\tupdateTheme(state,mode='light'){\n\t\t\tstate.theme = themes[mode];\n\t\t}\n\t}\n}\n \nexport default store\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),u=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"const getters = {\n  skin: state => state.theme.skin,\n  theme: state => state.theme.theme,\n  skinMap: state => state.theme.skinMap,\n}\nexport default getters\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),c=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"import Vue from 'vue'\nimport Vuex from 'vuex'\nimport user from '@/store/modules/user'\nimport theme from '@/store/modules/theme'\nimport getters from './getters'\nVue.use(Vuex)\nconst store = new Vuex.Store({\n  modules: {\n    user,\n    theme\n  },\n  getters\n})\nexport default store\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),v=(0,i.Lk)("h3",{id:"minix-样式混入",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#minix-样式混入"},[(0,i.Lk)("span",null,"Minix 样式混入")])],-1),b=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"import { mapGetters } from 'vuex'\nimport storage from '@/utils/storage'\nimport themes from '@/theme/index'\nexport default {\n  install(Vue) {\n    Vue.mixin({\n      onShow() {\n        setTimeout(() => {\n          this.initNavbar()\n        }, 100)\n      },\n      computed: {\n        ...mapGetters(['skin', 'theme', 'skinMap'])\n      },\n      methods: {\n        // 初始化tabbar和navbar样式\n        initNavbar() {\n          let theme = storage.getItem('theme') || 'light'\n          let themeObj = themes[theme]\n          uni.setTabBarStyle(themeObj.tabBar)\n          uni.setNavigationBarColor(themeObj.navbar)\n          console.log(themeObj, \"initNavbar\")\n        },\n        // 获取某个css变量的颜色值\n        getStyleProperty(key) {\n          return this.skinMap[key]\n        }\n      }\n    })\n  }\n}\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),k=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"import themeMixin from './mixin/themeMixin';\nVue.use(themeMixin);\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),o=(0,i.Lk)("h3",{id:"切换与使用主题",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#切换与使用主题"},[(0,i.Lk)("span",null,"切换与使用主题")])],-1),L=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"// 初始化主题\nimport themes from '@/theme/index'\nimport store from '@/store'\nimport storage from '@/utils/storage'\n\n...\n\nmethods: {\n  // 初始化主题\n  initTheme() {\n    let theme = storage.getItem('theme') || 'light'\n    let themeObj = themes[theme]\n    store.commit('skinPeeler', themeObj.value)\n    console.log(themeObj, \"initTheme\")\n    storage.setItem('theme', theme)\n  },\n}\n\n...\n\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),h=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,"import storage from \"@/utils/storage.js\"\nimport themes from '@/theme/index'\nimport { mapMutations } from 'vuex'\n\n...\n\nmethods: {\n  ...mapMutations({\n    setTheme : 'skinPeeler',\n\tupdateTheme: 'updateTheme'\n  }),\n  // 切换主题\n  changeTheme(type) {\n    let theme = themes[type]\n    this.setTheme(theme.value)\n    this.updateTheme(type)\n    storage.setItem('theme', type)\n    uni.setTabBarStyle(theme.tabBar)\n    uni.setNavigationBarColor(theme.navbar)\n    console.log(theme, \"changeTheme\")\n  },\n}\n\n...\n\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),g=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,'<template>\n  <view :style="skin">\n    <u-calendar \n      v-model="showCalendar" \n      :active-bg-color="activeBgColor" \n      mode="date">\n    </u-calendar>\n  \t...\n  </view>\n</template>\n<script>\n\n...\n\ncomputed: {\n  activeColor() {\n    return this.getStyleProperty(\'--primary-color\')\n  },\n}\n...\n\n<\/script>\n')]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),p=(0,i.Lk)("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[(0,i.Lk)("pre",{class:"language-text"},[(0,i.Lk)("code",null,".home-page {\n  color: $primary-color;\n  background: var(--bg-color);\n}\n")]),(0,i.Lk)("div",{class:"line-numbers","aria-hidden":"true"},[(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"}),(0,i.Lk)("div",{class:"line-number"})])],-1),f={},x=(0,l(6262).A)(f,[["render",function(e,n){const l=(0,i.g2)("CodeGroupItem"),f=(0,i.g2)("CodeGroup");return(0,i.uX)(),(0,i.CE)("div",null,[s,(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,{title:"theme/index.js"},{default:(0,i.k6)((()=>[a])),_:1}),(0,i.bF)(l,{title:"theme/theme-light.js"},{default:(0,i.k6)((()=>[t])),_:1}),(0,i.bF)(l,{title:"theme/theme-dark.js"},{default:(0,i.k6)((()=>[r])),_:1})])),_:1}),d,(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,{title:"store/modules/theme.js"},{default:(0,i.k6)((()=>[m])),_:1}),(0,i.bF)(l,{title:"store/getters.js"},{default:(0,i.k6)((()=>[u])),_:1}),(0,i.bF)(l,{title:"store/index.js"},{default:(0,i.k6)((()=>[c])),_:1})])),_:1}),v,(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,{title:"mixin/themeMixin.js"},{default:(0,i.k6)((()=>[b])),_:1}),(0,i.bF)(l,{title:"main.js"},{default:(0,i.k6)((()=>[k])),_:1})])),_:1}),o,(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(l,{title:"App.vue"},{default:(0,i.k6)((()=>[L])),_:1}),(0,i.bF)(l,{title:"pages/主题切换.vue"},{default:(0,i.k6)((()=>[h])),_:1}),(0,i.bF)(l,{title:"pages/页面使用.vue"},{default:(0,i.k6)((()=>[g])),_:1}),(0,i.bF)(l,{title:"pages/xxx.scss"},{default:(0,i.k6)((()=>[p])),_:1})])),_:1})])}]]),y=JSON.parse('{"path":"/blogs/uniapp/2024/uniapp-multi-theme.html","title":"UNIAPP多主题","lang":"zh-CN","frontmatter":{"title":"UNIAPP多主题","date":"2024/5/9","tags":["FE","VUE","UNIAPP"],"categories":["UNIAPP"]},"headers":[{"level":3,"title":"换肤方案简介","slug":"换肤方案简介","link":"#换肤方案简介","children":[]},{"level":3,"title":"换肤实现原理","slug":"换肤实现原理","link":"#换肤实现原理","children":[]},{"level":3,"title":"配置主题 CSS 文件","slug":"配置主题-css-文件","link":"#配置主题-css-文件","children":[]},{"level":3,"title":"配置全局 SCSS 变量","slug":"配置全局-scss-变量","link":"#配置全局-scss-变量","children":[]},{"level":3,"title":"同步并缓存样式","slug":"同步并缓存样式","link":"#同步并缓存样式","children":[]},{"level":3,"title":"Minix 样式混入","slug":"minix-样式混入","link":"#minix-样式混入","children":[]},{"level":3,"title":"切换与使用主题","slug":"切换与使用主题","link":"#切换与使用主题","children":[]}],"git":{"createdTime":1715332427000,"updatedTime":1715332427000,"contributors":[{"name":"lirioing","email":"lirioing@163.com","commits":1}]},"filePathRelative":"blogs/uniapp/2024/uniapp-multi-theme.md"}')}}]);