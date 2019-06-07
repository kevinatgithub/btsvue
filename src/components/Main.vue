<template>
    <div>
        <navigation />
        <router-view></router-view>
        <main>
        </main>
    </div>
</template>

<script>
import Navigation from './app/Navigation'

export default {
    components : {Navigation}
}
</script>
