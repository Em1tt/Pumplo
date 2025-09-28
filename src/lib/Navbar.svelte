<script lang="ts">
	import { onMount } from 'svelte';
	let scrollY = $state(0);
	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	class="sticky top-0 left-0 z-50 block w-full bg-antiflash-white duration-200 {scrollY > 0
		? 'shadow-md'
		: ''}"
>
	<div class="flex justify-between content px-4 py-2">
		<a href="/" class="flex flex-row items-center gap-2">
			<img src="/logo.svg" alt="Pumplo logo" class="h-10 w-auto" />
			<span class="text-xl font-bold text-slate-700">Pumplo</span>
		</a>
		<nav class="sm:flex flex-row items-center hidden">
			<ul class="ml-auto flex flex-row items-center gap-4">
				<li><a href="#problem" class="text-slate-500 transition hover:text-night">Problém</a></li>
				<li><a href="#reseni" class="text-slate-500 transition hover:text-night">Řešení</a></li>
				<li><a href="#hodnota" class="text-slate-500 transition hover:text-night">Funkce</a></li>
			</ul>
		</nav>
		<a
			href="/waitlist"
			class="rounded-lg bg-periwinkle px-4 py-2 font-semibold text-slate-700 transition hover:bg-tiffany text-nowrap"
		>
			Mám zájem
		</a>
	</div>
</div>
