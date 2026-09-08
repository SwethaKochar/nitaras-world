import Link from "next/link";

const cards=[
 ["✈️","My Holidays","Places I've visited and memories I've made.","/holidays","peach"],
 ["📸","Photo Gallery","My favourite moments, all in one place.","/gallery","pink"],
 ["❤️","My Favorites","Books, things and everything I love.","/favorites","yellow"],
 ["✍️","My Blog","My thoughts, stories and little discoveries.","/blog","blue"]
];

export default function Home(){return <main>
<nav><Link className="logo" href="/"><span>N</span>Nitara&apos;s World</Link><div className="navlinks"><Link href="/holidays">Holidays</Link><Link href="/gallery">Gallery</Link><Link href="/favorites">Favorites</Link><Link href="/blog">Blog</Link></div></nav>
<section className="hero"><div><div className="eyebrow">✦ WELCOME TO MY LITTLE CORNER OF THE INTERNET</div><h1>Hi, I&apos;m <i>Nitara!</i></h1><p className="lead">Welcome to my world of adventures, favourite things, holidays, memories and BIG dreams.</p><div className="buttons"><a className="button dark" href="#explore">Explore my world →</a><a className="button light" href="#dream">My big dream</a></div></div><div className="polaroid"><div className="placeholder">📸<small>Nitara&apos;s photo goes here</small></div><b>✨ Hello from my world!</b></div></section>
<section id="dream" className="dream"><div className="hat">🎩✨</div><div><div className="eyebrow">MY BIG DREAM</div><h2>I want to become a <i>magician</i> when I grow up.</h2><p>Maybe one day I&apos;ll amaze everyone with incredible magic tricks!</p></div></section>
<section id="explore" className="section"><div className="eyebrow">COME EXPLORE</div><h2>There&apos;s always something happening in my world!</h2><div className="cards">{cards.map(c=><Link className={`card ${c[4]}`} href={c[3]} key={c[1]}><div className="emoji">{c[0]}</div><h3>{c[1]}</h3><p>{c[2]}</p><b>Explore →</b></Link>)}</div></section>
<section className="timeline"><div className="eyebrow">MY JOURNEY</div><h2>Little moments. Big memories.</h2><div className="milestones"><div>🌟<h3>Trying new things</h3><p>There&apos;s always something new to discover.</p></div><div>✈️<h3>Going places</h3><p>Collecting stories from every adventure.</p></div><div>🎨<h3>Creating</h3><p>Making things with imagination and fun.</p></div><div>🎩<h3>Dreaming big</h3><p>One day: a magician!</p></div></div></section>
<section className="section"><div className="eyebrow">MY PHOTO WALL</div><h2>Favourite memories</h2><div className="photos"><div>📸<b>Holiday memories</b></div><div>🎨<b>Things I made</b></div><div>🌈<b>Fun days</b></div><div>🦋<b>Little discoveries</b></div></div></section>
<section className="quote">“<blockquote>There are so many things I haven&apos;t tried yet — and that&apos;s the fun part!</blockquote><small>★ ★ ★</small></section>
<footer><Link className="logo" href="/"><span>N</span>Nitara&apos;s World</Link><p>A little scrapbook of adventures, ideas and dreams.</p></footer>
</main>}