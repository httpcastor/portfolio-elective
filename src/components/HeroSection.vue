<script setup lang="ts">
import { ref } from 'vue';
import { developerProfile } from '../data/portfolioData';
import { Copy, Check, Terminal, ExternalLink, Network, ShieldCheck, ArrowRight, Linkedin, Wrench, Radio } from 'lucide-vue-next';

const copied = ref<boolean>(false);
const imgError = ref<boolean>(false);
const activeTab = ref<'cisco' | 'subnet' | 'qa'>('cisco');

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(developerProfile.email);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleImageError = () => {
  imgError.value = true;
};

const snippets = {
  cisco: `! Cisco IOS Switchport & VLAN Fundamentals
Switch# configure terminal
Switch(config)# hostname Mark Anthony Castor
CSU-SW-01(config)# vlan 10
CSU-SW-01(config-vlan)# name LAB_MO_KO?
CSU-SW-01(config-vlan)# exit
CSU-SW-01(config)# interface FastEthernet0/1
CSU-SW-01(config-if)# description Workstation_LAN_Drop
CSU-SW-01(config-if)# switchport mode access
CSU-SW-01(config-if)# switchport access vlan 10
CSU-SW-01(config-if)# switchport port-security
CSU-SW-01(config-if)# switchport port-security mac-address sticky
CSU-SW-01(config-if)# no shutdown
CSU-SW-01(config-if)# end
CSU-SW-01# copy running-config startup-config`,
  subnet: `! IPv4 Address Space & Subnet Allocation (Aparri Lab)
Network Base:     192.168.10.0 /26
Subnet Mask:      255.255.255.192
Network ID:       192.168.10.0
Default Gateway:  192.168.10.1 (Router Interface G0/0.10)
Usable Host Pool: 192.168.10.2 - 192.168.10.62 (61 Hosts)
Broadcast IP:     192.168.10.63
Binary Mask:      11111111.11111111.11111111.11000000
Verified with ICMP Ping echo-request & reply.`,
  qa: `// Software Systems QA Verification Log
Suite: User & Transaction Integrity Tests
Status: Passed (14 / 14 Verified)
- TC_01: Verify input validation rejects invalid network masks (PASS)
- TC_02: Confirm database transaction rollback on concurrent lock (PASS)
- TC_03: Regression pass on equipment status change events (PASS)
- TC_04: Boundary value test for maximum payload limits (PASS)`
};
</script>

