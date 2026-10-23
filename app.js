// OnlyGross Platform Core Application - Designed & Developed by Mr. Gross
const IMG_PATHS = {
  cover: "assets/cover.jpg",
  avatar: "assets/avatar.jpg",
  post1: "assets/post1.jpg",
  post2: "assets/post2.jpg"
};

const CREATORS = [
  {
    id: "mrgross",
    name: "Mr. Gross Official",
    handle: "@mrgross",
    verified: true,
    isDeveloper: true,
    role: "Lead Platform Architect & Oddity Creator",
    avatar: IMG_PATHS.avatar,
    cover: IMG_PATHS.cover,
    bio: "Founder & Lead Developer of OnlyGross 🧪 | Pushing the boundaries of bizarre science, glowing bio-slime, SFX prosthetics & behind-the-scenes platform engineering. New drops daily!",
    location: "Neon Lab #404 • Global",
    website: "onlygross.netlify.app",
    price: 9.99,
    Bundle3Mo: 23.99,
    Bundle12Mo: 79.99,
    stats: { posts: 248, media: 184, likes: "48.2K", fans: "12.4K" },
    subscribed: false,
    category: "Science & SFX"
  },
  {
    id: "drslime",
    name: "Dr. Vera Slime",
    handle: "@drveraslime",
    verified: true,
    isDeveloper: false,
    role: "Bioluminescent Mycologist",
    avatar: IMG_PATHS.post1,
    cover: IMG_PATHS.cover,
    bio: "Cultivating rare glowing fungi, neon slime molds & time-lapse terrariums under 365nm UV light. Subscribe for exclusive macro lab streams!",
    location: "PNW Bio-Dome",
    website: "onlygross.netlify.app/drslime",
    price: 4.99,
    Bundle3Mo: 11.99,
    Bundle12Mo: 39.99,
    stats: { posts: 142, media: 119, likes: "29.8K", fans: "6.1K" },
    subscribed: true,
    category: "Bio-Art"
  },
  {
    id: "sfxmonster",
    name: "Vex Prosthetics Lab",
    handle: "@vexprosthetics",
    verified: true,
    isDeveloper: false,
    role: "Practical Creature & SFX Sculptor",
    avatar: IMG_PATHS.post2,
    cover: IMG_PATHS.post2,
    bio: "Hollywood-grade silicone masks, creature animatronics, hyper-real theatrical gore & mold-making tutorials. Uncensored workshop breakdowns!",
    location: "Burbank Studio B",
    website: "onlygross.netlify.app/vex",
    price: 12.99,
    Bundle3Mo: 31.99,
    Bundle12Mo: 99.99,
    stats: { posts: 310, media: 275, likes: "64.5K", fans: "19.3K" },
    subscribed: false,
    category: "SFX & Props"
  },
  {
    id: "bugchef",
    name: "Chef Entomophagy",
    handle: "@chefcrickets",
    verified: true,
    isDeveloper: false,
    role: "Extreme Culinary & Future Protein",
    avatar: IMG_PATHS.avatar,
    cover: IMG_PATHS.post1,
    bio: "Turning scorpion candy, crispy tarantula tempura & fermented delicacies into 5-star Michelin plating. Dare to taste the future!",
    location: "Tokyo / Austin",
    website: "onlygross.netlify.app/bugchef",
    price: 0,
    Bundle3Mo: 0,
    Bundle12Mo: 0,
    stats: { posts: 89, media: 64, likes: "18.1K", fans: "4.7K" },
    subscribed: true,
    category: "Extreme Food"
  }
];

const INITIAL_STORIES = [
  {
    id: "st1",
    creatorId: "mrgross",
    title: "2AM Lab Drop 🧪",
    media: IMG_PATHS.cover,
    caption: "Late night coding OnlyGross v2.4 while testing the new UV bio-reactor! Built with love by Mr. Gross.",
    time: "18m ago",
    viewed: false
  },
  {
    id: "st2",
    creatorId: "drslime",
    title: "UV Spore Release",
    media: IMG_PATHS.post1,
    caption: "Watch the neon cyan mycelium pulse under pure UV! Full 4K macro clip on my feed.",
    time: "1h ago",
    viewed: false
  },
  {
    id: "st3",
    creatorId: "sfxmonster",
    title: "Fresh Silicone Pull",
    media: IMG_PATHS.post2,
    caption: "Demolding the new swamp creature bust—zero air bubbles on this platinum cure!",
    time: "3h ago",
    viewed: false
  },
  {
    id: "st4",
    creatorId: "bugchef",
    title: "Scorpion Brittle",
    media: IMG_PATHS.cover,
    caption: "24-karat gold leaf meets roasted emperor scorpion caramel.",
    time: "5h ago",
    viewed: false
  }
];

const INITIAL_POSTS = [
  {
    id: "post-101",
    creatorId: "mrgross",
    pinned: true,
    timestamp: "2 hours ago",
    text: "Welcome to OnlyGross! 🎉 As the creator and developer (Mr. Gross), I built this platform for the internet's most fascinating oddity makers, mad scientists, SFX artists, and extreme creators. Here is our latest nocturnal bioluminescent slime terrarium synthesis!",
    mediaType: "image",
    mediaUrl: IMG_PATHS.post1,
    isPPV: false,
    ppvPrice: 0,
    unlocked: true,
    requiresSub: false,
    likes: 1420,
    liked: false,
    bookmarked: false,
    tipsTotal: 185,
    poll: null,
    comments: [
      { id: "c1", user: "@drveraslime", name: "Dr. Vera Slime", text: "The cyan luminescence on that slime mold is unreal! Incredible platform build, Mr. Gross!", time: "1h ago" },
      { id: "c2", user: "@vexprosthetics", name: "Vex Prosthetics Lab", text: "The UI runs smoother than platinum silicone. Proud to be a founding creator here!", time: "45m ago" }
    ]
  },
  {
    id: "post-102",
    creatorId: "mrgross",
    pinned: false,
    timestamp: "5 hours ago",
    text: "🔒 EXCLUSIVE MASTERCLASS: Behind-the-scenes breakdown of our Hollywood Monster SFX Prosthetic Workshop + Full Silicone Formula Sheet (4K High-Res Set & Studio Tour).",
    mediaType: "image",
    mediaUrl: IMG_PATHS.post2,
    isPPV: true,
    ppvPrice: 14.99,
    unlocked: false,
    requiresSub: false,
    likes: 892,
    liked: false,
    bookmarked: true,
    tipsTotal: 340,
    poll: null,
    comments: [
      { id: "c3", user: "@chefcrickets", name: "Chef Entomophagy", text: "Worth every penny! That airbrush veining technique is next level.", time: "3h ago" }
    ]
  },
  {
    id: "post-103",
    creatorId: "drslime",
    pinned: false,
    timestamp: "8 hours ago",
    text: " Subscribers Poll! Which bizarre specimen should we cultivate in the high-humidity neon chamber for Friday's live stream?",
    mediaType: "image",
    mediaUrl: IMG_PATHS.cover,
    isPPV: false,
    ppvPrice: 0,
    unlocked: true,
    requiresSub: false,
    likes: 654,
    liked: true,
    bookmarked: false,
    tipsTotal: 75,
    poll: {
      question: "Pick Friday's Live Chamber Specimen:",
      totalVotes: 412,
      userVoted: null,
      options: [
        { id: "opt1", text: "Glowing Ghost Fungus (Omphalotus)", votes: 198 },
        { id: "opt2", text: "Electric Blob Slime (Physarum polycephalum)", votes: 144 },
        { id: "opt3", text: "Carnivorous Sundew Macro Feeding", votes: 70 }
      ]
    },
    comments: []
  },
  {
    id: "post-104",
    creatorId: "sfxmonster",
    pinned: false,
    timestamp: "Yesterday",
    text: "Subscriber-only prosthetic sculpt gallery! Subscribe to @vexprosthetics or unlock this post to inspect all 6 practical creature busts in full studio lighting.",
    mediaType: "image",
    mediaUrl: IMG_PATHS.post2,
    isPPV: true,
    ppvPrice: 7.50,
    unlocked: false,
    requiresSub: true,
    likes: 1105,
    liked: false,
    bookmarked: false,
    tipsTotal: 210,
    poll: null,
    comments: []
  }
];

