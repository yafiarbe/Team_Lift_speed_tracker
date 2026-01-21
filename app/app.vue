<template>
	<UApp>
		<UContainer class="px-4 sm:px-6 py-4 sm:py-8 min-h-screen">
			<!-- Header with Shift Info -->
			<header v-if="currentShift" class="mb-4 sm:mb-8">
				<div class="flex flex-col gap-4">
					<!-- Shift Info Row -->
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-3 sm:gap-4">
							<div class="text-4xl sm:text-5xl" role="img" :aria-label="currentShift.name">{{ currentShift.icon }}</div>
							<div>
								<h1 class="text-xl sm:text-2xl lg:text-3xl font-bold text-highlighted">{{ currentShift.name }}</h1>
								<p class="text-muted text-xs sm:text-sm">
									<UIcon name="i-lucide-clock" class="inline-block w-3 h-3 sm:w-4 sm:h-4 mr-1" />
									{{ currentShift.start }} — {{ currentShift.end }}
								</p>
							</div>
						</div>
						<div class="flex items-center gap-3 sm:gap-4">
							<!-- Current Time -->
							<div class="text-right">
								<p class="text-[10px] sm:text-xs text-muted uppercase tracking-wide">Текущее время</p>
								<p class="text-lg sm:text-xl font-mono font-semibold text-muted">{{ currentTime }}</p>
							</div>
							<!-- Desktop Reset Button -->
							<UButton color="error" variant="soft" icon="i-lucide-rotate-ccw" label="Сбросить" class="hidden sm:flex" @click="showResetConfirm = true" />
						</div>
					</div>

					<!-- Action Buttons Row -->
					<div class="flex gap-2 sm:gap-3">
						<UButton
							:disabled="index < 0"
							color="warning"
							variant="soft"
							size="md"
							class="flex-2/3 min-h-12 touch-manipulation justify-center"
							icon="i-lucide-undo-2"
							label="Шаг назад"
							@click="handleUndo"
						/>
						<!-- Mobile Reset Button -->
						<UButton
							color="error"
							variant="soft"
							size="md"
							icon="i-lucide-rotate-ccw"
							class="sm:hidden min-h-12 touch-manipulation flex-1/3 justify-center"
							label="Сбросить"
							@click="showResetConfirm = true"
						/>
					</div>
				</div>
			</header>

			<!-- Main Content Grid -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
				<!-- Left Column: Main Package Display -->
				<div class="lg:col-span-2 space-y-4 sm:space-y-6">
					<!-- Current Package Card - Compact -->
					<UCard v-if="currentIndex < times.length" :ui="{ body: 'p-0' }">
						<div class="flex sm:flex-row items-center gap-4 p-4 sm:p-6">
							<!-- Package Number -->
							<div class="text-center sm:text-left">
								<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-widest mb-1">Посылка</p>
								<div class="text-3xl sm:text-4xl font-bold text-highlighted">#{{ currentIndex + 1 }}</div>
							</div>

							<!-- Time Display -->
							<div class="flex-1 text-center">
								<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-widest mb-1">Время</p>
								<span
									class="text-5xl sm:text-6xl font-black font-mono time-display"
									:class="isOnSchedule ? 'gradient-text bg-linear-to-r from-primary-500 to-secondary-500' : 'text-error-500 animate-pulse-warning'"
								>
									{{ times[currentIndex] }}
								</span>
							</div>
						</div>
					</UCard>

					<!-- Completion Card -->
					<UCard v-else :ui="{ body: 'p-0' }">
						<div class="bg-linear-to-br from-success-50 to-success-100 dark:from-success-950/50 dark:to-success-900/30 p-6 sm:p-8 text-center">
							<div class="text-5xl sm:text-6xl mb-3 sm:mb-4" role="img" aria-label="Celebration">🎉</div>
							<h2 class="text-xl sm:text-2xl font-bold text-highlighted mb-1 sm:mb-2">Отлично!</h2>
							<p class="text-base sm:text-lg text-muted">Все {{ total }} посылок обработаны</p>
						</div>
					</UCard>

					<!-- Main Action Button - Large for glove use -->
					<UButton
						:disabled="currentIndex >= times.length"
						:color="currentIndex >= times.length ? 'neutral' : 'success'"
						size="xl"
						block
						class="main-action-btn min-h-52 sm:min-h-32 lg:min-h-40 text-2xl sm:text-3xl lg:text-4xl font-bold shadow-xl rounded-xl sm:rounded-2xl touch-manipulation"
						:icon="currentIndex >= times.length ? 'i-lucide-check-circle' : 'i-lucide-package-check'"
						:ui="{ leadingIcon: 'size-8 sm:size-10 lg:size-12' }"
						:label="currentIndex >= times.length ? 'Норма выполнена' : 'ПОСЫЛКА ГОТОВА'"
						@click="handleNext"
					/>

					<!-- Progress Card -->
					<UCard>
						<template #header>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									<UIcon name="i-lucide-trending-up" class="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
									<h3 class="text-sm sm:text-base font-semibold text-highlighted">Прогресс смены</h3>
								</div>
								<UBadge :color="progress >= 100 ? 'success' : 'primary'" variant="soft" size="md"> {{ progress }}% </UBadge>
							</div>
						</template>

						<div class="space-y-3 sm:space-y-4">
							<UProgress :model-value="progress" :color="progress >= 100 ? 'success' : 'primary'" size="lg" />

							<div class="flex justify-between text-xs sm:text-sm">
								<span class="text-muted"
									>Обработано: <strong class="text-highlighted">{{ scanned }}</strong></span
								>
								<span class="text-muted"
									>Осталось: <strong class="text-highlighted">{{ total - scanned }}</strong></span
								>
							</div>
						</div>
					</UCard>
				</div>

				<!-- Right Column: Stats & Info -->
				<div class="space-y-4 sm:space-y-6">
					<!-- Stats Cards -->
					<div class="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
						<!-- Time Remaining -->
						<UCard class="stat-card">
							<div class="flex items-start justify-between gap-2">
								<div class="min-w-0">
									<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wide mb-1">До конца смены</p>
									<p class="text-lg sm:text-2xl font-bold text-highlighted truncate">{{ timeRemaining }}</p>
								</div>
								<div class="p-1.5 sm:p-2 bg-primary-50 dark:bg-primary-950/50 rounded-lg shrink-0">
									<UIcon name="i-lucide-timer" class="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
								</div>
							</div>
						</UCard>

						<!-- Break Time -->
						<UCard class="stat-card">
							<div class="flex items-start justify-between gap-2">
								<div class="min-w-0">
									<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wide mb-1">Перерыв</p>
									<p v-if="currentShift" class="text-base sm:text-xl font-bold text-highlighted">{{ currentShift.breakStart }}–{{ currentShift.breakEnd }}</p>
									<UBadge v-if="isBreak" color="success" variant="soft" size="sm" class="mt-1 sm:mt-2">
										<UIcon name="i-lucide-utensils" class="w-3 h-3 mr-1" />
										Перерыв
									</UBadge>
								</div>
								<div class="p-1.5 sm:p-2 bg-warning-50 dark:bg-warning-950/50 rounded-lg shrink-0">
									<UIcon name="i-lucide-coffee" class="w-5 h-5 sm:w-6 sm:h-6 text-warning-500" />
								</div>
							</div>
						</UCard>

						<!-- Pace -->
						<UCard class="stat-card">
							<div class="flex items-start justify-between gap-2">
								<div class="min-w-0">
									<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wide mb-1">Темп работы</p>
									<p class="text-lg sm:text-2xl font-bold" :class="isOnSchedule ? 'text-success-600 dark:text-success-400' : 'text-warning-600 dark:text-warning-400'">
										{{ paceDisplay }}x
									</p>
								</div>
								<div class="p-1.5 sm:p-2 rounded-lg shrink-0" :class="isOnSchedule ? 'bg-success-50 dark:bg-success-950/50' : 'bg-warning-50 dark:bg-warning-950/50'">
									<UIcon name="i-lucide-zap" class="w-5 h-5 sm:w-6 sm:h-6" :class="isOnSchedule ? 'text-success-500' : 'text-warning-500'" />
								</div>
							</div>
						</UCard>

						<!-- Status -->
						<UCard class="stat-card">
							<div class="flex items-start justify-between gap-2">
								<div class="min-w-0">
									<p class="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wide mb-1">Статус</p>
									<p class="text-sm sm:text-lg font-bold" :class="isOnSchedule ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'">
										{{ isOnSchedule ? "В графике" : "Отставание" }}
									</p>
								</div>
								<div class="p-1.5 sm:p-2 rounded-lg shrink-0" :class="isOnSchedule ? 'bg-success-50 dark:bg-success-950/50' : 'bg-error-50 dark:bg-error-950/50'">
									<UIcon
										:name="isOnSchedule ? 'i-lucide-check-circle-2' : 'i-lucide-alert-circle'"
										class="w-5 h-5 sm:w-6 sm:h-6"
										:class="isOnSchedule ? 'text-success-500' : 'text-error-500'"
									/>
								</div>
							</div>
						</UCard>
					</div>

					<!-- Upcoming Packages - Hidden on mobile for cleaner UI -->
					<UCard v-if="remaining.length > 0 && remaining.length <= 15" class="hidden sm:block">
						<template #header>
							<div class="flex items-center gap-2">
								<UIcon name="i-lucide-list" class="w-4 h-4 sm:w-5 sm:h-5 text-muted" />
								<h3 class="text-sm sm:text-base font-semibold text-highlighted">Следующие посылки</h3>
							</div>
						</template>

						<div class="space-y-2">
							<div v-for="(time, i) in remaining.slice(0, 5)" :key="i" class="flex items-center justify-between p-2 sm:p-3 bg-muted/50 rounded-lg">
								<span class="text-xs sm:text-sm font-medium text-muted">#{{ currentIndex + 2 + i }}</span>
								<span class="text-sm sm:text-base font-mono font-semibold text-highlighted time-display">{{ time }}</span>
							</div>
						</div>
					</UCard>
				</div>
			</div>

			<!-- Reset Confirmation Modal -->
			<UModal v-model:open="showResetConfirm" title="Сбросить прогресс?" description="Это действие нельзя отменить. Весь прогресс текущей смены будет потерян." :ui="{ footer: 'justify-end' }">
				<template #footer>
					<UButton color="neutral" variant="ghost" label="Отмена" @click="showResetConfirm = false" />
					<UButton color="error" label="Сбросить" icon="i-lucide-trash-2" @click="handleReset" />
				</template>
			</UModal>
		</UContainer>
	</UApp>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";

