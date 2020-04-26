/*
 * @describe: 国际化
 * @Author: superDragon
 * @Date: 2019-08-29 17:48:59
 * @LastEditors: superDragon
 * @LastEditTime: 2019-08-30 11:47:18
 */
module.exports = function () {
  let lang = process.env.LANG || 'zh_CN';

  if (/zh/g.test(lang)) {
    return require('./zh_CN');
  }

  return require('./en');
};