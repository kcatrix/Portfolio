<!-- pris de : https://www.w3schools.com/css/css_navbar_horizontal.asp -->
<!-- se renseigner sur ancrage pour le scroll -->
<template>
  <nav class="navbar">
    <ul class="list">
      <li><a class=active href="#s1">Home</a></li>
      <li><a href="#s2">About</a></li>
      <li><a href="#s3">Project</a></li>
      <li><a href="#s4">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const sections = ['s1', 's2', 's3', 's4'];
      const navLinks = document.querySelectorAll('.list li a');

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 1 && rect.bottom >= 1) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.list li a[href="#${sectionId}"]`);
            if (activeLink) {
              activeLink.classList.add('active');
           }
          }
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar {
  background-color: #e7ebf4;
  z-index: 500;
}

.list {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.list li:last-child {
  border-right: none;
}
.list li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.list li a:hover {
  background-color: #111;
}

.list li a.active {
  background-color: #4CAF50;
}

</style>