<template>
  <div v-if="isShowDetails">
  <div class="formSection">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <div class="formDiv">
          <v-row>
            <v-col cols="12" md="12">
                <div class="boxheading">Information of {{singlePeopleData.FirstName}} {{singlePeopleData.LastName}}</div>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.FirstName"
                label="First Name"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.LastName"
                label="Last Name"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.MiddleName"
                label="Middle Name"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.UserName"
                label="Username"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.Gender"
                label="Gender"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.Age"
                label="Age"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="singlePeopleData.FavoriteFeature"
                label="Favorite"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label=" Email"
                :value="singlePeopleData.Emails.join()"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Features"
                :value="singlePeopleData.Features.join()"
                :disabled="true"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-if="singlePeopleData.AddressInfo.length"
                label="City"
                :disabled="true"
                :value="singlePeopleData.AddressInfo[0].City.Name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-if="singlePeopleData.AddressInfo.length"
                label="Country"
                :disabled="true"
                :value="singlePeopleData.AddressInfo[0].City.CountryRegion"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <!-- <label>Address</label> -->
              <!-- <label>{{singlePeopleData.AddressInfo.length ? singlePeopleData.AddressInfo[0].Address:'--'}}</label>  -->
              <!-- <v-text-field
                label="Region"
                :disabled="true"
              ></v-text-field> -->
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea v-if="singlePeopleData.AddressInfo.length"
                label="Address 1"
                :disabled="true"
                rows="2"
                :value="singlePeopleData.AddressInfo[0].Address"
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="12">
              <!-- <v-textarea
                label="Address 2"
                :disabled="true"
                rows="2"
              ></v-textarea> -->
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
  </div>

</template>

<script>
  import axios from "axios";
  export default {
    name: 'PeopleEdit',
    methods: {
      getPeopleByID() {
        // https://services.odata.org/TripPinRESTierService/(S(l2qnbggif3z4hrwz53c40z5n))/People("+"'"+this.$route.params.username+"'"+")
        axios.get("https://services.odata.org/TripPinRESTierService/(S(l2qnbggif3z4hrwz53c40z5n))/People("+"'"+this.$route.params.username+"'"+")").then(response => {
          console.log(response)
          this.singlePeopleData = response.data;
          this.isShowDetails = true;
        });
      },
      editItem(item) {
        console.log(item)
      }
    },
    data () {
      return {
        isShowDetails:false,
        singlePeopleData:{},
        
      }
    },
    mounted () {
      console.log(this.$route.params.username)
      this.getPeopleByID()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.v-input--is-label-active label {
  left: -8px !important;
  /* background:red; */
}
.boxheading{
  font-size: 20px;
  color: #676767;
  background: #DDD;
  padding: 10px;
}
.theme--light.v-input--is-disabled{
  color: #8b8b8b;
}
.formSection{
  margin-top:5%;  
}
.formSection .formsubmit{
  background: #4caf50!important;
  color: #fff;
}
.formSection .formDiv{
 /* background: #fafafa; */
  padding: 20px;
  border-radius: 4px;
  box-shadow: 1px 1px 10px 1px #ddd;
}

h3 {
  margin: 40px 0 0;
}
/* table css */
.v-data-table-header th.text-start.sortable {
    color: #000 !important;
    opacity: 1 !important;
    font-size: 14px !important;
}

tr {
    /* border-bottom: 1px solid red; */
}

th.text-start.sortable {
    background: #ccc;
}

th.text-start {
    background: rgb(143 182 201 / 12%) !important;
}

th.text-start.sortable {
    background: rgb(143 182 201 / 20%) !important;
}


.v-data-table__wrapper {
    margin-top: 10px !important;
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
