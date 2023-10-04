import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


function AboutUsPage () {
    return (
        < >
        <div className="bg-black ">
        <Navbar/>
        <div className="">
            <img src="https://www.revolvermag.com/sites/default/files/styles/banner/public/media/images/article/gary-holt-by-jimmyhubbard-077a6947-web-crop.jpg?itok=eRTjYmw0&timestamp=1629826020" />
        <div className="justify-center px-[500px] ">
        </div>
        <div className=" h-2 w-[350px] pt-60 pl-7 pb-0">    
            <img src="https://killtownbookings.com/wp-content/uploads/component_killtown-deathfest.jpg" className="mt-12"/>
            </div>
            <div className="text-white font-bold justify-center flex pl-52 pb-10">
                ABOUT US
            </div>
        <div className=" text-sm  ml-[400px] text-white pr-12 pb-10 text-justify">
        The Death Parade Festival began in 2019 where three young people from one campus had a dream of creating a campus-community 
        based music platform that would be acceptable to the public and death metal music lovers. With only 
        passion and passion, they started to initiate small gigs and change the event medium locally. Over time, 
        from local gigs to internal campuses, the Death Parade Festival has continued to be sustainable and 
        managed by its founders after they graduated from college. And through dozens of trial-error events, 
        the Death Parade Festival has transformed into a music collective that is little by little known 
        to connoisseurs, as a consistent concert organizer platform in the Jakarta and Tangerang areas. For about
        five years – now entering its sixth year, the Death Parade Festival has become a national-scale music venue 
        that presents dozens of local and international death metal bands in one festival unit, and has become a 
        benchmark & source of inspiration – as well as a trigger for the emergence of various alternative festivals. 
        others, many of which are initiated by young people today. Now, Death Parade Festival offers that as a brand it 
        doesn't own anything/anyone behind it, but represents itself as a festival that belongs to everyone, belongs to 
        the community, musicians, sponsors, vendors, or other stakeholders, and most importantly, Death Parade Festival 
        belongs to all the spectators who came Armed with the principle of "Where The Dreamers Go", Death Parade Festival 
        will continue to be a home for young people who dare to dream & realize their creative work regardless of any obstacles. 
        A place where they learn to become the best version of themselves, through real work to create a festival that has a 
        perfect concept, delivery and execution.
        </div>
        </div>
        <div className="pt-12">
            <Footer/> 
        </div>
        </div>
        </>
    )
}

export default AboutUsPage;