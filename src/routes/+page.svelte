<script>
  import Lemur from "$lib/assets/lemur.svg";
  import Pumpik from "$lib/assets/pumpik.svg";
  import Robot from "$lib/assets/robot.svg";
  let name = "";
  let email = "";
  function handleSubmit() {
    alert(`Thanks ${name}! We'll reach out to you at ${email}.`);
  }
</script>

<div class="bg-gradient-to-b from-periwinkle/30 via-antiflash-white to-sandy/20 text-night min-h-screen font-sans flex flex-col">
  <!-- Navbar -->
  <nav class="flex items-center justify-between px-8 py-4 shadow-md bg-white/90 backdrop-blur sticky top-0 z-50">
    <h1 class="text-2xl font-extrabold text-sandy">Pumplo</h1>
    <div class="flex gap-6 text-tiffany font-medium">
      <a href="#problem" class="hover:text-sandy transition">Problem</a>
      <a href="#solution" class="hover:text-sandy transition">Solution</a>
      <a href="#value" class="hover:text-sandy transition">Value</a>
      <a href="#contact" class="hover:text-sandy transition">Contact</a>
    </div>
    <button class="bg-sandy text-night px-4 py-2 rounded-full font-semibold hover:bg-periwinkle transition">
      Try Free
    </button>
  </nav>

  <!-- Hero Section -->
  <section class="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gradient-to-r from-periwinkle/40 to-sandy/40 flex-grow">
    <div class="max-w-xl">
      <h2 class="text-5xl font-extrabold mb-6 text-night leading-tight">
        Your <span class="text-sandy">Digital Trainer</span> in Your Pocket
      </h2>
      <p class="text-lg text-tiffany mb-8">
        Pumplo guides you step-by-step through workouts, creates personalized training plans, and keeps you motivated. No more guessing – just results.
      </p>
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div class="flex items-center gap-3 text-night">
          <div class="w-6 h-6 bg-sandy rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <span>Personalized workout plans</span>
        </div>
        <div class="flex items-center gap-3 text-night">
          <div class="w-6 h-6 bg-periwinkle rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
          <span>Step-by-step guidance</span>
        </div>
      </div>
      <form on:submit|preventDefault={handleSubmit} class="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Your Name"
          bind:value={name}
          class="px-4 py-3 rounded-full border border-periwinkle/40 focus:outline-none focus:ring-2 focus:ring-periwinkle"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          bind:value={email}
          class="px-4 py-3 rounded-full border border-sandy/40 focus:outline-none focus:ring-2 focus:ring-sandy"
          required
        />
        <button type="submit" class="bg-night text-white font-semibold px-6 py-3 rounded-full hover:bg-sandy hover:text-night transition">
          Start Free
        </button>
      </form>
    </div>
    <img
      src={Robot}
      alt="digital trainer robot"
      class="w-72 mt-10 md:mt-0 animate-fade-in"
    />
  </section>

  <!-- Problem Section -->
  <section id="problem" class="px-10 py-20 text-center bg-gradient-to-b from-antiflash-white to-periwinkle/10">
    <h2 class="text-4xl font-extrabold mb-12 text-night">1⃣ The Problem</h2>
    <div class="max-w-4xl mx-auto">
      <div class="text-6xl font-black text-sandy mb-6">50%</div>
      <p class="text-2xl text-night mb-12 font-semibold">of new gym members quit within the first 6 months</p>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="rounded-3xl shadow-lg p-8 bg-white/80 hover:scale-105 transition border border-sandy/30">
          <div class="text-4xl mb-4">😕</div>
          <h3 class="font-bold text-xl mb-3 text-sandy">Lack of Guidance</h3>
          <p class="text-night">Members don't know how to exercise properly, leading to poor results and lost motivation.</p>
        </div>
        <div class="rounded-3xl shadow-lg p-8 bg-white/80 hover:scale-105 transition border border-periwinkle/30">
          <div class="text-4xl mb-4">📉</div>
          <h3 class="font-bold text-xl mb-3 text-periwinkle">No Results</h3>
          <p class="text-night">Without proper technique and programming, clients don't see progress and give up.</p>
        </div>
        <div class="rounded-3xl shadow-lg p-8 bg-white/80 hover:scale-105 transition border border-tiffany/30">
          <div class="text-4xl mb-4">⚖️</div>
          <h3 class="font-bold text-xl mb-3 text-tiffany">Unfair Competition</h3>
          <p class="text-night">Small and medium gyms can't compete with corporate chains and their digital tools.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section id="solution" class="px-10 py-20 text-center bg-gradient-to-r from-sandy/20 to-periwinkle/20">
    <h2 class="text-4xl font-extrabold mb-12 text-night">2⃣ The Solution</h2>
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between mb-16">
        <div class="max-w-2xl text-left">
          <h3 class="text-3xl font-bold mb-6 text-sandy">Your Digital Trainer in Your Pocket</h3>
          <p class="text-lg text-night mb-8">
            Pumplo guides users step-by-step through their workouts. From personalized questionnaire to individual training plan to direct machine instructions.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-periwinkle rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h4 class="font-semibold text-night">Questionnaire</h4>
                <p class="text-tiffany">Tell us about your goals and experience</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-sandy rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h4 class="font-semibold text-night">Individual Plan</h4>
                <p class="text-tiffany">Get a workout plan tailored just for you</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-periwinkle rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h4 class="font-semibold text-night">Machine Instructions</h4>
                <p class="text-tiffany">Step-by-step guidance with weight, technique, and error corrections</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-8 mt-10 md:mt-0">
          <img src={Lemur} alt="guidance mascot" class="w-48 transition-transform hover:scale-110" />
          <img src={Pumpik} alt="progress mascot" class="w-32 transition-transform hover:scale-110" />
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="rounded-3xl shadow-lg p-8 bg-white/90 border border-sandy/40">
          <div class="text-4xl mb-4">🎮</div>
          <h3 class="font-bold text-xl mb-3 text-sandy">Gamification & Feedback</h3>
          <p class="text-night">Regular progress tracking and motivational features keep users engaged and coming back.</p>
        </div>
        <div class="rounded-3xl shadow-lg p-8 bg-white/90 border border-periwinkle/40">
          <div class="text-4xl mb-4">🆓</div>
          <h3 class="font-bold text-xl mb-3 text-periwinkle">Free for Gyms</h3>
          <p class="text-night">Gyms get the complete solution free in the basic version, with no hardware investment required.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Unique Value Section -->
  <section id="value" class="px-10 py-20 bg-gradient-to-b from-periwinkle/10 to-antiflash-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold mb-12 text-center text-night">3⃣ Unique Value</h2>
      
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-sandy rounded-xl flex items-center justify-center text-white text-xl">📈</div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-sandy">Higher Retention</h3>
              <p class="text-night">Digital guidance, progress tracking, and motivation can increase gym client retention by tens of percent.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-periwinkle rounded-xl flex items-center justify-center text-white text-xl">🆓</div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-periwinkle">Free / Low Barrier</h3>
              <p class="text-night">Basic version free, premium features for a fee, but core value is immediately available.</p>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-tiffany rounded-xl flex items-center justify-center text-white text-xl">✨</div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-tiffany">Simple UX</h3>
              <p class="text-night">Minimal barriers: no QR/NFC codes, machine recognition by photos, hand-by-hand guidance.</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-sandy rounded-xl flex items-center justify-center text-white text-xl">🤝</div>
            <div>
              <h3 class="text-xl font-bold mb-2 text-sandy">Win-Win Solution</h3>
              <p class="text-night">Users improve their fitness, gyms get valuable data and growth tools.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center bg-gradient-to-r from-sandy/20 to-periwinkle/20 rounded-3xl p-12">
        <h3 class="text-3xl font-bold mb-6 text-night">Ready to Transform Your Gym Experience?</h3>
        <p class="text-lg text-tiffany mb-8 max-w-2xl mx-auto">
          Join thousands of users who are already achieving better results with personalized digital training.
        </p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button class="bg-sandy text-night px-8 py-4 rounded-full font-bold text-lg hover:bg-periwinkle transition hover:scale-105">
            🎯 Start Your Free Trial
          </button>
          <button class="border-2 border-night text-night px-8 py-4 rounded-full font-bold text-lg hover:bg-night hover:text-white transition">
            🏋️ For Gym Owners
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contact" class="px-10 py-10 bg-night text-center mt-auto">
    <div class="flex justify-center items-center gap-4 mb-4">
      <img src={Robot} alt="Pumplo robot" class="w-8 h-8" />
      <span class="text-xl font-bold text-sandy">Pumplo</span>
    </div>
    <p class="text-sm text-antiflash-white">© 2025 Pumplo. Your digital trainer in your pocket.</p>
  </footer>
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
