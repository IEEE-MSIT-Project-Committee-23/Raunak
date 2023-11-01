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
            <div className="flex justify-center">
              <button className="main-button inline-flex text-white bg-500 border-0 py-2 px-6 focus:outline-none hover:bg-600 rounded text-lg">Donate</button>
              <button className="ml-4 inline-flex text-white-700 bg-white-100 border-0 py-2 px-6 focus:outline-none hover:bg-white-200 rounded text-lg">Get Pass</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-6">
            <img className="object-cover object-center rounded-lg" alt="diya" src="https://c.ndtvimg.com/2021-10/jo0n1grg_home-decor-650_625x300_20_October_21.jpg"/>
          </div>
        </div>
      </section>
    )
};

export default About;