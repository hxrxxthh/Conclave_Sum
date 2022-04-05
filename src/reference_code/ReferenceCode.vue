
// BASIC DEFINE PROPS
<script setup>
defineProps({
  ApiObject: {
    type: Object,
    // type: String, >> possible also
    required: true,
  },
});
</script>


// EXPORT DEFAULT SETUP 
<script>
export default {
  data() {
    return {};
  },
  methods: {
    myFunc() {},
  },
  created() {},
  components: {},

  computed: {
    displayArray() {},
  },

  beforeCreate: function () {},
};
</script>


// HAVING SUBCOMPONENT IN PROP SYSTEM 
<template>
  <h1>{{ PropSample }}</h1>
  <!-- ^needs to be sent from its parent component -->
</template>
<script setup>
defineProps({
  PropSample: {
    type: String,
    required: true,
  },
});
</script>
// IN PARENT COMPONENT 
<script setup>
import ChildComponent from "./components/ChildComponent.vue";
</script>
<template>
  <ChildComponent PropSample="Message I sent" />
  <!-- ^^this will load into subcomponent as a prop -->
</template>

// HAVING AN ARRAY BASED OFF DATA 
<template>
  <ul>
    <li v-for="'liItems' in myArray”>{{ liItems.title }}</li>
    <!-- ^ can add more items and it will just keep running -->
  </ul>
</template>
 <script> 
export default {
      data() {
              return{
                     myArray:[  { title: 'title_1'}, {title: 'title_2'} ]
               };
       }
       methods: {
       }, 
}
 </script> 
