<template>
  <div class="contacts">
    <h1>Contacts</h1>
    <div v-if="contacts.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewContact' }">Add</router-link>
      </div>
      <table>
        <tr>
          <td width="200">First Name</td>
          <td width="200">Last Name</td>
          <td width="500">Delivery Address</td>
          <td width="500">Billing Address</td>
          <td width="200">Action</td>
        </tr>
        <tr v-for="contact in contacts" :key="contact._id">
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
          <td>{{ contact.deliveryAddress }}</td>
          <td>{{ contact.billingAddress }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditContact', params: { id: contact._id } }">Edit</router-link>|
            <a href="#" v-on:click="deleteContact(contact._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>There are no contracts.
      <br>
      <br>
      <router-link v-bind:to="{ name: 'NewContact' }" class="add_contract_link">Add</router-link>
    </div>
  </div>
</template>

<script>
import ContactsService from "@/services/ContactsService";

export default {
  name: "contacts",
  data() {
    return {
      contacts: []
    };
  },

  mounted() {
    this.getContacts();
  },

  methods: {
    async getContacts() {
      const response = await ContactsService.fetchContacts();
      this.contacts = response.data.contacts;
      console.log(this.contacts);
    },

    async deleteContact(id) {
      await ContactsService.deleteContact(id);
      const index = this.contacts.findIndex(p => p._id === id);
      this.contacts.splice(index, 1);
      this.$router.push({ name: "Contacts" });
    }
  }
};
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th,
table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_contract_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
