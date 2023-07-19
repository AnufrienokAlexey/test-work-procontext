<template>
  <div
    class="not-found-page"
    :style="{
      'background-image': `url(${require('@/assets/images/404.jpg')})`,
      height: '100%',
    }"
  >
    <h1>Ошибка 404. Страница не найдена</h1>
    <div
      class="image not-found-page"
      :style="{
        'background-image': `url(${require('@/assets/images/404.jpg')})`,
        height: '100%',
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "NotFoundView",
};
</script>
<style scoped>
h1 {
  height: 551px;
}
.image {
  width: 200px;
  height: 600px;
  background-image: url("@/assets/images/404.jpg");
}
.not-found-page {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
