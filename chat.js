(function() {
    // --- PROFILES --- matching landing page theme
    const ALL_PROFILES = [
      { id:1, name:"Sophia", age:24, loc:"Miami, USA", flag:"🇺🇸", desc:"Dating advice & modern love stories", full:"Hey! I'm Sophia from Miami. I love talking about modern dating, relationship dynamics, and helping people navigate love in the digital age.", price:5, topics:["Dating Advice","Modern Love"], img:"https://i.pravatar.cc/400?img=41" },
      { id:2, name:"Marcus", age:27, loc:"London, UK", flag:"🇬🇧", desc:"Relationship coach & dating tips", full:"Hi! I'm Marcus, a relationship coach from London. I help people build meaningful connections and navigate the dating world with confidence.", price:7, topics:["Relationship Coaching","Confidence"], img:"https://i.pravatar.cc/400?img=62" },
      { id:3, name:"Isabella", age:22, loc:"Barcelona, Spain", flag:"🇪🇸", desc:"Passionate about love & romance", full:"¡Hola! I'm Isabella from Barcelona. I'm a hopeless romantic who loves discussing love languages and romantic gestures.", price:4, topics:["Romance","Love Languages"], img:"https://i.pravatar.cc/400?img=47" },
      { id:4, name:"Alex", age:29, loc:"Sydney, Australia", flag:"🇦🇺", desc:"Dating app expert & social coach", full:"G'day! I'm Alex from Sydney. I've mastered dating apps and social connections. Let me share tips on making genuine connections!", price:6, topics:["Dating Apps","Social Skills"], img:"https://i.pravatar.cc/400?img=64" },
      { id:5, name:"Dr. Rachel", age:35, loc:"New York, USA", flag:"🇺🇸", desc:"Relationship psychologist", full:"Hi, I'm Dr. Rachel, a relationship psychologist from NYC. I help people understand attachment styles and build healthier relationships.", price:9, topics:["Relationship Psychology","Communication"], img:"https://i.pravatar.cc/400?img=45" },
      { id:6, name:"David", age:31, loc:"Toronto, Canada", flag:"🇨🇦", desc:"Marriage counselor & family expert", full:"Hello! I'm David from Toronto. As a marriage counselor, I help couples strengthen their bonds and navigate challenges.", price:8, topics:["Marriage Advice","Family"], img:"https://i.pravatar.cc/400?img=69" },
      { id:7, name:"Priya", age:26, loc:"Mumbai, India", flag:"🇮🇳", desc:"Cross-cultural relationships", full:"Namaste! I'm Priya from Mumbai. I'm fascinated by cross-cultural relationships and how different cultures approach love.", price:5, topics:["Cross-Cultural Love","Traditions"], img:"https://i.pravatar.cc/400?img=44" },
      { id:8, name:"Jake", age:25, loc:"Los Angeles, USA", flag:"🇺🇸", desc:"Fitness & confidence building", full:"What's up! I'm Jake from LA. I help people transform their lives through fitness and building unshakeable confidence.", price:4, topics:["Fitness","Confidence Building"], img:"https://i.pravatar.cc/400?img=65" },
      { id:9, name:"Emma", age:23, loc:"Paris, France", flag:"🇫🇷", desc:"Fashion, beauty & self-love", full:"Bonjour! I'm Emma from Paris. I believe self-love is the foundation of all love. Let's chat about fashion and embracing your unique self.", price:5, topics:["Fashion","Self-Love"], img:"https://i.pravatar.cc/400?img=43" },
      { id:10, name:"Lucas", age:28, loc:"Berlin, Germany", flag:"🇩🇪", desc:"Travel & adventure lifestyle", full:"Hallo! I'm Lucas from Berlin. I've backpacked across 35 countries and believe travel is the best way to discover yourself.", price:4, topics:["Travel Adventures","Stories"], img:"https://i.pravatar.cc/400?img=66" },
      { id:11, name:"Mia", age:21, loc:"Seoul, South Korea", flag:"🇰🇷", desc:"K-pop, drama & pop culture", full:"Annyeong! I'm Mia from Seoul. I live and breathe K-pop, K-dramas, and everything entertainment.", price:3, topics:["K-pop","Dramas"], img:"https://i.pravatar.cc/400?img=40" },
      { id:12, name:"Ryan", age:26, loc:"Austin, USA", flag:"🇺🇸", desc:"Music, festivals & nightlife", full:"Hey! I'm Ryan from Austin, the live music capital. I'm all about music festivals and discovering new artists.", price:3, topics:["Music Festivals","Nightlife"], img:"https://i.pravatar.cc/400?img=67" },
      { id:13, name:"Chloe", age:24, loc:"Tokyo, Japan", flag:"🇯🇵", desc:"Anime, gaming & geek culture", full:"Konnichiwa! I'm Chloe from Tokyo. Anime, gaming, cosplay—I'm your go-to person for all things geeky.", price:4, topics:["Anime","Gaming"], img:"https://i.pravatar.cc/400?img=48" },
      { id:14, name:"Olivia", age:30, loc:"San Francisco, USA", flag:"🇺🇸", desc:"Tech career & startup mentor", full:"Hi! I'm Olivia from SF. I work in tech and mentor young professionals. Let's talk career growth and entrepreneurship.", price:6, topics:["Career Growth","Tech"], img:"https://i.pravatar.cc/400?img=42" },
      { id:15, name:"Daniel", age:33, loc:"Singapore", flag:"🇸🇬", desc:"Finance & wealth building", full:"Hello! I'm Daniel from Singapore. I help young people understand money, investing, and building wealth early.", price:7, topics:["Investing","Financial Freedom"], img:"https://i.pravatar.cc/400?img=61" },
      { id:16, name:"Luna", age:25, loc:"Bali, Indonesia", flag:"🇮🇩", desc:"Yoga, meditation & mindfulness", full:"Hi! I'm Luna from Bali. I teach yoga and meditation, helping people find inner peace and balance.", price:5, topics:["Yoga","Inner Peace"], img:"https://i.pravatar.cc/400?img=49" },
      { id:17, name:"Hannah", age:27, loc:"Vancouver, Canada", flag:"🇨🇦", desc:"Mental health advocate", full:"Hello! I'm Hannah from Vancouver. I'm passionate about mental health awareness and emotional well-being.", price:5, topics:["Mental Health","Self-Care"], img:"https://i.pravatar.cc/400?img=46" },
    ];

    // --- STATE ---
    let activeProfile = null;
    let hasReplied = false;
    let currentLang = "EN";
    let activeConversations = [];
    let isRecording = false;
    let totalEarned = 0;

    // --- DOM ---
    const profileScroll = document.getElementById("profileScroll");
    const messagesArea = document.getElementById("messagesArea");
    const emptyState = document.getElementById("emptyState");
    const suggestedProfiles = document.getElementById("suggestedProfiles");
    const chatInput = document.getElementById("chatInput");
    const sendBtn = document.getElementById("sendBtn");
    const chAvatar = document.getElementById("chAvatar");
    const chName = document.getElementById("chName");
    const chStatus = document.getElementById("chStatus");
    const chTopics = document.getElementById("chTopics");
    const earnDisplay = document.getElementById("earnDisplay");
    const onlineCountEl = document.getElementById("onlineCount");
    const activePeopleCount = document.getElementById("activePeopleCount");
    const activePeopleBar = document.getElementById("activePeopleBar");
    const peopleAvatars = document.getElementById("peopleAvatars");
    const emojiPanel = document.getElementById("emojiPanel");
    const emojiList = document.getElementById("emojiList");
    const emojiCats = document.getElementById("emojiCats");
    const emojiBtn = document.getElementById("emojiBtn");
    const voiceBtn = document.getElementById("voiceBtn");
    const voiceWave = document.getElementById("voiceWave");
    const attachBtn = document.getElementById("attachBtn");
    const imageBtn = document.getElementById("imageBtn");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const conversationsDrawer = document.getElementById("conversationsDrawer");
    const sidebarBackdrop = document.getElementById("sidebarBackdrop");
    const drawerClose = document.getElementById("drawerClose");
    const drawerList = document.getElementById("drawerList");
    const translateBtn = document.getElementById("translateBtn");

    // --- EMOJI DATA ---
    const emojiData = {
      faces: ["😀","😃","😄","😁","😅","😂","🤣","😊","😇","🙂","😉","😍","🥰","😘","😋","😜","🤪","😎","🤩","🥳"],
      love: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","💔","💕","💞","💓","💗","💖","💘","💝","💟","♥️","😻","🌹"],
      gestures: ["👍","👎","👌","✌️","🤞","🤟","🤘","👋","✋","👆","👇","👉","👈","🙌","👏","🤝","🙏","💪","🫶","🤗"],
      fun: ["🔥","✨","🌟","💫","🎉","🎊","🎈","🎀","💯","✅","⭐","🚀","💡","🌈","🍀","🎵","🎶","📸","💎","👑"],
    };
    let currentEmojiCat = "faces";

    // --- LOAD FROM LOCALSTORAGE ---
    function loadConversations() {
      try {
        const saved = localStorage.getItem("Mulaearn _conversations");
        if (saved) {
          const parsed = JSON.parse(saved);
          activeConversations = parsed.map(c => {
            const profile = ALL_PROFILES.find(p => p.id === c.profileId);
            if (!profile) return null;
            return { profile, lastMessage: c.lastMessage, timestamp: new Date(c.timestamp), unread: c.unread || 0 };
          }).filter(c => c !== null);
        }
      } catch(e) { console.log("Error loading conversations:", e); }
    }

    function saveConversations() {
      try {
        const data = activeConversations.map(c => ({
          profileId: c.profile.id,
          lastMessage: c.lastMessage,
          timestamp: c.timestamp.toISOString(),
          unread: c.unread || 0
        }));
        localStorage.setItem("Mulaearn _conversations", JSON.stringify(data));
      } catch(e) { console.log("Error saving conversations:", e); }
    }

    // --- FUNCTIONS ---
    function renderProfiles() {
      profileScroll.innerHTML = ALL_PROFILES.map(p => {
        const conv = activeConversations.find(c => c.profile.id === p.id);
        return `
          <div class="profile-card ${activeProfile && activeProfile.id === p.id ? 'active' : ''}" data-id="${p.id}">
            <div class="avatar-wrapper">
              <img src="${p.img}" alt="${p.name}" loading="lazy">
              <span class="online-indicator"></span>
            </div>
            ${conv && conv.unread > 0 ? `<span class="unread-dot">${conv.unread}</span>` : ''}
            <div class="p-name">${p.name} ${p.flag}</div>
            <div class="p-topic">${p.topics[0]}</div>
          </div>`;
      }).join('');
      renderSuggestedProfiles();
      renderPeopleAvatars();
    }

    function renderPeopleAvatars() {
      const randomProfiles = ALL_PROFILES.sort(() => Math.random() - 0.5).slice(0, 4);
      peopleAvatars.innerHTML = randomProfiles.map(p => `<img src="${p.img}" alt="${p.name}" loading="lazy">`).join('');
    }

    function renderSuggestedProfiles() {
      const suggestions = ALL_PROFILES.sort(() => Math.random() - 0.5).slice(0, 3);
      suggestedProfiles.innerHTML = suggestions.map(p => `
        <div class="suggested-chip" data-id="${p.id}">
          <img src="${p.img}" alt="${p.name}">
          ${p.name} · ${p.topics[0]}
        </div>
      `).join('');
      suggestedProfiles.querySelectorAll('.suggested-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = parseInt(chip.dataset.id);
          const profile = ALL_PROFILES.find(p => p.id === id);
          if (profile) startChat(profile);
        });
      });
    }

    function renderEmojiPicker() {
      emojiCats.innerHTML = Object.keys(emojiData).map(cat =>
        `<span class="emoji-cat ${cat === currentEmojiCat ? 'active' : ''}" data-cat="${cat}">${cat === 'faces' ? '😊' : cat === 'love' ? '❤️' : cat === 'gestures' ? '👍' : '🔥'} ${cat}</span>`
      ).join('');
      emojiList.innerHTML = (emojiData[currentEmojiCat] || emojiData.faces).map(e => `<span>${e}</span>`).join('');
    }

    function formatTime(date) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function startChat(profile) {
      activeProfile = profile;
      hasReplied = false;
      messagesArea.innerHTML = '';
      emptyState.style.display = 'none';
      chAvatar.src = profile.img;
      chName.innerHTML = `${profile.name} ${profile.flag} <span style="font-size:0.65rem;color:var(--gray-500);">${profile.age}</span>`;
      chStatus.innerHTML = `<span class="live-dot" style="width:5px;height:5px;"></span> online · $${profile.price.toFixed(2)}/session`;
      chTopics.innerHTML = profile.topics.map(t => `<span class="topic-pill">${t}</span>`).join('');
      earnDisplay.textContent = '+$' + profile.price.toFixed(2);
      chatInput.disabled = false;
      sendBtn.disabled = false;
      chatInput.value = '';
      chatInput.focus();
      emojiPanel.classList.remove('open');
      if (isRecording) stopRecording();

      const existing = activeConversations.find(c => c.profile.id === profile.id);
      if (!existing) {
        activeConversations.unshift({ profile, lastMessage: profile.desc, timestamp: new Date(), unread: 0 });
      } else {
        existing.unread = 0;
      }
      renderProfiles();
      renderDrawerList();
      saveConversations();

      showTypingThenMessage(`Hey! I'm ${profile.name}. ${profile.desc} 💫`, 'received');
    }

    function addMessage(text, type) {
      const div = document.createElement('div');
      div.className = `msg-bubble ${type}`;
      const time = formatTime(new Date());
      const translationTag = type === 'received' ? '<span class="translation-tag"><i class="fas fa-language"></i> Translated</span>' : '';
      div.innerHTML = `
        <div class="bubble-content">${text}</div>
        <div class="msg-meta"><span>${time}</span>${translationTag}</div>
      `;
      messagesArea.appendChild(div);
      messagesArea.scrollTop = messagesArea.scrollHeight;
      if (activeProfile) {
        const conv = activeConversations.find(c => c.profile.id === activeProfile.id);
        if (conv) { conv.lastMessage = text; conv.timestamp = new Date(); }
        renderDrawerList();
        saveConversations();
      }
      return div;
    }

    function showTyping() {
      const dots = document.createElement('div');
      dots.className = 'typing-dots';
      dots.innerHTML = '<span></span><span></span><span></span>';
      messagesArea.appendChild(dots);
      messagesArea.scrollTop = messagesArea.scrollHeight;
      return dots;
    }

    function showTypingThenMessage(text, type) {
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        addMessage(text, type);
      }, 1500);
    }

    function showRegistrationModal() {
      const existing = document.querySelector('.modal-overlay');
      if (existing) existing.remove();
      const modal = document.createElement('div');
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-card">
          <div class="modal-icon">💎</div>
          <h3>You'll earn $${activeProfile ? activeProfile.price.toFixed(2) : '2.50'}!</h3>
          <p>Create your Mulaearn  account to keep chatting.</p>
          <div class="modal-features">
            <span class="modal-feature"><i class="fas fa-image"></i> Photos</span>
            <span class="modal-feature"><i class="fas fa-microphone"></i> Voice</span>
            <span class="modal-feature"><i class="fas fa-language"></i> Auto-Translate</span>
            <span class="modal-feature"><i class="fas fa-video"></i> Video Calls</span>
          </div>
          <button class="modal-btn">🚀 Create Account Now</button>
          <button class="modal-skip">Maybe later</button>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.modal-btn').onclick = () => {
        window.location.href = 'https://mulaearn.com/register.php?ref=zylar';
      };
      modal.querySelector('.modal-skip').onclick = () => { modal.remove(); };
      modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    }

    function handleSend() {
      if (!activeProfile || hasReplied) return;
      const text = chatInput.value.trim();
      if (!text) return;
      hasReplied = true;
      addMessage(text, 'sent');
      chatInput.value = '';
      chatInput.disabled = true;
      sendBtn.disabled = true;
      const typing = showTyping();
      setTimeout(() => {
        typing.remove();
        showRegistrationModal();
      }, 1800);
    }

    function showToast(msg) {
      const existing = document.querySelector('.toast-msg');
      if (existing) existing.remove();
      const toast = document.createElement('div');
      toast.className = 'toast-msg';
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    }

    function renderDrawerList() {
      if (activeConversations.length === 0) {
        drawerList.innerHTML = '<div style="text-align:center;color:var(--gray-500);padding:2rem;"><i class="fas fa-inbox" style="font-size:1.8rem;display:block;margin-bottom:0.4rem;"></i>No conversations yet</div>';
        return;
      }
      drawerList.innerHTML = activeConversations.map(conv => `
        <div class="drawer-item ${activeProfile && activeProfile.id === conv.profile.id ? 'active' : ''}" data-id="${conv.profile.id}">
          <img src="${conv.profile.img}" alt="${conv.profile.name}">
          <div class="drawer-item-info">
            <div class="di-name">${conv.profile.name} ${conv.profile.flag}</div>
            <div class="di-msg">${conv.lastMessage}</div>
          </div>
          <div class="drawer-item-time">${formatTime(conv.timestamp)}</div>
        </div>
      `).join('');
      drawerList.querySelectorAll('.drawer-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          const profile = ALL_PROFILES.find(p => p.id === id);
          if (profile) { startChat(profile); closeDrawer(); }
        });
      });
    }

    function openDrawer() {
      conversationsDrawer.classList.add('open');
      sidebarBackdrop.classList.add('open');
      renderDrawerList();
    }
    function closeDrawer() {
      conversationsDrawer.classList.remove('open');
      sidebarBackdrop.classList.remove('open');
    }

    function startRecording() {
      isRecording = true;
      voiceBtn.innerHTML = '<i class="fas fa-stop"></i>';
      voiceBtn.style.background = '#e11d48';
      voiceBtn.style.color = 'white';
      voiceWave.classList.add('active');
      chatInput.style.display = 'none';
    }

    function stopRecording() {
      if (!isRecording) return;
      isRecording = false;
      voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
      voiceBtn.style.background = '';
      voiceBtn.style.color = '';
      voiceWave.classList.remove('active');
      chatInput.style.display = '';
      if (activeProfile && !hasReplied) {
        addMessage('🎤 Voice message', 'sent');
        const typing = showTyping();
        setTimeout(() => {
          typing.remove();
          hasReplied = true;
          chatInput.disabled = true;
          sendBtn.disabled = true;
          showRegistrationModal();
        }, 2000);
      }
    }

    function updateActivePeople() {
      const count = 1209 + Math.floor(Math.random() * 100);
      if (activePeopleCount) activePeopleCount.textContent = count + '+';
      if (activePeopleBar) activePeopleBar.textContent = count + '+ more people';
    }

    // --- EVENT LISTENERS ---
    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });

    profileScroll.addEventListener('click', (e) => {
      const card = e.target.closest('.profile-card');
      if (!card) return;
      const id = parseInt(card.dataset.id);
      const profile = ALL_PROFILES.find(p => p.id === id);
      if (profile) startChat(profile);
    });

    emojiBtn.addEventListener('click', () => emojiPanel.classList.toggle('open'));
    emojiCats.addEventListener('click', (e) => {
      const cat = e.target.closest('.emoji-cat');
      if (!cat) return;
      currentEmojiCat = cat.dataset.cat;
      renderEmojiPicker();
    });
    emojiList.addEventListener('click', (e) => {
      if (e.target.tagName !== 'SPAN') return;
      chatInput.value += e.target.textContent;
      chatInput.focus();
      emojiPanel.classList.remove('open');
    });
    document.addEventListener('click', (e) => {
      if (!emojiPanel.contains(e.target) && e.target !== emojiBtn && !emojiBtn.contains(e.target)) {
        emojiPanel.classList.remove('open');
      }
    });

    voiceBtn.addEventListener('click', () => {
      if (voiceBtn.classList.contains('disabled')) {
        showToast('🔒 Voice messages unlocked after registration');
        return;
      }
      isRecording ? stopRecording() : startRecording();
    });

    [attachBtn, imageBtn].forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) showToast('🔒 File sharing unlocked after registration');
      });
    });

    sidebarToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    sidebarBackdrop.addEventListener('click', closeDrawer);

    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    document.addEventListener('touchend', (e) => {
      if (e.changedTouches[0].clientX - touchStartX > 70 && touchStartX < 25) openDrawer();
    });

    translateBtn.addEventListener('click', () => {
      const langs = ['EN','ES','FR','DE','PT','SW'];
      const idx = langs.indexOf(currentLang);
      currentLang = langs[(idx + 1) % langs.length];
      document.getElementById('langLabel').textContent = currentLang;
      const names = { EN:'English', ES:'Español', FR:'Français', DE:'Deutsch', PT:'Português', SW:'Kiswahili' };
      showToast(`🌐 Auto-translating to ${names[currentLang]}`);
    });

    function updateOnlineCount() {
      const base = 12000 + Math.floor(Math.random() * 800);
      if (onlineCountEl) onlineCountEl.textContent = base.toLocaleString();
    }
    setInterval(updateOnlineCount, 5000);
    setInterval(updateActivePeople, 8000);
    updateOnlineCount();
    updateActivePeople();

    setInterval(() => {
      profileScroll.innerHTML = ALL_PROFILES.sort(() => Math.random() - 0.5).map(p => {
        const conv = activeConversations.find(c => c.profile.id === p.id);
        return `
          <div class="profile-card ${activeProfile && activeProfile.id === p.id ? 'active' : ''}" data-id="${p.id}">
            <div class="avatar-wrapper">
              <img src="${p.img}" alt="${p.name}" loading="lazy">
              <span class="online-indicator"></span>
            </div>
            ${conv && conv.unread > 0 ? `<span class="unread-dot">${conv.unread}</span>` : ''}
            <div class="p-name">${p.name} ${p.flag}</div>
            <div class="p-topic">${p.topics[0]}</div>
          </div>`;
      }).join('');
      renderPeopleAvatars();
    }, 15000);

    // --- INIT ---
    loadConversations();
    renderProfiles();
    renderEmojiPicker();
    renderDrawerList();
    renderPeopleAvatars();
  })();