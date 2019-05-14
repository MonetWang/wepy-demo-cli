import wepy from 'wepy';

export function request (Opt) {
  const resOpt = {
    url: Opt.url,
    method: Opt.method ? Opt.method : 'GET',
    data: Opt.data ? Opt.data : {},
    header: {},
    queryString: Opt.queryString ? Opt.queryString : false, // post请求下将数据转换成query string
  }

  // 同步从本地中获取缓存
  const token = wepy.getStorageSync('token');

  // 拼接traceId
  if (!resOpt.data.traceId) {
    resOpt.data.traceId = 'traceId';
  }

  // 如果本地有token，则带上 Authorization 进行验证
  if (token) {
    if (!resOpt.headers) {
      resOpt.headers = {};
    }
    resOpt.header['Authorization'] = token;
  }

  // POST 请求中，传递给服务器的数据为 query 则设置此参数
  // 小程序会将数据自动转换成 query string
  if(resOpt.queryString) {
    resOpt.header['content-type'] = 'application/x-www-form-urlencoded';
  }

  return new Promise ( (resolve, reject) => {
    // wepy.request 不限制一个页面发起的请求数
    wepy.request({
      url: resOpt.url,
      data: resOpt.data,
      method: resOpt.method,
      header: resOpt.header
    }).then(res => {
      if (res.data.success) {
        resolve(res.data);
      } else {
        reject({
          success: false,
          msg: res.data.stateDesc ? re.data.stateDesc : '数据获取失败'
        })
      }
    })
  })
}
