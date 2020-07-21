<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item" class="detail-swiper">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  import {Swiper,SwiperItem} from '@/components/common/swiper/index';

  export default {
    name: 'DetailSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>