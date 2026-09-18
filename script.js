(function () {
  // Set current year
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // =============== LIVE COUNTERS ===============
  let onlineCount = 12547;
  let moreCount = 12247;
  const headerOnlineCount = document.getElementById("headerOnlineCount");
  const moreCountBadge = document.getElementById("moreCountBadge");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updateOnlineCount() {
    const change = getRandomInt(-3, 15);
    onlineCount = Math.max(11000, Math.min(18000, onlineCount + change));
    headerOnlineCount.textContent = onlineCount.toLocaleString();
  }

  function updateMoreCount() {
    const change = getRandomInt(-5, 20);
    moreCount = Math.max(9000, Math.min(18000, moreCount + change));
    moreCountBadge.textContent = "+" + moreCount.toLocaleString();
  }

  function scheduleOnlineUpdate() {
    updateOnlineCount();
    setTimeout(scheduleOnlineUpdate, getRandomInt(2000, 4000));
  }

  function scheduleMoreUpdate() {
    updateMoreCount();
    setTimeout(scheduleMoreUpdate, getRandomInt(5000, 8000));
  }

  scheduleOnlineUpdate();
  scheduleMoreUpdate();

  // =============== PROFILES ===============
  const allProfiles = [
    {
      name: "Margaret W.",
      age: 58,
      country: "🇺🇸 US",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Robert H.",
      age: 62,
      country: "🇬🇧 UK",
      img: "https://randomuser.me/api/portraits/men/62.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Helga S.",
      age: 55,
      country: "🇩🇪 DE",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "James M.",
      age: 64,
      country: "🇨🇦 CA",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Karen P.",
      age: 51,
      country: "🇦🇺 AU",
      img: "https://randomuser.me/api/portraits/women/51.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Lars E.",
      age: 60,
      country: "🇸🇪 SE",
      img: "https://randomuser.me/api/portraits/men/60.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Ingrid O.",
      age: 57,
      country: "🇳🇴 NO",
      img: "https://randomuser.me/api/portraits/women/57.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Pierre D.",
      age: 63,
      country: "🇫🇷 FR",
      img: "https://randomuser.me/api/portraits/men/63.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Sofia R.",
      age: 54,
      country: "🇮🇹 IT",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Anouk V.",
      age: 56,
      country: "🇳🇱 NL",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "William T.",
      age: 67,
      country: "🇺🇸 US",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Diane K.",
      age: 59,
      country: "🇬🇧 UK",
      img: "https://randomuser.me/api/portraits/women/59.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Thomas B.",
      age: 61,
      country: "🇩🇰 DK",
      img: "https://randomuser.me/api/portraits/men/61.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Maria G.",
      age: 53,
      country: "🇪🇸 ES",
      img: "https://randomuser.me/api/portraits/women/53.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Henrik L.",
      age: 66,
      country: "🇫🇮 FI",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Clara P.",
      age: 52,
      country: "🇧🇪 BE",
      img: "https://randomuser.me/api/portraits/women/52.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "George R.",
      age: 65,
      country: "🇮🇪 IE",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Elena M.",
      age: 50,
      country: "🇵🇹 PT",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Oliver S.",
      age: 68,
      country: "🇨🇭 CH",
      img: "https://randomuser.me/api/portraits/men/68.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Anna K.",
      age: 56,
      country: "🇦🇹 AT",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Johan V.",
      age: 63,
      country: "🇳🇱 NL",
      img: "https://randomuser.me/api/portraits/men/63.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Lisa N.",
      age: 54,
      country: "🇳🇿 NZ",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
      status: "typing",
      statusText: "typing…",
    },
    {
      name: "Peter J.",
      age: 69,
      country: "🇺🇸 US",
      img: "https://randomuser.me/api/portraits/men/69.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
    {
      name: "Catherine D.",
      age: 57,
      country: "🇬🇧 UK",
      img: "https://randomuser.me/api/portraits/women/57.jpg",
      status: "looking",
      statusText: "Looking to talk 💬",
    },
  ];

  function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function renderProfiles() {
    const grid = document.getElementById("profilesGrid");
    const shuffled = shuffleArray(allProfiles);
    grid.innerHTML = shuffled
      .slice(0, 8)
      .map(
        (p, i) => `
            <a href="https://mulaearn.com/register.php?ref=zylar" target="_blank" class="profile-card" style="animation-delay:${i * 0.05}s">
              <div class="pc-banner"></div>
              <div class="pc-body">
                <div class="pc-avatar-wrap">
                  <img class="pc-avatar" src="${p.img}" alt="${p.name}" loading="lazy" />
                  <div class="pc-dot"></div>
                </div>
                <div class="pc-info">
                  <div class="pc-name">${p.name} <span class="pc-age">· ${p.age}</span></div>
                  <div class="pc-meta"><span class="pc-flag-badge">${p.country}</span></div>
                  <div class="pc-status ${p.status}">
                    <span class="pc-sdot ${p.status}"></span>${p.statusText}
                  </div>
                </div>
              </div>
              <div class="pc-actions">
                <span class="btn-start-chat">💬 Chat</span>
                <span class="btn-watch-chat">👁 Watch</span>
              </div>
            </a>
          `,
      )
      .join("");
  }

  renderProfiles();
  setInterval(renderProfiles, 8000);

  // =============== TICKER ===============
  const tickerItems = [
    { name: "Aisha M.", amt: "$34.50", method: "M-Pesa" },
    { name: "John K.", amt: "$18.00", method: "Bank" },
    { name: "Fatima B.", amt: "$62.00", method: "MoMo" },
    { name: "Emeka O.", amt: "$27.50", method: "PayPal" },
    { name: "Grace N.", amt: "$45.00", method: "M-Pesa" },
    { name: "David A.", amt: "$89.00", method: "Bank" },
    { name: "Amina S.", amt: "$21.00", method: "MoMo" },
    { name: "Kweku T.", amt: "$53.50", method: "M-Pesa" },
    { name: "Brian M.", amt: "$71.00", method: "Bank" },
    { name: "Lydia K.", amt: "$38.00", method: "PayPal" },
  ];

  const tickerTrack = document.getElementById("tickerTrack");
  tickerTrack.innerHTML = [...tickerItems, ...tickerItems]
    .map(
      (t) => `
          <div class="t-item">
            <div class="t-check">
              <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
            </div>
            <strong>${t.name}</strong> withdrew <span class="t-amt">${t.amt}</span> · ${t.method}
          </div>
        `,
    )
    .join("");

  // =============== REVIEWS ===============
  const reviewData = [
    {
      stars: "★★★★★",
      quote:
        "After retirement the silence was difficult. These conversations are completely genuine — chats about markets, traditions, even recipes.",
      name: "James R., 52",
      meta: "London, UK · 42 chats",
      img: "https://i.pravatar.cc/88?img=12",
    },
    {
      stars: "★★★★★",
      quote:
        "Travelling to Tanzania I wanted real local knowledge. The conversations were priceless — food, places, etiquette.",
      name: "Emily T., 48",
      meta: "Chicago, USA · 18 chats",
      img: "https://i.pravatar.cc/88?img=5",
    },
    {
      stars: "★★★★★",
      quote:
        "The loneliness was overwhelming. These chats are real — warm people who actually want to talk. Good for mental health.",
      name: "Robert M., 61",
      meta: "Toronto, Canada · 60+",
      img: "https://i.pravatar.cc/88?img=32",
    },
    {
      stars: "★★★★★",
      quote:
        "I've learned so much about daily life in Kenya — festivals, food, customs. Absolutely real conversations.",
      name: "Sarah B., 44",
      meta: "Manchester, UK · 29 chats",
      img: "https://i.pravatar.cc/88?img=22",
    },
    {
      stars: "★★★★★",
      quote:
        "A warm conversation from Africa breaks up my workday. My chatter is thoughtful, funny, and interesting.",
      name: "Marcus L., 39",
      meta: "Toronto, Canada · 15 chats",
      img: "https://i.pravatar.cc/88?img=35",
    },
    {
      stars: "★★★★★",
      quote:
        "Planning a trip to Ghana. More useful than any guidebook — real, honest insights about places to visit.",
      name: "David K., 55",
      meta: "New York, USA · 22 chats",
      img: "https://i.pravatar.cc/88?img=9",
    },
  ];

  const reviewsTrack = document.getElementById("reviewsTrack");
  const doubledReviews = [...reviewData, ...reviewData];
  reviewsTrack.innerHTML = doubledReviews
    .map(
      (r) => `
          <div class="review-card">
            <div class="stars">${r.stars}</div>
            <blockquote>"${r.quote}"</blockquote>
            <div class="review-footer">
              <img src="${r.img}" alt="${r.name}">
              <div><div class="review-name">${r.name}</div><div class="review-meta">${r.meta}</div></div>
              <span class="verified-badge">Verified</span>
            </div>
          </div>
        `,
    )
    .join("");

  // =============== FAQ ===============
  document.querySelectorAll(".faq-q").forEach((btn) => {
    btn.addEventListener("click", function () {
      const item = this.closest(".faq-item");
      const wasOpen = item.classList.contains("open");
      document
        .querySelectorAll(".faq-item.open")
        .forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  // =============== TOASTS ===============
  const toastData = [
    ["Aisha M.", "$34.50", "M-Pesa"],
    ["Kelvin O.", "$22.00", "M-Pesa"],
    ["Fatima B.", "$62.00", "MoMo"],
    ["Emeka O.", "$27.50", "PayPal"],
    ["Grace N.", "$45.00", "M-Pesa"],
    ["David A.", "$89.00", "bank"],
    ["Amina S.", "$21.00", "MoMo"],
    ["Kweku T.", "$53.50", "M-Pesa"],
    ["Sipho D.", "$118.00", "bank"],
    ["Amaka N.", "$37.00", "PayPal"],
    ["Brian M.", "$29.50", "M-Pesa"],
    ["Lydia K.", "$44.00", "MoMo"],
  ];

  let toastIdx = 0;
  const toastWrap = document.getElementById("toastWrap");

  function showToast() {
    const d = toastData[toastIdx++ % toastData.length];
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `
            <div class="t-icon">
              <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
            </div>
            <div class="t-body">
              <div class="t-line"><strong>${d[0]}</strong> withdrew <span class="t-green">${d[1]}</span> · ${d[2]}</div>
            </div>
            <div class="t-ago">${Math.floor(Math.random() * 3) + 1}m ago</div>
          `;
    toastWrap.appendChild(el);
    while (toastWrap.children.length > 2)
      toastWrap.removeChild(toastWrap.firstChild);
    setTimeout(() => {
      el.classList.add("out");
      setTimeout(() => el.remove(), 300);
    }, 3500);
    setTimeout(showToast, 5000 + Math.random() * 3000);
  }

  setTimeout(showToast, 2000);
})();
