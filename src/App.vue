<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import NetworkLab from './components/NetworkLab.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';

const isDark = ref<boolean>(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  applyTheme();
};

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('httpcastor_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('httpcastor_theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('httpcastor_theme');
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme();
});
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
    <!-- Navbar with zero-hamburger direct navigation -->
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />

    <!-- Main Content Flow -->
    <main class="flex-grow">
      <HeroSection />
      <AboutSection />
      <NetworkLab />
      <ContactSection />
    </main>

    <!-- Clean Footer -->
    <Footer />
  </div>
</template>