// Composables
const toast = useToast();

// Types
interface Shift {
	name: string;
	icon: string;
	start: string;
	end: string;
	breakStart: string;
	breakEnd: string;
	slots: string[];
}

// Constants
const INTERVAL_MINUTES = 6;
const MAX_PACKAGES = 100;

// Utility Functions
const generateTimeSlots = (startTime: string, endTime: string, breakStart: string, breakEnd: string, interval = INTERVAL_MINUTES): string[] => {
	const slots: string[] = [];
	const [startH = 0, startM = 0] = startTime.split(":").map(Number);
	const [endH = 0, endM = 0] = endTime.split(":").map(Number);
	const [breakStartH = 0, breakStartM = 0] = breakStart.split(":").map(Number);
	const [breakEndH = 0, breakEndM = 0] = breakEnd.split(":").map(Number);

	// Первая посылка через 6 минут после начала смены
	let currentMinutes = startH * 60 + startM + interval;
	const endMinutes = (endH < startH ? endH + 24 : endH) * 60 + endM;
	const breakStartMinutes = breakStartH * 60 + breakStartM;
	const breakEndMinutes = breakEndH * 60 + breakEndM;

	while (currentMinutes < endMinutes) {
		if (currentMinutes >= breakStartMinutes && currentMinutes < breakEndMinutes) {
			currentMinutes = breakEndMinutes;
			continue;
		}

		const h = Math.floor(currentMinutes / 60) % 24;
		const m = currentMinutes % 60;
		slots.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);

		currentMinutes += interval;
		if (slots.length >= MAX_PACKAGES) break;
	}

	return slots;
};

