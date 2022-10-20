<script>
import ImageComp from './ImageComp.vue';

export default {
    name: 'CardComp',
    props: {
        data: Object,
    },
    components: {
    ImageComp,
  },
};
</script>

<template>
    <figure class="grid-item">
        <div class="img-container">
          <ImageComp :src="data.img" />
        </div>
      <figcaption>{{ data.title }}</figcaption>
    </figure>
</template>

<style lang="scss">
.grid-item {
    width: 100%;
    border: 1px solid gray;
    overflow: hidden;
    border-radius: 1rem;
    
    .img-container {
       object-fit: cover;
    height: 250px; 
    }

    figcaption {
        background-color: white;
      padding: .25rem 1rem;
      text-align: center;
    }
  }

</style>