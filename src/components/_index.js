let puppeteer = require("puppeteer");
let fs = require("fs");
let moment = require("moment");
let path = require("path");
let axios = require("axios");
let request = require("request");
let md5 = require("md5");
let cookie = `crmvip=""; dk_cookie=""; www58com="UserID=49052901856015&UserName=wlasd4622"; 58cooper="userid=49052901856015&username=wlasd4622"; 58uname=wlasd4622; id58=c5/nn12PTVc14SkdinxcAg==; 58tj_uuid=556d0f30-4077-445c-bfe4-b6cf0ab0347a; new_uv=1; utm_source=; spm=; init_refer=; new_session=0; als=0; commontopbar_new_city_info=1%7C%E5%8C%97%E4%BA%AC%7Cbj; commontopbar_ipcity=bj%7C%E5%8C%97%E4%BA%AC%7C0; post_uuid=3c87633f-b35c-4f07-aa15-674f3fc1f6a1; JSESSIONID=EE9459EC1095E347C029405A9C0C07CD; crmvip=""; dk_cookie=""; PPU="UID=49052901856015&UN=wlasd4622&TT=fc6572a60bfe2658cb22834889221591&PBODY=TQinwywZ44rPMKbkXc8j2rjsnOzdefGylQkDs9NsLFMrNN3yrumohTdr32Uf-loLmkIAjlpLhvDnZW9XaCOiHRSzxZnTIdpPbr_-m0nDcjAPCFZF0YE5SM8vyRt2BPoWcDX6NpzPb10pVH75NibKIJzY0DySEK9HVgG5fUkCRkA&VER=1"; www58com="UserID=49052901856015&UserName=wlasd4622"; 58cooper="userid=49052901856015&username=wlasd4622"; 58uname=wlasd4622; id58=c5/nn12PTVc14SkdinxcAg==; 58tj_uuid=556d0f30-4077-445c-bfe4-b6cf0ab0347a; new_uv=1; utm_source=; spm=; init_refer=; new_session=0; als=0; commontopbar_new_city_info=1%7C%E5%8C%97%E4%BA%AC%7Cbj; commontopbar_ipcity=bj%7C%E5%8C%97%E4%BA%AC%7C0; post_uuid=3c87633f-b35c-4f07-aa15-674f3fc1f6a1; JSESSIONID=EE9459EC1095E347C029405A9C0C07CD; post_uuid=3c87633f-b35c-4f07-aa15-674f3fc1f6a1; xxzl_deviceid=zyoeOyKkNNl26g4cNTfwexPH7mRhqLfEdpB1Vg0UH2htS%2Bm59AGWtdewXVBIBHD0; xxzl_smartid=1582c24bffc2a16600638c39be2af3bf; PPU="UID=49052901856015&UN=wlasd4622&TT=b25b6a0d30d9f50805e99a7ed468d98e&PBODY=Ng7wb7FEe_KcgFkRsQ-j9sk4dcjH0i7rJCQs4p2CGuPFO8CtpF-LoX7nqCgnjpxfo_wXeLurjM1FbVNdN6jdmLKqMGHHEkY8jZWed5C5oJg0k36rZYetyxZoxoGrM-namWfhxi9hOiJ925xZfmJpLzm1BQTGHe50FVx2b5nkdEY&VER=1"; commontopbar_new_city_info=1%7C%E5%8C%97%E4%BA%AC%7Cbj`;
let data = {
  hyFacilityList: [{
      value: '1',
      label: '客梯',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/1@2x.png'
    },
    {
      value: '2',
      label: '货梯',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/2@2x.png'
    },
    {
      value: '3',
      label: '扶梯',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/3@2x.png'
    },
    {
      value: '4',
      label: '停车位',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/4@2x.png'
    },
    {
      value: '5',
      label: '天然气',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/5@2x.png'
    },
    {
      value: '6',
      label: '网络',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/6@2x.png'
    },
    {
      value: '7',
      label: '暖气',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/7@2x.png'
    },
    {
      value: '8',
      label: '中央空调',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/8@2x.png'
    },
    {
      value: '9',
      label: '上水',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/9@2x.png'
    },
    {
      value: '10',
      label: '下水',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/10@2x.png'
    },
    {
      value: '11',
      label: '排烟',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/11@2x.png'
    },
    {
      value: '12',
      label: '排污',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/12@2x.png'
    },
    {
      value: '13',
      label: '管煤',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/13@2x.png'
    },
    {
      value: '14',
      label: '380V',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/14@2x.png'
    },
    {
      value: '15',
      label: '可明火',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/15@2x.png'
    },
    {
      value: '16',
      label: '外摆区',
      url: 'https://shop-cdn.ygke.com/qiniuup/pcimg/icon/16@2x.png'
    }
  ],
  getExecutablePath() {
    let workSpaceSrc = "";
    let executablePath = "";
    if (path.dirname(process.execPath).includes("dzjUtil.app")) {
      let arr = path
        .dirname(process.execPath)
        .split("dzjUtil.app")[0]
        .trim()
        .replace(/^\//, "")
        .replace(/\/$/, "")
        .split("/");
      arr.pop();
      arr.pop();
      workSpaceSrc = `/${arr.join("/")}`;
    } else {
      workSpaceSrc = "/workspace/html/dzjUtil";
    }
    executablePath = `${workSpaceSrc}/chrome/mac/Chromium.app/Contents/MacOS/Chromium`;
    return executablePath;
  },
  async setCookie(cookies_str = "", domain, page = this.page) {
    this.log(`>>>setCookie`);
    let cookies = cookies_str.split(";").map(pair => {
      let name = pair.trim().slice(0, pair.trim().indexOf("="));
      let value = pair.trim().slice(pair.trim().indexOf("=") + 1);
      return {
        name,
        value,
        domain
      };
    });
    return Promise.all(
      cookies.map(pair => {
        return page.setCookie(pair);
      })
    );
  },
  async runPuppeteer(options = {}) {
    // let executablePath = this.getExecutablePath();
    // console.log(executablePath);
    this.browser = await puppeteer.launch(
      Object.assign({}, {
          // executablePath,
          headless: false,
          args: ["--start-maximized", "--disable-infobars"]
        },
        options
      )
    );
    let pages = await this.browser.pages();

    this.page = pages[0];
    await this.page.setViewport({
      width: 1200,
      height: 800
    });
  },
  async closePuppeteer() {
    try {
      if (this.browser) {
        await this.browser.close();
      }
    } catch (error) {
      console.log(error);
    }
  },
  async goto(url, selector, page = this.page) {
    await page.goto(url, {
      waitUntil: "domcontentloaded"
    });
    if (selector) {
      await waitForSelector(selector);
    }
  },
  log(T) {
    let info = "";
    try {
      if (T instanceof Error) {
        console.error(T);
        // info = T.message
        // if (info != '修改保存异常') {
        //   debugger;
        // }
      } else {
        info = JSON.stringify(T)
          .replace(/^\"+/, "")
          .replace(/\"+$/, "");
      }
      try {
        info = info.replace(/\\n/g, "").replace(/\s+/g, " ");
      } catch (err) {
        console.log(err);
      }
      info = moment().format("YYYY-MM-DD HH:mm:ss") + " " + info;
      console.log(info);
    } catch (error) {
      console.error(error);
    }
  },
  sleep(ms = 300) {
    this.log(`>>>sleep:${ms}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },
  async watchHandle() {
    do {
      try {
        let pages = await this.browser.pages();
        let commercialPage = pages.find(item =>
          item.url().includes("post.58.com/commercial")
        );
        if (commercialPage) {
          await this.commercialPageHandle(commercialPage);
        }
      } catch (err) {
        this.log(err);
      }
      await this.sleep(1000);
    } while (true);
  },
  async appendHtml(page = this.page) {
    await page.addScriptTag({
      url: "https://wlasd4622.github.io/dianzhijia/common/58.js"
    });
    await page.evaluate(() => {
      let html = `
      <div class="block_wrap">
        <div class="block_title">
          <h2>店之家</h2><span class="title_desc">(&nbsp;店之家员工专属通道&nbsp;)</span>
        </div>
        <div class="block_content">
          <div class="rows_wrap clearfix">
            <div class="rows_content">
              <div class="tip"></div>
              <div class="input_text_wrap" name="title" style="position: relative;width: 200px;">
                <input type="password" id="dzjPassword" tabindex="44" maxlength="30" style="width: 100%;" value="765245" placeholder="请输入权限密码">
              </div>
            </div>
            <div class="rows_title"><span>权限密码</span></div>
          </div>
        </div>
        <div class="block_content">
          <div class="rows_wrap clearfix">
            <div class="rows_content">
              <div class="tip"></div>
              <div class="input_text_wrap" name="title" style="position: relative;width: 200px;">
                <input type="number" id="dzjId" tabindex="44" maxlength="30" style="width: 100%;" value="765245" placeholder="请输入id，进行自动填充">
              </div>
              <span class="fill-btn" style="margin-top: 4px;
              margin-left: 5px;
              height: 26px;
              line-height: 26px;
              display: inline-block;
              border-radius: 30px;
              padding: 0px 20px;
              padding-top: 2px;
              cursor: pointer;
              background: #7b72ea;
              color: #fff;" onclick="fillBtn()">填充</span>
            </div>
            <div class="rows_title"><span>ID</span></div>
          </div>
        </div>
    </div>
    `;
      let loadingHtml = `
        <div class="dzjLoading" style="display: none;position: fixed;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999999;">
        <div style="background: #fff;
        width: 400px;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        text-align: center;
        border-radius: 7px;
        box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.26);">自动填充中...</div>
        </div>
      `;
      $("#postForm").prepend(html);
      $("body").prepend(loadingHtml);
      localStorage.removeItem("dzjTaskResult");
      window.fillBtn = function () {
        let dzjPassword = $("#dzjPassword").val();
        let dzjId = $("#dzjId").val();
        if (!dzjPassword) {
          alert("请输入权限密码");
        } else if (!dzjId) {
          alert("请输入id");
        } else {
          //进行搜索，并填充
          localStorage.setItem(
            "dzjTask",
            JSON.stringify({
              dzjPassword,
              dzjId,
              date: new Date().getTime()
            })
          );
          $(".dzjLoading div").text("自动填充中...");
          $(".dzjLoading").show();
          let time = setInterval(() => {
            let dzjTaskResult = localStorage.getItem("dzjTaskResult");
            if (dzjTaskResult) {
              localStorage.removeItem("dzjTaskResult");
              let data = dzjTaskResult.split('||')[1];
              window._data = data;
              dzjTaskResult = dzjTaskResult.match(/^\d+/)[0];

              // clearInterval(time)
              // $('.dzjLoading').hide();
              if (/^2/.test(dzjTaskResult)) {
                //
              } else if (/^3/.test(dzjTaskResult)) {
                $(".dzjLoading div").text({
                  "300": "数据查询成功，正在自动填充，上传图片...",
                  "301": "数据查询成功，正在自动填充，图片上传成功..."
                } [dzjTaskResult]);
                if (dzjTaskResult == '301' && data) {
                  window.addHouseInfoData(data, '15011099999');
                  setTimeout(() => {
                    $(".dzjLoading").hide();
                  }, 500);
                }
              } else if (/^4/.test(dzjTaskResult)) {
                $(".dzjLoading div").text({
                  "400": "权限密码错误",
                  "401": "没有搜索到数据",
                  "402": "图片上传失败"
                } [dzjTaskResult]);
                setTimeout(() => {
                  $(".dzjLoading").hide();
                }, 2000);
                clearInterval(time);
              } else {
                alert("未处理异常");
              }
            }
          }, 200);
        }
      };
    });
  },
  formatData(data) {
    let newData = {};
    try {
      // 供求类型
      newData._type = data.transfer_type == 4 ? '出租' : '转让';
      // 标题
      newData.title = `(${newData._type}) ${data.store_info_title}`;
      // 店铺图片
      newData.picList = data.imgs;
      // 租金
      newData.moneyNum = data.rent;
      // 租金单位
      newData.moneyNumUnit = '元/月';
      // 出租
      // newData.numChuZu = null;
      // 出租单位
      // newData.numChuZuUnit = null;
      // 平均每平米多少元
      // newData.avrageMoney = null;
      //平均每平米多少元单位
      // newData.avrageMoneyUnit = null;
      // 转让费
      newData.transferFee = parseFloat(data.transfer_price / 10000).toFixed(2);
      // 转让费单位
      newData.transferFeeUnit = '万元';
      // 面积
      newData.area = data.store_acreage;
      // 面积单位
      // newData.areaUnit = null;
      // 商铺类型
      newData.type = '临街门面';
      // 是否临街
      newData.isStreet = '临街';

      // 楼层总楼层
      newData.totalFloot = data.total_floor;
      if (data.floor_type == 1) {
        //单层
        // 楼层
        newData.curFloor = data.floor_number; //1-2层
      } else if (data.floor_type == 2) {
        //多层
        // 楼层
        newData.curFloor = `${data.start_floor}-${data.end_floor}层`
      }
      // 面宽
      newData.sWidth = data.face_width;
      // 进深
      newData.sDeep = data.depth;
      // 层高
      newData.sHeight = data.floor_height;
      // 状态
      newData.status = ['经营中', '空置中'][parseInt(data.business_state || 0)];
      // 付款方式(付)
      newData.payType1 = data.pay_number;
      // 付款方式(押)
      newData.payType2 = data.pledge;
      // 经营行业
      newData.industry = data.bigClass_name;
      // 起租期
      newData.minMonth = data.start_rent;
      // 免租期
      newData.rentFreePeriod = data.rent_free;
      // 剩余租期
      newData.endMonth = data.surplus_rent;
      // 客流
      newData.passengerFlow = `办公人群、学生人群、居民人群、旅游人群、其他`;
      // 市
      newData.address1 = data.parent_name;
      // 区县
      newData.address2 = data.area_name;
      // 详细地址
      newData.address3 = data.store_address_detail;
      // 联系人
      newData.name = data.linkman;
      // 是否是个人
      newData.isSingle = true;
      // 电话
      newData.phone = data.telephone;
      // 电话归属地
      // newData.phoneAddress = data.city_id;
      // 配套设施
      newData.peitao = [];
      if (data.facility_value && data.facility_value.length) {
        for (let i = 0; i < data.facility_value.length; i++) {
          let p = this.hyFacilityList.find(item => item.value == data.facility_value[i]);
          if (p) {
            newData.peitao.push(p.label)
          }
        }
      }
      // 描述
      newData.describe = data.store_describe;
    } catch (err) {
      this.log(err)
    }
    return newData;
  },
  async getcityName(id) {
    sql = `	SELECT * from t_area WHERE id=${id}`
  },
  async getDataById(id = 0) {
    return new Promise(async (resolve, reject) => {
      axios({
          url: "https://api.dianzhijia.com/api/open/transferstore/" + id,
          headers: {
            accept: `application/vnd.dpexpo.v1+json`
          }
        })
        .then(res => {
          if (res.status === 200 && res.data && res.data.data) {
            resolve(this.formatData(res.data.data));
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  async down(url = "") {
    return new Promise((resolve, reject) => {
      try {
        if (!fs.existsSync(`${process.cwd()}/images`)) {
          fs.mkdirSync(`${process.cwd()}/images`);
        }
        let imgSrc = `${process.cwd()}/images/${md5(url)}.png`;
        var writeStream = fs.createWriteStream(imgSrc);
        var readStream = request(url);
        readStream.pipe(writeStream);
        readStream.on("end", function (data) {
          console.log("文件下载成功");
        });
        readStream.on("error", function () {
          console.log("错误信息:" + err);
          reject(err);
        });
        writeStream.on("finish", function () {
          writeStream.end();
          resolve(imgSrc);
        });
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },
  async downImage(imgArr = []) {
    for (let i = 0; i < imgArr.length; i++) {
      await this.down(imgArr[i]);
    }
  },
  async verificationPassword(pw) {
    this.log(`>>>verificationPassword:${pw}`);
    return true;
  },
  async uploadImage(imgArr = [], page = this.page) {
    await page.evaluate(() => {
      $("#imgUpload input").attr("id", "imgUploadInput");
    });
    let imgUploadInput = await page.$("#imgUploadInput");
    let srcArr = [];
    for (let i = 0; i < imgArr.length; i++) {
      srcArr.push(`${process.cwd()}/images/${md5(imgArr[i])}.png`);
    }
    await imgUploadInput.uploadFile(...srcArr);
  },
  async watchPageTask(page = this.page) {
    // this.log(page.url())
    do {
      let dzjTask = await page.evaluate(() => {
        return localStorage.getItem("dzjTask");
      });
      if (dzjTask) {
        dzjTask = JSON.parse(dzjTask);
        await page.evaluate(() => {
          localStorage.removeItem("dzjTask");
        });
        let result = await this.verificationPassword(dzjTask.dzjPassword);
        if (!result) {
          await page.evaluate(() => {
            localStorage.setItem("dzjTaskResult", 400);
          });
        } else {
          //密码正确，开始搜索
          let data = null;
          try {
            data = await this.getDataById(dzjTask.dzjId);
          } catch (err) {
            await page.evaluate(() => {
              localStorage.setItem("dzjTaskResult", 401);
            });
          }
          if (data) {
            //查询到数据，开始填充，并下载图片上传图片
            await page.evaluate(data => {
              localStorage.setItem(
                "dzjTaskResult",
                `300`
              );
            }, data);
            // 下载图片
            await this.downImage(data.picList);
            //上传图片
            console.log(666);
            try {
              await this.uploadImage(data.picList, page);
              await page.evaluate(data => {
                localStorage.setItem("dzjTaskResult", `301||${encodeURIComponent(JSON.stringify(data))}`);
              }, data);
            } catch (err) {
              await page.evaluate(() => {
                localStorage.setItem("dzjTaskResult", 402);
              });
            }
          }
        }
      }
      await this.sleep(1000);
    } while (true);
  },
  async commercialPageHandle(page = this.page) {
    let flag = await page.evaluate(() => {
      return !!window.dzjFlag;
    });
    if (flag) return false;
    await page.evaluate(() => {
      window.dzjFlag = true;
    });
    await this.appendHtml(page);
    this.watchPageTask(page);
  },
  async main() {
    // await this.closePuppeteer();
    await this.runPuppeteer();
    await this.setCookie(cookie, ".58ganji.com");
    await this.setCookie(cookie, ".58.com");
    await this.setCookie(cookie, ".post.58.com");
    await this.setCookie(cookie, ".my.58.com");
    await this.setCookie(cookie, ".vip.58.com");
    await this.setCookie(cookie, ".anjuke.com");
    await this.setCookie(cookie, ".vip.58ganji.com");
    // await this.goto('https://passport.58.com/login/');
    await this.goto(
      "https://post.58.com/commercial/37/14/s5?PGTID=0d000000-0000-0fbf-3e4f-dab01a539fda&ClickID=1"
    );
    this.watchHandle();
  }
};

// export default data;
module.exports = data;
