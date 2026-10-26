<script setup lang="ts">
import { developerProfile, quickFacts } from '../data/portfolioData';
import { Network, ShieldCheck, MapPin, GraduationCap, Wrench, Radio, ArrowRight, Code2 } from 'lucide-vue-next';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section id="about" class="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#049fd9] dark:text-[#00bceb] mb-2 font-semibold">
          <span>01. Background & Qualifications</span>
          <span aria-hidden="true">·</span>
          <span>Aparri, Cagayan</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Network Systems, Hardware Support & Quality Assurance
        </h2>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Left: Narrative Bio -->
        <div class="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <p>
            {{ developerProfile.bioParagraph1 }}
          </p>

          <p>
            {{ developerProfile.bioParagraph2 }}
          </p>

          <!-- Core Competencies as clean unboxed list (Aligned with authentic background) -->
          <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
            <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
              Primary Technical Knowledge
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <Network class="w-4 h-4 text-[#049fd9] shrink-0 mt-0.5" />
                <div>
                  <div class="font-semibold text-slate-900 dark:text-white text-xs">Networking Basics</div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">IPv4 subnetting, basic IP Addressing , OSI</div>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <ShieldCheck class="w-4 h-4 text-[#049fd9] shrink-0 mt-0.5" />
                <div>
                  <div class="font-semibold text-slate-900 dark:text-white text-xs">Cybersecurity Fundamentals</div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5"> Firewalls, Configuration, Device hardening</div>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <Wrench class="w-4 h-4 text-[#049fd9] shrink-0 mt-0.5" />
                <div>
                  <div class="font-semibold text-slate-900 dark:text-white text-xs">Hardware & Upgrade Support</div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Maintenance,Upgrades, Building</div>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                <Radio class="w-4 h-4 text-[#049fd9] shrink-0 mt-0.5" />
                <div>
                  <div class="font-semibold text-slate-900 dark:text-white text-xs">Event Tech Support </div>
                  <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Live Audio/visual/network ops </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-4">
            <button
              type="button"
              @click="scrollTo('network-lab')"
              class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005073] dark:text-[#00bceb] hover:underline cursor-pointer"
            >
              <span>Explore the Subnet Calculator</span>
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Right: Institutional & Quick Fact Cards -->
        <div class="lg:col-span-5 flex flex-col gap-4">
          <!-- Institutional Profile Box -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#005073] dark:text-[#00bceb] border border-sky-100 dark:border-sky-900/50">
                <GraduationCap class="w-5 h-5" />
              </div>
              <div>
                <div class="text-sm font-bold text-slate-900 dark:text-white">
                  {{ developerProfile.education.degree }}
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400">
                  {{ developerProfile.education.institution }}
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-xs">
              <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Home Base:</span>
                <span class="font-medium text-slate-900 dark:text-white">{{ developerProfile.location }}</span>
              </div>
              <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Primary Priority:</span>
                <span class="font-medium text-[#005073] dark:text-[#00bceb] font-mono">Aspiring Network Engineer</span>
              </div>
              <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Skills:</span>
                <span class="font-medium text-slate-900 dark:text-white">Hardware & Upgrade Support</span>
              </div>
              <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Systems QA Testing:</span>
                <span class="font-medium text-emerald-600 dark:text-emerald-400">Software Systems Background</span>
              </div>
              <div class="flex items-center justify-between text-slate-600 dark:text-slate-300">
                <span class="text-slate-400">Dev Literacy:</span>
                <span class="font-medium text-slate-900 dark:text-white">Django · Vue 3 · SQL · Git Bash · TypeScript</span>
              </div>
            </div>
          </div>

          <!-- Quick Facts 2x2 Grid -->
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="fact in quickFacts"
              :key="fact.label"
              class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"
            >
              <div class="text-[10px] font-mono uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-1">
                {{ fact.label }}
              </div>
              <div class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                {{ fact.value }}
              </div>
              <div v-if="fact.detail" class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {{ fact.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
