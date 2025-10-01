<script lang="ts">
	import Check from '$lib/icons/Check.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	interface Props {
		form?: ActionData;
	}

	let { form }: Props = $props();
	let formBottom: ActionData | undefined = $state(undefined);
</script>

<svelte:head>
	<title>Pumplo - Váš digitální trenér v kapse | Fitness aplikace budoucnosti</title>
	<meta name="description" content="Pumplo je revoluční fitness aplikace, která vás provede krok za krokem každým tréninkem. Personalizované plány, technika cvičení a motivace v jedné aplikaci. Připojte se k čekací listině!" />
	<meta name="keywords" content="fitness aplikace, digitální trenér, personalizované tréninkové plány, cvičení, posilovna, fitness tech, trénink, motivace" />
	<meta name="author" content="Pumplo Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://pumplo.com" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://pumplo.com" />
	<meta property="og:title" content="Pumplo - Váš digitální trenér v kapse" />
	<meta property="og:description" content="Revoluční fitness aplikace s personalizovanými tréninkovými plány a krokovým návodem. Připojte se k čekací listině!" />
	<meta property="og:image" content="https://pumplo.com/og-image.png" />
	<meta property="og:locale" content="cs_CZ" />
	<meta property="og:site_name" content="Pumplo" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://pumplo.com" />
	<meta property="twitter:title" content="Pumplo - Váš digitální trenér v kapse" />
	<meta property="twitter:description" content="Revoluční fitness aplikace s personalizovanými tréninkovými plány a krokovým návodem. Připojte se k čekací listině!" />
	<meta property="twitter:image" content="https://pumplo.com/og-image.png" />
	
	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Pumplo",
			"description": "Digitální trenér ve vaší kapse - personalizované tréninkové plány a krokový návod pro efektivní cvičení",
			"applicationCategory": "HealthApplication",
			"operatingSystem": "iOS, Android",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "CZK",
				"description": "Základní verze zdarma"
			},
			"author": {
				"@type": "Organization",
				"name": "Pumplo",
				"url": "https://pumplo.com"
			},
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "4.8",
				"ratingCount": "2500"
			}
		}
	</script>`}
	
	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Pumplo",
			"url": "https://pumplo.com",
			"logo": "https://pumplo.com/logo.svg",
			"description": "Pumplo vytváří budoucnost fitness aplikací s digitálními trenéry a personalizovanými tréninkovými plány",
			"foundingDate": "2025",
			"contactPoint": {
				"@type": "ContactPoint",
				"contactType": "customer service",
				"email": "info@pumplo.com"
			},
			"sameAs": [
				"https://twitter.com/pumplo",
				"https://facebook.com/pumplo"
			]
		}
	</script>`}
</svelte:head>

