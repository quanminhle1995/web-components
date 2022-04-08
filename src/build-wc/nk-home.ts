import { defineCustomElement } from 'vue'
import Header from '@/components/Header.ce.vue'; 
import Footer from '@/components/Footer.ce.vue';

customElements.define('nk-header', defineCustomElement(Header));
customElements.define('nk-footer', defineCustomElement(Footer));