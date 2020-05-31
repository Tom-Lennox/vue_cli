<template>
  <div>
    <slot name="title">フォールバックコンテンツ</slot>
    <slot name="number">フォールバックコンテンツ</slot>
    <slot name="douteki"></slot>
    {{ headerText }}
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>
