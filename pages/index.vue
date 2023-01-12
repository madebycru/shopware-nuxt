<template>
  <div>

    <div>
      <div v-for="(product, index) in products"
         :key="'item-' + index"
         style="padding: 20px; border-bottom: 1px solid #000;">
         <a :href="'/products/'+$URLSaveString(product.name)">{{product.name}}</a>
      </div>
    </div>
    <Tutorial/>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',


  async asyncData({ $shopware, params, error }) {
    //try {
      const post = await $shopware.$get('/product')
      // console.log(post);
      // post.elements.map(product => {
      //   console.log(product.id);
      // })
      return {
        post: post,
        products: post.elements
      };
    // } catch (e) {
    //   error({ statusCode: 404, message: "Page not found" });
    // }
  },

  
}


</script>
