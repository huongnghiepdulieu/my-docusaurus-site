// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Mã nguồn MQL4/MQL5',
      link: { type: 'doc', id: 'mql/intro' }, // Trang chính
      items: [
        'mql/mql4',
        {
          type: 'category',
          label: 'Code MQL5',
          link: { type: 'doc', id: 'mql/mql5/intro' }, // Trang con
          items: [
            'mql/mql5/example-1',
            'mql/mql5/example-2',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars; // Sửa lỗi xuất dữ liệu
