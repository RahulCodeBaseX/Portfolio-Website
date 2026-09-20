import Link from "next/link";

export default function About() {
  return (
    <main>
      <nav className="navbar">
        <Link href="https://github.com/RahulCodeBaseX" className="logo1">
          R
        </Link>

        <div className="nav-links1">
          <Link href="/">HOME</Link>
          <Link href="/work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </nav>

      <section className="about-page">
        <p className="small-text">ABOUT ME</p>

        <h1>
          RAHUL
          <br />
          JAGLAN
        </h1>

        <div className="about-content">
          <h2>
            B.TECH
            <br />
            CSE
            <br />
            STUDENT
          </h2>

          <p>
            My name is Rahul Jaglan.
            <br />
            <br />
            I am a B.Tech Computer Science Engineering student and I am
            currently learning Full Stack Development.
            <br />
            <br />
            I enjoy creating modern, responsive and interactive websites and
            learning new technologies.
          </p>
        </div>

        <div className="skills">
          <h2>WHAT I AM LEARNING</h2>

          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
            <span>REACT</span>
            <span>NEXT.JS</span>
            <span>NODE.JS</span>
            <span>GIT</span>
            <span>GITHUB</span>
          </div>
        </div>
      </section>
    </main>
  );
}