// Shift Configurations
const SHIFTS: Record<string, Shift> = {
	night: {
		name: "Ночная смена",
		icon: "🌙",
		start: "17:30",
		end: "04:00",
		breakStart: "22:15",
		breakEnd: "22:45",
		slots: generateTimeSlots("17:30", "04:00", "22:15", "22:45"),
	},
	day: {
		name: "Дневная смена",
		icon: "☀️",
		start: "06:00",
		end: "16:30",
		breakStart: "12:00",
		breakEnd: "12:30",
		slots: generateTimeSlots("06:00", "16:30", "12:00", "12:30"),
	},
};

const getCurrentShiftType = (): "day" | "night" => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const currentMinutes = hours * 60 + minutes;

	if (currentMinutes >= 17 * 60 + 30 || currentMinutes < 4 * 60) {
		return "night";
	}
	if (currentMinutes >= 6 * 60 && currentMinutes < 16 * 60 + 30) {
		return "day";
	}

	if (currentMinutes >= 4 * 60 && currentMinutes < 6 * 60) {
		return "day";
	}
	return "night";
};

const getTimeRemaining = (shift: Shift): string => {
	const now = new Date();
	const currentHours = now.getHours();
	const currentMinutes = now.getMinutes();
	const [endH = 0, endM = 0] = shift.end.split(":").map(Number);

	const endDate = new Date(now);
	endDate.setHours(endH, endM, 0, 0);

	if (shift === SHIFTS.night) {
		if (currentHours < 4 || (currentHours === 4 && currentMinutes === 0)) {
			endDate.setHours(4, 0, 0, 0);
		} else if (currentHours >= 17 && currentMinutes >= 30) {
			endDate.setDate(endDate.getDate() + 1);
			endDate.setHours(4, 0, 0, 0);
		} else {
			return "Вне смены";
		}
	} else {
		if (currentHours < 6 || currentHours > 16 || (currentHours === 16 && currentMinutes > 30)) {
			return "Вне смены";
		}
	}

	const diff = endDate.getTime() - now.getTime();
	if (diff < 0) return "Смена завершена";

	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

	return `${hours}ч ${minutes}м`;
};

