<template>
  <div class="home">
    <h1>Hi, I'm Adam Bartlett</h1>
    <p>I craft beautiful software experiences.</p>
    <button @click="scrollToSection('about')">Learn More</button>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    scrollToSection(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  color: white;
}
h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #f8f8f8;
}
</style>
