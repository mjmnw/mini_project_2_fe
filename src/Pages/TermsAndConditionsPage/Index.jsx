import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

export default function TnC () {
    return(
        <>
        <div className="bg-black">
        <Navbar />
        <div className="px-[200px] ml-20 pb-20">
            <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9jayUyMGZlc3RpdmFsfGVufDB8fDB8fHww&w=1000&q=80"/>
        </div>
        <div className="text-5xl text-center text-white pt-3 pb-3">
        Terms & Conditions
        </div>
        <div className="text-sm text-white pl-24 pr-10 text-justify pt-6 pb-3">
            By accessing this website, we assume you accept these terms and conditions. Here are our terms and conditions: 
        </div>
        <div className="flex">
        <div className="text-sm text-white pl-24 text-justify pb-2">
                1.
            </div>
        <div className="text-sm text-white pl-1 text-justify pb-2 pr-20">
       We employ the use of cookies. By accessing Death Parade Festival, we assume you agreed to use cookies in agreement with Death Parade Festival's privacy policy. Cookies are used by our website to enable the functionality and to make our website easier to visit.
        </div>
        </div>
        <div className="flex">
        <div className="text-sm text-white pl-24 text-justify pb-2">
                2.
            </div>
        <div className="text-sm text-white pl-1 text-justify pb-2 pr-20">
        Unless otherwise stated, Death Parade Festival ticket and/or its licensors own the intellectual property rights for all material on Death Parade Festival. All intellectual property rights are reserved. You may access this from Death Parade Festival for your own personal use subjected to restrictions set in these terms and conditions.
        </div>
        </div>
        <div className="text-sm text-white pl-24 pr-20 text-justify pb-2 pr-20">
       3. You must not republish, sell, rent, reproduce, duplicate, sub-license products from Death Parade Festival.
        </div>
        <div className="flex">
        <div className="text-sm text-white pl-24 text-justify pb-2">
                4.
            </div>
        <div className="text-sm text-white pl-1 text-justify pb-2 pr-20">
        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
        </div>
        </div>
        <div className="flex">
        <div className="text-sm text-white pl-24 text-justify pb-2">
                5.
            </div>
        <div className="text-sm text-white pl-1 text-justify pb-2 pr-20">
        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
        </div>
        </div>
        <div className="flex">
        <div className="text-sm text-white pl-24 text-justify pb-2">
                6.
            </div>
        <div className="text-sm text-white pl-1 text-justify pb-20 pr-20">
        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
        We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
        </div>
        </div>
        <Footer />
        </div>
        </>
    )
}