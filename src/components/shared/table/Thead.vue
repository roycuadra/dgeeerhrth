<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.thead``;

export default {
  components: {
    StyledWrapper
  }
};
</script>
