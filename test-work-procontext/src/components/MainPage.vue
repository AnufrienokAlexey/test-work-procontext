<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <div v-for="list in listsCount" :key="list" class="dropdown flex">
        <label class="label-title">List {{ list }}</label>
        <ul class="dropdown__list flex">
          <li
            v-for="(item, index) in this.rand(4, 10)"
            :key="item.index"
            class="dropdown__items flex red"
          >
            <label
              ><input type="checkbox" name="type[]" />Item
              {{ index + 1 }}</label
            >
            <p>{{ item.number }}</p>
            {{ this.rand(4, 10) }}
          </li>
        </ul>
      </div>
    </aside>
    <aside class="right">
      <ul>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </aside>
  </div>
</template>
p
<script>
export default {
  name: "MainPage",
  data: function () {
    return {
      listsCount: 5,
    };
  },
  methods: {
    rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.container {
  justify-content: space-between;
}
aside {
  width: 40%;
  border: 2px solid #2c3e50;
}
.label-title {
  white-space: nowrap;
  align-self: flex-start;
  background-color: bisque;
}
.dropdown__list {
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
.dropdown__items {
  justify-content: space-between;
}
.red {
  background-color: rgba(102, 51, 153, 0.42);
}
</style>
