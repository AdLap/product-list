import fetchProducts from "@/utility/db";
import { reactive } from "vue";

const state =  reactive({
  products: [{
    name: "Porsche",
    checked: false,
    vatRate: 0,
    buyPrice: 1_000_000,
    sellPrice: 1_500_000,
    id: 1,
},
{
    name: "Infiniti",
    checked: false,
    vatRate: 0,
    buyPrice: 800_000,
    sellPrice: 1_000_000,
    id: 2,
},]
  
});

const method = {
  fetchProducts
}

export default {state, method}