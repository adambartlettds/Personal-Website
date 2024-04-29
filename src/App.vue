<template>
    <div id="app">
        <HomePage /> <!-- Assuming you've renamed Home to HomePage -->
        <Projects />
        <!-- Your other components like Footer etc. -->
    </div>
</template>

<script>

    import HomePage from './views/HomePage.vue'; // Ensure this import is correct after the rename
    import Projects from './components/Projects.vue';

    export default {
        name: 'App',
        components: {
            HomePage, // Ensure this is correct after the rename
            Projects
        }
    };
</script>

<style>
    /* Global styles */
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        /* This is to ensure that any scroll bars don't interfere with full width */
        overflow-x: hidden;
    }
        #app

    {
        /* Ensure that the #app fills the entire viewport as well */
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>

/* Global styles */



