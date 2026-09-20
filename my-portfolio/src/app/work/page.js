import Link from "next/link";

const projects = [
  {
    title: "GHOST OF TSUSHIMA",
    category: "HTML / CSS / JAVASCRIPT",
    image: "/projects/jin.jpg",
    link: "https://github.com/RahulCodeBaseX/Ghost-of-Tsushima--Samurai-wiki",
  },
  {
    title: "BUDDY AI",
    category: "PYTHON",
    image: "/projects/ai.jpg",
    link: "https://github.com/RahulCodeBaseX/BUDDY-AI-",
  },
];

export default function Work() {
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

      <section className="work-page">
        <p className="small-text">SELECTED PROJECTS</p>

        <h1>
          MY
          <br />
          WORK
        </h1>

        <div className="projects">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project"
              key={project.title}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}