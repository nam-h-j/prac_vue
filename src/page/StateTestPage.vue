<script>
import PageLayout from "../components/Layouts/PageLayout";
import ParentCounter from "@/components/Modules/ParentCounter";
export default {
  name: "LandingPage",
  components: {
    PageLayout,
    ParentCounter,
  },
};
</script>

<template>
  <div>
    <h1>기본 스테이트로 관리하기 테스트 페이지</h1>
    <PageLayout><ParentCounter /></PageLayout>
  </div>
</template>