const isBreakTime = (shift: Shift): boolean => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const currentMinutes = hours * 60 + minutes;

	const [breakStartH = 0, breakStartM = 0] = shift.breakStart.split(":").map(Number);
	const [breakEndH = 0, breakEndM = 0] = shift.breakEnd.split(":").map(Number);

	const breakStartMinutes = breakStartH * 60 + breakStartM;
	const breakEndMinutes = breakEndH * 60 + breakEndM;

	return currentMinutes >= breakStartMinutes && currentMinutes < breakEndMinutes;
};

// Reactive State
const currentShiftType = ref<"day" | "night">("night");
const index = ref(-1);
const showResetConfirm = ref(false);
const timeRemaining = ref("");
const currentTime = ref("");
const nowMinutes = ref(0); // Реактивное текущее время в минутах для пересчёта
const isBreak = ref(false);

// Timers
let updateInterval: ReturnType<typeof setInterval> | null = null;

// Computed Properties
const currentShift = computed(() => SHIFTS[currentShiftType.value] ?? null);
const times = computed(() => currentShift.value?.slots ?? []);
const scanned = computed(() => index.value + 1);
const total = computed(() => times.value.length);
const currentIndex = computed(() => index.value + 1);
const remaining = computed(() => times.value.slice(currentIndex.value + 1));
const progress = computed(() => (total.value > 0 ? Math.round((scanned.value / total.value) * 100) : 0));

