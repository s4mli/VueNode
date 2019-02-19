<template>
  <div class="contacts">
    <h1>Add Contact</h1>
    <div class="form">
      <div>
        <input type="text" name="firstName" placeholder="First Name" v-model="firstName">
      </div>
      <div>
        <input type="text" name="lastName" placeholder="Last Name" v-model="lastName">
      </div>
      <div>
        <textarea rows="5" cols="5" placeholder="Delivery Address" v-model="deliveryAddress"></textarea>
      </div>
      <div>
        <textarea rows="5" cols="15" placeholder="Billing Address" v-model="billingAddress"></textarea>
      </div>
      <div>
        <button class="app_contact_btn" @click="addContact">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsService from "@/services/ContactsService";
export default {
  name: "NewContact",

  data() {
    return {
      firstName: "",
      lastName: "",
      deliveryAddress: "",
      billingAddress: ""
    };
  },

  methods: {
    async addContact() {
      await ContactsService.addContact({
        firstName: this.firstName,
        lastName: this.lastName,
        deliveryAddress: this.deliveryAddress,
        billingAddress: this.billingAddress
      });
      this.$router.push({ name: "Contacts" });
    }
  }
};
</script>

<style type="text/css">
.form input,
.form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_contact_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
