<template>
  <div ref="artRef"></div>
</template>

<script>
import Artplayer from "artplayer";
export default {
  data() {
    return {
      currentTime: 0,
      instance: null,
    };
  },
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    takeCurrentTime() {
      let currentTime = parseInt(this.instance.currentTime);
      this.currentTime = currentTime;
      this.$emit("ctime", this.currentTime);
    },
  },
  mounted() {
    this.instance = new Artplayer({
      ...this.option,
      container: this.$refs.artRef,
    });

    this.$nextTick(() => {
      this.$emit("get-instance", this.instance);
    });
  },
  beforeUnmount() {
    if (this.instance && this.instance.destroy) {
      this.instance.destroy(false);
    }
  },
};
</script>
