import React from 'react';
//import images
import BrianDean from '../../assets/Brian_Dean_long.jpg';
import Serpentza from '../../assets/Serpentaz_long.jpg';
import Crumb from '../../assets/Crumb_long.jpg';
import DrewBinsky from '../../assets/Drew_Binsky_long.jpg';
import Mysterionaut from '../../assets/Mysterionaut_long.jpg';
import InternetAnarchist from '../../assets/Internet_Anarchist.jpg';
import JeremiahPeople from '../../assets/Jeremiah_People_long.jpg';
import MegaloMedia from '../../assets/Megalo_Media_long.jpg';
import RahulSehgal from '../../assets/Rahul_Sehgal_long.jpg';



export default function HearFromClient() {
   const testimonials = [
    {
      text: "Can't recommend Arise Media and the team enough. Wish I found you guys earlier.",
      name: "Brian Dean",
      subscribers: "563k subscribers",
      bgColor: "bg-gray-100",
      image: BrianDean
    },
    {
      text: "These guys are pretty much angel investors, but for content creators. Genius.",
      name: "Serpentza",
      subscribers: "1.43M subscribers",
      bgColor: "bg-blue-100",
      image: Serpentza
    },
    {
      text: "Did a good job editing my intro for my videos and provided in a timely manner & turned around revisions quickly. Thanks once again.",
      name: "CRUMB",
      subscribers: "234k subscribers",
      bgColor: "bg-yellow-200",
      image: Crumb
    },
    {
      text: "I don't have to follow up with freelancers anymore, which is a game changer for me since I'm always travelling.",
      name: "Drew Binsky",
      subscribers: "4M subscribers",
      bgColor: "bg-green-100",
      image: DrewBinsky
    },
    {
      text: "These are Super talented guys. Thumbnails came out amazing and they were able to help me with other aspects of my project. Will certainly be working with them for years to come.",
      name: "Mysteriouznut",
      subscribers: "1k Followers",
      bgColor: "bg-yellow-200",
      image: Mysterionaut
    },
    {
      text: "This editor was incredibly quick, professional, and created a video that beat my expectations.",
      name: "Jeremiah Peoples",
      subscribers: "93k subscribers",
      bgColor: "bg-red-100",
      image: JeremiahPeople
    },
    {
      text: "It was a pleasure to work with Arise Media, they provided stunning and visually compelling visuals for my YouTube documentary videos.",
      name: "MegaloMedia",
      subscribers: "132k subscribers",
      bgColor: "bg-blue-200",
      image: MegaloMedia
    },
    {
      text: "These guys are pretty much angel investors, but for content creators. Genius.",
      name: "Rahul Sehgal",
      subscribers: "21k Followers",
      bgColor: "bg-pink-100",
      image: RahulSehgal
    },
    {
        text: "These guys are pretty much angel investors, but for content creators. Genius.",
        name: "Rahul Sehgal",
        subscribers: "21k Followers",
        bgColor: "bg-pink-100",
        image: RahulSehgal
    },
    {
        text: "These guys are pretty much angel investors, but for content creators. Genius.",
        name: "Rahul Sehgal",
        subscribers: "21k Followers",
        bgColor: "bg-pink-100",
        image: RahulSehgal
    },
    {
        text: "These guys are pretty much angel investors, but for content creators. Genius.",
        name: "Rahul Sehgal",
        subscribers: "21k Followers",
        bgColor: "bg-pink-100",
        image: RahulSehgal
    },
    {
        text: "These guys are pretty much angel investors, but for content creators. Genius.",
        name: "Rahul Sehgal",
        subscribers: "21k Followers",
        bgColor: "bg-pink-100",
        image: RahulSehgal
    }
]

  return (
    <div className="main-content-Hear">
      <div className="header-content-Hear">
        <h2 className="header-text">
            <span className='title-text-Clinet'>Hear it From Our Clients</span> </h2>
      </div>

      <div className="card-review rounded-lg">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`p-3 rounded-lg shadow-lg bg-neutral-900 `}>
            <div className={`flex flex-row items-center h-full  rounded-lg gap-2 bg-neutral-900`}>
                <div className={`images-Client w-full h-full ${testimonial.bgColor} rounded-lg`}>
                <img src={testimonial.image} alt={`${testimonial.name}`} className={`w-full h-full mb-4 rounded-lg`} />
                </div>

                <div className={`review-detail-Client h-full rounded-lg ${testimonial.bgColor} `}>
                    <p className={`text-xl text-gray-700 mb-4 text-left pl-2 rounded-lg ${testimonial.bgColor}`}>"{testimonial.text}"</p>
                <div className={`flex flex-col text-left pl-2 rounded-lg ${testimonial.bgColor}`}>
                    <h4 className={`text-lg font-semibold rounded-lg ${testimonial.bgColor} `}>{testimonial.name}</h4>
                    <p className={`text-gray-500 rounded-lg ${testimonial.bgColor}`}>{testimonial.subscribers}</p>
                </div>
            </div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}