<main class="bg-antiflash-white py-6 md:py-20">
	<section class="content grid grid-cols-1 md:grid-cols-2">
		<article class="flex flex-col justify-center">
			<h1 class="text-5xl font-bold text-slate-700">
				Váš <span class="text-periwinkle">digitální trenér</span> ve vaší kapse
			</h1>
			<p class="mt-6 text-slate-500">
				Pumplo vás krok za krokem provede tréninky, vytvoří personalizované tréninkové plány a udrží
				vás motivované. Už žádné hádání - jen výsledky.
			</p>
			<div class="mt-6 grid grid-rows-2 gap-2">
				<div class="flex flex-row items-center text-slate-600">
					<div class="h-6 w-6 rounded-full text-slate-200 bg-sandy p-1">
						<Check />
					</div>
					<span class="ml-2">Personalizované tréninkové plány</span>
				</div>
				<div class="flex flex-row items-center text-slate-600">
					<div class="h-6 w-6 rounded-full text-slate-200 bg-periwinkle p-1">
						<Check />
					</div>
					<span class="ml-2">Podrobný návod na cvičení</span>
				</div>
			</div>
			<form 
				method="POST" 
				action="?/createUser" 
				use:enhance
				class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-2"
				aria-labelledby="waitlist-form-heading"
			>
				<h2 id="waitlist-form-heading" class="sr-only">Přihlášení do čekací listiny</h2>
				<div class="flex flex-col">
					<label for="top-name" class="sr-only">Vaše jméno</label>
					<input
						id="top-name"
						type="text"
						name="name"
						value={form?.name || ''}
						class="rounded-lg border {form?.errors?.name ? 'border-red-500' : 'border-slate-300'} px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
						placeholder="Zadejte své jméno"
						required
						aria-describedby={form?.errors?.name ? "top-name-error" : undefined}
					/>
					{#if form?.errors?.name}
						<span id="top-name-error" class="text-red-500 text-sm mt-1" role="alert">{form.errors.name[0]}</span>
					{/if}
				</div>
				<div class="flex flex-col">
					<label for="top-email" class="sr-only">Váš email</label>
					<input
						id="top-email"
						type="email"
						name="email"
						value={form?.email || ''}
						class="rounded-lg border {form?.errors?.email ? 'border-red-500' : 'border-slate-300'} px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
						placeholder="Zadejte svůj email"
						required
						aria-describedby={form?.errors?.email ? "top-email-error" : undefined}
					/>
					{#if form?.errors?.email}
						<span id="top-email-error" class="text-red-500 text-sm mt-1" role="alert">{form.errors.email[0]}</span>
					{/if}
				</div>
				<button
					type="submit"
					class="sm:col-span-2 cursor-pointer rounded-lg border border-slate-300 bg-periwinkle px-4 py-3 transition hover:bg-tiffany text-white font-semibold"
					aria-describedby="top-submit-description"
				>
					Mám zájem
				</button>
				<span id="top-submit-description" class="sr-only">Odeslat formulář pro přihlášení k čekací listině aplikace Pumplo</span>

				{#if form?.success}
					<div class="sm:col-span-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert" aria-live="polite">
						{form.message}
					</div>
				{:else if form?.error}
					<div class="sm:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert" aria-live="assertive">
						{form.message}
					</div>
				{/if}
			</form>
		</article>
		<img src="/pumpik.svg" alt="Pumpík maskot - digitální fitness trenér" class="px-12 sm:px-40 py-10 md:px-0 md:py-0 md:pl-40 mx-auto" />
	</section>
</main>
<section id="problem" class="bg-antiflash-white py-12">
	<div class="content">
		<header class="text-center mb-12">
			<p class="text-md font-semibold text-slate-500">až</p>
			<h2 class="text-8xl font-bold text-sandy" aria-label="50 procent">50%</h2>
			<p class="text-2xl font-bold text-slate-600">
				nových členů posilovny odchází během prvních 6 měsíců
			</p>
		</header>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<article
				class="mt-8 w-full rounded-lg border border-sandy bg-sandy/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<div class="text-3xl" role="img" aria-label="Smutný emoji">😕</div>
				<h3 class="mt-2 text-xl font-bold text-sandy">Nedostatek vedení</h3>
				<p class="mt-2 text-slate-700">
					Členové nevědí, jak správně cvičit, což vede ke špatným výsledkům a ztrátě motivace.
				</p>
			</article>
			<article
				class="md:mt-8 w-full rounded-lg border border-tiffany bg-tiffany/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<div class="text-3xl" role="img" aria-label="Graf sestupný">📉</div>
				<h3 class="mt-2 text-xl font-bold text-tiffany">Žádné výsledky</h3>
				<p class="mt-2 text-slate-700">
					Bez správné techniky a přístupu klienti nevidí pokrok a vzdávají to.
				</p>
			</article>
			<article
				class="md:mt-8 w-full rounded-lg border border-periwinkle bg-periwinkle/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<div class="text-3xl" role="img" aria-label="Váhy spravedlnosti">⚖️</div>
				<h3 class="mt-2 text-xl font-bold text-periwinkle">Nekalá soutěž</h3>
				<p class="mt-2 text-slate-700">
					Malé a střední posilovny nemohou konkurovat korporátním řetězcům a jejich digitálním
					nástrojům.
				</p>
			</article>
		</div>
	</div>
</section>
<section id="reseni" class="bg-gradient-to-r from-sandy/40 to-periwinkle/40 py-20">
	<div class="content">
		<header class="text-center mb-12">
			<h2 class="text-4xl font-bold text-slate-700">Naše řešení</h2>
		</header>
		<div class="grid w-full grid-cols-1 md:grid-cols-3 items-center gap-x-20">
			<div class="row-start-2 md:row-start-1">
				<img src="/lemur.svg" alt="Lemur maskot představující agilní cvičení" class="px-24 sm:px-52 py-10 md:px-0 md:py-0 mx-auto" />
			</div>
			<article class="md:col-span-2 mt-6">
				<h3 class="text-3xl font-semibold text-sandy">Váš digitální trenér ve vaší kapse</h3>
				<p class="mt-6 text-slate-700">
					Pumplo provede uživatele krok za krokem jejich tréninkem. Od personalizovaného dotazníku
					přes individuální tréninkový plán až po přímé pokyny ke stroji.
				</p>
				<ol class="mt-8 w-fit space-y-4">
					<li class="flex w-fit flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-periwinkle"
							aria-hidden="true"
						>
							<span class="font-bold text-antiflash-white">1</span>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-slate-800">Dotazník</h4>
							<p class="text-slate-700">Řekněte nám o svých cílech a zkušenostech</p>
						</div>
					</li>
					<li class="flex flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-sandy"
							aria-hidden="true"
						>
							<span class="font-bold text-antiflash-white">2</span>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-slate-800">Individuální plán</h4>
							<p class="text-slate-700">Získejte tréninkový plán na míru přímo pro vás</p>
						</div>
					</li>
					<li class="flex flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-periwinkle"
							aria-hidden="true"
						>
							<span class="font-bold text-antiflash-white">3</span>
						</div>
						<div>
							<h4 class="text-lg font-semibold text-slate-800">Strojní instrukce</h4>
							<p class="text-slate-700">Podrobný návod s váhy, techniky a opravami chyb</p>
						</div>
					</li>
				</ol>
			</article>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
			<div
				class="sm:mt-8 w-full rounded-lg bg-white p-6 text-center shadow-md transition hover:scale-105"
			>
				<p class="text-3xl">🎮</p>
				<p class="mt-2 text-xl font-bold text-sandy">Gamifikace a zpětná vazba</p>
				<p class="mt-2 text-slate-700">
					Pravidelné sledování pokroku a motivační funkce udržují uživatele v kontaktu a pomáhají
					jim vracet se.
				</p>
			</div>
			<div
				class="sm:mt-8 w-full rounded-lg bg-white p-6 text-center shadow-md transition hover:scale-105"
			>
				<p class="text-3xl">🆓</p>
				<p class="mt-2 text-xl font-bold text-periwinkle">Zdarma pro posilovny</p>
				<p class="mt-2 text-slate-700">
					Posilovny získají kompletní řešení zdarma v základní verzi, bez nutnosti investice do
					hardwaru.
				</p>
			</div>
		</div>
	</div>
</section>
<section id="hodnota" class="bg-antiflash-white py-20">
	<div class="content">
		<header class="text-center mb-12">
			<h2 class="text-4xl font-bold text-slate-700">Jedinečná hodnota</h2>
		</header>
		<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
			<article class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-sandy"
					role="img" aria-label="Graf rostoucí"
				>
					<span class="font-bold text-antiflash-white">📈</span>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-sandy">Vyšší retence</h3>
					<p class="text-slate-700">
						Digitální poradenství, sledování pokroku a motivace mohou zvýšit udržení klientů v
						posilovně o desítky procent.
					</p>
				</div>
			</article>
			<article class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-periwinkle"
					role="img" aria-label="Hvězda"
				>
					<span class="font-bold text-antiflash-white">✨</span>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-periwinkle">Jednoduché UX</h3>
					<p class="text-slate-700">
						Minimální bariéry: žádné QR/NFC kódy, rozpoznávání stroje podle fotografií, navádění z
						ruky do ruky.
					</p>
				</div>
			</article>
			<article class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-periwinkle"
					role="img" aria-label="Zdarma"
				>
					<span class="font-bold text-antiflash-white">🆓</span>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-periwinkle">Zdarma / Nízká bariéra</h3>
					<p class="text-slate-700">
						Základní verze zdarma, prémiové funkce za poplatek, ale základní hodnota je k dispozici
						okamžitě.
					</p>
				</div>
			</article>
			<article class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-sandy"
					role="img" aria-label="Podání ruky"
				>
					<span class="font-bold text-antiflash-white">🤝</span>
				</div>
				<div>
					<h3 class="text-xl font-semibold text-sandy">Win-Win řešení</h3>
					<p class="text-slate-700">
						Uživatelé si zlepšují kondici, posilovny získávají cenná data a nástroje pro růst.
					</p>
				</div>
			</article>
		</div>
	</div>
</section>
<section class="bg-antiflash-white pb-20" id="cta" aria-labelledby="cta-heading">
	<div class="content">
        <div class="p-8 w-full bg-gradient-to-r from-sandy to-periwinkle rounded-lg">
            <header class="text-center mb-8">
				<h2 id="cta-heading" class="text-2xl font-bold text-slate-100">Pomozte utvářet budoucnost aplikací pro posilovny</h2>
				<p class="text-slate-200">Zatím je to jen koncept - přidejte se na čekací listinu a dejte nám vědět, že byste o takovou aplikaci stáli.</p>
			</header>
            <form 
				method="POST" 
				action="?/createUser" 
				use:enhance={() => {
					return async ({ result, update }) => {
						formBottom = result.data;
						// Don't call update() to prevent scrolling to top
					};
				}}
				class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-2"
				aria-labelledby="bottom-form-heading"
			>
				<h3 id="bottom-form-heading" class="sr-only">Druhý formulář pro přihlášení do čekací listiny</h3>
				<div class="flex flex-col">
					<label for="bottom-name" class="sr-only">Vaše jméno</label>
					<input
						id="bottom-name"
						type="text"
						name="name"
						value={formBottom?.name || ''}
						class="rounded-lg bg-antiflash-white border {formBottom?.errors?.name ? 'border-red-500' : 'border-slate-300'} px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
						placeholder="Zadejte své jméno"
						required
						aria-describedby={formBottom?.errors?.name ? "bottom-name-error" : undefined}
					/>
					{#if formBottom?.errors?.name}
						<span id="bottom-name-error" class="text-red-500 text-sm mt-1" role="alert">{formBottom.errors.name[0]}</span>
					{/if}
				</div>
				<div class="flex flex-col">
					<label for="bottom-email" class="sr-only">Váš email</label>
					<input
						id="bottom-email"
						type="email"
						name="email"
						value={formBottom?.email || ''}
						class="rounded-lg bg-antiflash-white border {formBottom?.errors?.email ? 'border-red-500' : 'border-slate-300'} px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
						placeholder="Zadejte svůj email"
						required
						aria-describedby={formBottom?.errors?.email ? "bottom-email-error" : undefined}
					/>
					{#if formBottom?.errors?.email}
						<span id="bottom-email-error" class="text-red-500 text-sm mt-1" role="alert">{formBottom.errors.email[0]}</span>
					{/if}
				</div>
				<button
					type="submit"
					class="sm:col-span-2 cursor-pointer rounded-lg bg-tiffany px-4 py-3 transition hover:bg-periwinkle hover:brightness-115 text-white font-semibold"
					aria-describedby="bottom-submit-description"
				>
					Mám zájem
				</button>
				<span id="bottom-submit-description" class="sr-only">Odeslat formulář pro přihlášení k čekací listině aplikace Pumplo</span>

				{#if formBottom?.success}
					<div class="sm:col-span-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert" aria-live="polite">
						{formBottom.message}
					</div>
				{:else if formBottom?.error}
					<div class="sm:col-span-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert" aria-live="assertive">
						{formBottom.message}
					</div>
				{/if}
			</form>
        </div>
	</div>
</section>
<footer class="bg-night py-6">
    <div class="content flex flex-col items-center justify-center">
        <a href="/" class="flex flex-row items-center gap-2">
			<img src="/logo.svg" alt="Pumplo logo" class="h-10 w-auto" />
			<span class="text-xl font-bold text-antiflash-white">Pumplo</span>
		</a>
        <p class="text-antiflash-white text-sm mt-4">© 2025 Pumplo. Your digital trainer in your pocket.</p>
        <a href="https://em1t.me" target="_blank" rel="noreferrer" class="text-periwinkle hover:text-tiffany mt-4">Made with ❤️ by Em1t</a>
    </div>
</footer>