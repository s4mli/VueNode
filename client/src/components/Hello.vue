<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <table class="table-wrap">
        <tr>
          <td width="100">Node Env</td>
          <td width="100">API Root</td>
          <td width="100">Endpoint</td>
        </tr>
        <tr>
          <td>{{ this.env.NODE_ENV }}</td>
          <td>{{ this.env.API_ROOT }}</td>
          <td>:8080/contacts</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: "Welcome to Contacts Manager App",
      env: process.env
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
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
</style>
