let puppeteer = require('puppeteer');
let fs = require('fs')
let moment = require('moment');
let path = require("path");

export default {
  getExecutablePath() {
    let workSpaceSrc = '';
    let executablePath = '';
    if (path.dirname(process.execPath).includes('dzjUtil.app')) {
      let arr = path.dirname(process.execPath).split('dzjUtil.app')[0].trim().replace(/^\//, '').replace(/\/$/, '').split('/');
      arr.pop();
      arr.pop();
      workSpaceSrc = `/${arr.join('/')}`
    } else {
      workSpaceSrc = '/workspace/html/dzjUtil'
    }
    executablePath = `${workSpaceSrc}/chrome/mac/Chromium.app/Contents/MacOS/Chromium`
    return executablePath;

  },
  async runPuppeteer(options = {}) {
    let executablePath = this.getExecutablePath();
    console.log(executablePath);
    this.browser = await puppeteer.launch(Object.assign({}, {
      executablePath,
      headless: false,
      args: ['--start-maximized', '--disable-infobars']
    }, options));
    this.page = await this.browser.newPage();
    await this.page.setViewport({
      width: 1200,
      height: 800
    });
  },
  async closePuppeteer() {
    try {
      if (this.browser) {
        await this.browser.close()
      }
    } catch (error) {
      console.log(error);
    }
  },
  async main() {
    // await this.closePuppeteer();
    await this.runPuppeteer();
  }
}
