<template>
  <styled-wrapper>
    <styled-title
      :content="tooltip"
      v-tippy="{
        placement: 'top',
        arrow: true
      }"
      :forDark="forDark"
      :cardSubtitle="cardSubtitle"
    >
      {{ cardTitle }}
    </styled-title>
    <StyledSubtitle :forDark="forDark" v-if="cardSubtitle">
      {{ cardSubtitle }}
    </StyledSubtitle>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";

const theProps = {
  cardTitle: String,
  cardSubtitle: String,
  forDark: Boolean,
  tooltip: String
};

const StyledWrapper = styled.div``;

const StyledTitle = styled("div", theProps)`
  font-size: 1.075rem;
  margin-bottom: ${props => (props.cardSubtitle ? "0.375rem" : "0")};
`;

const StyledSubtitle = styled("div", theProps)`
  font-size: 0.8rem;
  font-weight: normal;
  color: ${props =>
    props.forDark ? "rgba(255,255,255,0.57)" : props.theme.colorSubtitle};
`;

export default {
  props: theProps,
  components: {
    StyledWrapper,
    StyledTitle,
    StyledSubtitle
  }
};
</script>