const INITIAL_NOTIFICATIONS = [
  { id: "n1", type: "sub", creatorId: "mrgross", text: "Mr. Gross Official posted a new pinned studio update.", time: "2h ago", read: false },
  { id: "n2", type: "tip", creatorId: "drslime", text: "Dr. Vera Slime thanked you for your $10.00 lab support tip!", time: "4h ago", read: false },
  { id: "n3", type: "promo", creatorId: "sfxmonster", text: "Limited offer: 20% off 3-month bundle on @vexprosthetics!", time: "6h ago", read: false },
  { id: "n4", type: "like", creatorId: "bugchef", text: "Chef Entomophagy liked your comment on Scorpion Brittle.", time: "1d ago", read: true }
];

const INITIAL_MESSAGES = {
  mrgross: [
    { id: "m1", sender: "creator", text: "Hey! Welcome to OnlyGross—I'm Mr. Gross, the developer behind this platform. Let me know how you like the responsive UI!", time: "10:15 AM", ppv: null },
    { id: "m2", sender: "user", text: "The layout is super clean and works great on both mobile and desktop!", time: "10:17 AM", ppv: null },
    { id: "m3", sender: "creator", text: "Appreciate it! I also dropped an exclusive unreleased lab blueprint below if you want to unlock it.", time: "10:20 AM", ppv: { id: "msg-ppv-1", title: "Secret Neon Bio-Reactor Blueprint + Video", price: 5.00, unlocked: false, media: IMG_PATHS.cover } }
  ],
  drslime: [
    { id: "m4", sender: "creator", text: "Thanks for subscribing to the Bio-Dome feed! New spore time-lapse drops tonight at 9 PM.", time: "Yesterday", ppv: null }
  ],
  sfxmonster: [
    { id: "m5", sender: "creator", text: "Yo! Custom monster mask commissions are open for October. DM me your concept!", time: "2 days ago", ppv: null }
  ],
  bugchef: [
    { id: "m6", sender: "creator", text: "Would you try crispy garlic grasshoppers or honey-glazed mealworms first?", time: "3 days ago", ppv: null }
  ]
};

const INITIAL_LISTS = [
  { id: "list-fans", name: "Active Subscriptions", count: 2, desc: "Creators you currently support", system: true },
  { id: "list-vip", name: "Mad Science VIPs", count: 3, desc: "Top tier oddity & bio-art labs", system: false },
  { id: "list-sfx", name: "Practical SFX Legends", count: 1, desc: "Creature sculptors & mask makers", system: false },
  { id: "list-muted", name: "Restricted / Muted", count: 0, desc: "Hidden from main home timeline", system: true }
];

const INITIAL_TRANSACTIONS = [
  { id: "tx-901", desc: "Wallet Top-Up (Visa •••• 4242)", amount: +100.00, date: "Oct 23, 2026" },
  { id: "tx-900", desc: "Subscription — @drveraslime (Monthly)", amount: -4.99, date: "Oct 21, 2026" },
  { id: "tx-899", desc: "Creator Tip — @mrgross", amount: -10.00, date: "Oct 19, 2026" }
];

// Global App State
const state = {
  darkMode: false,
  currentView: "home", // home, profile, notifications, messages, bookmarks, lists, subscriptions, statements, myprofile
  selectedCreatorId: "mrgross",
  profileTab: "posts", // posts, media, locked
  homeFilter: "all", // all, subscribed, locked
  notifFilter: "all", // all, sub, tip, promo
  searchQuery: "",
  walletBalance: 85.00,
  creators: JSON.parse(JSON.stringify(CREATORS)),
  stories: JSON.parse(JSON.stringify(INITIAL_STORIES)),
  posts: JSON.parse(JSON.stringify(INITIAL_POSTS)),
  notifications: JSON.parse(JSON.stringify(INITIAL_NOTIFICATIONS)),
  messages: JSON.parse(JSON.stringify(INITIAL_MESSAGES)),
  activeChatCreatorId: "mrgross",
  lists: JSON.parse(JSON.stringify(INITIAL_LISTS)),
  transactions: JSON.parse(JSON.stringify(INITIAL_TRANSACTIONS)),
  userProfile: {
    name: "Alex GrossFan",
    handle: "@alex_og",
    bio: "Supporting independent oddity creators, SFX wizards & Mr. Gross's experiments!",
    price: 4.99
  }
};

// Safe LocalStorage Load/Save
function loadState() {
  try {
    const saved = localStorage.getItem("onlygross_state_v1");
    if (saved) {
      const parsed = JSON.parse(saved);
      state.darkMode = !!parsed.darkMode;
      if (typeof parsed.walletBalance === "number") state.walletBalance = parsed.walletBalance;
    }
  } catch (e) {
    // Ignore sandbox storage errors
  }
}

function saveState() {
  try {
    localStorage.setItem("onlygross_state_v1", JSON.stringify({
      darkMode: state.darkMode,
      walletBalance: state.walletBalance
    }));
  } catch (e) {
    // Ignore sandbox storage errors
  }
}

