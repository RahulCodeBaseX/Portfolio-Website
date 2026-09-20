import Link from "next/link";



export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <Link href="https://github.com/RahulCodeBaseX" className="logo">
          R
        </Link>

        <div className="nav-links">
          <Link href="/">HOME</Link>
          <Link href="/work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="small-text">RAHUL JAGLAN</div>

        <h1>
          LET'S
          <br />
          WORK
          <br />
          TOGETHER
        </h1>

        <div className="hero-bottom">
          <p>
            B.TECH CSE STUDENT
            <br />
            LEARNING FULL STACK DEVELOPMENT
          </p>

          <Link href="/work" className="circle-button">
            ↓
          </Link>
        </div>
      </section>

      <section className="work">
        <div className="section-header">
          <h2>WORK</h2>

          <p>
            SELECTED PROJECTS
            <br />
            WEB DEVELOPMENT
            <br />
            FULL STACK DEVELOPMENT
          </p>
        </div>

        

        <Link href="/work" className="view-more">
          VIEW ALL WORK
        </Link>
      </section>

      <section className="statement">
        <h2>
          I BUILD
          <br />
          DIGITAL
          <br />
          EXPERIENCES.
        </h2>
      </section>

      <section className="home-about">
        <span>ABOUT ME</span>

        <h2>
          I'M RAHUL
          <br />
          JAGLAN.
        </h2>

        <p>
          I am a B.Tech Computer Science Engineering student learning Full
          Stack Development.
        </p>

        <Link href="/about" className="page-link">
          MORE ABOUT ME
        </Link>
      </section>

      <section className="contact">
        <p>HAVE A PROJECT?</p>

        <h2>LET'S TALK</h2>

        <Link href="/contact" className="page-link">
          CONTACT ME
        </Link>
      </section>
    </main>
  );
}