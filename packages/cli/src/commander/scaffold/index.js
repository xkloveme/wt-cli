/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-08-30 11:21:05
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-31 16:38:10
 */
'use strict';

// init 安装脚手架命令
const init = require('./action');
// 提示文件
const locals = require('../../locals')();

module.exports = function (program) {

  // define init command
  program
    .command('init')
    .description(locals.INIT_DESC)
    .option('-f, --force', locals.INIT_OPTION_FORCE)
    .action((cmd,options) => init({
      cmd: cmd,
      force: options.force
    }));
  // // H5 app 换皮配置
  // program
  //   .command('skin')
  //   .description(locals.SKIN_DESC)
  //   .action(options => init({
  //     force: options.force
  //   }));
};