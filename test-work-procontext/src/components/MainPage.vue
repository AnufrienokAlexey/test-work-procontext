<template>
  <h1>Тестовая работа</h1>
  <div class="container flex">
    <aside class="left">
      <ul class="dropdown__list flex">
        <li
          v-for="(list, index) in allLists"
          :key="index"
          class="dropdown__items flex"
        >
          {{ list }}
          <label class="label-title">
            <input :value="list.listId" type="checkbox" />
            List {{ list.listId }}
          </label>
          <ul v-if="true" class="dropdown__list flex">
            <li
              v-for="item in items"
              :key="item.id"
              class="dropdown__items flex"
            >
              <label>
                <input type="checkbox" />
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPage",
  computed: mapGetters(["allLists"]),
  methods: mapActions(["fecthLists"]),
  async mounted() {
    this.fecthLists();
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