function getCreator(id) {
  return state.creators.find(c => c.id === id) || state.creators[0];
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  const bg = type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-[#00AFF0]";
  toast.className = `${bg} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-sm font-medium fade-in max-w-sm`;
  toast.innerHTML = `
    <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

function applyTheme() {
  const root = document.getElementById("app-shell");
  if (!root) return;
  if (state.darkMode) {
    document.documentElement.classList.add("dark");
    root.className = "min-h-screen bg-slate-950 text-slate-100 flex flex-col transition-colors duration-200";
  } else {
    document.documentElement.classList.remove("dark");
    root.className = "min-h-screen bg-slate-50 text-slate-900 flex flex-col transition-colors duration-200";
  }
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  saveState();
  applyTheme();
  renderAll();
  showToast(state.darkMode ? "Dark mode enabled" : "Light mode enabled");
}

function switchView(view, creatorId = null) {
  state.currentView = view;
  if (creatorId) {
    state.selectedCreatorId = creatorId;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderAll();
}

function openCreatorProfile(creatorId) {
  state.selectedCreatorId = creatorId;
  state.currentView = "profile";
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderAll();
}

function updateBadges() {
  const unreadNotifs = state.notifications.filter(n => !n.read).length;
  const bookmarkCount = state.posts.filter(p => p.bookmarked).length;
  const walletEls = document.querySelectorAll(".wallet-balance-display");
  walletEls.forEach(el => {
    el.textContent = `$${state.walletBalance.toFixed(2)}`;
  });

  const notifBadges = document.querySelectorAll(".notif-badge");
  notifBadges.forEach(el => {
    if (unreadNotifs > 0) {
      el.textContent = unreadNotifs;
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  const bmBadges = document.querySelectorAll(".bookmark-badge");
  bmBadges.forEach(el => {
    el.textContent = bookmarkCount;
  });

  // Highlight active nav item
  document.querySelectorAll("[data-nav]").forEach(btn => {
    const target = btn.getAttribute("data-nav");
    const isActive = target === state.currentView;
    if (isActive) {
      btn.classList.add("text-[#00AFF0]", "font-bold");
      btn.classList.remove("text-slate-600", "dark:text-slate-400", "font-medium");
    } else {
      btn.classList.remove("text-[#00AFF0]", "font-bold");
      btn.classList.add("text-slate-600", "dark:text-slate-400", "font-medium");
    }
  });
}

// Render Story Bar
function renderStoriesBar() {
  return `
    <div class="flex items-center gap-4 overflow-x-auto py-3 px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <button onclick="openNewPostModal()" class="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none">
        <div class="w-16 h-16 rounded-full border-2 border-dashed border-[#00AFF0] flex items-center justify-center bg-sky-50 dark:bg-slate-800 group-hover:scale-105 transition">
          <svg class="w-7 h-7 text-[#00AFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <span class="text-xs font-medium text-slate-700 dark:text-slate-300">Add Story</span>
      </button>
      ${state.stories.map(st => {
        const cr = getCreator(st.creatorId);
        return `
          <button onclick="openStoryModal('${st.id}')" class="flex flex-col items-center gap-1.5 shrink-0 group focus:outline-none">
            <div class="story-ring rounded-full ${st.viewed ? 'opacity-60' : ''}">
              <img src="${cr.avatar}" alt="${cr.name}" class="w-15 h-15 w-[58px] h-[58px] rounded-full object-cover border-2 border-white dark:border-slate-900 group-hover:scale-105 transition"/>
            </div>
            <span class="text-xs font-medium text-slate-700 dark:text-slate-300 max-w-[72px] truncate">${cr.name.split(' ')[0]}</span>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

// Render Single Post Card
function renderPostCard(post) {
  const creator = getCreator(post.creatorId);
  const isLocked = (post.isPPV && !post.unlocked) || (post.requiresSub && !creator.subscribed && !post.unlocked);
  const lockPriceLabel = post.isPPV ? `$${post.ppvPrice.toFixed(2)}` : `$${creator.price.toFixed(2)}/mo`;

  let pollHtml = "";
  if (post.poll) {
    pollHtml = `
      <div class="mt-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
        <p class="text-xs font-semibold uppercase tracking-wider text-[#00AFF0] mb-2">${post.poll.question}</p>
        <div class="space-y-2">
          ${post.poll.options.map(opt => {
            const pct = post.poll.totalVotes > 0 ? Math.round((opt.votes / post.poll.totalVotes) * 100) : 0;
            const isSelected = post.poll.userVoted === opt.id;
            return `
              <button onclick="votePoll('${post.id}', '${opt.id}')" class="w-full relative overflow-hidden rounded-lg border ${isSelected ? 'border-[#00AFF0] bg-sky-50/60 dark:bg-sky-950/40' : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'} p-2.5 text-left transition hover:border-[#00AFF0]">
                <div class="absolute inset-y-0 left-0 bg-[#00AFF0]/15 transition-all duration-300" style="width: ${pct}%"></div>
                <div class="relative flex items-center justify-between text-xs sm:text-sm font-medium">
                  <span class="flex items-center gap-2">
                    ${isSelected ? '<span class="w-2 h-2 rounded-full bg-[#00AFF0]"></span>' : ''}
                    ${opt.text}
                  </span>
                  <span class="font-bold text-slate-600 dark:text-slate-300">${pct}%</span>
                </div>
              </button>
            `;
          }).join("")}
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-2">${post.poll.totalVotes} total votes • Click an option to vote</p>
      </div>
    `;
  }

  return `
    <article class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 transition">
      ${post.pinned ? `
        <div class="flex items-center gap-1.5 text-xs font-semibold text-[#00AFF0] mb-2">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <span>PINNED POST BY MR. GROSS</span>
        </div>
      ` : ""}

      <!-- Post Header -->
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-center gap-3 cursor-pointer" onclick="openCreatorProfile('${creator.id}')">
          <img src="${creator.avatar}" alt="${creator.name}" class="w-11 h-11 rounded-full object-cover ring-2 ring-[#00AFF0]/30"/>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="font-bold text-sm sm:text-base hover:text-[#00AFF0] transition">${creator.name}</span>
              <svg class="w-4 h-4 text-[#00AFF0] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              ${creator.isDeveloper ? `<span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#00AFF0]/15 text-[#00AFF0]">Developer • Mr. Gross</span>` : ""}
            </div>
            <div class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span>${creator.handle}</span>
              <span>•</span>
              <span>${post.timestamp}</span>
            </div>
          </div>
        </div>
        <button onclick="copyShareLink('${creator.handle}/${post.id}')" title="Copy Post Link" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
        </button>
      </div>

      <!-- Post Text -->
      <p class="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">${post.text}</p>

      ${pollHtml}

      <!-- Post Media / Paywall -->
      <div class="mt-3 relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800">
        <img src="${post.mediaUrl}" alt="Post content" class="w-full max-h-[440px] object-cover transition duration-500 ${isLocked ? 'locked-blur' : 'cursor-pointer hover:scale-[1.01]'}" ${!isLocked ? `onclick="openLightbox('${post.mediaUrl}', '${creator.name}')"` : ''}/>
        ${isLocked ? `
          <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center text-white">
            <div class="w-14 h-14 rounded-full bg-[#00AFF0]/20 border border-[#00AFF0] flex items-center justify-center mb-3">
              <svg class="w-7 h-7 text-[#00AFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h4 class="font-bold text-base sm:text-lg mb-1">Unlock Exclusive OnlyGross Media</h4>
            <p class="text-xs sm:text-sm text-slate-300 max-w-xs mb-4">High-resolution studio photo + behind-the-scenes lab breakdown by ${creator.name}</p>
            <button onclick="unlockPost('${post.id}')" class="og-btn-primary px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg">
              Unlock Post For ${lockPriceLabel}
            </button>
          </div>
        ` : `
          <div class="absolute bottom-3 right-3 bg-slate-900/75 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
            <span>HD • OnlyGross Vault</span>
          </div>
        `}
      </div>

      <!-- Action Bar -->
      <div class="mt-3 pt-2 flex items-center justify-between text-slate-500 dark:text-slate-400">
        <div class="flex items-center gap-4 sm:gap-6">
          <button onclick="toggleLike('${post.id}')" class="flex items-center gap-1.5 text-xs sm:text-sm font-medium transition ${post.liked ? 'text-rose-500 font-bold' : 'hover:text-rose-500'}">
            <svg class="w-5 h-5" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span>${post.likes}</span>
          </button>

          <button onclick="toggleCommentBox('${post.id}')" class="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-[#00AFF0] transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span>${post.comments.length}</span>
          </button>

          <button onclick="openTipModal('${creator.id}', '${post.id}')" class="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-[#00AFF0] transition">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>SEND TIP ($${post.tipsTotal})</span>
          </button>
        </div>

        <button onclick="toggleBookmark('${post.id}')" title="Bookmark Post" class="p-1.5 rounded-full transition ${post.bookmarked ? 'text-[#00AFF0]' : 'hover:text-[#00AFF0]'}">
          <svg class="w-5 h-5" fill="${post.bookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </div>

      <!-- Comments Section -->
      <div id="comments-${post.id}" class="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
        ${post.comments.map(c => `
          <div class="text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/60 px-3 py-2 rounded-xl flex items-start justify-between gap-2">
            <div>
              <span class="font-bold text-slate-900 dark:text-white mr-1.5">${c.name}</span>
              <span class="text-slate-500 text-xs mr-2">${c.user}</span>
              <p class="text-slate-700 dark:text-slate-300 mt-0.5">${c.text}</p>
            </div>
            <span class="text-[11px] text-slate-400 shrink-0">${c.time}</span>
          </div>
        `).join("")}
        <form onsubmit="submitComment(event, '${post.id}')" class="flex items-center gap-2 pt-1">
          <input type="text" id="comment-input-${post.id}" placeholder="Add a comment..." class="flex-1 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-[#00AFF0] rounded-full px-4 py-2 focus:outline-none"/>
          <button type="submit" class="og-btn-primary text-xs font-bold px-4 py-2 rounded-full">Post</button>
        </form>
      </div>
    </article>
  `;
}

// Render Views
function renderHomeView() {
  let filtered = state.posts.filter(p => {
    const cr = getCreator(p.creatorId);
    const matchesSearch = !state.searchQuery ||
      p.text.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      cr.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      cr.handle.toLowerCase().includes(state.searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (state.homeFilter === "subscribed") return cr.subscribed;
    if (state.homeFilter === "locked") return p.isPPV && !p.unlocked;
    return true;
  });

  return `
    <div>
      <!-- Sticky Top Header -->
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <h1 class="text-lg font-extrabold tracking-tight uppercase">Home</h1>
          <span class="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#00AFF0]/10 text-[#00AFF0]">By Mr. Gross</span>
        </div>
        <div class="flex items-center gap-1.5">
          <button onclick="setHomeFilter('all')" class="text-xs font-semibold px-3 py-1.5 rounded-full transition ${state.homeFilter === 'all' ? 'bg-[#00AFF0] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">All</button>
          <button onclick="setHomeFilter('subscribed')" class="text-xs font-semibold px-3 py-1.5 rounded-full transition ${state.homeFilter === 'subscribed' ? 'bg-[#00AFF0] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">Subscribed</button>
          <button onclick="setHomeFilter('locked')" class="text-xs font-semibold px-3 py-1.5 rounded-full transition ${state.homeFilter === 'locked' ? 'bg-[#00AFF0] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">PPV Vault</button>
        </div>
      </div>

      ${renderStoriesBar()}

      <!-- Inline Composer Box -->
      <div class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4">
        <div class="flex items-center gap-3">
          <img src="${IMG_PATHS.avatar}" alt="Avatar" class="w-10 h-10 rounded-full object-cover"/>
          <button onclick="openNewPostModal()" class="flex-1 text-left text-sm text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/70 dark:hover:bg-slate-700/70 px-4 py-2.5 rounded-full transition">
            Compose new OnlyGross post, poll, or pay-per-view drop...
          </button>
        </div>
        <div class="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-4">
            <button onclick="openNewPostModal()" class="flex items-center gap-1.5 hover:text-[#00AFF0]">
              <svg class="w-4 h-4 text-[#00AFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>Media</span>
            </button>
            <button onclick="openNewPostModal()" class="flex items-center gap-1.5 hover:text-[#00AFF0]">
              <svg class="w-4 h-4 text-[#00AFF0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>PPV Price</span>
            </button>
          </div>
          <button onclick="openNewPostModal()" class="og-btn-primary px-4 py-1.5 rounded-full text-xs font-bold">New Post</button>
        </div>
      </div>

      <!-- Feed List -->
      <div>
        ${filtered.length > 0 ? filtered.map(renderPostCard).join("") : `
          <div class="p-12 text-center text-slate-500">
            <p class="font-semibold text-base mb-1">No posts match this filter</p>
            <p class="text-xs mb-4">Try switching back to All posts or clearing your search query.</p>
            <button onclick="setHomeFilter('all')" class="og-btn-primary px-5 py-2 rounded-full text-xs font-bold">Reset Feed</button>
          </div>
        `}
      </div>
    </div>
  `;
}

function renderProfileView() {
  const creator = getCreator(state.selectedCreatorId);
  const creatorPosts = state.posts.filter(p => p.creatorId === creator.id);
  const filteredPosts = creatorPosts.filter(p => {
    if (state.profileTab === "locked") return p.isPPV;
    return true;
  });

  return `
    <div>
      <!-- Top Bar -->
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-2.5 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button onclick="switchView('home')" class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          </button>
          <div>
            <div class="flex items-center gap-1.5">
              <h1 class="font-extrabold text-sm sm:text-base">${creator.name}</h1>
              <svg class="w-4 h-4 text-[#00AFF0]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-3">
              <span>${creator.stats.posts} Posts</span>
              <span>•</span>
              <span>${creator.stats.media} Media</span>
              <span>•</span>
              <span>${creator.stats.likes} Likes</span>
            </div>
          </div>
        </div>

        <!-- Creator Switcher Pill -->
        <select onchange="openCreatorProfile(this.value)" aria-label="Switch Creator Profile" class="text-xs font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1.5 focus:outline-none">
          ${state.creators.map(c => `<option value="${c.id}" ${c.id === creator.id ? 'selected' : ''}>${c.name}</option>`).join("")}
        </select>
      </div>

      <!-- Cover Banner -->
      <div class="relative h-44 sm:h-56 bg-slate-900 overflow-hidden">
        <img src="${creator.cover}" alt="Cover" class="w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div class="absolute top-3 right-3 flex items-center gap-2">
          <span class="bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/15">
            ${creator.category}
          </span>
        </div>
      </div>

      <!-- Avatar & Action Row -->
      <div class="bg-white dark:bg-slate-900 px-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-end justify-between -mt-12 sm:-mt-14 mb-3 relative z-10">
          <div class="relative">
            <img src="${creator.avatar}" alt="${creator.name}" class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white dark:border-slate-900 shadow-lg"/>
            <span class="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Available now"></span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="openChatWithCreator('${creator.id}')" title="Message Creator" class="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-[#00AFF0] hover:text-[#00AFF0] transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </button>
            <button onclick="openTipModal('${creator.id}')" title="Send Tip" class="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-[#00AFF0] hover:text-[#00AFF0] transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </button>
            <button onclick="copyShareLink('${creator.website}')" title="Share Profile" class="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-[#00AFF0] hover:text-[#00AFF0] transition">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
            </button>
          </div>
        </div>

        <!-- Bio & Developer Credit -->
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h2 class="text-xl font-extrabold">${creator.name}</h2>
            <svg class="w-5 h-5 text-[#00AFF0]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            ${creator.isDeveloper ? `<span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#00AFF0] text-white">Platform Developer: Mr. Gross</span>` : ""}
          </div>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">${creator.handle} • Available now</p>
          <p class="mt-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">${creator.bio}</p>
          <div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span class="flex items-center gap-1">📍 ${creator.location}</span>
            <span class="flex items-center gap-1 text-[#00AFF0] font-medium">🔗 ${creator.website}</span>
            <span class="flex items-center gap-1">👥 ${creator.stats.fans} Fans</span>
          </div>
        </div>

        <!-- Subscription Box -->
        <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Subscription</span>
            ${creator.subscribed ? `<span class="text-xs font-bold text-emerald-500">✓ ACTIVE SUBSCRIBER</span>` : `<span class="text-xs font-semibold text-[#00AFF0]">Limited 20% Off Bundles</span>`}
          </div>
          <button onclick="toggleSubscription('${creator.id}', ${creator.price})" class="w-full ${creator.subscribed ? 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200' : 'og-btn-primary'} py-3 px-5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-between shadow-sm">
            <span>${creator.subscribed ? 'SUBSCRIBED (CLICK TO MANAGE)' : 'SUBSCRIBE'}</span>
            <span>${creator.price === 0 ? 'FREE' : `$${creator.price.toFixed(2)} / MONTH`}</span>
          </button>

          ${creator.price > 0 && !creator.subscribed ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2.5">
              <button onclick="toggleSubscription('${creator.id}', ${creator.Bundle3Mo})" class="border border-[#00AFF0]/40 hover:border-[#00AFF0] text-[#00AFF0] py-2 px-4 rounded-full text-xs font-bold flex items-center justify-between transition">
                <span>3 MONTHS (20% OFF)</span>
                <span>$${creator.Bundle3Mo.toFixed(2)} total</span>
              </button>
              <button onclick="toggleSubscription('${creator.id}', ${creator.Bundle12Mo})" class="border border-[#00AFF0]/40 hover:border-[#00AFF0] text-[#00AFF0] py-2 px-4 rounded-full text-xs font-bold flex items-center justify-between transition">
                <span>12 MONTHS (35% OFF)</span>
                <span>$${creator.Bundle12Mo.toFixed(2)} total</span>
              </button>
            </div>
          ` : ""}
        </div>

        <!-- Profile Content Tabs -->
        <div class="grid grid-cols-3 text-center mt-4 -mb-4 border-t border-slate-100 dark:border-slate-800">
          <button onclick="setProfileTab('posts')" class="py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition ${state.profileTab === 'posts' ? 'border-[#00AFF0] text-[#00AFF0]' : 'border-transparent text-slate-400'}">
            ${creatorPosts.length} Posts
          </button>
          <button onclick="setProfileTab('media')" class="py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition ${state.profileTab === 'media' ? 'border-[#00AFF0] text-[#00AFF0]' : 'border-transparent text-slate-400'}">
            Media Grid
          </button>
          <button onclick="setProfileTab('locked')" class="py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition ${state.profileTab === 'locked' ? 'border-[#00AFF0] text-[#00AFF0]' : 'border-transparent text-slate-400'}">
            PPV Vault
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      ${state.profileTab === "media" ? `
        <div class="p-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-white dark:bg-slate-900">
          ${creatorPosts.map(p => {
            const locked = p.isPPV && !p.unlocked;
            return `
              <div class="relative aspect-square rounded-xl overflow-hidden bg-slate-900 group border border-slate-200 dark:border-slate-800">
                <img src="${p.mediaUrl}" alt="Media" class="w-full h-full object-cover ${locked ? 'locked-blur' : 'cursor-pointer group-hover:scale-105 transition'}" ${!locked ? `onclick="openLightbox('${p.mediaUrl}', '${creator.name}')"` : ''}/>
                ${locked ? `
                  <button onclick="unlockPost('${p.id}')" class="absolute inset-0 bg-slate-950/60 flex flex-col items-center justify-center text-white p-2">
                    <span class="text-xs font-bold bg-[#00AFF0] px-3 py-1 rounded-full">Unlock $${p.ppvPrice.toFixed(2)}</span>
                  </button>
                ` : ""}
              </div>
            `;
          }).join("")}
        </div>
      ` : `
        <div>
          ${filteredPosts.map(renderPostCard).join("")}
        </div>
      `}
    </div>
  `;
}

function renderNotificationsView() {
  const list = state.notifications.filter(n => state.notifFilter === "all" || n.type === state.notifFilter);
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Notifications</h1>
        <button onclick="markAllNotificationsRead()" class="text-xs font-bold text-[#00AFF0] hover:underline">Mark all read</button>
      </div>
      <div class="flex items-center gap-2 p-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-x-auto">
        ${[
          { id: "all", label: "All" },
          { id: "sub", label: "Subscriptions" },
          { id: "tip", label: "Tips & Unlocks" },
          { id: "promo", label: "Promotions" }
        ].map(t => `
          <button onclick="setNotifFilter('${t.id}')" class="text-xs font-bold px-3.5 py-1.5 rounded-full shrink-0 transition ${state.notifFilter === t.id ? 'bg-[#00AFF0] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}">${t.label}</button>
        `).join("")}
      </div>
      <div class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
        ${list.map(n => {
          const cr = getCreator(n.creatorId);
          return `
            <div onclick="openCreatorProfile('${cr.id}')" class="p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition ${!n.read ? 'bg-sky-50/40 dark:bg-sky-950/20' : ''}">
              <div class="flex items-center gap-3">
                <img src="${cr.avatar}" alt="${cr.name}" class="w-11 h-11 rounded-full object-cover"/>
                <div>
                  <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">${n.text}</p>
                  <span class="text-[11px] text-slate-400">${n.time}</span>
                </div>
              </div>
              ${!n.read ? `<span class="w-2.5 h-2.5 rounded-full bg-[#00AFF0] shrink-0"></span>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderMessagesView() {
  const activeCreator = getCreator(state.activeChatCreatorId);
  const thread = state.messages[state.activeChatCreatorId] || [];

  return `
    <div class="flex flex-col h-[calc(100vh-4rem)] md:h-screen bg-white dark:bg-slate-900">
      <!-- Header -->
      <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h1 class="text-base sm:text-lg font-extrabold uppercase">Direct Messages</h1>
          <p class="text-xs text-slate-500">Chat or send PPV tips directly to creators</p>
        </div>
        <button onclick="openTipModal('${activeCreator.id}')" class="og-btn-primary text-xs font-bold px-3.5 py-1.5 rounded-full">
          Tip ${activeCreator.name.split(' ')[0]}
        </button>
      </div>

      <!-- Creator Thread Selector -->
      <div class="flex items-center gap-2 p-2.5 border-b border-slate-200 dark:border-slate-800 overflow-x-auto bg-slate-50 dark:bg-slate-950">
        ${state.creators.map(c => `
          <button onclick="selectChatCreator('${c.id}')" class="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition ${c.id === state.activeChatCreatorId ? 'bg-[#00AFF0] text-white shadow' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'}">
            <img src="${c.avatar}" alt="${c.name}" class="w-6 h-6 rounded-full object-cover"/>
            <span>${c.name.split(' ')[0]}</span>
          </button>
        `).join("")}
      </div>

      <!-- Messages List -->
      <div id="chat-scroll-box" class="flex-1 overflow-y-auto p-4 space-y-3">
        ${thread.map(m => {
          const isUser = m.sender === "user";
          return `
            <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'}">
              <div class="max-w-[82%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm ${isUser ? 'bg-[#00AFF0] text-white rounded-br-none' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none'}">
                <p>${m.text}</p>
                ${m.ppv ? `
                  <div class="mt-2.5 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-900 text-white">
                    <div class="relative h-36">
                      <img src="${m.ppv.media}" alt="PPV" class="w-full h-full object-cover ${m.ppv.unlocked ? '' : 'locked-blur'}"/>
                      ${!m.ppv.unlocked ? `
                        <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-3 text-center">
                          <p class="text-xs font-bold mb-2">${m.ppv.title}</p>
                          <button onclick="unlockMessagePPV('${state.activeChatCreatorId}', '${m.id}')" class="og-btn-primary text-xs font-bold px-4 py-1.5 rounded-full">
                            Unlock Attachment $${m.ppv.price.toFixed(2)}
                          </button>
                        </div>
                      ` : ""}
                    </div>
                  </div>
                ` : ""}
              </div>
              <span class="text-[10px] text-slate-400 mt-1 px-1">${m.time}</span>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Message Composer -->
      <form onsubmit="sendChatMessage(event)" class="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 bg-white dark:bg-slate-900">
        <button type="button" onclick="openTipModal('${activeCreator.id}')" title="Attach Tip" class="p-2 rounded-full text-[#00AFF0] hover:bg-sky-50 dark:hover:bg-slate-800">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </button>
        <input type="text" id="chat-message-input" placeholder="Write a message to ${activeCreator.name}..." class="flex-1 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"/>
        <button type="submit" class="og-btn-primary px-5 py-2.5 rounded-full text-xs font-bold uppercase">Send</button>
      </form>
    </div>
  `;
}

function renderBookmarksView() {
  const saved = state.posts.filter(p => p.bookmarked);
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Bookmarks (${saved.length})</h1>
        <span class="text-xs text-slate-400">Saved Posts & Vault Media</span>
      </div>
      ${saved.length > 0 ? saved.map(renderPostCard).join("") : `
        <div class="p-12 text-center text-slate-500 bg-white dark:bg-slate-900">
          <p class="font-bold text-base mb-1">No Bookmarks Yet</p>
          <p class="text-xs mb-4">Tap the bookmark icon on any OnlyGross post to save it here for instant access.</p>
          <button onclick="switchView('home')" class="og-btn-primary px-5 py-2 rounded-full text-xs font-bold">Explore Feed</button>
        </div>
      `}
    </div>
  `;
}

function renderListsView() {
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Custom Lists</h1>
        <button onclick="openCreateListModal()" class="og-btn-primary text-xs font-bold px-3.5 py-1.5 rounded-full">+ New List</button>
      </div>
      <div class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
        ${state.lists.map(l => `
          <div class="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
            <div>
              <h3 class="font-bold text-sm sm:text-base">${l.name}</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">${l.desc} • ${l.count} creators</p>
            </div>
            <button onclick="switchView('subscriptions')" class="text-xs font-bold text-[#00AFF0] hover:underline">View Creators →</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderSubscriptionsView() {
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Creator Directory & Subscriptions</h1>
      </div>
      <div class="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        ${state.creators.map(c => `
          <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between">
            <div>
              <div class="h-24 relative bg-slate-800">
                <img src="${c.cover}" alt="${c.name}" class="w-full h-full object-cover"/>
                <div class="absolute inset-0 bg-black/35"></div>
                <span class="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">${c.category}</span>
              </div>
              <div class="p-4 pt-0">
                <div class="flex items-end justify-between -mt-8 mb-2 relative z-10">
                  <img src="${c.avatar}" alt="${c.name}" class="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-slate-900"/>
                  <span class="text-xs font-bold px-2.5 py-1 rounded-full ${c.subscribed ? 'bg-emerald-500/15 text-emerald-500' : 'bg-[#00AFF0]/15 text-[#00AFF0]'}">
                    ${c.subscribed ? 'Subscribed' : (c.price === 0 ? 'Free' : `$${c.price}/mo`)}
                  </span>
                </div>
                <h3 class="font-bold text-sm flex items-center gap-1 cursor-pointer hover:text-[#00AFF0]" onclick="openCreatorProfile('${c.id}')">
                  <span>${c.name}</span>
                  ${c.isDeveloper ? `<span class="text-[10px] bg-[#00AFF0] text-white px-1.5 py-0.2 rounded">Dev</span>` : ""}
                </h3>
                <p class="text-xs text-slate-400 mb-2">${c.handle}</p>
                <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">${c.bio}</p>
              </div>
            </div>
            <div class="p-4 pt-0 flex items-center gap-2">
              <button onclick="openCreatorProfile('${c.id}')" class="flex-1 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold hover:border-[#00AFF0]">View Profile</button>
              <button onclick="toggleSubscription('${c.id}', ${c.price})" class="flex-1 py-2 rounded-full text-xs font-bold ${c.subscribed ? 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300' : 'og-btn-primary'}">
                ${c.subscribed ? 'Unsubscribe' : 'Subscribe'}
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderStatementsView() {
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Wallet, Cards & Statements</h1>
        <button onclick="addWalletFunds(25)" class="og-btn-primary text-xs font-bold px-3.5 py-1.5 rounded-full">+ Add $25 Credits</button>
      </div>

      <div class="p-4 space-y-4">
        <!-- Balance Card -->
        <div class="rounded-2xl p-5 bg-gradient-to-r from-[#00AFF0] to-[#0077b6] text-white shadow-lg">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs uppercase tracking-wider opacity-85 font-semibold">Available OnlyGross Wallet Credits</p>
              <h2 class="text-3xl font-extrabold mt-1">$${state.walletBalance.toFixed(2)}</h2>
            </div>
            <div class="flex flex-col gap-2">
              <button onclick="addWalletFunds(50)" class="bg-white text-[#0082B4] font-bold text-xs px-4 py-2 rounded-full shadow hover:bg-sky-50 transition">
                + Top Up $50
              </button>
              <button onclick="addWalletFunds(100)" class="bg-black/25 text-white font-bold text-xs px-4 py-1.5 rounded-full hover:bg-black/35 transition">
                + Top Up $100
              </button>
            </div>
          </div>
          <p class="text-[11px] mt-4 opacity-90">Instant 1-click checkout enabled • Engineered by Mr. Gross</p>
        </div>

        <!-- Transactions Table -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800 font-bold text-sm">
            Recent Billing & Earning Statements
          </div>
          <div class="divide-y divide-slate-200 dark:divide-slate-800">
            ${state.transactions.map(t => `
              <div class="px-4 py-3 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <p class="font-semibold">${t.desc}</p>
                  <span class="text-[11px] text-slate-400">${t.date} • ID: ${t.id}</span>
                </div>
                <span class="font-bold ${t.amount >= 0 ? 'text-emerald-500' : 'text-slate-800 dark:text-slate-200'}">
                  ${t.amount >= 0 ? `+$${t.amount.toFixed(2)}` : `-$${Math.abs(t.amount).toFixed(2)}`}
                </span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMyProfileView() {
  return `
    <div>
      <div class="sticky top-0 z-20 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <h1 class="text-lg font-extrabold uppercase">Creator Studio & Settings</h1>
      </div>
      <div class="p-4 space-y-4">
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
          <h3 class="font-bold text-base mb-3">Edit Your OnlyGross Account</h3>
          <form onsubmit="saveUserProfile(event)" class="space-y-3">
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Display Name</label>
              <input type="text" id="prof-name" value="${state.userProfile.name}" class="w-full text-sm bg-slate-100 dark:bg-slate-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"/>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Username Handle</label>
              <input type="text" id="prof-handle" value="${state.userProfile.handle}" class="w-full text-sm bg-slate-100 dark:bg-slate-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"/>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Bio</label>
              <textarea id="prof-bio" rows="3" class="w-full text-sm bg-slate-100 dark:bg-slate-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00AFF0]">${state.userProfile.bio}</textarea>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-slate-400 mb-1">Monthly Subscription Price ($ USD)</label>
              <input type="number" step="0.50" id="prof-price" value="${state.userProfile.price}" class="w-full text-sm bg-slate-100 dark:bg-slate-800 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00AFF0]"/>
            </div>
            <button type="submit" class="og-btn-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase">Save Profile Settings</button>
          </form>
        </div>

        <!-- Developer Credit Card -->
        <div class="rounded-2xl border-2 border-[#00AFF0]/40 bg-sky-50/50 dark:bg-slate-900 p-5">
          <div class="flex items-center gap-3 mb-2">
            <img src="${IMG_PATHS.avatar}" alt="Mr. Gross" class="w-12 h-12 rounded-full object-cover border-2 border-[#00AFF0]"/>
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#00AFF0]">Official Developer Credit</span>
              <h4 class="font-extrabold text-base">Designed & Engineered by Mr. Gross</h4>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            OnlyGross is a custom-built, fully responsive creator subscription web application crafted by <strong>Mr. Gross</strong> for seamless deployment on Netlify across mobile, tablet, and ultra-wide desktop displays.
          </p>
        </div>
      </div>
    </div>
  `;
}

// Main Center Column Router
function renderMainColumn() {
  const container = document.getElementById("center-feed-column");
  if (!container) return;

  if (state.currentView === "home") {
    container.innerHTML = renderHomeView();
  } else if (state.currentView === "profile") {
    container.innerHTML = renderProfileView();
  } else if (state.currentView === "notifications") {
    container.innerHTML = renderNotificationsView();
  } else if (state.currentView === "messages") {
    container.innerHTML = renderMessagesView();
  } else if (state.currentView === "bookmarks") {
    container.innerHTML = renderBookmarksView();
  } else if (state.currentView === "lists") {
    container.innerHTML = renderListsView();
  } else if (state.currentView === "subscriptions") {
    container.innerHTML = renderSubscriptionsView();
  } else if (state.currentView === "statements") {
    container.innerHTML = renderStatementsView();
  } else if (state.currentView === "myprofile") {
    container.innerHTML = renderMyProfileView();
  }
}

function renderRightSidebarSuggestions() {
  const container = document.getElementById("suggestions-list");
  if (!container) return;
  container.innerHTML = state.creators.map(c => `
    <div class="relative rounded-2xl overflow-hidden group border border-slate-200 dark:border-slate-800 h-28 bg-slate-900">
      <img src="${c.cover}" alt="${c.name}" class="w-full h-full object-cover opacity-75 group-hover:scale-105 transition duration-300"/>
      <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
      <span class="absolute top-2 right-2 bg-[#00AFF0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
        ${c.price === 0 ? 'FREE' : `$${c.price.toFixed(2)}/mo`}
      </span>
      <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
        <div class="flex items-center gap-2.5 cursor-pointer" onclick="openCreatorProfile('${c.id}')">
          <img src="${c.avatar}" alt="${c.name}" class="w-10 h-10 rounded-full object-cover border-2 border-white"/>
          <div class="truncate">
            <div class="flex items-center gap-1">
              <p class="font-bold text-xs sm:text-sm truncate">${c.name}</p>
              <svg class="w-3.5 h-3.5 text-[#00AFF0] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
            </div>
            <p class="text-[11px] text-slate-300">${c.handle}</p>
          </div>
        </div>
        <button onclick="openCreatorProfile('${c.id}')" class="bg-white/20 hover:bg-[#00AFF0] backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full transition">
          View
        </button>
      </div>
    </div>
  `).join("");
}

function renderAll() {
  renderMainColumn();
  renderRightSidebarSuggestions();
  updateBadges();
}

// Interactive Handlers
function setHomeFilter(f) {
  state.homeFilter = f;
  renderMainColumn();
}

function setProfileTab(t) {
  state.profileTab = t;
  renderMainColumn();
}

function setNotifFilter(f) {
  state.notifFilter = f;
  renderMainColumn();
}

function handleSearchInput(val) {
  state.searchQuery = val.trim();
  if (state.currentView !== "home") {
    state.currentView = "home";
  }
  renderMainColumn();
}

function toggleLike(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  renderMainColumn();
}

function toggleBookmark(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  post.bookmarked = !post.bookmarked;
  showToast(post.bookmarked ? "Saved to Bookmarks" : "Removed from Bookmarks");
  renderAll();
}

function toggleCommentBox(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (input) input.focus();
}

function submitComment(e, postId) {
  e.preventDefault();
  const input = document.getElementById(`comment-input-${postId}`);
  if (!input || !input.value.trim()) return;
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  post.comments.push({
    id: "c-" + Date.now(),
    user: state.userProfile.handle,
    name: state.userProfile.name,
    text: input.value.trim(),
    time: "Just now"
  });
  input.value = "";
  renderMainColumn();
  showToast("Comment posted!", "success");
}

function votePoll(postId, optionId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post || !post.poll) return;
  if (post.poll.userVoted === optionId) return;
  if (post.poll.userVoted) {
    const prev = post.poll.options.find(o => o.id === post.poll.userVoted);
    if (prev) prev.votes = Math.max(0, prev.votes - 1);
  } else {
    post.poll.totalVotes += 1;
  }
  const chosen = post.poll.options.find(o => o.id === optionId);
  if (chosen) chosen.votes += 1;
  post.poll.userVoted = optionId;
  renderMainColumn();
  showToast("Poll vote recorded!", "success");
}

function unlockPost(postId) {
  const post = state.posts.find(p => p.id === postId);
  if (!post) return;
  const creator = getCreator(post.creatorId);
  const cost = post.isPPV ? post.ppvPrice : creator.price;
  if (state.walletBalance < cost) {
    showToast("Insufficient wallet credits! Top up in Statements.", "error");
    switchView("statements");
    return;
  }
  state.walletBalance -= cost;
  post.unlocked = true;
  state.transactions.unshift({
    id: "tx-" + Math.floor(100 + Math.random() * 900),
    desc: `PPV Media Unlock — ${creator.handle}`,
    amount: -cost,
    date: "Just now"
  });
  saveState();
  renderAll();
  showToast(`Unlocked exclusive post for $${cost.toFixed(2)}!`, "success");
}

function toggleSubscription(creatorId, price) {
  const creator = getCreator(creatorId);
  if (!creator) return;
  if (creator.subscribed) {
    creator.subscribed = false;
    showToast(`Unsubscribed from ${creator.name}`);
  } else {
    if (price > 0 && state.walletBalance < price) {
      showToast("Not enough wallet credits! Please top up first.", "error");
      switchView("statements");
      return;
    }
    if (price > 0) {
      state.walletBalance -= price;
      state.transactions.unshift({
        id: "tx-" + Math.floor(100 + Math.random() * 900),
        desc: `Subscription — ${creator.handle}`,
        amount: -price,
        date: "Just now"
      });
    }
    creator.subscribed = true;
    showToast(`Subscribed to ${creator.name}!`, "success");
  }
  saveState();
  renderAll();
}

function addWalletFunds(amount) {
  state.walletBalance += amount;
  state.transactions.unshift({
    id: "tx-" + Math.floor(100 + Math.random() * 900),
    desc: `Wallet Instant Top-Up`,
    amount: +amount,
    date: "Just now"
  });
  saveState();
  renderAll();
  showToast(`Added $${amount.toFixed(2)} to your OnlyGross Wallet!`, "success");
}

function markAllNotificationsRead() {
  state.notifications.forEach(n => n.read = true);
  renderAll();
  showToast("All notifications marked as read");
}

function selectChatCreator(creatorId) {
  state.activeChatCreatorId = creatorId;
  renderMainColumn();
}

function openChatWithCreator(creatorId) {
  state.activeChatCreatorId = creatorId;
  state.currentView = "messages";
  renderAll();
}

function sendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById("chat-message-input");
  if (!input || !input.value.trim()) return;
  const text = input.value.trim();
  if (!state.messages[state.activeChatCreatorId]) {
    state.messages[state.activeChatCreatorId] = [];
  }
  state.messages[state.activeChatCreatorId].push({
    id: "m-" + Date.now(),
    sender: "user",
    text,
    time: "Just now",
    ppv: null
  });
  input.value = "";
  renderMainColumn();

  const cr = getCreator(state.activeChatCreatorId);
  setTimeout(() => {
    state.messages[state.activeChatCreatorId].push({
      id: "m-" + (Date.now() + 1),
      sender: "creator",
      text: `Thanks for reaching out on OnlyGross! ${cr.name} here—stay tuned for our next lab stream!`,
      time: "Just now",
      ppv: null
    });
    if (state.currentView === "messages") renderMainColumn();
  }, 650);
}

function unlockMessagePPV(creatorId, msgId) {
  const thread = state.messages[creatorId] || [];
  const msg = thread.find(m => m.id === msgId);
  if (!msg || !msg.ppv) return;
  if (state.walletBalance < msg.ppv.price) {
    showToast("Insufficient wallet credits!", "error");
    return;
  }
  state.walletBalance -= msg.ppv.price;
  msg.ppv.unlocked = true;
  state.transactions.unshift({
    id: "tx-" + Math.floor(100 + Math.random() * 900),
    desc: `DM Attachment Unlock — @${creatorId}`,
    amount: -msg.ppv.price,
    date: "Just now"
  });
  saveState();
  renderAll();
  showToast("DM exclusive attachment unlocked!", "success");
}

function copyShareLink(path) {
  const url = `https://${path}`;
  try {
    const temp = document.createElement("textarea");
    temp.value = url;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  } catch (e) {}
  showToast(`Link copied: ${url}`, "success");
}

function saveUserProfile(e) {
  e.preventDefault();
  const name = document.getElementById("prof-name").value.trim();
  const handle = document.getElementById("prof-handle").value.trim();
  const bio = document.getElementById("prof-bio").value.trim();
  const price = parseFloat(document.getElementById("prof-price").value) || 0;
  if (name) state.userProfile.name = name;
  if (handle) state.userProfile.handle = handle;
  if (bio) state.userProfile.bio = bio;
  state.userProfile.price = price;
  renderAll();
  showToast("Creator profile settings updated!", "success");
}

// Modals: Tip, New Post, Story, Lightbox, Create List
let tipTargetCreatorId = "mrgross";
let tipTargetPostId = null;

function openTipModal(creatorId, postId = null) {
  tipTargetCreatorId = creatorId;
  tipTargetPostId = postId;
  const cr = getCreator(creatorId);
  const modal = document.getElementById("tip-modal");
  const title = document.getElementById("tip-modal-creator");
  if (title) title.textContent = `${cr.name} (${cr.handle})`;
  if (modal) modal.classList.remove("hidden");
}

function closeTipModal() {
  const modal = document.getElementById("tip-modal");
  if (modal) modal.classList.add("hidden");
}

function selectTipPreset(amt) {
  const input = document.getElementById("tip-amount-input");
  if (input) input.value = amt;
}

function submitTipForm(e) {
  e.preventDefault();
  const amtInput = document.getElementById("tip-amount-input");
  const noteInput = document.getElementById("tip-note-input");
  const amount = parseFloat(amtInput ? amtInput.value : 5);
  if (isNaN(amount) || amount <= 0) {
    showToast("Enter a valid tip amount", "error");
    return;
  }
  if (state.walletBalance < amount) {
    closeTipModal();
    showToast("Insufficient wallet balance! Please top up.", "error");
    switchView("statements");
    return;
  }
  state.walletBalance -= amount;
  if (tipTargetPostId) {
    const post = state.posts.find(p => p.id === tipTargetPostId);
    if (post) post.tipsTotal += amount;
  }
  const cr = getCreator(tipTargetCreatorId);
  state.transactions.unshift({
    id: "tx-" + Math.floor(100 + Math.random() * 900),
    desc: `Creator Tip to ${cr.handle}${noteInput && noteInput.value ? ' ("' + noteInput.value + '")' : ''}`,
    amount: -amount,
    date: "Just now"
  });
  if (noteInput) noteInput.value = "";
  closeTipModal();
  saveState();
  renderAll();
  showToast(`Sent $${amount.toFixed(2)} tip to ${cr.name}!`, "success");
}

function openNewPostModal() {
  const modal = document.getElementById("new-post-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeNewPostModal() {
  const modal = document.getElementById("new-post-modal");
  if (modal) modal.classList.add("hidden");
}

function submitNewPostForm(e) {
  e.preventDefault();
  const textEl = document.getElementById("new-post-text");
  const priceEl = document.getElementById("new-post-price");
  const mediaEl = document.getElementById("new-post-media");
  const text = textEl ? textEl.value.trim() : "";
  if (!text) {
    showToast("Please write a caption for your post", "error");
    return;
  }
  const price = parseFloat(priceEl ? priceEl.value : "0") || 0;
  const mediaChoice = mediaEl ? mediaEl.value : "post1";
  const chosenUrl = IMG_PATHS[mediaChoice] || IMG_PATHS.post1;

  state.posts.unshift({
    id: "post-" + Date.now(),
    creatorId: "mrgross",
    pinned: false,
    timestamp: "Just now",
    text,
    mediaType: "image",
    mediaUrl: chosenUrl,
    isPPV: price > 0,
    ppvPrice: price,
    unlocked: price === 0,
    requiresSub: false,
    likes: 1,
    liked: true,
    bookmarked: false,
    tipsTotal: 0,
    poll: null,
    comments: []
  });

  if (textEl) textEl.value = "";
  if (priceEl) priceEl.value = "0";
  closeNewPostModal();
  state.currentView = "home";
  renderAll();
  showToast("New post published to OnlyGross feed!", "success");
}

function openStoryModal(storyId) {
  const st = state.stories.find(s => s.id === storyId);
  if (!st) return;
  st.viewed = true;
  const cr = getCreator(st.creatorId);
  const modal = document.getElementById("story-modal");
  const img = document.getElementById("story-modal-img");
  const avatar = document.getElementById("story-modal-avatar");
  const name = document.getElementById("story-modal-name");
  const time = document.getElementById("story-modal-time");
  const caption = document.getElementById("story-modal-caption");

  if (img) img.src = st.media;
  if (avatar) avatar.src = cr.avatar;
  if (name) name.textContent = cr.name;
  if (time) time.textContent = st.time;
  if (caption) caption.textContent = st.caption;
  if (modal) modal.classList.remove("hidden");
  renderMainColumn();
}

function closeStoryModal() {
  const modal = document.getElementById("story-modal");
  if (modal) modal.classList.add("hidden");
}

function openLightbox(imgUrl, title) {
  const modal = document.getElementById("lightbox-modal");
  const img = document.getElementById("lightbox-img");
  const cap = document.getElementById("lightbox-caption");
  if (img) img.src = imgUrl;
  if (cap) cap.textContent = `${title} • OnlyGross High-Res Vault`;
  if (modal) modal.classList.remove("hidden");
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  if (modal) modal.classList.add("hidden");
}

function openCreateListModal() {
  const modal = document.getElementById("create-list-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeCreateListModal() {
  const modal = document.getElementById("create-list-modal");
  if (modal) modal.classList.add("hidden");
}

function submitCreateListForm(e) {
  e.preventDefault();
  const nameEl = document.getElementById("new-list-name");
  const descEl = document.getElementById("new-list-desc");
  const name = nameEl ? nameEl.value.trim() : "";
  if (!name) return;
  state.lists.push({
    id: "list-" + Date.now(),
    name,
    count: 1,
    desc: (descEl && descEl.value.trim()) ? descEl.value.trim() : "Custom creator collection",
    system: false
  });
  if (nameEl) nameEl.value = "";
  if (descEl) descEl.value = "";
  closeCreateListModal();
  renderAll();
  showToast(`Created list "${name}"!`, "success");
}

// Expose handlers globally for inline attributes
window.toggleTheme = toggleTheme;
window.switchView = switchView;
window.openCreatorProfile = openCreatorProfile;
window.setHomeFilter = setHomeFilter;
window.setProfileTab = setProfileTab;
window.setNotifFilter = setNotifFilter;
window.handleSearchInput = handleSearchInput;
window.toggleLike = toggleLike;
window.toggleBookmark = toggleBookmark;
window.toggleCommentBox = toggleCommentBox;
window.submitComment = submitComment;
window.votePoll = votePoll;
window.unlockPost = unlockPost;
window.toggleSubscription = toggleSubscription;
window.addWalletFunds = addWalletFunds;
window.markAllNotificationsRead = markAllNotificationsRead;
window.selectChatCreator = selectChatCreator;
window.openChatWithCreator = openChatWithCreator;
window.sendChatMessage = sendChatMessage;
window.unlockMessagePPV = unlockMessagePPV;
window.copyShareLink = copyShareLink;
window.saveUserProfile = saveUserProfile;
window.openTipModal = openTipModal;
window.closeTipModal = closeTipModal;
window.selectTipPreset = selectTipPreset;
window.submitTipForm = submitTipForm;
window.openNewPostModal = openNewPostModal;
window.closeNewPostModal = closeNewPostModal;
window.submitNewPostForm = submitNewPostForm;
window.openStoryModal = openStoryModal;
window.closeStoryModal = closeStoryModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.openCreateListModal = openCreateListModal;
window.closeCreateListModal = closeCreateListModal;
window.submitCreateListForm = submitCreateListForm;

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  applyTheme();
  renderAll();
});
