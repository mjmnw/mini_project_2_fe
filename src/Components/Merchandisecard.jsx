import { useLocation } from "react-router-dom";

export default function MerchandiseCard({ product }) {
  const location = useLocation()

  return (
    <article
      key={product?.id}
      className="mt-10 w-[320px] aspect-[4/7] bg-neutral-950 max-w-sm rounded-lg overflow-hidden transform hover:-translate-y-1 hover:scale-102 transition-transform"
    >
      <div className="h-[330px] bg-white ">
        <img
          src={product?.merchandise_image[0]}
          alt=""
          className="object-cover h-[330px] m-auto w-full"
        />
      </div>
      <div>
        <div className="text-center text-neutral-500 montserratmedium">
          <div className="pt-[30px] pb-[5px] text-3xl montserratbold text-white">
            {product?.merchandise_name}
          </div>
          <div className="pb-[4px] text-xs ">
            {" "}
            Stock: {product?.merchandise_stock}
          </div>
          <div className="pb-[15px] text-sm ">
            {" "}
            Price: {product?.merchandise_price} Points
          </div>
          <div>
          {!location.pathname.includes( "/merchandise-confirmation" )&& <a className="w-[130px] h-[40px] bg-white text-black montserratbold rounded-lg" href={`/merchandise-confirmation/${product.id}`}>
            Buy Merchandise
            </a>}
          </div>
        </div>
      </div>
    </article>
  );
}
