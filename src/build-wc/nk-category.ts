import { defineCustomElement } from 'vue'
import ListProduct from '../components/categories/ListProduct.ce.vue'; 
customElements.define('nk-products', defineCustomElement(ListProduct));