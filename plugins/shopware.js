export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const shopware = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
	shopware.setHeader('sw-access-key', 'SWSC40-LJTNO6COUEN7CJMXKLA')
  // Set baseURL to something different
  shopware.setBaseURL('https://pwa-demo-api.shopware.com/trunk/store-api')

  // Inject to context as $api
  inject('shopware', shopware)
}