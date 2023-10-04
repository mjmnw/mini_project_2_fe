import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

function NotFound() {
    return (
        <>
        <div className="bg-black h-screen">
        <Navbar/>
        <div className="flex text-5xl justify-center mt-20 mb-20 text-red-700">
            PAGE NOT FOUND !
        </div>
        <Footer/> 
        </div>
        </>
    )
}

export default NotFound;