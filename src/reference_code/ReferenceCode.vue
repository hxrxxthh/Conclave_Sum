<script setup>
defineProps({
  ApiObject: {
    type: Object,
    // type: String, >> possible also
    required: true,
  },
});
</script>

<script>
import Thingy from "./thingy.vue";

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
