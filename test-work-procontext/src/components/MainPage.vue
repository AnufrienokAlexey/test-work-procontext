<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <div v-for="list in lists" :key="list[0]" class="dropdown flex">
        <div class="dropdown__checkbox flex">
          <label class="label-title">
            <input
              type="checkbox"
              v-model="checked"
              :value="`${list[1].listId}`"
              @change.prevent="show = !show"
            />
            List {{ list[1].listId }}
          </label>
          <div class="dropdown__container flex column">
            <ul v-for="l in list[2]" :key="l" class="dropdown__list flex">
              <li class="dropdown__items flex">
                <label class="label-title"
                  ><input
                    type="checkbox"
                    v-model="itemArr"
                    :value="`${l[1].id}`"
                  />Item {{ l[1].id }}</label
                >
                <div class="flex">
                  <span>{{ l[1].count }} </span>
                  <span
                    class="colors__value"
                    :style="{ backgroundColor: l[1].color }"
                  ></span>
                </div>
              </li>
            </ul>
          </div>
          <!--            <ul v-if="true" class="dropdown__list flex">-->
          <!--              <li-->
          <!--                v-for="(item, index) in items"-->
          <!--                :key="index"-->
          <!--                class="dropdown__items flex"-->
          <!--              >-->
          <!--                <label-->
          <!--                  ><input-->
          <!--                    type="checkbox"-->
          <!--                    v-model="itemArr"-->
          <!--                    :value="`${item.id}`"-->
          <!--                  />Item {{ index + 1 }}</label-->
          <!--                >-->
          <!--                <div class="flex">-->
          <!--                  <span>{{ item.id }} </span>-->
          <!--                  <span-->
          <!--                    class="colors__value"-->
          <!--                    :style="{ backgroundColor: item.color }"-->
          <!--                  ></span>-->
          <!--                </div>-->
          <!--              </li>-->
          <!--            </ul>-->
        </div>
      </div>
    </aside>
    <aside class="right flex column">
      <ul v-for="chek in checked" :key="chek.listId">
        <li v-for="(l, index) in chek" :key="index">
          List {{ l }}
          <div v-for="(item, index) in itemArr" :key="index" class="flex">
            <div v-for="(element, i) in items[index].count" :key="i">
              <span
                class="colors__value"
                :style="{ backgroundColor: `${items[index].color}` }"
              ></span>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import items from "../data/items";
import lists from "../data/lists";
export default {
  name: "MainPage",
  data() {
    return {
      checked: [],
      itemArr: [],
      listArr: [],
      show: false,
    };
  },
  computed: {
    items() {
      return this.slice(items);
    },
    lists() {
      // console.log(this.func(lists));
      console.log(this.func(items, lists));
      return this.func(items, lists);
    },
  },
  methods: {
    func(items, lists) {
      lists = Object.entries(lists);
      lists.forEach((el) => {
        el[2] = Object.entries(this.slice(items));
      });
      return lists;
    },
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
  margin-bottom: 1.5em;
  width: 100%;
  flex-wrap: nowrap;
}
.dropdown__list {
  margin: 0.5em;
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
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
</style>