const expectedAtThisTime = computed(() => {
	if (index.value < 0) return 0;
	const shift = currentShift.value;
	if (!shift) return 0;

	// Используем реактивное время
	const currentTotalMinutes = nowMinutes.value;
	const currentHours = Math.floor(currentTotalMinutes / 60) % 24;

	// Для ночной смены корректируем время после полуночи
	let normalizedCurrentMinutes = currentTotalMinutes;
	if (shift === SHIFTS.night && currentHours < 12) {
		normalizedCurrentMinutes = currentTotalMinutes + 24 * 60; // Добавляем 24 часа для сравнения
	}

	let count = 0;
	for (const slot of times.value) {
		const [slotH = 0, slotM = 0] = slot.split(":").map(Number);
		let slotMinutes = slotH * 60 + slotM;

		// Для ночной смены корректируем время слотов после полуночи
		if (shift === SHIFTS.night && slotH < 12) {
			slotMinutes += 24 * 60;
		}

		if (normalizedCurrentMinutes >= slotMinutes) {
			count++;
		} else {
			break; // Слоты отсортированы, можно прервать
		}
	}

	return count;
});

const pace = computed(() => {
	if (scanned.value <= 0 || expectedAtThisTime.value <= 0) return 0;
	return scanned.value / expectedAtThisTime.value;
});

const paceDisplay = computed(() => pace.value.toFixed(1));
// "В графике" только если обработали ВСЕ посылки, которые должны быть обработаны к этому моменту
const isOnSchedule = computed(() => scanned.value >= expectedAtThisTime.value);

// Methods
const handleNext = () => {
	if (index.value < times.value.length - 1) {
		index.value++;
	}
};

const handleUndo = () => {
	if (index.value >= 0) {
		index.value--;
		toast.clear();
		toast.add({
			title: "Шаг отменён",
			description: `Возврат к посылке #${index.value + 2}`,
			color: "warning",
			icon: "i-lucide-undo-2",
		});
	}
};

const handleReset = () => {
	index.value = -1;
	showResetConfirm.value = false;

	if (import.meta.client) {
		localStorage.removeItem(`parcel_progress_${currentShiftType.value}`);
	}

	toast.clear();
	toast.add({
		title: "Прогресс сброшен",
		description: "Счётчик посылок обнулён",
		color: "info",
		icon: "i-lucide-rotate-ccw",
	});
};

const updateTime = () => {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	currentTime.value = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
	nowMinutes.value = hours * 60 + minutes; // Обновляем реактивное время

	const shift = currentShift.value;
	if (shift) {
		timeRemaining.value = getTimeRemaining(shift);
		isBreak.value = isBreakTime(shift);
	}
};

// Progress Notifications
const showProgressNotification = (scannedCount: number) => {
	const milestones: Record<number, { title: string; icon: string }> = {
		25: { title: "🎯 25% выполнено!", icon: "i-lucide-target" },
		50: { title: "🔥 Половина пути!", icon: "i-lucide-flame" },
		75: { title: "💪 75% выполнено!", icon: "i-lucide-trophy" },
		100: { title: "🎉 Норма выполнена!", icon: "i-lucide-party-popper" },
	};

	const milestone = milestones[scannedCount];
	if (milestone) {
		toast.clear();
		toast.add({
			title: milestone.title,
			description: `Обработано ${scannedCount} из ${total.value} посылок`,
			color: "success",
			icon: milestone.icon,
		});
	}
};

// Watchers
watch(index, (newValue) => {
	if (import.meta.client) {
		localStorage.setItem(`parcel_progress_${currentShiftType.value}`, newValue.toString());
	}

	const scannedCount = newValue + 1;
	showProgressNotification(scannedCount);
});

// Lifecycle Hooks
onMounted(() => {
	if (import.meta.client) {
		const detectedShift = getCurrentShiftType();
		currentShiftType.value = detectedShift;

		const saved = localStorage.getItem(`parcel_progress_${detectedShift}`);
		const savedDate = localStorage.getItem(`parcel_date_${detectedShift}`);
		const today = new Date().toDateString();

		if (saved && savedDate === today) {
			index.value = parseInt(saved, 10);
		} else {
			index.value = -1;
			localStorage.setItem(`parcel_date_${detectedShift}`, today);
		}

		updateTime();
		updateInterval = setInterval(updateTime, 60000);
	}
});

onUnmounted(() => {
	if (updateInterval) {
		clearInterval(updateInterval);
	}
});
</script>
