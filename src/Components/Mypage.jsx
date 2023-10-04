export default function Mypage () {
    return(
        <>
        <div className="flex justify-between">
        <ul className="flex flex-row mt-1 px-11 mb-24 gap-10">
            <li>
                <a className="flex mb-2 hover:text-red-600 pt-10 " href="http://localhost:3000/myaccount">
                    Account Information
                </a>
            </li>
        </ul>
        <ul className="flex flex-row mt-1 px-11 mb-24 justify-end gap-10">
            <li>
                <a  className="flex mb-2 hover:text-red-600 pt-10" href="http://localhost:3000/aboutus">
                    About Us
                </a>
            </li>
            <li>
                <a  className="flex mb-2 hover:text-red-600 pt-10" href="http://localhost:3000/termsandconditions">
                    Terms & Conditions
                </a>
            </li>
        </ul>
        </div>
        </>
    )
}