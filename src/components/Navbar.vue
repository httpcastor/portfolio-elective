<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Github, Linkedin, Sun, Moon, ArrowUpRight } from 'lucide-vue-next';
import { developerProfile } from '../data/portfolioData';

defineProps<{
  isDark: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggle-theme'): void;
}>();

const activeSection = ref<string>('home');
const isScrolled = ref<boolean>(false);

const navItems = [
  { id: 'home', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'network-lab', label: 'Subnet Calculator' },
  { id: 'contact', label: 'Contact' },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 15;

  const scrollPosition = window.scrollY + 130;
  for (let i = navItems.length - 1; i >= 0; i--) {
    const item = navItems[i];
    const el = document.getElementById(item.id);
    if (el && el.offsetTop <= scrollPosition) {
      activeSection.value = item.id;
      break;
    }
  }
};

const scrollTo = (id: string) => {
  activeSection.value = id;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b"
    :class="[
      isScrolled
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80 shadow-xs'
        : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3 md:gap-6">
      <!-- Zone 1: Brand Wordmark with subtle Cisco blue touch -->
      <a
        href="#home"
        @click.prevent="scrollTo('home')"
        class="flex items-center gap-2 group whitespace-nowrap shrink-0"
      >
        <span class="w-2.5 h-2.5 rounded-full bg-[#049fd9] group-hover:scale-110 transition-transform"></span>
        <span class="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-[#049fd9] transition-colors">
          {{ developerProfile.name }}
        </span>
        <span class="text-xs font-mono text-slate-400 dark:text-slate-500 hidden md:inline">
          / {{ developerProfile.handle }}
        </span>
      </a>

      <!-- Zone 2: Direct Navigation (Zero Hamburger! All links immediately visible & touch-navigable) -->
      <nav
        class="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300"
        aria-label="Main Navigation"
      >
        <button
          v-for="item in navItems"
          :key="item.id"
          type="button"
          @click="scrollTo(item.id)"
          class="px-2.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer text-xs"
          :class="[
            activeSection === item.id
              ? 'text-[#005073] dark:text-[#00bceb] font-semibold bg-sky-50 dark:bg-sky-950/60'
              : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50'
          ]"
        >
          {{ item.label }}
        </button>
      </nav>

      <!-- Zone 3: Direct Actions (LinkedIn + GitHub + Theme switch) -->
      <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <!-- LinkedIn Link -->
        <a
          :href="developerProfile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-[#049fd9] dark:hover:text-[#00bceb] hover:bg-sky-50 dark:hover:bg-slate-800/60 transition-colors"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Linkedin class="w-4 h-4" />
        </a>

        <!-- GitHub Link -->
        <a
          :href="developerProfile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <Github class="w-4 h-4" />
        </a>

        <!-- Theme Toggle -->
        <button
          type="button"
          @click="emit('toggle-theme')"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Toggle theme"
        >
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
