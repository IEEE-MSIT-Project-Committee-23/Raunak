const About = () =>{
    return (
        <section className="text-white-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white-900"> RAUNAK'23 - Towards a brighter Diwali
            </h1>
            <h2 className="text-xl mb-8 leading-relaxed"> Raunak is a special fundraising event, held close to the festival of happiness and lights - Diwali, To brighten up
                a few faces on this prosperous occasion.
                We are delighted to take up this noble cause by showing compassion to those less fortunate and bringing a heartwarming smile
                as beautiful as the beautifully lit lights of Diwali</h2>
            <div className="flex items-end">
              <button className="main-button  text-white bg-500 border-0 py-2 px-6 focus:outline-none hover:bg-600 rounded text-lg font-bold">Donate</button>
              <button className="main-button ml-4 text-white-700 bg-white-100 border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg font-bold">Get Pass</button>
            </div>
          </div>
          <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-6">
            <img className="main-image object-cover object-center rounded-lg" alt="diya" src="/about2.png"/>
          </div>
        </div>
        
  <section id = "about">    
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="about flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            
            <h2 className="text-900 text-lg title-font font-medium">What is Raunak?</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Raunak is a special fundraising event, held annually close to this festival of happiness and lights - Diwali, to brighten up a few faces for this prosperous occasion</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="about flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-900 text-lg title-font font-medium">What does it do?</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">A charity Fundraiser by Octave Music Society of MSIT in Collaboration with IEEE MSIT, NSS MSI and Prakriti MSIT to raise contributions and help out the disadvantaged and less fortunate citizen celebrate a prosperous, memorable Diwali.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="about flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            
            <h2 className="text-900 text-lg title-font font-medium">Why do we do this?</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Being compassionate to people who are less privileged, we feel pleased to take up this noble cause to bring heartwarming smiles just as beautiful as lights of Diwali that are Lit up.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  </section>  
  </section>
    )
};

export default About;