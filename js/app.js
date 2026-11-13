(() => {
 const C=window.EVERGLOW_CONFIG, page=document.body.dataset.page||'home', root=document.getElementById('app');
 const titles={features:['Server Features','Fitur yang membangun pengalaman survival EverGlow.'],guide:['Player Guide','Panduan dasar untuk memulai petualanganmu.'],claims:['Claim Lands','Lindungi area bangunan dan atur akses teman dengan aman.'],economy:['Economy & Market','Perdagangan pemain dan ekonomi komunitas.'],warps:['Warp & Teleport','Navigasi antar lokasi dan dunia.'],gacha:['Gacha & Rarity','Kenali tingkatan rarity hadiah.'],rewards:['Daily Rewards','Reward harian, playtime, dan vote.'],ranks:['Rank & Kits','Jelajahi sistem progression EverGlow.'],rules:['Server Rules','Bermain adil, aman, dan saling menghormati.'],leaderboard:['Leaderboard','Peringkat berdasarkan data server yang tersinkron.'],players:['Player Profiles','Cari profil pemain EverGlow berdasarkan username atau UUID.'],status:['Server Status','Pantau status koneksi dan kapasitas server.'],community:['Community','Terhubung dengan komunitas EverGlow.'],donation:['Support EverGlow','Dukungan komunitas membantu keberlangsungan server.']};
 const nav=[['Home','index.html','home'],['Features','pages/features.html','features'],['Guide','pages/guide.html','guide'],['Claim','pages/claims.html','claims'],['Economy','pages/economy.html','economy'],['Ranks','pages/ranks.html','ranks'],['Leaderboard','pages/leaderboard.html','leaderboard'],['Status','pages/status.html','status'],['Community','pages/community.html','community']];
 const isHome=page==='home'; const base=isHome?'':'../';
 function shell(content){root.innerHTML=`<header class="topbar"><div class="shell nav"><a class="brand" href="${base}index.html"><img src="${base}assets/everglow-logo.png" onerror="this.style.display='none'" alt=""><span class="brand-mark">EG</span><span>EVERGLOW <span style="color:var(--gold)">SMP</span></span></a><nav class="navlinks" id="navlinks">${nav.map(n=>`<a class="${page===n[2]?'active':''}" href="${base+n[1]}">${n[0]}</a>`).join('')}</nav><div class="nav-actions"><a class="btn primary small saweria" href="${C.saweria}" target="_blank" rel="noopener">✦ Support Server</a><button class="menu-toggle" id="menuToggle" aria-label="Buka menu">☰</button></div></div></header>${content}<footer class="footer"><div class="shell footer-grid"><div><b>EVERGLOW SMP</b><p class="muted">One World, One Community, One EverGlow.</p><small class="muted">© ${new Date().getFullYear()} EverGlow SMP</small></div><div class="footer-links"><a href="${C.discord}" target="_blank" rel="noopener">Discord</a><a href="${C.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a href="${C.vote}" target="_blank" rel="noopener">Vote Server</a><a href="${C.saweria}" target="_blank" rel="noopener">Saweria</a></div></div></footer>`;
 document.getElementById('menuToggle')?.addEventListener('click',()=>document.getElementById('navlinks').classList.toggle('open'));
 document.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{let old=b.textContent;try{await navigator.clipboard.writeText(b.dataset.copy);b.textContent='Copied!'}catch{b.textContent='Copy gagal'}setTimeout(()=>b.textContent=old,1400)}));
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x)); }
 const featureCards=[['⚔','Survival SMP','Bangun, jelajah, dan berkembang bersama komunitas.'],['⛏','Area Mining','Temukan area mining untuk mengumpulkan resource.'],['✧','Gacha & Exclusive Rewards','Sistem gacha dengan rarity dan hadiah eksklusif.'],['♛','Rank & Progression','Tujuh tier rank untuk perjalanan pemain.'],['☾','AFK Zone','Area khusus AFK sesuai aturan server.'],['⚡','PvP Arena','Uji kemampuan bertarung di arena PvP.'],['⇄','Java & Bedrock','Crossplay untuk pemain Java dan Bedrock.']];
 function cards(items){return `<div class="grid">${items.map(x=>`<article class="card reveal"><div class="iconbox">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div>`}
 function home(){return `<main><section class="shell hero"><div class="reveal"><div class="eyebrow">ONE WORLD · ONE COMMUNITY</div><h1>Welcome to <span>EverGlow</span> SMP.</h1><p class="lead">Satu dunia, satu komunitas, dan petualangan tanpa batas. Bergabunglah dalam survival lintas platform Java & Bedrock.</p><div class="hero-actions"><a class="btn primary" href="${C.discord}" target="_blank" rel="noopener">Join Discord ↗</a><a class="btn" href="pages/guide.html">Player Guide</a><a class="btn" href="${C.saweria}" target="_blank" rel="noopener">✦ Saweria</a></div><div class="tag">JAVA + BEDROCK CROSSPLAY</div></div><aside class="server-card reveal"><div class="castle">♜</div><h3>Join the world</h3><p class="muted">Java Edition</p><div class="ip-row"><code>${C.javaIp}</code><button class="btn small" data-copy="${C.javaIp}">Copy</button></div><p class="muted" style="margin-top:14px">Bedrock Edition · Port ${C.bedrockPort}</p><div class="ip-row"><code>${C.bedrockIp}</code><button class="btn small" data-copy="${C.bedrockIp}">Copy</button></div></aside></section><section class="section shell"><div class="section-head"><div><div class="eyebrow">DISCOVER EVERGLOW</div><h2>Built for your adventure</h2></div><a class="btn small" href="pages/features.html">All features →</a></div>${cards(featureCards.slice(0,6))}</section><section class="section shell"><div class="section-head"><div><div class="eyebrow">LIVE CONNECTION</div><h2>Server status</h2></div><a class="btn small" href="pages/status.html">View details →</a></div><div class="card" id="homeStatus"><div class="loading">Menunggu API aktif</div></div></section></main>`}
 function pageContent(){if(page==='home')return home();let [title,desc]=titles[page]||['EverGlow SMP',''];let body='';
 switch(page){case'features':body=cards(featureCards);break;
 case'guide':body=`<div class="content-grid"><article class="card"><h3>1. Join server</h3><p>Java: <b>evglow.my.id</b>. Bedrock: <b>eglow.mcindo.my.id:23379</b>, port <b>23379</b>.</p></article><article class="card"><h3>2. Teleport</h3><p><code>/rtp</code> hanya di Lobby untuk membuka GUI pemilihan dunia. <code>/egrtp</code> random teleport langsung di world, world_nether, dan world_the_end.</p></article><article class="card"><h3>3. Warp</h3><p><code>/warps</code> membuka GUI navigasi warp.</p></article><article class="card"><h3>4. Rewards</h3><p><code>/pta</code>, <code>/dailyreward</code>, dan <code>/votereward</code> sesuai ketentuan server.</p></article></div>`;break;
 case'claims':body=`<div class="notice">Plugin claim yang digunakan belum dikonfirmasi. Perintah dan mekanisme di bawah adalah panduan umum; sesuaikan dengan plugin serta konfigurasi aktual server.</div><div class="content-grid" style="margin-top:18px"><article class="card"><h3>Membuat claim</h3><p>Jika plugin mendukung golden shovel, gunakan shovel sesuai instruksi plugin untuk memilih dua sudut area. Periksa pesan konfirmasi dan batas claim.</p></article><article class="card"><h3>Trust pemain</h3><p>Gunakan perintah trust resmi dari plugin claim untuk memberi akses. Pastikan nama pemain benar sebelum memberikan izin.</p></article><article class="card"><h3>Untrust & akses</h3><p>Cabut akses pemain melalui perintah untrust plugin. Periksa daftar trusted players secara berkala.</p></article><article class="card"><h3>Kelola wilayah</h3><p>Jangan claim area publik atau wilayah pemain lain. Hubungi staff jika terjadi sengketa atau kesalahan claim.</p></article></div>`;break;
 case'economy':body=cards([['▣','Auction House','/ah — marketplace antar pemain.'],['🛒','Shop','/shop — akses toko server.'],['⇧','Sell GUI','/sellgui — jual item melalui GUI.'],['▦','QuickShop','Sistem toko pemain menggunakan QuickShop.']]);break;
 case'warps':body=cards([['⌖','Lobby','/rtp hanya digunakan di Lobby untuk membuka GUI pemilihan dunia.'],['✦','Random teleport','/egrtp melakukan random teleport langsung di world, world_nether, dan world_the_end.'],['⇢','Warp menu','/warps membuka GUI navigasi warp.']]);break;
 case'gacha':body=`<div class="content-grid">${[['Common','#65d67a'],['Rare','#477dd7'],['Epic','#bd91ed'],['Mythic','#111820']].map(x=>`<article class="card"><span class="tag" style="color:${x[1]};border-color:${x[1]}">${x[0]}</span><h3 style="margin-top:14px">${x[0]} Rarity</h3><p>Hadiah dan peluang mengikuti konfigurasi gacha server terbaru.</p></article>`).join('')}</div>`;break;
 case'rewards':body=cards([['◷','Playtime Reward','/pta — reward berdasarkan waktu bermain.'],['☀','Daily Reward','/dailyreward — hadiah harian.'],['☆','Vote Reward','/votereward — hadiah vote sesuai ketentuan server.']]);break;
 
case'ranks':body=`
<div class="notice">
  ✦ Pilih rank terbaik untuk meningkatkan pengalaman bermainmu di EverGlow SMP. Setiap rank mendapatkan seluruh fitur dari rank sebelumnya.
</div>

<div class="section-head" style="margin-top:28px">
  <div>
    <div class="eyebrow">RANK PROGRESSION</div>
    <h2>Premium Rank Collection</h2>
  </div>
</div>

<div class="grid">
${[
{
name:'KNIGHT',price:'Rp 15.000',tier:1,
features:['/hat','/near','Kit Knight']
},
{
name:'LORD',price:'Rp 30.000',tier:2,
features:['/feed','Kit Lord']
},
{
name:'GUARD',price:'Rp 50.000',tier:3,
features:['/ptime','/pweather','/fly','/heal','Kit Guard']
},
{
name:'HIGH KING',price:'Rp 75.000',tier:4,
features:['/repair','/condense','Kit HighKing']
},
{
name:'EMPEROR',price:'Rp 100.000',tier:5,
features:['/repair all','/ext','Kit Emperor']
},
{
name:'ETERNAL',price:'Rp 150.000',tier:6,
features:['/nick','/invsee','Kit Eternal']
}
].map(r=>`
<article class="card reveal">
  <span class="tag">RANK TIER ${r.tier}</span>
  <h3 style="margin-top:14px">${r.name}</h3>
  <h2 style="color:var(--gold);margin:12px 0">${r.price}</h2>
  <div class="muted">Rank Benefits</div>
  <ul style="padding-left:20px;line-height:2;margin-top:10px">
    ${r.features.map(f=>`<li>${escapeHtml(f)}</li>`).join('')}
  </ul>
  <div class="notice" style="margin-top:14px">
    ✓ Termasuk seluruh fitur rank sebelumnya.
  </div>
  <a class="btn primary" style="margin-top:15px;width:100%;text-align:center"
  href="${C.discord}" target="_blank" rel="noopener">
  Purchase Rank ↗
  </a>
</article>
`).join('')}
</div>

<section class="section">
  <div class="section-head">
    <div>
      <div class="eyebrow">EXCLUSIVE CUSTOMIZATION</div>
      <h2>Custom Tag</h2>
    </div>
  </div>
  <article class="card">
    <div class="iconbox">✧</div>
    <h3>Personal Custom Tag</h3>
    <h2 style="color:var(--gold)">Rp 5.500 – Rp 10.000</h2>
    <p>Miliki tag khusus dengan desain sesuai keinginanmu.</p>
    <p class="muted">
      Harga menyesuaikan tingkat kesulitan dan proses pembuatan tag.
    </p>
    <a class="btn primary" style="margin-top:15px"
    href="${C.discord}" target="_blank" rel="noopener">
    Order Custom Tag ↗
    </a>
  </article>
</section>

<section class="section">
  <div class="eyebrow">RANK UPGRADE SYSTEM</div>
  <h2>Upgrade Your Rank</h2>
  <article class="card">
    <p>Ingin meningkatkan rank tanpa membeli dari awal? Kamu dapat melakukan upgrade dengan membayar selisih harga rank ditambah biaya administrasi Rp 5.000.</p>
    <div class="notice" style="margin:18px 0">
      <b>Rumus Upgrade:</b><br>
      Harga Rank Tujuan − Harga Rank Saat Ini + Rp 5.000
    </div>
    <h3>Contoh Upgrade</h3>
    <p>KNIGHT → LORD</p>
    <div style="line-height:2">
      Harga LORD: <b>Rp 30.000</b><br>
      Harga KNIGHT: <b>Rp 15.000</b><br>
      Selisih harga: <b>Rp 15.000</b><br>
      Biaya admin: <b>Rp 5.000</b>
    </div>
    <div class="notice" style="margin-top:16px">
      Total biaya upgrade: <h2 style="color:var(--gold)">Rp 20.000</h2>
    </div>
  </article>
  <article class="card" style="margin-top:16px">
    <h3>Catatan Penting</h3>
    <ul style="padding-left:20px;line-height:2">
      <li>SetHome akan bertambah +1 ketika melakukan upgrade rank.</li>
      <li>Seluruh fitur rank sebelumnya tetap berlaku.</li>
      <li>Biaya administrasi upgrade adalah Rp 5.000.</li>
      <li>Pastikan konfirmasi rank dan pembayaran kepada staff sebelum transaksi.</li>
    </ul>
  </article>
</section>

<section class="section">
  <div class="card">
    <div class="eyebrow">READY TO UPGRADE?</div>
    <h2>Become Part of EverGlow.</h2>
    <p class="muted">Hubungi tim EverGlow melalui Discord untuk membeli rank atau memesan custom tag.</p>
    <a class="btn primary" href="${C.discord}" target="_blank" rel="noopener">
      Contact EverGlow Staff ↗
    </a>
  </div>
</section>
`;break;

 case'rules':body=cards([['🤝','Respect','Hormati semua pemain dan staff. Dilarang melakukan harassment atau diskriminasi.'],['⚖','Fair Play','Dilarang cheat, exploit, atau menyalahgunakan bug.'],['🏡','Claim Respect','Jangan grief, mencuri, atau mengganggu wilayah pemain lain.'],['💬','Community','Hindari spam, scam, dan promosi tanpa izin.'],['🛡','Staff Decision','Ikuti arahan staff dan gunakan kanal laporan jika ada masalah.'],['📜','Stay Updated','Peraturan dapat diperbarui; ikuti pengumuman resmi.']]);break;
 case'leaderboard':body=`<div class="content-grid"><article class="card"><h3>Top Balance</h3><div id="lb-balance" class="loading">Menunggu API aktif</div></article><article class="card"><h3>Top Playtime</h3><div id="lb-playtime" class="loading">Menunggu API aktif</div></article><article class="card"><h3>Top Mining</h3><div id="lb-mining" class="loading">Menunggu API aktif</div></article></div>`;break;
 case'players':body=`<div class="card"><form id="playerSearch"><label for="playerQuery">Username atau UUID</label><div class="ip-row"><input id="playerQuery" required placeholder="Masukkan username / UUID" style="flex:1;min-width:0;background:none;border:0;color:white;outline:0"><button class="btn primary small">Cari</button></div></form><div id="playerResult" class="empty">Masukkan identitas pemain untuk mencari profil.</div></div>`;break;
 case'status':body=`<div id="serverStatus" class="card"><div class="loading">Menunggu API aktif</div></div>`;break;
 case'community':body=cards([['◉','Discord','Diskusi, pengumuman, dan bantuan komunitas.'],['☏','WhatsApp','Terhubung dengan grup komunitas EverGlow.'],['☆','Vote','Dukung server melalui vote resmi.']])+`<div class="hero-actions"><a class="btn primary" href="${C.discord}" target="_blank" rel="noopener">Discord ↗</a><a class="btn" href="${C.whatsapp}" target="_blank" rel="noopener">WhatsApp ↗</a><a class="btn" href="${C.vote}" target="_blank" rel="noopener">Vote ↗</a></div>`;break;
 case'donation':body=`<div class="card"><div class="eyebrow">SUPPORT THE COMMUNITY</div><h2>Keep EverGlow glowing.</h2><p class="muted">Dukungan bersifat sukarela. Pastikan membaca informasi dan ketentuan donasi resmi.</p><a class="btn primary" style="margin-top:15px" href="${C.saweria}" target="_blank" rel="noopener">✦ Donate via Saweria</a></div>`;break;
 }
 return `<main class="shell"><header class="page-head"><div class="eyebrow">EVERGLOW SMP / ${page.toUpperCase()}</div><h1>${title}</h1><p>${desc}</p></header><section class="section" style="padding-top:12px">${body}</section></main>`;
 }
 shell(pageContent());
 const api=(path)=>fetch(`${C.apiBase}${path}`,{headers:{'Accept':'application/json'}}).then(async r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json()});
 const fmt=n=>Number(n||0).toLocaleString('id-ID');
 function renderStatus(el,d){if(d.available===false||!d.updated_at){el.innerHTML='<div class="empty">Menunggu API aktif</div>';return;}el.innerHTML=`<div class="section-head"><div><span class="status-dot ${d.online?'online':''}"></span><b>${d.online?'ONLINE':'OFFLINE'}</b></div><span class="muted">Update: ${d.updated_at?new Date(d.updated_at).toLocaleString('id-ID'):'—'}</span></div><div class="grid"><div><div class="muted">Players</div><h2>${fmt(d.players_online)} / ${fmt(d.max_players)}</h2></div><div><div class="muted">TPS</div><h2>${d.tps==null?'—':Number(d.tps).toFixed(2)}</h2></div><div><div class="muted">MOTD</div><p>${escapeHtml(d.motd||'—')}</p></div></div>`}
 function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 if(page==='home'||page==='status'){let el=document.getElementById(page==='home'?'homeStatus':'serverStatus');api('/server/status').then(d=>renderStatus(el,d)).catch(()=>el.innerHTML='<div class="empty">Menunggu API aktif</div>')}
 if(page==='leaderboard'){[['balance','balance'],['playtime','playtime'],['mining','mining']].forEach(([key,path])=>api(`/leaderboard/${path}`).then(d=>{let rows=d.data||[];document.getElementById(`lb-${key}`).innerHTML=rows.length?`<div class="table-wrap"><table><thead><tr><th>#</th><th>Player</th><th>${key}</th></tr></thead><tbody>${rows.map((p,i)=>`<tr><td>${i+1}</td><td><a href="../pages/players.html?uuid=${encodeURIComponent(p.uuid)}">${escapeHtml(p.username)}</a></td><td>${fmt(p.value)}</td></tr>`).join('')}</tbody></table></div>`:'<div class="empty">Belum ada data.</div>'}).catch(()=>document.getElementById(`lb-${key}`).innerHTML='<div class="empty">Menunggu API aktif</div>'))}
 if(page==='players'){const out=document.getElementById('playerResult');async function lookup(q){out.innerHTML='<div class="loading">Memuat profil…</div>';try{let d=await api(`/players/${encodeURIComponent(q)}`),p=d.player||d;out.innerHTML=`<div class="content-grid" style="margin-top:20px"><div><span class="muted">Username</span><h2>${escapeHtml(p.username)}</h2></div><div><span class="muted">Rank</span><h3>${escapeHtml(p.rank||'—')}</h3></div>${[['UUID',p.uuid],['Balance',fmt(p.balance)],['Playtime',fmt(p.playtime)],['Kills',fmt(p.kills)],['Deaths',fmt(p.deaths)],['Blocks mined',fmt(p.blocks_mined)],['First join',p.first_join?new Date(p.first_join).toLocaleString('id-ID'):'—'],['Last seen',p.last_seen?new Date(p.last_seen).toLocaleString('id-ID'):'—']].map(x=>`<div><span class="muted">${x[0]}</span><div>${escapeHtml(x[1])}</div></div>`).join('')}</div>`}catch{out.innerHTML='<div class="error">Profil tidak ditemukan atau API belum aktif.</div>'}}document.getElementById('playerSearch').addEventListener('submit',e=>{e.preventDefault();lookup(document.getElementById('playerQuery').value.trim())});let q=new URLSearchParams(location.search).get('uuid');if(q)lookup(q)}
})();
