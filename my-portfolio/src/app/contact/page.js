import Link from "next/link";

export default function Contact() {
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

      <section className="contact-page">
        <p className="small-text">HAVE A PROJECT OR WANT TO CONNECT?</p>

        <h1>
          LET'S
          <br />
          TALK
        </h1>

        <a className="email" href="mailto:rahuljaglanxxxx@gmail.com">
          rahuljaglanxxxx@gmail.com
        </a>

        <div className="socials">
          <a
            href="https://github.com/RahulCodeBaseX"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
        </div>
      </section>
    </main>
  );
}