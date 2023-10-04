import { useLocation } from "react-router-dom"

export default function Productcard({product}) {
  const location = useLocation()

  return(
    <article key={product?.id} className="mt-10 w-[320px] aspect-[4/7] bg-neutral-950 max-w-sm rounded-lg overflow-hidden transform hover:-translate-y-1 hover:scale-102 transition-transform">
      <div className="h-[330px] bg-white ">
        <img src={product?.ticket_image[0]} className="object-cover h-[330px] m-auto w-full "/>
      </div>
      <div>
        <div className="text-center text-neutral-500 montserratmedium">
          <div className="pt-[30px] pb-[5px] text-3xl montserratbold text-white">{product?.ticket_name}</div>
          <div className="pb-[4px] text-xs "> {product?.ticket_date}</div>
          <div className="pb-[4px] text-sm "> {product?.ticket_location}</div>
          <div className="pb-[15px] text-sm "> Price: {product?.ticket_price}</div>
          <div className="pb-[15px] text-sm "> Stock: {product?.ticket_stock}</div>
          <div>
          {!location.pathname.includes( "/transaction-confirmation" )&& <a className="w-[130px] h-[40px] bg-white text-black montserratbold rounded-lg" href={`/transaction-confirmation/${product.id}`}>
            Buy Ticket
            </a>}
          </div>
        </div>
      </div>
    </article>
  )
}