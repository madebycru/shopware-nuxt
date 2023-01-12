<template>
  <div>

    {{product}}
    
  </div>
</template>

<script>
export default {
  name: 'ProductPage',



  async asyncData({ $shopware, params, payload, error }) {
    //try {
  	if (payload){
  		return { product: payload }
  	} else{
  		try {
	      const product = await $shopware.$post('/product/'+params.pathMatch)
	      // console.log(post);
	      // post.elements.map(product => {
	      //   console.log(product.id);
	      // })
	      return {
	        product: product
	      };
    	} catch (e) {
    		error({ statusCode: 404, message: "Page not found" });
    	}
  	}

  	
  },

  
}


</script>
