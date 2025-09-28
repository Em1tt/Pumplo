<script lang="ts">
	import Check from '$lib/icons/Check.svelte';
</script>

<div class="bg-antiflash-white pt-32 md:py-20">
	<div class="content grid grid-cols-1 md:grid-cols-2">
		<div class="flex flex-col justify-center">
			<h1 class="text-5xl font-bold text-slate-700">
				Váš <span class="text-periwinkle">digitální trenér</span> ve vaší kapse
			</h1>
			<p class="mt-6 text-slate-500">
				Pumplo vás krok za krokem provede tréninky, vytvoří personalizované tréninkové plány a udrží
				vás motivované. Už žádné hádání - jen výsledky.
			</p>
			<div class="mt-6 grid grid-rows-2 gap-2">
				<div class="flex flex-row items-center text-slate-600">
					<div class="h-6 w-6 rounded-full bg-sandy p-1">
						<Check />
					</div>
					<span class="ml-2">Personalizované tréninkové plány</span>
				</div>
				<div class="flex flex-row items-center text-slate-600">
					<div class="h-6 w-6 rounded-full bg-tiffany p-1">
						<Check />
					</div>
					<span class="ml-2">Podrobný návod na cvičení</span>
				</div>
			</div>
			<form class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-2">
				<input
					type="text"
					class="rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
					placeholder="Zadejte své jméno"
				/>
				<input
					type="text"
					class="rounded-lg border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-periwinkle focus:outline-none"
					placeholder="Zadejte svůj email"
				/>
				<button
					type="submit"
					class="sm:col-span-2 cursor-pointer rounded-lg border border-slate-300 bg-periwinkle px-4 py-3 transition hover:bg-tiffany"
					>Mám zájem</button
				>
			</form>
		</div>
		<img src="/pumpik.svg" alt="Pumpík maskot" class="px-30 sm:px-52 py-10 md:px-0 md:py-0 md:pl-40 mx-auto" />
	</div>
</div>
<div id="problem" class="bg-antiflash-white py-20">
	<div class="content">
		<p class="text-md text-center font-semibold text-slate-500">až</p>
		<h2 class="text-center text-8xl font-bold text-sandy">50%</h2>
		<p class="text-center text-2xl font-bold text-slate-600">
			nových členů posilovny odchází během prvních 6 měsíců
		</p>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div
				class="mt-8 w-full rounded-lg border border-sandy bg-sandy/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<p class="text-3xl">😕</p>
				<p class="mt-2 text-xl font-bold text-sandy">Nedostatek vedení</p>
				<p class="mt-2 text-slate-700">
					Členové nevědí, jak správně cvičit, což vede ke špatným výsledkům a ztrátě motivace.
				</p>
			</div>
			<div
				class="md:mt-8 w-full rounded-lg border border-tiffany bg-tiffany/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<p class="text-3xl">📉</p>
				<p class="mt-2 text-xl font-bold text-tiffany">Žádné výsledky</p>
				<p class="mt-2 text-slate-700">
					Bez správné techniky a přístupu klienti nevidí pokrok a vzdávají to.
				</p>
			</div>
			<div
				class="md:mt-8 w-full rounded-lg border border-periwinkle bg-periwinkle/10 p-6 text-center shadow-md transition hover:scale-105"
			>
				<p class="text-3xl">⚖️</p>
				<p class="mt-2 text-xl font-bold text-periwinkle">Nekalá soutěž</p>
				<p class="mt-2 text-slate-700">
					Malé a střední posilovny nemohou konkurovat korporátním řetězcům a jejich digitálním
					nástrojům.
				</p>
			</div>
		</div>
	</div>
