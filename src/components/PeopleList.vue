<template>
<div>
  <!-- <v-select
      v-model="enabled"
      :items="filters"
      label="Filters"
      clearable
  ></v-select> -->
  <v-data-table v-if="isShowTable"
    :headers="headers"
    :items="peopleListArray"
    :items-per-page="-1"
    :search="search"
    class="elevation-1"
  >
  <template v-slot:top>
    <div class="searchSection">
      <!-- <div class="filterDropdown">
        <v-select
          :items="items1"
          label="Standard"
        ></v-select>
      </div> -->
      <div class="searchBar">
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </div>
    </div>
  </template>
  <template v-slot:[`item.actions`]="{ item }">
    <button @click="editItem(item)">View</button>
  </template>
  </v-data-table>
</div>
</template>

<script>
  import axios from "axios";
  export default {
    // name:PeopleList,
    methods: {
      getPeopleList() {
        axios.get('https://services.odata.org/TripPinRESTierService/(S(2np450522aisjnu33su2usej))/People').then(response => {
          this.peopleListArray = response.data.value;
          this.isShowTable = true;
        });
      },
      editItem(item) {
        console.log(item)
        this.$router.push("/edit/" + item.UserName);
      }
    },
    data () {
      return {
        enabled: null,
        isShowTable:false,
        search: '',
        headers: [
          { text: 'FirstName',align: 'start', sortable: true, value: 'FirstName'},
          { text: 'MiddleName', value: 'MiddleName',sortable: true },
          { text: 'LastName', value: 'LastName',sortable: true },
          { text: 'UserName', value: 'UserName',sortable: true },
          { text: 'Gender', value: 'Gender',sortable: true,filterable:true },
          { text: 'Age', value: 'Age',sortable: true },
          { text: 'FavoriteFeature', value: 'FavoriteFeature',sortable: true },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        peopleListArray: [],
        // slots: [
        //   'body',
        //   'body.append',
        //   'body.prepend',
        //   'footer',
        //   'header.data-table-select',
        //   'header',
        //   'progress',
        //   'item.data-table-select',
        //   'item.<name>',
        //   'no-data',
        //   'no-results',
        //   'top',
        // ],
      }
    },
    mounted () {
      this.getPeopleList()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-start button{
  background: #ddd;
    padding: 5px 9px;
    border-radius: 5px;
}
.searchSection{
  display: inline-block;
    width: 100%;
} 
.searchSection .searchBar{
  width: 20%;
  float: right;
}
.searchSection .filterDropdown{
  width: 10%;
  float: right;
  margin: 0px 20px;
}





h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
