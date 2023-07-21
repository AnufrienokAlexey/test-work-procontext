<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <ul>
        <li v-for="list in lists" :key="list.listId">
          <label>
            <input
              v-model="listArray"
              :value="list.listId"
              type="checkbox"
              @click="isListShow(list.listId)"
            />
            List {{ list.listId }}
          </label>
          <ul v-if="list.show">
            <li v-for="item in items" :key="item.id">
              <input type="checkbox" id="item" />
              <label for="item"></label>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <aside class="right flex column"></aside>
  </div>
</template>

<script>
import items from "../data/items";
import lists from "../data/lists";
export default {
  name: "MainPage",
  data: function () {
    return {
      listArray: [],
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
    isListShow(listId) {
      // this.lists[listId - 1].show = true;
      this.lists.forEach((list) => {
        console.log(list);
        if (list.listId === listId) {
          if (list.show === false) {
            list.show = true;
          } else {
            list.show = false;
          }
        }
      });
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