</div>
<div id="reseni" class="bg-gradient-to-r from-sandy/40 to-periwinkle/40 py-20">
	<div class="content">
		<h2 class="text-center text-4xl font-bold text-slate-700">Naše řešení</h2>
		<div class="grid w-full grid-cols-1 md:grid-cols-3 items-center gap-x-20">
			<div class="row-start-2 md:row-start-1">
				<img src="/lemur.svg" alt="Lemur maskot" class="px-24 sm:px-52 py-10 md:px-0 md:py-0 mx-auto" />
			</div>
			<div class="md:col-span-2 mt-6">
				<h3 class="text-3xl font-semibold text-sandy">Váš digitální trenér ve vaší kapse</h3>
				<p class="mt-6 text-slate-700">
					Pumplo provede uživatele krok za krokem jejich tréninkem. Od personalizovaného dotazníku
					přes individuální tréninkový plán až po přímé pokyny ke stroji.
				</p>
				<div class="mt-8 w-fit">
					<div class="mt-4 flex w-fit flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-periwinkle"
						>
							<p class="font-bold text-antiflash-white">1</p>
						</div>
						<div>
							<p class="text-lg font-semibold text-slate-800">Dotazník</p>
							<p class="text-slate-700">Řekněte nám o svých cílech a zkušenostech</p>
						</div>
					</div>
					<div class="mt-4 flex flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-sandy"
						>
							<p class="font-bold text-antiflash-white">2</p>
						</div>
						<div>
							<p class="text-lg font-semibold text-slate-800">Individuální plán</p>
							<p class="text-slate-700">Získejte tréninkový plán na míru přímo pro vás</p>
						</div>
					</div>
					<div class="mt-4 flex flex-row gap-3">
						<div
							class="mt-1.5 flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-periwinkle"
						>
							<p class="font-bold text-antiflash-white">3</p>
						</div>
						<div>
							<p class="text-lg font-semibold text-slate-800">Strojní instrukce</p>
							<p class="text-slate-700">Podrobný návod s váhy, techniky a opravami chyb</p>
						</div>
					</div>
				</div>
			</div>
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
</div>
<div id="hodnota" class="bg-antiflash-white py-20">
	<div class="content">
		<h2 class="text-center text-4xl font-bold text-slate-700">Jedinečná hodnota</h2>
		<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
			<div class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-sandy"
				>
					<p class="font-bold text-antiflash-white">📈</p>
				</div>
				<div>
					<p class="text-xl font-semibold text-sandy">Vyšší retence</p>
					<p class="text-slate-700">
						Digitální poradenství, sledování pokroku a motivace mohou zvýšit udržení klientů v
						posilovně o desítky procent.
					</p>
				</div>
			</div>
			<div class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-periwinkle"
				>
					<p class="font-bold text-antiflash-white">✨</p>
				</div>
				<div>
					<p class="text-xl font-semibold text-periwinkle">Jednoduché UX</p>
					<p class="text-slate-700">
						Minimální bariéry: žádné QR/NFC kódy, rozpoznávání stroje podle fotografií, navádění z
						ruky do ruky.
					</p>
				</div>
			</div>
			<div class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-periwinkle"
				>
					<p class="font-bold text-antiflash-white">🆓</p>
				</div>
				<div>
					<p class="text-xl font-semibold text-periwinkle">Zdarma / Nízká bariéra</p>
					<p class="text-slate-700">
						Základní verze zdarma, prémiové funkce za poplatek, ale základní hodnota je k dispozici
						okamžitě.
					</p>
				</div>
			</div>
			<div class="mt-4 flex flex-row gap-3">
				<div
					class="mt-1.5 flex aspect-square h-10 w-10 items-center justify-center rounded-lg bg-sandy"
				>
					<p class="font-bold text-antiflash-white">🤝</p>
				</div>
				<div>
					<p class="text-xl font-semibold text-sandy">Win-Win řešení</p>
					<p class="text-slate-700">
						Uživatelé si zlepšují kondici, posilovny získávají cenná data a nástroje pro růst.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="bg-antiflash-white pb-20">
	<div class="content">
        <div class="p-8 w-full bg-gradient-to-r from-sandy to-periwinkle rounded-lg">
            <h2 class="text-center text-2xl font-bold text-slate-700">Pomozte utvářet budoucnost aplikací pro posilovny</h2>
            <p class="text-center text-slate-600">Zatím je to jen koncept - přidejte se na čekací listinu a dejte nám vědět, že byste o takovou aplikaci stáli.</p>
            <form class="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 gap-2">
				<input
					type="text"
					class="rounded-lg bg-antiflash-white px-4 py-3 focus:ring-2 focus:ring-tiffany focus:outline-none"
					placeholder="Zadejte své jméno"
				/>
				<input
					type="text"
					class="rounded-lg bg-antiflash-white px-4 py-3 focus:ring-2 focus:ring-tiffany focus:outline-none"
					placeholder="Zadejte svůj email"
				/>
				<button
					type="submit"
					class="sm:col-span-2 cursor-pointer rounded-lg bg-tiffany px-4 py-3 transition hover:bg-periwinkle"
					>Mám zájem</button
				>
			</form>
        </div>
	</div>
</div>
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