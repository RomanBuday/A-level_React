import { getTabs } from "./cart.js";
import { userData } from "./userData.js";
import { searchData } from "./search.js";


document.addEventListener('DOMContentLoaded', function () {
  getTabs(userData);
  searchData();
});