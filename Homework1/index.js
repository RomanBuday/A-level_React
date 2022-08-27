import { getTabs } from "./cart.js";
import { userData } from "./userData.js";
import { searchData } from "./search.js";
import { setSort } from "./sort.js";
import { getDetails, modalSwitcher} from "./modal.js";

document.addEventListener('DOMContentLoaded', function () {
  getTabs(userData);
  searchData();
  setSort(sort => getTabs(userData, sort));
  getDetails(userData);
  modalSwitcher();
});