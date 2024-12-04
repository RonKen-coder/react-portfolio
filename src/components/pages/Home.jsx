export default function Home() {
  return (
    <div>
      <div className="home-img">
        <img src="css/Assets/image.jpg" alt="Profile Picture" />
      </div>

      <div className="home-content">
        <h3>Hello</h3>

        <h1>My Name Is <span>Ronalda Kennedy</span></h1>
        <h3 className="animation">I Am A Coding Developer Student <span></span></h3>
        <p> I am a Doctoral Candidate and I work in the sourcing field. I am also a coding developer
          student. I
          am passionate about learning new things and I am always looking for new opportunities to grow
          and
          develop my skills. I am a hardworking and dedicated individual who is always looking for ways to
          improve myself and my work. I am excited to see what the future holds and I am looking forward
          to
          new challenges and opportunities.</p>

        <div className="social-icons">
          <a href="#"><i className='bx bxl-linkedin-square'></i>Linkedin</a>
          <a href="#"><i className='bx bxl-facebook-square'></i>Facebook</a>
          <a href="#"><i className='bx bxl-Instagram-alt'></i>Instagram</a>
          <a href="#"><i className='bx bxl-twitter-alt'></i>Twitter</a>
        </div>

        <a href="#" className="btn">Let's Work Together</a>
      </div>
    </div>
  );
}
