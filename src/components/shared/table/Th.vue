<template>
  <styled-wrapper>
    <slot />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.th`
  text-align: left;
  font-size: 13px;
  font-weight: normal;
  padding: 1.25rem 1rem;
  background: ${props => props.theme.colorTableHeader};
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
