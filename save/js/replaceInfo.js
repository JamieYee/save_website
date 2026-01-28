// 定义常量
const APP_NAME = "飞飞记账";
const COMPANY_NAME = "深圳市熊啾啾科技有限公司";

// 修改页面标题
document.title = APP_NAME;

// 获取 body 内容
let bodyHtml = document.body.innerHTML;

// 使用正则替换所有 "Save"
bodyHtml = bodyHtml.replace(/\bSave\b/g, APP_NAME);

// 替换公司名
bodyHtml = bodyHtml.replace(/易大宝/g, COMPANY_NAME);

// 更新 body 内容
document.body.innerHTML = bodyHtml;