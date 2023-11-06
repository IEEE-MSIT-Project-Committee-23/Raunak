const Footer = () => {
  return (
    <div className="w-full bg-black/50 text-center px-12 flex justify-around flex-col items-center md:flex-row" id="contact">
      <img className="w-56 my-8" src="./RaunakLogo.png" />
      <div className=" my-8">
        <p className="text-4xl font-semibold">For more info, Contact:</p>
        <hr className="h-0.5 bg-white my-2"/>
        <p className="text-2xl text-gray-300"><span className="font-medium">Shubham Sharma: 8448342840</span></p>
      </div>
      <div className="md:text-right my-8">
        <p className="my-6 text-2xl font-semibold">Made with 💖 by the IEEE MSIT</p>
        <div className="flex justify-center md:justify-end">
          <a href="https://www.instagram.com/reel/CzETCjkCRl7/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="><img className="w-10 mx-2" src="./FooterAssets/Instagram.svg" /></a>
          <a href="https://www.linkedin.com/posts/octave-music-society_raunak-raunak22-comingsoon-activity-7124371634915790848-FZ0w?utm_source=share&utm_medium=member_desktop"><img className="w-11 mx-1" src="./FooterAssets/Linkedin.svg" /></a>
        </div>
        <p className="my-6">&copy; Copyright. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
