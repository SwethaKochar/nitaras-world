import { ArrowRight, Camera, Compass, Crown, Heart, MapPin, Sparkles, Star } from "lucide-react";

const cards = [
  ["Adventures","Places I've been, things I've tried & little discoveries.","#FFD6E7","/holidays"],
  ["Things I Make","Drawings, crafts, baking and all my creations.","#D8F3DC","/gallery"],
  ["My Favorites","Books, movies, animals, games and things I love.","#FFF1B8","/favorites"],
  ["My Blog","Little stories, opinions and things I've learned.","#DDEBFF","/blog"]
];

export default function Home(){
 return <main>
  <nav className="nav"><div className="brand"><span className="brand-dot">N</span><span>Nitara's World</span></div>
   <div className="navlinks"><a href="#about">About</a><a href="#explore">Explore</a><a href="#journey">Journey</a><a href="#contact">Say Hi</a></div>
  </nav>

  <section className="hero">
    <div className="doodle star s1">✦</div><div className="doodle star s2">✧</div><div className="doodle cloud">☁</div>
    <div className="hero-copy">
      <div className="eyebrow"><Sparkles size={15}/> WELCOME TO MY LITTLE CORNER</div>
      <h1>Hi, I'm <em>Nitara!</em></h1>
      <p className="lead">A curious 7-year-old who loves discovering new things, making things with my hands, going on adventures and dreaming BIG.</p>
      <div className="hero-buttons"><a className="button primary" href="#explore">Come explore <ArrowRight size={18}/></a><a className="button ghost" href="#about">A little about me</a></div>
      <div className="dream"><span>🎩</span><div><small>MY BIG DREAM</small><strong>I want to become a magician when I grow up.</strong></div></div>
    </div>
    <div className="hero-art">
      <div className="photo-frame"><div className="photo-placeholder"><Camera size={34}/><span>Add Nitara's photo here</span></div><div className="tape"></div></div>
      <div className="sticker sticker1">✨ curious!</div><div className="sticker sticker2">♡</div>
    </div>
  </section>

  <section id="about" className="intro section">
    <div><span className="section-kicker">A LITTLE ABOUT ME</span><h2>I'm always up to <span>something!</span></h2></div>
    <p>I love trying new activities, going on holidays, collecting memories, creating things and telling stories about the things I find interesting. This website is my little scrapbook on the internet.</p>
  </section>

  <section id="explore" className="section">
    <div className="section-head"><div><span className="section-kicker">EXPLORE</span><h2>Come see what I've been up to</h2></div><span className="scribble">so many stories →</span></div>
    <div className="card-grid">{cards.map(([title,desc,bg,href])=><a className="big-card" style={{background:bg}} href={href} key={title}><div className="card-icon">{title==="Adventures"?"✈️":title==="Things I Make"?"🎨":title==="My Favorites"?"❤️":"📖"}</div><h3>{title}</h3><p>{desc}</p><span className="arrow">Explore <ArrowRight size={16}/></span></a>)}</div>
  </section>

  <section id="journey" className="timeline section">
    <div className="section-head"><div><span className="section-kicker">MY JOURNEY</span><h2>Little moments, big memories</h2></div></div>
    <div className="timeline-row">
      {[
        ["NOW","🌟","Trying new things","Learning, playing & discovering."],
        ["HOLIDAYS","✈️","New places","Photos, food & adventures."],
        ["CREATING","🎨","Making things","Crafts, drawings & experiments."],
        ["DREAM","🎩","Future magician","Practising my magic tricks."]
      ].map(([tag,icon,title,desc])=><div className="timeline-item" key={tag}><span className="timeline-tag">{tag}</span><div className="timeline-icon">{icon}</div><h3>{title}</h3><p>{desc}</p></div>)}
    </div>
  </section>

  <section className="gallery section">
    <div className="section-head"><div><span className="section-kicker">PHOTO WALL</span><h2>My favorite memories</h2></div><a className="text-link" href="/gallery">See all photos <ArrowRight size={16}/></a></div>
    <div className="photo-grid">
      <div className="photo big"><span>📸</span><b>Holiday memories</b></div><div className="photo pink"><span>🎨</span><b>Things I made</b></div><div className="photo yellow"><span>🌈</span><b>Fun days</b></div><div className="photo blue"><span>🦋</span><b>Little discoveries</b></div>
    </div>
  </section>

  <section className="quote section"><div className="quote-mark">“</div><blockquote>There are so many things I haven't tried yet — and that's the fun part!</blockquote><div className="stars">★ ★ ★</div></section>

  <footer id="contact"><div className="footer-main"><div><div className="brand"><span className="brand-dot">N</span><span>Nitara's World</span></div><p>A little scrapbook of my adventures, ideas and dreams.</p></div><div className="footer-links"><a href="/holidays">Holidays</a><a href="/gallery">Gallery</a><a href="/favorites">Favorites</a><a href="/blog">Blog</a></div></div><div className="footer-bottom">Made with lots of ✨ and a little bit of magic.</div></footer>
 </main>
}