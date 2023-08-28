export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Jay R</p>
          <h1 className="hero--section--title">
            <span className="hero--section--color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero--section--description">
            A full stack developer is a versatile professional with expertise in
            both front-end and back-end web development. They are skilled in
            creating and managing databases, server-side logic, and user
            interfaces, allowing them to build complete web applications
            independently. Full stack developers are proficient in various
            programming languages, frameworks, and technologies, enabling them
            to tackle all aspects of a project's development lifecycle.
          </p>
        </div>
        <button className="btn btn-primary" to="ContactMe">
          Get in Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/HeroPic.png" />
      </div>
    </section>
  );
}
