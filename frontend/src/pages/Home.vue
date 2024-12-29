<template>
  <div class="max-w-3xl py-12 mx-auto">
    {{myActions.data}}
  </div>
</template>

<script setup>
import { Dialog } from 'frappe-ui'
import { createResource } from 'frappe-ui'

const myActions = createResource({
    doctype: 'Actions',
    fields: ["*"],
    limit: 10
})

myActions.reload()

</script>
