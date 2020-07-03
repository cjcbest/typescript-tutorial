import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-45256157-14" }),
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "index.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "TypeScript \u5165\u95E8\u6559\u7A0B" }),
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "text": "简介",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "text": "基础",
            "pagePath": "basics/README.md"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "text": "进阶",
            "pagePath": "advanced/README.md"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "text": "工程",
            "pagePath": "engineering/README.md"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'previous': null,
    'next': {
        "text": "简介",
        "link": "introduction/index.html"
    },
    config: { "srcDir": "src", "publicDir": "public", "base": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "TypeScript 入门教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>TypeScript 入门教程</h1>\n<p><a href="https://github.com/xcatliu/typescript-tutorial/actions"><img src="https://github.com/xcatliu/typescript-tutorial/workflows/gh-pages/badge.svg" alt="Actions Status"></a></p>\n<p>从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript。</p>\n<h2 id="%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">关于本书<a class="anchor" href="#%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">§</a></h2>\n<ul>\n<li><a href="https://ts.xcatliu.com/">在线阅读</a></li>\n<li><a href="https://github.com/xcatliu/typescript-tutorial">GitHub 地址</a></li>\n<li>作者：<a href="https://github.com/xcatliu/">xcatliu</a></li>\n<li><a href="https://jq.qq.com/?_wv=1027&amp;k=5nkkFCl">加入官方 QQ 群 767142358</a></li>\n<li>本网站使用 <a href="https://github.com/xcatliu/pagic">Pagic</a> 构建</li>\n</ul>\n<p>本书是作者在学习 <a href="http://www.typescriptlang.org/">TypeScript</a> 后整理的学习笔记。</p>\n<p>随着对 TypeScript 理解的加深和 TypeScript 社区的发展，本书也会做出相应的更新，欢迎大家 <a href="https://github.com/xcatliu/typescript-tutorial">Star 收藏</a>。</p>\n<ul>\n<li>发现文章内容有问题，可以直接在页面下方评论</li>\n<li>对项目的建议，可以<a href="https://github.com/xcatliu/typescript-tutorial/issues/new">提交 issue</a> 向作者反馈</li>\n<li>欢迎直接提交 pull-request 参与贡献</li>\n</ul>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%86%99%E6%9C%AC%E4%B9%A6">为什么要写本书<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%86%99%E6%9C%AC%E4%B9%A6">§</a></h2>\n<p>TypeScript 虽然有<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>及其<a href="https://zhongsp.gitbook.io/typescript-handbook/">非官方中文版</a>，但是它每一章都希望能详尽的描述一个概念，导致前面的章节就会包含很多后面才会学习到的内容，而有些本该一开始就了解的基础知识却在后面才会涉及。如果是初学者，可能需要阅读多次才能理解。所以它更适合用来查阅，而不是学习。</p>\n<p>与官方手册不同，本书着重于从 JavaScript 程序员的角度总结思考，循序渐进的理解 TypeScript，希望能给大家一些帮助和启示。</p>\n<p>由于一些知识点与官方手册重合度很高，本书会在相应章节推荐直接阅读中文手册。</p>\n<h2 id="%E5%85%B3%E4%BA%8E-typescript">关于 TypeScript<a class="anchor" href="#%E5%85%B3%E4%BA%8E-typescript">§</a></h2>\n<p><a href="http://www.typescriptlang.org/">TypeScript</a> 是 JavaScript 的一个超集，主要提供了<strong>类型系统</strong>和<strong>对 ES6 的支持</strong>，它由 Microsoft 开发，代码<a href="https://github.com/Microsoft/TypeScript">开源于 GitHub</a> 上。</p>\n<p>它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端社区中不可忽视的力量，不仅在 Microsoft 内部得到广泛运用，而且 Google 的 <a href="https://angular.io/">Angular2</a> 也使用了 TypeScript 作为开发语言。</p>\n<h2 id="%E9%80%82%E5%90%88%E4%BA%BA%E7%BE%A4">适合人群<a class="anchor" href="#%E9%80%82%E5%90%88%E4%BA%BA%E7%BE%A4">§</a></h2>\n<p>本书适合以下人群</p>\n<ul>\n<li>熟悉 JavaScript，至少阅读过一遍<a href="https://book.douban.com/subject/10546125/">《JavaScript 高级程序设计》</a></li>\n<li>了解 ES6，推荐阅读 <a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a></li>\n<li>了解 Node.js，会用 npm 安装及使用一些工具</li>\n<li>想了解 TypeScript 或者想对 TypeScript 有更深的理解</li>\n</ul>\n<p>本书<strong>不适合</strong>以下人群</p>\n<ul>\n<li>没有系统学习过 JavaScript</li>\n<li>已经能够很熟练的运用 TypeScript</li>\n</ul>\n<h2 id="%E8%AF%84%E4%BB%B7">评价<a class="anchor" href="#%E8%AF%84%E4%BB%B7">§</a></h2>\n<blockquote>\n<p>《TypeScript 入门教程》全面介绍了 TS 强大的类型系统，完整而简洁，示例丰富，比官方文档更易读，非常适合作为初学者学习 TS 的第一本书。</p>\n<p>—— <a href="https://github.com/ruanyf">阮一峰</a></p>\n</blockquote>\n<h2 id="%E7%89%88%E6%9D%83%E8%AE%B8%E5%8F%AF">版权许可<a class="anchor" href="#%E7%89%88%E6%9D%83%E8%AE%B8%E5%8F%AF">§</a></h2>\n<p>本书采用「保持署名—非商用」创意共享 4.0 许可证。</p>\n<p>只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。</p>\n<p>详细的法律条文请参见<a href="http://creativecommons.org/licenses/by-nc/4.0/">创意共享</a>网站。</p>\n<h2 id="%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99">相关资料<a class="anchor" href="#%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="http://www.typescriptlang.org/">TypeScript 官网</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">Handbook</a>（<a href="https://zhongsp.gitbook.io/typescript-handbook/">中文版</a>）</li>\n<li><a href="http://es6.ruanyifeng.com/">ECMAScript 6 入门</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%85%B3%E4%BA%8E%E6%9C%AC%E4%B9%A6">关于本书</a></li><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%86%99%E6%9C%AC%E4%B9%A6">为什么要写本书</a></li><li><a href="#%E5%85%B3%E4%BA%8E-typescript">关于 TypeScript</a></li><li><a href="#%E9%80%82%E5%90%88%E4%BA%BA%E7%BE%A4">适合人群</a></li><li><a href="#%E8%AF%84%E4%BB%B7">评价</a></li><li><a href="#%E7%89%88%E6%9D%83%E8%AE%B8%E5%8F%AF">版权许可</a></li><li><a href="#%E7%9B%B8%E5%85%B3%E8%B5%84%E6%96%99">相关资料</a></li></ol></nav>'
        } })
};