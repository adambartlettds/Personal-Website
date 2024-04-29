<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="#">Adam Bartlett</a>
      <div class="navbar-end">
        <a class="navbar-item" href="#about">About</a>
        <a class="navbar-item" href="#projects">Projects</a>
        <a class="navbar-item" href="#blog">Blog</a>
        <a class="navbar-item" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.navbar-item {
  margin-left: 1rem;
  color: #ddd;
  text-decoration: none;
  transition: color 0.3s;
}
.navbar-item:hover {
  color: #fff;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
