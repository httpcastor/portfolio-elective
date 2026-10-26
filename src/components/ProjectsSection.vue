<script setup lang="ts">
import { ref, computed } from 'vue';
import { projectsList } from '../data/portfolioData';
import type { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal.vue';
import { ExternalLink, Github, ArrowUpRight, Network, Wrench, ShieldCheck, Code2, Radio } from 'lucide-vue-next';

const selectedCategory = ref<string>('all');
const activeModalProject = ref<Project | null>(null);

const categories = [
  { id: 'all', label: 'All Projects & Labs' },
  { id: 'networking', label: 'Networking & Hardware' },
  { id: 'qa', label: 'QA Testing' },
  { id: 'software', label: 'Software Basics' },
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projectsList;
  }
  return projectsList.filter((p) => p.category === selectedCategory.value);
});

const openProject = (project: Project) => {
  activeModalProject.value = project;
};

const closeProject = () => {
  activeModalProject.value = null;
};
</script>

<template>
  <section id="projects" class="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#049fd9] dark:text-[#00bceb] mb-2 font-semibold">
            <span>04. Practical Implementation</span>
            <span aria-hidden="true">·</span>
            <span>Labs & Technical Work</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Networking Labs, Hardware Support & QA Testing
          </h2>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
            Real network configurations, PC hardware upgrades, event production setups, and structured software QA test runs.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-x-auto no-scrollbar shrink-0 border border-slate-200/60 dark:border-slate-700/60">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            @click="selectedCategory = cat.id"
            class="px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer"
            :class="[
              selectedCategory === cat.id
                ? 'bg-white dark:bg-slate-900 text-[#005073] dark:text-[#00bceb] shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md hover:border-[#049fd9]/60 dark:hover:border-[#049fd9]/60 transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <!-- Clean unboxed metadata kicker with typographic separator -->
            <div class="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
              <div class="flex items-center gap-2">
                <span class="font-mono text-[#005073] dark:text-[#00bceb] font-semibold">{{ project.categoryLabel }}</span>
                <span aria-hidden="true">·</span>
                <span>{{ project.subtitle }}</span>
              </div>
              <span class="text-[11px] font-mono text-slate-400">{{ project.status }}</span>
            </div>

            <!-- Title -->
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#049fd9] transition-colors">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {{ project.description }}
            </p>

            <!-- Metrics Preview -->
            <div v-if="project.metrics && project.metrics.length > 0" class="mb-6 grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs">
              <div v-for="m in project.metrics" :key="m.label">
                <div class="text-[10px] text-slate-400 font-mono uppercase">{{ m.label }}</div>
                <div class="font-mono font-bold text-slate-800 dark:text-slate-200 mt-0.5 tabular-nums">{{ m.value }}</div>
              </div>
            </div>

            <!-- Tech Stack unboxed tags -->
            <div class="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
            <button
              type="button"
              @click="openProject(project)"
              class="font-semibold text-slate-900 dark:text-white hover:text-[#049fd9] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Inspect Details</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </button>

            <div class="flex items-center gap-3">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                title="View GitHub profile"
              >
                <Github class="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <ProjectDetailModal
      v-if="activeModalProject"
      :project="activeModalProject"
      @close="closeProject"
    />
  </section>
</template>
