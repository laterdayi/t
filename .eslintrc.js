require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  // 当前目录即为根目录，ESLint规则将被限制到该目录下
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  plugins: ['standard-recommended'],
  // 基础配置继承
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json'
  ],
  // 解析器
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  // 禁用内联配置注释
  noInlineConfig: true,
  // 报告未使用的 eslint-disable 内联配置注释
  reportUnusedDisableDirectives: true,
  // ignore 规则
  ignorePatterns: [
    '*.sh',
    'node_modules',
    '*.md',
    '*.woff',
    '*.ttf',
    '.vscode',
    '.idea',
    'dist',
    '/docs',
    '.husky',
    '.github'
  ],
  // 需要修改的启用规则以及各自的错误类别
  // off 或 0  - 关闭规则
  // warn 或 1 - 开启规则，使用警告级别的错误，不会导致程序退出
  // error 或 2  - 开启规则，使用错误级别的错误，当被触发时候，程序会退出
  rules: {
    // -------------------------------------------------------------------------------------------- > Eslint https://eslint.bootcss.com/docs/rules/
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 要求运算符周围有间距
    'space-infix-ops': 'error',
    // 强制模板文字
    'prefer-template': 'error',
    // 要求对象文字的方法和属性速记语法
    'object-shorthand': ['error', 'properties'],
    // 禁止不必要的文字或模板文字串联
    'no-useless-concat': 'error',
    // 要求使用 === 和 !==
    eqeqeq: 'error',
    // 禁用 alert、confirm 和 prompt
    'no-alert': 'error',
    // 引号
    quotes: 'off',
    // 禁止修改const声明的变量
    'no-const-assign': 'error',
    // 禁止eval函数
    'no-eval': 'error',
    // 禁用隐式的eval
    'no-implied-eval': 'error',
    // 语句强制分号结尾
    semi: 'off',
    // 禁止出现多个空格
    'no-multi-spaces': 'error',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',
    // 禁用 Script URL
    'no-script-url': 'error',
    // 禁止自身比较
    'no-self-compare': 'error',
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // 禁止使用void操作符
    'no-void': 'error',
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'error',
    // 要求 IIFE 使用括号括起来
    'wrap-iife': ['error', 'inside'],
    // 要求或禁止 Yoda 条件
    yoda: 'error',
    // 禁止未定义
    'no-undef': 'off',
    // 禁止在变量定义之前使用
    'no-use-before-define': 'off',
    // 要求 require() 出现在顶层模块作用域中
    'global-require': 'error',
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'error',
    // 禁止末尾逗号
    'comma-dangle': 'error',
    // 强制行注释的位置
    'line-comment-position': 'error',
    // 强制可嵌套的块的最大深度
    'max-depth': 'error',
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'error',
    // 强制对多行注释使用特定风格
    'multiline-comment-style': ['error', 'separate-lines'],
    // 禁止在代码后使用内联注释
    'no-inline-comments': 'error',
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'error',
    // 禁用行尾空格
    'no-trailing-spaces': 'error',
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 要求简化赋值操作
    'operator-assignment': 'error',
    // 禁止块内填充
    'padded-blocks': ['error', 'never'],
    // 禁止函数圆括号之前有一个空格
    'space-before-function-paren': 'off',
    // 禁止函数圆括号之前有一个空格
    'spaced-comment': 'error',
    // 强制在 switch 的冒号左右空格
    'switch-colon-spacing': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 要求所有 switch 语句都有 default
    'default-case': 'error',
    // 强制 switch 语句中的 default 在最后
    'default-case-last': 'error',
    // 在 if 语句中，禁止在 return 语句后使用 else 块
    'no-else-return': 'error',
    // 不允许空函数
    'no-empty-function': 'error',
    // 禁止不必要的嵌套块
    'no-lone-blocks': 'error',
    // 禁止不必要的 return await
    'no-return-await': 'error',
    // 不允许数组括号内有空格
    'array-bracket-spacing': 'error',
    // 箭头函数参数需要括号，在可以省略的地方不强制执行括号
    'arrow-parens': ['error', 'as-needed'],
    // 在箭头函数中的箭头前后强制执行一致的间距
    'arrow-spacing': 'error',
    // 为块强制执行一致的大括号样式
    'brace-style': 'error',
    // 在逗号前后强制执行一致的间距
    'comma-spacing': 'error',
    // 在对象文字属性中强制 key 和 value 间的一致间距
    'key-spacing': 'error',
    // 在关键字前后强制使用一致的间距
    'keyword-spacing': 'error',
    // 要求班级成员之间有一个空行
    'lines-between-class-members': 'error',
    // 不允许多个空行
    'no-multiple-empty-lines': 'error',
    // 强制执行单行语句的位置
    'nonblock-statement-body-position': 'error',
    // 在大括号内强制执行一致的间距
    'object-curly-spacing': ['error', 'always'],
    // 在大括号内强制执行一致的间距
    'rest-spread-spacing': 'error',
    // 在块之前强制执行一致的间距
    'space-before-blocks': 'error',
    // 在括号内强制使用一致的间距
    'space-in-parens': 'error',

    // -------------------------------------------------------------------------------------------- > TypeScript https://typescript-eslint.io/rules

    // 始终对数组使用T[]
    '@typescript-eslint/array-type': 'error',
    // 不允许重复的枚举成员值
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // 不允许声明空接口
    '@typescript-eslint/no-empty-interface': 'error',
    // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-inferrable-types': 'error',
    // 禁止定义未使用的变量
    '@typescript-eslint/no-unused-vars': 'error',
    // 禁止使用 any 类型
    '@typescript-eslint/no-explicit-any': 'error',
    // 禁止命名空间
    '@typescript-eslint/no-namespace': 'off',
    // // 强制使用简洁的可选链式表达式，而不是链式逻辑与、否定逻辑或或空对象
    // '@typescript-eslint/prefer-optional-chain': 'error',
    // // 命名约定
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   // 强制 接口 类型别名 枚举 为大驼峰
    //   { selector: ['interface', 'typeAlias', 'enum'], format: ['PascalCase'] },
    //   // 强制 函数 参数 为小驼峰
    //   { selector: ['function', 'parameter'], format: ['camelCase'] },
    //   {
    //     selector: 'memberLike',
    //     modifiers: ['private'],
    //     format: ['camelCase'],
    //     leadingUnderscore: 'require'
    //   }
    // ],
    // -------------------------------------------------------------------------------------------- > Vue https://eslint.vuejs.org/rules
    // 要求运算符周围有间距
    'vue/space-infix-ops': 'error',
    // 强制模板文字
    'vue/prefer-template': 'error',
    // 要求对象文字的方法和属性速记语法
    'vue/object-shorthand': ['error', 'properties'],
    // 禁止不必要的文字或模板文字串联
    'vue/no-useless-concat': 'error',
    // 不允许<template> <script> <style>块为空
    'vue/no-empty-component-block': 'error',
    // 为模板中的组件命名样式强制使用特定大小写
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 强制属性顺序
    'vue/attributes-order': 'error',
    // 在括号内强制使用一致的间距
    'vue/space-in-parens': 'error',
    // 在大括号内强制执行一致的间距
    'vue/object-curly-spacing': ['error', 'always'],
    // 关键字前后强制使用一致的间距
    'vue/keyword-spacing': 'error',
    // 强制执行键和值之间的一致间距
    'vue/key-spacing': 'error',
    // 强制执行驼峰命名约定 <template>
    'vue/camelcase': 'error',
    // 强制执行一致的大括号样式 <template>
    'vue/brace-style': 'error',
    // 箭头函数中的箭头前后强制执行一致的间距 <template>
    'vue/arrow-spacing': 'error',
    // 数组括号内强制执行一致的间距 <template>
    'vue/array-bracket-spacing': 'error',
    // 需要使用===和!== <template>
    'vue/eqeqeq': 'error',
    // 强制 v-for 指令的分隔符样式
    'vue/v-for-delimiter-style': 'error',
    // 强制执行静态类名顺序
    'vue/static-class-names-order': 'error',
    // 强制每个 Prop 都有注释
    'vue/require-prop-comment': ['error', { type: 'line' }],
    // 要求组件直接导出
    'vue/require-direct-export': 'error',
    // 需要简写形式属性 true
    'vue/prefer-true-attribute-shorthand': 'error',
    // 要求模板中的静态类名位于单独的 class 属性中
    'vue/prefer-separate-static-class': 'error',
    // 组件定义中要求块之间的间距
    'vue/padding-lines-in-component-definition': 'error',
    // 要求块之间的间距
    'vue/padding-line-between-blocks': 'error',
    // 禁止使用 v-text
    'vue/no-v-text': 'error',
    // 禁止不必要的 v-bind 指令
    'vue/no-useless-v-bind': 'error',
    // 禁止不必要的插值
    'vue/no-useless-mustaches': 'error',
    // 禁止未使用的引用
    'vue/no-unused-refs': 'error',
    // 禁止静态内联 style 属性
    'vue/no-static-inline-styles': 'error',
    // 在 HTML 注释中强制执行一致的缩进
    'vue/html-comment-indent': 'error',
    // 在 HTML 注释中强制统一间距
    'vue/html-comment-content-spacing': 'error',
    // 在 HTML 注释中强制执行统一的换行符
    'vue/html-comment-content-newline': 'error',
    // 执行声明样式 defineEmits
    'vue/define-emits-declaration': 'error',
    // 为 emit 事件名称强制使用特定大小写
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    // components 在选项中强制组件名称的大小写
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    // 强制执行组件 API 样式
    'vue/component-api-style': 'error',
    // 在打开和关闭块级标签之前强制换行
    'vue/block-tag-newline': 'error',
    // 禁止在模板中使用 this
    'vue/this-in-template': 'error',
    // 强制执行组件中的属性顺序
    'vue/order-in-components': 'error',
    // 禁止不必要的 <template>
    'vue/no-lone-template': 'error',
    // 强制执行组件顶级元素的顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['script:not([setup])', 'script[setup]', 'template', 'style']
      }
    ],
    // 强制 v-slot 指令风格
    'vue/v-slot-style': 'error',
    // 强制 v-on 指令风格
    'vue/v-on-style': 'error',
    // 强制执行 v-on 事件命名样式
    'vue/v-on-event-hyphenation': 'error',
    // 强制 v-bind 指令风格
    'vue/v-bind-style': 'error',
    // 需要在 props 中定义类型
    'vue/require-prop-types': 'error',
    // 需要 emits 名称触发的选项
    'vue/require-explicit-emits': 'error',
    // 需要 Prop 默认值
    'vue/require-default-prop': 'error',
    // Prop 名称强制使用特定大小写
    'vue/prop-name-casing': 'error',
    // 强制每个组件都应该在它自己的文件中
    'vue/one-component-per-file': 'error',
    // 消除 v-for 指令或范围属性的阴影变量声明
    'vue/no-template-shadow': 'error',
    // 属性中等号周围不允许有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 不允许多个空格
    'vue/no-multi-spaces': 'error',
    // 在插值中强制统一间距
    'vue/mustache-interpolation-spacing': 'error',
    // 在多行元素的内容之前和之后强制换行。
    'vue/multiline-html-element-content-newline': 'error',
    // 强制执行一致的缩进
    'vue/html-indent': 'off',
    // 强制标签自闭和
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 不允许在标签的右括号前有一个空格
    'vue/html-closing-bracket-spacing': 'error',
    // 不允许在标记的右括号前换行
    'vue/html-closing-bracket-newline': 'error',
    // 强制在 Vue 模板中的自定义组件上使用带连字符的属性名称
    'vue/attribute-hyphenation': 'error',
    // 关闭响应式结构默认值
    'vue/no-setup-props-destructure': 'off',
    // 组件名称始终为多词
    'vue/multi-word-component-names': 'off',
    // 禁止使用 v-html 来防止 XSS 攻击
    'vue/no-v-html': 'off',
    // 禁止特定的 HTML 元素
    'vue/no-restricted-html-elements': [
      'error',
      { element: 'marquee', message: 'Do not use deprecated HTML tags' },
      { element: 'n-alert', message: 'Please use <base-alert /> component' },
      { element: 'n-avatar-group', message: 'Please use <base-avatar-group /> component' },
      { element: 'n-button', message: 'Please use <base-button /> component' },
      { element: 'n-card', message: 'Please use <base-card /> component' },
      { element: 'n-carousel', message: 'Please use <base-carousel /> component' },
      { element: 'n-collapse', message: 'Please use <base-collapse /> component' },
      { element: 'n-collapse-item', message: 'Please use <base-collapse-item /> component' },
      { element: 'n-divider', message: 'Please use <base-divider /> component' },
      { element: 'n-dropdown', message: 'Please use <base-dropdown /> component' },
      { element: 'n-ellipsis', message: 'Please use <base-ellipsis /> component' },
      { element: 'n-gradient-text', message: 'Please use <base-gradient-text /> component' },
      {
        element: 'n-icon',
        message: 'Icon Uses the unocss carbon icon set, Please use <base-icon /> component, Set carbon icon name'
      },
      { element: 'n-tag', message: 'Please use <base-tag /> component' },
      { element: 'n-watermark', message: 'Please use <base-watermark /> component' },
      { element: 'n-auto-complete', message: 'Please use <base-auto-complete /> component' },
      { element: 'n-cascader', message: 'Please use <base-cascader /> component' },
      { element: 'n-color-picker', message: 'Please use <base-color-picker /> component' },
      { element: 'n-checkbox', message: 'Please use <base-checkbox /> component' },
      { element: 'n-checkbox-group', message: 'Please use <base-checkbox-group /> component' },
      { element: 'n-date-picker', message: 'Please use <base-date-picker /> component' },
      { element: 'n-dynamic-input', message: 'Please use <base-dynamic-input /> component' },
      { element: 'n-dynamic-tags', message: 'Please use <base-dynamic-tags /> component' },
      { element: 'n-form', message: 'Please use <base-form /> component' },
      { element: 'n-input', message: 'Please use <base-input /> component' },
      { element: 'n-input-number', message: 'Please use <base-input-number /> component' },
      { element: 'n-mention', message: 'Please use <base-mention /> component' },
      { element: 'n-radio', message: 'Please use <base-radio /> component' },
      { element: 'n-radio-group', message: 'Please use <base-radio-group /> component' },
      { element: 'n-rate', message: 'Please use <base-rate /> component' },
      { element: 'n-select', message: 'Please use <base-select /> component' },
      { element: 'n-slider', message: 'Please use <base-slider /> component' },
      { element: 'n-time-picker', message: 'Please use <base-time-picker /> component' },
      { element: 'n-transfer', message: 'Please use <base-transfer /> component' },
      { element: 'n-tree-select', message: 'Please use <base-tree-select /> component' },
      { element: 'n-upload', message: 'Please use <base-upload /> component' },
      { element: 'n-calendar', message: 'Please use <base-calendar /> component' },
      { element: 'n-countdown', message: 'Please use <base-countdown /> component' },
      { element: 'n-code', message: 'Please use <base-code /> component' },
      { element: 'n-data-table', message: 'Please use <base-table /> component' },
      { element: 'n-descriptions', message: 'Please use <base-descriptions /> component' },
      { element: 'n-empty', message: 'Please use <base-empty /> component' },
      { element: 'n-equation', message: 'Please use <base-equation /> component' },
      { element: 'n-image', message: 'Please use <base-image /> component' },
      { element: 'n-image-group', message: 'Please use <base-image-group /> component' },
      { element: 'n-list', message: 'Please use <base-list /> component' },
      { element: 'n-log', message: 'Please use <base-log /> component' },
      { element: 'n-number-animation', message: 'Please use <base-number-animation /> component' },
      { element: 'n-statistic', message: 'Please use <base-statistic /> component' },
      { element: 'n-table', message: 'Please use <base-table /> component' },
      { element: 'n-thing', message: 'Please use <base-thing /> component' },
      { element: 'n-time', message: 'Please use <base-time /> component' },
      { element: 'n-timeline', message: 'Please use <base-timeline /> component' },
      { element: 'n-timeline-item', message: 'Please use <base-timeline-item /> component' },
      { element: 'n-tree', message: 'Please use <base-tree /> component' },
      { element: 'n-affix', message: 'Please use <base-affix /> component' },
      { element: 'n-anchor', message: 'Please use <base-anchor /> component' },
      { element: 'n-anchor-link', message: 'Please use <base-anchor-link /> component' },
      { element: 'n-back-top', message: 'Please use <base-back-top /> component' },
      { element: 'n-menu', message: 'Please use <base-menu /> component' },
      {
        element: 'n-pagination',
        message:
          'Because pagination is mostly used with the table, and the pagination option is provided in the table, so I think you may not need this'
      },
      { element: 'n-steps', message: 'Please use <base-steps /> component' },
      { element: 'n-step', message: 'Please use <base-step /> component' },
      { element: 'n-badge', message: 'Please use <base-badge /> component' },
      { element: 'n-drawer', message: 'Please use <base-drawer /> component' },
      { element: 'n-modal', message: 'Please use <base-modal /> component' },
      { element: 'n-popconfirm', message: 'Please use <base-popconfirm /> component' },
      { element: 'n-popover', message: 'Please use <base-popover /> component' },
      { element: 'n-popselect', message: 'Please use <base-popselect /> component' },
      { element: 'n-result', message: 'Please use <base-result /> component' },
      { element: 'n-skeleton', message: 'Please use <base-skeleton /> component' },
      { element: 'n-spin', message: 'Please use <base-spin /> component' },
      { element: 'n-tooltip', message: 'Please use <base-tooltip /> component' },
      { element: 'n-space', message: 'Please use <base-space /> component' },
      { element: 'n-collapse-transition', message: 'Please use <base-collapse-transition /> component' },
      { element: 'n-scrollbar', message: 'Please use <base-scrollbar /> component' }
    ]
  },
  overrides: [
    // 文件名不能为 index & 文件夹名称 & 文件名称
    {
      files: ['src/**/*', 'locales/**/*', 'public/**/*'],
      rules: {
        'standard-recommended/folder-name-convention': 'error',
        'standard-recommended/file-name-convention': 'error'
      }
    },
    {
      files: ['src/views/**/*'],
      rules: {
        'standard-recommended/no-index': 'error'
      }
    },
    // 文件夹名称 & 文件名称格式 - ignore
    {
      files: ['src/plugins/core/vue-i18n.ts', 'src/App.vue', 'src/AppProvider.vue'],
      rules: {
        'standard-recommended/file-name-convention': 'off'
      }
    },
    // api 名称
    {
      files: ['src/service/apis/**/*'],
      rules: {
        'prefer-template': 'off',
        'standard-recommended/api-name-convention': 'error'
      }
    },
    // -------------------------------------------------------------------------------------------- >
    {
      files: ['src/components/base-ui/**/*'],
      rules: {
        'vue/no-restricted-html-elements': 'off'
      }
    },
    {
      files: [
        'src/service/type.ts',
        'src/components/**/*',
        'src/types/**/*',
        'src/utils/*',
        'src/hooks/**/*',
        'src/socket/**/*'
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['env.d.ts', 'components.d.ts', 'auto-imports.d.ts'],
      rules: {
        'multiline-comment-style': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'spaced-comment': 'off'
      }
    }
  ]
};
