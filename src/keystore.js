import { get, set, createStore } from "idb-keyval";

const keychainStore = createStore("keys", "keychain");
const userkeysStore = createStore("crypt", "userKeys");

const keychain = {
  get: async (key, value) => {
    get(key, value, keychainStore);
  },
  set: async (key, value) => {
    set(key, value, keychainStore);
  },
};

const userkeys = {
  get: async (key, value) => {
    get(key, value, userkeysStore);
  },
  set: async (key, value) => {
    set(key, value, userkeysStore);
  },
};

module.exports = { keychain, userkeys };