<template>
  <styled-wrapper>
    <card>
      <CardHeader>
        <CardTitle cardTitle="Rounded" />
      </CardHeader>
      <CardContent>
        <StyledAlert rounded primary
          >This is a primary rounded alert.</StyledAlert
        >
        <StyledAlert rounded secondary
          >This is a secondary rounded alert.</StyledAlert
        >
      </CardContent>
    </card>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "../../../../shared/card";
import { Alert } from "../../../../shared/common";

const StyledWrapper = styled.div``;

const StyledAlert = styled(Alert)`
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledAlert,
    Card,
    CardHeader,
    CardTitle,
    CardContent
  }
};
</script>
