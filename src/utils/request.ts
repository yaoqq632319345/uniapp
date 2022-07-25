export default function request(config: UniNamespace.RequestOptions) {
  return new Promise((resolve, reject) => {
    const assignConfig = {
      url: import.meta.env.VITE_REQESTURL + config.url,
      success(res: any) {
        resolve(res);
      },
      fail(res: any) {
        reject(res);
      },
    };
    uni.request(assignConfig);
  });
}
