/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-08-29 17:51:58
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-01 13:14:22
 */
const dns = require('dns');
const os = require('os');
const fs = require('fs-extra');
const path = require('path');

/**
 * 检测当前网络环境
 *
 * @return {Boolean} 是否联网
 */
exports.isNetworkConnect = function () {
  return new Promise((reslove) => {
    dns.lookup('so.com', (err) => reslove(!(err && err.code === 'ENOTFOUND')));
  });
}

/**
 * 获取项目根目录
 *
 * @return {string} 目录 Path
 */
exports.getHome = function () {
  let dir = process.env[
    os.platform() === 'win32'
      ? 'APPDATA'
      : 'HOME'
  ] + path.sep + '.wt-cli-project'

  // 如果这个目录不存在，则创建这个目录
  !fs.existsSync(dir) && fs.mkdirSync(dir);

  return dir;
};
