const Partners = () =>{
  return(
      <section id = "partners">
      <div className="py-6 sm:py-8 lg:py-12">
      <div className="mb-10 md:mb-16">
    <h2 className="mb-4 text-center text-2xl font-bold text-white-800 md:mb-6 lg:text-3xl">Organizer</h2>
  </div>
  <div className="flex flex-col items-center rounded-lg  bg-100 p-4 lg:p-8">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <img src="./octave.jpg" loading="lazy" alt="IEEE MSIT" className="h-full w-full object-cover object-center" />
      </div>
      <div className=" text-center font-bold text-500 md:text-lg">Octave MSIT</div>
    </div>
<div className="mx-auto max-w-screen-xl px-4 md:px-8">
 
  <div className="mb-10 md:mb-16">
    <h2 className="mb-4 text-center text-2xl font-bold text-white-800 md:mb-6 lg:text-3xl">Main Collaborators</h2>
  </div>
  <div className="grid grid-cols-3 gap-4 md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
   
    <a href ="http://ieee.msit.in" target="__blank">
    <div className="society flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/61559c2609956_unnamed.png" loading="lazy" alt="IEEE MSIT" className="h-full w-full object-cover object-center" />
      </div>

      <div className="society-name text-center font-bold text-500 md:text-lg">IEEE MSIT</div>
    </div>
    </a>
   
    <div className="society flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <img src="./nssmsi.png" loading="lazy" alt="NSS MSIT" className="h-full w-full object-cover object-center" />
      </div>

      <div>
        <div className="society-name text-center font-bold text-500 md:text-lg">NSS MSIT</div>
      
      </div>
    </div>
  
    <div className="society flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
      <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
        <img src="./Prakriti.jpg" loading="lazy" alt="Prakriti MSIT" className="h-full w-full object-cover object-center" />
      </div>
        <div className="society-name text-center font-bold text-500 md:text-lg">Prakriti MSIT</div>
    </div>
  </div>
</div>
</div>
  </section>
  );
};

export default Partners;