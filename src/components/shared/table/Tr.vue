<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.tr``;

export default {
  components: {
    StyledWrapper
  }
};
</script>
