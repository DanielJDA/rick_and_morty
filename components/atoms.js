import { atom } from "atomic-state";

export const favorito = atom({
  name: "favorito",
  default:[ ],
  localStoragePersistence: true,
  
});