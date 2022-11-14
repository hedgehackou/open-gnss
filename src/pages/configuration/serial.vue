<template>
  <div class="grid">
    <div class="col-12">
      <div class="flex flex-column gap-5">
        <Toolbar>
          <template #end>
            <Button label="Disconnect" class="p-button-danger" icon="pi pi-times" @click="disconnect(port.path)" />
          </template>
        </Toolbar>
        <Card v-for="port in ports" :key="port.path">
          <template #title>
            {{ port.path }}
          </template>
          <template #content>
            <ul>
              <li v-for="(value, propertyName) in port" :key="propertyName">{{ propertyName }}: {{ value }}</li>
            </ul>
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Connect" @click="connect(port.path)" />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: ports } = await useFetch('/api/configuration/serial/ports')

async function connect (path) {
  await $fetch('/api/configuration/serial/connect', { method: 'POST', body: JSON.stringify({ path }) })
}

async function disconnect () {
  await $fetch('/api/configuration/serial/disconnect', { method: 'POST' })
}
</script>
