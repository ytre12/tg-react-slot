import TG from "./tg.js";

export function initStorage() {
  TG.CloudStorage.getItem("balance", (error, value) => {
    if (error) return;

    if (!value) {
      TG.CloudStorage.setItem("balance", "1000");
    }
  });
}