<template>
  <section id="home" class="pt-24 pb-16 sm:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 relative bg-subtle-grid">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- 2-Column Split Hero Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Typographic Hierarchy & Flexbox Profile Image Up Top -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <!-- Flexbox Image Container Up Top (Self-contained, flex layout so it never mashing or breaking in previews) -->
          <div class="flex items-center gap-4 sm:gap-5 mb-6">
            <!-- Profile Photo Container -->
            <div class="relative shrink-0">
              <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#049fd9]/30 shadow-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <img
                  v-if="!imgError"
                  :src="developerProfile.profileImage"
                  :alt="developerProfile.name"
                  referrerpolicy="no-referrer"
                  @error="handleImageError"
                  class="w-full h-full object-cover"
                />
                <!-- Resilient fallback container if image fails to load -->
                <div v-else class="w-full h-full bg-gradient-to-br from-[#005073] to-[#049fd9] text-white flex flex-col items-center justify-center font-bold text-lg">
                  <Network class="w-7 h-7 mb-0.5" />
                  <span class="text-xs font-mono">MC</span>
                </div>
              </div>
              <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center" title="Active">
                <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>
            </div>

            <!-- Header Info Flex Alignment -->
            <div class="flex flex-col">
              <div class="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#049fd9] dark:text-[#00bceb] font-semibold">
                <span>Computer Engineering</span>
                <span aria-hidden="true">·</span>
                <span>Networking Focus</span>
              </div>
              <div class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {{ developerProfile.name }}
              </div>
              <div class="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {{ developerProfile.handle }} · {{ developerProfile.location }}
              </div>
            </div>
          </div>

          <!-- Main Headline (Emphasizing Networking Focus) -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-5 max-w-2xl text-balance">
            Specializing in Computer Networking, Cisco Basics & Technical Support.
          </h1>

          <!-- Lead Paragraph (Authentic background: networking focus, Cisco basics, cybersecurity, hardware certifications, QA testing, event production tech support) -->
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl">
            Computer Engineering student focused primarily on <strong class="text-slate-900 dark:text-white font-semibold">Cisco networking basics, subnetting, and cybersecurity fundamentals</strong>. Backed by certified <strong class="text-slate-900 dark:text-white font-medium">hardware upgrade support</strong>, hands-on experience as a <strong class="text-slate-900 dark:text-white font-medium">QA tester</strong> on software systems, and on-site <strong class="text-slate-900 dark:text-white font-medium">technical support for event productions</strong>.
          </p>

          <!-- Primary Actions (Including LinkedIn + Subnet Calculator) -->
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <button
              type="button"
              @click="scrollTo('network-lab')"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#005073] hover:bg-[#003d59] dark:bg-[#049fd9] dark:hover:bg-[#0388ba] dark:text-slate-950 rounded-lg transition-all cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Network class="w-4 h-4" />
              <span>Open Subnet Calculator</span>
            </button>

            <button
              type="button"
              @click="scrollTo('certificates')"
              class="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <span>View Certifications</span>
              <ArrowRight class="w-3.5 h-3.5 text-slate-400" />
            </button>

            <!-- LinkedIn Direct Link -->
            <a
              :href="developerProfile.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium text-[#005073] dark:text-[#00bceb] bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/60 border border-sky-200 dark:border-sky-800/60 rounded-lg transition-colors whitespace-nowrap"
            >
              <Linkedin class="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <!-- Copy Email Button -->
            <button
              type="button"
              @click="copyEmail"
              class="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              :title="developerProfile.email"
            >
              <Check v-if="copied" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <Copy v-else class="w-3.5 h-3.5" />
              <span>{{ copied ? 'Copied' : 'Email' }}</span>
            </button>
          </div>

          <!-- Unboxed meta info -->
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            <span>{{ developerProfile.location }}</span>
            <span aria-hidden="true">·</span>
            <span>Cagayan State University</span>
            <span aria-hidden="true">·</span>
            <a
              :href="developerProfile.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-[#049fd9] dark:hover:text-[#00bceb] font-medium"
            >
              <span>GitHub: {{ developerProfile.handle }}</span>
              <ExternalLink class="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

        <!-- Right Column: Cisco CLI & Subnet Diagnostics Console -->
        <div class="lg:col-span-5 flex flex-col">
          <div class="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <!-- Window Title bar & Tab Switchers -->
            <div class="px-4 py-3 bg-slate-900/90 border-b border-slate-800/90 flex items-center justify-between text-xs">
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span class="text-slate-400 font-mono text-[11px] ml-2">cisco_cli.ios</span>
              </div>
              <div class="flex items-center gap-1 font-mono text-[11px]">
                <button
                  type="button"
                  @click="activeTab = 'cisco'"
                  class="px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                  :class="activeTab === 'cisco' ? 'bg-[#005073] text-white font-semibold' : 'text-slate-400 hover:text-slate-200'"
                >
                  Cisco IOS
                </button>
                <button
                  type="button"
                  @click="activeTab = 'subnet'"
                  class="px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                  :class="activeTab === 'subnet' ? 'bg-[#005073] text-white font-semibold' : 'text-slate-400 hover:text-slate-200'"
                >
                  Subnet Plan
                </button>
                <button
                  type="button"
                  @click="activeTab = 'qa'"
                  class="px-2.5 py-1 rounded-md cursor-pointer transition-colors"
                  :class="activeTab === 'qa' ? 'bg-[#005073] text-white font-semibold' : 'text-slate-400 hover:text-slate-200'"
                >
                  QA Log
                </button>
              </div>
            </div>

            <!-- Code Content -->
            <div class="p-4 sm:p-5">
              <pre class="font-mono text-xs sm:text-[11.5px] leading-relaxed text-slate-300 overflow-x-auto max-h-72 sm:max-h-80 whitespace-pre scrollbar-thin"><code>{{ snippets[activeTab] }}</code></pre>
            </div>

            <!-- Terminal status footer with Cisco-style status -->
            <div class="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span class="flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#049fd9]"></span>
                <span class="text-slate-300 font-medium">Link Up / 1000Mbps Full Duplex</span>
              </span>
              <span class="text-slate-500">CSU Carig · Aparri</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Clean Metrics Strip (Grounded strictly in his authentic background) -->
      <div class="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <div class="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white tabular-nums">
            Cisco Basics
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Networking Fundamentals</div>
        </div>

        <div>
          <div class="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white tabular-nums">
            Hardware Support
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Certified Upgrade & Maintenance</div>
        </div>

        <div>
          <div class="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white tabular-nums">
            QA Tester
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Software Systems Testing</div>
        </div>

        <div>
          <div class="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-slate-900 dark:text-white tabular-nums">
            Event Tech Ops
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Live Audio/Visual & Network Drops</div>
        </div>
      </div>
    </div>
  </section>
</template>
