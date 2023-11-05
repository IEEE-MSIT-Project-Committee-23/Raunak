const Footer = () => {
  return (
    <div className="w-full bg-black/50 text-center px-12 flex justify-around flex-col items-center md:flex-row" id="contact">
      <img className="w-56 my-8" src="./RaunakLogo.png" />
      <div className=" my-8">
        <p className="text-4xl font-semibold">Organizers</p>
        <hr className="h-0.5 bg-white my-2"/>
        <p className="text-2xl text-gray-300"><span className="font-medium">Bread:</span> 2134768978</p>
        <p className="text-2xl text-gray-300"><span className="font-medium">Coffee:</span> 2134768978</p>
        <p className="text-2xl text-gray-300"><span className="font-medium">Sugar:</span> 2134768978</p>
      </div>
      <div className="md:text-right my-8">
        <p className="my-6 text-2xl font-semibold">Made with 💖 by the IEEE Team</p>
        <div className="flex justify-center md:justify-end">
          <img className="w-10 mx-2" src="./FooterAssets/Facebook.svg" />
          <img className="w-10 mx-2" src="./FooterAssets/Instagram.svg" />
          <img className="w-11 mx-1" src="./FooterAssets/Linkedin.svg" />
        </div>
        <p className="my-6">&copy; Copyright. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer