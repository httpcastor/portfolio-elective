<script setup lang="ts">
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-vue-next';
import { developerProfile } from '../data/portfolioData';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <footer class="py-12 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 text-xs">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
      <!-- Brand & Copy -->
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
        <span class="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#049fd9]"></span>
          <span>{{ developerProfile.name }}</span>
        </span>
        <span class="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
        <span>Computer Networking · Hardware Support · QA Testing</span>
        <span class="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
        <span>Aparri, Cagayan</span>
      </div>

      <!-- Links & Scroll to top -->
      <div class="flex items-center gap-4">
        <a
          :href="developerProfile.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-[#049fd9] dark:hover:text-[#00bceb] transition-colors"
        >
          LinkedIn
        </a>
        <a
          :href="developerProfile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          :href="'mailto:' + developerProfile.email"
          class="hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          Email
        </a>
        <button
          type="button"
          @click="scrollToTop"
          class="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer ml-2 p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
          title="Back to top"
        >
          <span>Top</span>
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </footer>
</template>
