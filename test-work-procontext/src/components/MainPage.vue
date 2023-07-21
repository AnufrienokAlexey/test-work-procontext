<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <ul class="dropdown__list flex">
        <li
          v-for="(list, index) in lists"
          :key="index"
          class="dropdown__items flex"
        >
          <label class="label-title">
            <input
              v-model="listArray"
              :value="list.listId"
              type="checkbox"
              @click="isListShow(list.listId)"
            />
            <span></span>
            List {{ list.listId }}
          </label>
          <ul v-if="list.show" class="dropdown__list flex">
            <li
              v-for="item in items"
              :key="item.id"
              class="dropdown__items flex"
            >
              <label>
                <input
                  type="checkbox"
                  @change="addItemsArray(list.listId, item.id)"
                />
                <span></span>
                Item{{ item.id }}
              </label>
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
      itemsArray: [],
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
    addItemsArray(id, value) {
      this.itemsArray.push({ id: id, value: value });
    },
    isListShow(listId) {
      this.lists.forEach((list) => {
        if (list.listId === listId) {
          list.show = list.show === false;
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
label input {
  display: none;
}
label span {
  height: 12px;
  width: 12px;
  border: 1px solid gray;
  display: inline-block;
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  padding: 3px;
}
[type="checkbox"]:checked + span:before {
  content: "\2714";
  position: absolute;
  top: -5px;
  left: 0;
  font-size: 23px;
  color: green;
}
</style>
