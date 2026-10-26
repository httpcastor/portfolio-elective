<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import type { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Network } from 'lucide-vue-next';

const props = defineProps<{
  project: Project | null;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});
</script>

<template>
  <div
    v-if="project"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs"
    @click.self="emit('close')"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="'project-modal-title-' + project.id"
  >
    <div class="w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
      <!-- Modal Header -->
      <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1 font-semibold">
            <span>{{ project.categoryLabel }}</span>
            <span aria-hidden="true">·</span>
            <span>{{ project.subtitle }}</span>
          </div>
          <h2
            :id="'project-modal-title-' + project.id"
            class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            {{ project.title }}
          </h2>
        </div>

        <button
          type="button"
          @click="emit('close')"
          aria-label="Close dialog"
          class="p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Modal Body (Scrollable) -->
      <div class="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
        <!-- Overview -->
        <div>
          <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
            System Overview & Implementation Scope
          </h3>
          <p class="text-base leading-relaxed text-slate-800 dark:text-slate-200">
            {{ project.fullOverview }}
          </p>
        </div>

        <!-- Metrics Strip -->
        <div v-if="project.metrics && project.metrics.length > 0" class="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
          <div v-for="metric in project.metrics" :key="metric.label">
            <div class="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase">
              {{ metric.label }}
            </div>
            <div class="text-lg font-bold font-mono text-slate-900 dark:text-white mt-0.5 tabular-nums">
              {{ metric.value }}
            </div>
          </div>
        </div>

        <!-- Highlights -->
        <div>
          <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
            Key Architecture & Implementation Highlights
          </h3>
          <ul class="space-y-2.5">
            <li
              v-for="(h, idx) in project.highlights"
              :key="idx"
              class="flex items-start gap-2.5"
            >
              <CheckCircle2 class="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>{{ h }}</span>
            </li>
          </ul>
        </div>

        <!-- Technology Stack -->
        <div>
          <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-semibold">
            Applied Technologies & Protocols
          </h3>
          <div class="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
            <span
              v-for="t in project.techStack"
              :key="t"
              class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {{ t }}
            </span>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
        <div class="text-xs font-mono text-slate-500 flex items-center gap-1.5">
          <span>Status:</span>
          <span class="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>{{ project.status }}</span>
          </span>
        </div>

        <div class="flex items-center gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white rounded-lg transition-colors"
          >
            <Github class="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <button
            type="button"
            @click="emit('close')"
            class="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
