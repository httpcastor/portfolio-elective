<script setup lang="ts">
import { ref, computed } from 'vue';
import { Network } from 'lucide-vue-next';

// Subnet Calculator State
const baseIp = ref<string>('192.168.10.0');
const cidrPrefix = ref<number>(26);

const cidrOptions = [
  { prefix: 24, label: '/24 (255.255.255.0 - 254 usable hosts)' },
  { prefix: 25, label: '/25 (255.255.255.128 - 126 usable hosts)' },
  { prefix: 26, label: '/26 (255.255.255.192 - 62 usable hosts)' },
  { prefix: 27, label: '/27 (255.255.255.224 - 30 usable hosts)' },
  { prefix: 28, label: '/28 (255.255.255.240 - 14 usable hosts)' },
  { prefix: 29, label: '/29 (255.255.255.248 - 6 usable hosts)' },
  { prefix: 30, label: '/30 (255.255.255.252 - 2 point-to-point links)' },
];

const presets = [
  { label: 'Campus Lab LAN (192.168.10.0 /26)', ip: '192.168.10.0', prefix: 26 },
  { label: 'Core Router Link (10.0.0.0 /30)', ip: '10.0.0.0', prefix: 30 },
  { label: 'Faculty Subnet (172.16.20.0 /27)', ip: '172.16.20.0', prefix: 27 },
];

const applyPreset = (preset: { ip: string; prefix: number }) => {
  baseIp.value = preset.ip;
  cidrPrefix.value = preset.prefix;
};

const ipToInt = (ip: string): number => {
  const parts = ip.split('.').map(p => parseInt(p, 10));
  if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) return 0;
  return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
};

const intToIp = (num: number): string => {
  return [
    (num >>> 24) & 255,
    (num >>> 16) & 255,
    (num >>> 8) & 255,
    num & 255,
  ].join('.');
};

const subnetCalculations = computed(() => {
  const ipInt = ipToInt(baseIp.value);
  const maskInt = cidrPrefix.value === 0 ? 0 : (~0 << (32 - cidrPrefix.value)) >>> 0;
  
  const netInt = (ipInt & maskInt) >>> 0;
  const bcastInt = (netInt | ~maskInt) >>> 0;
  
  const totalHosts = Math.pow(2, 32 - cidrPrefix.value);
  const usableHosts = totalHosts > 2 ? totalHosts - 2 : (totalHosts === 2 ? 2 : 0);
  
  const firstUsable = totalHosts > 2 ? netInt + 1 : netInt;
  const lastUsable = totalHosts > 2 ? bcastInt - 1 : bcastInt;

  const binaryMask = maskInt.toString(2).padStart(32, '0').match(/.{1,8}/g)?.join('.') || '';

  return {
    subnetMask: intToIp(maskInt),
    networkAddress: intToIp(netInt),
    broadcastAddress: intToIp(bcastInt),
    firstUsableHost: intToIp(firstUsable),
    lastUsableHost: intToIp(lastUsable),
    usableHosts: usableHosts,
    binaryMask: binaryMask,
  };
});
</script>

<template>
  <section id="network-lab" class="py-16 sm:py-24 border-b border-slate-200/80 dark:border-slate-800/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-10 text-center">
        <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#049fd9] dark:text-[#00bceb] mb-2 font-semibold">
          <span>05. Interactive Diagnostic Tool</span>
          <span aria-hidden="true">·</span>
          <span>Computer Networking Lab</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Interactive IPv4 VLSM Subnet Calculator
        </h2>
        <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-xl mx-auto">
          Calculate address spaces in real-time with Variable Length Subnet Masking (VLSM), network IDs, broadcast addresses, and usable host ranges.
        </p>
      </div>

      <!-- Centered Subnet Calculator Card -->
      <div class="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-6">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Network class="w-4 h-4 text-[#049fd9]" />
            <span>VLSM Subnet Calculator</span>
          </h3>
          <span class="text-xs font-mono text-slate-400">IPv4 Tool</span>
        </div>

        <!-- Quick Presets -->
        <div>
          <div class="text-[11px] font-mono uppercase text-slate-400 dark:text-slate-500 mb-2 font-semibold">
            Example Scenarios
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="p in presets"
              :key="p.label"
              type="button"
              @click="applyPreset(p)"
              class="px-2.5 py-1 text-xs rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#049fd9] dark:hover:border-[#049fd9] bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            >
              {{ p.label }}
            </button>
          </div>
        </div>

        <!-- Inputs -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="baseIpInput" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
              Network Base IP
            </label>
            <input
              id="baseIpInput"
              v-model="baseIp"
              type="text"
              class="w-full px-3.5 py-2 text-xs sm:text-sm font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors"
              placeholder="192.168.10.0"
            />
          </div>

          <div>
            <label for="cidrSelect" class="block text-xs font-mono uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5 font-semibold">
              CIDR Prefix (/xx)
            </label>
            <select
              id="cidrSelect"
              v-model.number="cidrPrefix"
              class="w-full px-3.5 py-2 text-xs sm:text-sm font-mono rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-hidden focus:border-[#049fd9] transition-colors cursor-pointer"
            >
              <option v-for="opt in cidrOptions" :key="opt.prefix" :value="opt.prefix">
                {{ opt.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Calculated Results Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div class="text-[10px] font-mono text-slate-400 uppercase font-semibold">Subnet Mask</div>
            <div class="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
              {{ subnetCalculations.subnetMask }}
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div class="text-[10px] font-mono text-slate-400 uppercase font-semibold">Network ID</div>
            <div class="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
              {{ subnetCalculations.networkAddress }}
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div class="text-[10px] font-mono text-slate-400 uppercase font-semibold">Usable Host Range</div>
            <div class="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 mt-0.5 tabular-nums truncate">
              {{ subnetCalculations.firstUsableHost }} - {{ subnetCalculations.lastUsableHost }}
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
            <div class="text-[10px] font-mono text-slate-400 uppercase font-semibold">Broadcast Address</div>
            <div class="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white mt-0.5 tabular-nums">
              {{ subnetCalculations.broadcastAddress }}
            </div>
          </div>
        </div>

        <!-- Usable count & Binary representation -->
        <div class="p-3.5 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-slate-500 dark:text-slate-400">Total Usable Hosts:</span>
            <span class="font-bold text-[#005073] dark:text-[#00bceb] tabular-nums">{{ subnetCalculations.usableHosts }} hosts</span>
          </div>
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-slate-500 dark:text-slate-400">Binary Mask:</span>
            <span class="text-slate-700 dark:text-slate-300 font-mono">{{ subnetCalculations.binaryMask }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>