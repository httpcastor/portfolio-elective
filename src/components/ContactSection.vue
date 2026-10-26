<script setup lang="ts">
import { ref } from 'vue';
import { developerProfile } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Network, ExternalLink } from 'lucide-vue-next';

const email = developerProfile.email;
const copied = ref<boolean>(false);

const formName = ref<string>('');
const formEmail = ref<string>('');
const formSubject = ref<string>('');
const formMessage = ref<string>('');
const formSubmitted = ref<boolean>(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
};

const submitMessage = () => {
  if (!formName.value || !formMessage.value) return;
  
  const subject = encodeURIComponent(
    formSubject.value || `Message from ${formName.value}`
  );
  const body = encodeURIComponent(
    `Name: ${formName.value}\nEmail: ${formEmail.value}\n\nMessage:\n${formMessage.value}`
  );
  
  window.location.href = `mailto:${developerProfile.email}?subject=${subject}&body=${body}`;
  formSubmitted.value = true;
};
</script>

<template>
  <section id="contact" class="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12">
        <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#049fd9] dark:text-[#00bceb] mb-2 font-semibold">
          <span>06. Connect & Inquiries</span>
          <span aria-hidden="true">·</span>
          <span>Aparri, Cagayan</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Get in Touch
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl">
          Interested in discussing computer networking, hardware maintenance, software QA testing, or technical collaboration? Reach out directly.
        </p>
      </div>

      <!-- 2-Column Contact Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <!-- Direct Channels (Left) -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Primary Email Card -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
            <div class="flex items-start justify-between">
              <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#005073] dark:text-[#00bceb] border border-sky-100 dark:border-sky-900/40">
                <Mail class="w-5 h-5" />
              </div>
              <button
                type="button"
                @click="copyEmail"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <Copy v-else class="w-3.5 h-3.5" />
                <span>{{ copied ? 'Copied' : 'Copy Email' }}</span>
              </button>
            </div>

            <div>
              <div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                Direct Email
              </div>
              <a
                :href="'mailto:' + email"
                class="text-base sm:text-lg font-semibold text-slate-900 dark:text-white hover:text-[#049fd9] dark:hover:text-[#00bceb] transition-colors break-all"
              >
                {{ email }}
              </a>
            </div>

            <div class="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
              Direct inbox response for technical discussions or professional networking.
            </div>
          </div>

          <!-- LinkedIn Channel -->
          <a
            :href="developerProfile.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-[#049fd9] dark:hover:border-[#049fd9] transition-all flex items-center justify-between group"
          >
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-[#005073] dark:text-[#00bceb]">
                <Linkedin class="w-5 h-5" />
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  LinkedIn Profile
                </div>
                <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#049fd9] dark:group-hover:text-[#00bceb] transition-colors">
                  linkedin.com/in/httpcastor
                </div>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </a>

          <!-- GitHub Channel -->
          <a
            :href="developerProfile.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-slate-400 dark:hover:border-slate-700 transition-all flex items-center justify-between group"
          >
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                <Github class="w-5 h-5" />
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  GitHub Profile
                </div>
                <div class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#049fd9] transition-colors">
                  github.com/httpcastor
                </div>
              </div>
            </div>
            <ExternalLink class="w-4 h-4 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
          </a>

          <!-- Location Info -->
          <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div class="flex items-center gap-2.5 font-medium text-slate-900 dark:text-white">
              <MapPin class="w-4 h-4 text-[#049fd9] shrink-0" />
              <span>Based in {{ developerProfile.location }}</span>
            </div>
            <p class="text-slate-500 dark:text-slate-400 pl-6">
              Fourth-year Computer Engineering student at Cagayan State University – Carig Campus.
            </p>
          </div>
        </div>

        <!-- Quick Message Form (Right - Personal inquiry, no "service" selling) -->
        <div class="lg:col-span-7">
          <form
            @submit.prevent="submitMessage"
            class="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
          >
            <h3 class="text-base font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="nameInput" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                  Your Name *
                </label>
                <input
                  id="nameInput"
                  v-model="formName"
                  type="text"
                  required
                  placeholder="e.g. Jordan Santos"
                  class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors"
                />
              </div>

              <div>
                <label for="emailInput" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                  Your Email
                </label>
                <input
                  id="emailInput"
                  v-model="formEmail"
                  type="email"
                  placeholder="jordan@example.com"
                  class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors"
                />
              </div>
            </div>

            <div>
              <label for="subjectInput" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                Subject
              </label>
              <input
                id="subjectInput"
                v-model="formSubject"
                type="text"
                placeholder="Networking Inquiry / Connection"
                class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors"
              />
            </div>

            <div>
              <label for="messageTextarea" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
                Message *
              </label>
              <textarea
                id="messageTextarea"
                v-model="formMessage"
                rows="4"
                required
                placeholder="Write your message here..."
                class="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors"
              ></textarea>
            </div>

            <div class="pt-2 flex items-center justify-between">
              <button
                type="submit"
                class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#005073] hover:bg-[#003d59] dark:bg-[#049fd9] dark:hover:bg-[#0388ba] dark:text-slate-950 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <Send class="w-4 h-4" />
                <span>Launch Email Client</span>
              </button>

              <span v-if="formSubmitted" class="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                Draft prepared in your email client
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
