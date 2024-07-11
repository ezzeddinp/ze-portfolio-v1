const BASE_URL = 'https://res.cloudinary.com/zeddin/image/upload/f_auto,q_auto/v1/zeddin'

export function getCloudinaryUrl(path: string) {
  return BASE_URL + path
}
