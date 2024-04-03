import { defineCustomElement } from "vue";
import ContactForm from "./App.vue";

const ContactFormElement = defineCustomElement(ContactForm);
customElements.define("contact-form", ContactFormElement);
