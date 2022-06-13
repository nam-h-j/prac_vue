<script>
import PageLayout from "../components/Layouts/PageLayout";
import ParentCounterVuex from "../components/Modules/ParentCounterVuex";

export default {
  name: "LandingPage",
  components: {
    PageLayout,
    ParentCounterVuex,
  },
};
</script>

<template>
  <div>
    <h1>뷰엑스로 관리하기 테스트 페이지</h1>
    <PageLayout><ParentCounterVuex /></PageLayout>
  </div>
</template>
