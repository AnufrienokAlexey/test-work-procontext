<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <div v-for="list in lists" :key="list.listId" class="dropdown flex">
        <div class="dropdown__checkbox flex">
          <input type="checkbox" v-model="checked" />
          <label> List {{ list.listId }} </label>
        </div>
        <div v-if="isShow" class="dropdown__container flex">
          <ul class="dropdown__list flex">
            <li
              v-for="(item, index) in slice(items)"
              :key="item.id"
              class="dropdown__items flex"
            >
              <label
                ><input type="checkbox" name="type[]" />Item
                {{ index + 1 }}</label
              >
              <div class="flex">
                <span>{{ item.id }} </span>
                <span
                  class="colors__value"
                  :style="{ backgroundColor: item.color }"
                ></span>
              </div>
            </li>
          </ul>
        </div>
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

<script>
import items from "../data/items";
import lists from "../data/lists";
export default {
  name: "MainPage",
  data: function () {
    return {
      checked: [],
      isShow: true,
    };
  },
  computed: {
    items() {
      return items;
    },
    lists() {
      return lists;
    },
  },
  methods: {
    rand(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    slice(array) {
      let arr = array.slice();
      arr = this.shuffle(arr);
      let randomIndex = this.rand(0, 6);
      arr.splice(0, randomIndex);
      // arr.sort((a, b) => a.id - b.id);
      return arr;
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
}
.dropdown {
  width: 100%;
}
.dropdown__container {
  width: 100%;
}
.dropdown__checkbox {
  width: 20%;
  flex-wrap: nowrap;
}
.dropdown__list {
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
}
.dropdown__items {
  justify-content: space-between;
}
.colors__value,
.colors__value::before {
  border-radius: 50%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.colors__value {
  display: block;
  width: 20px;
  height: 20px;
}
.colors__value::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  border: 1px solid transparent;
}
</style>
