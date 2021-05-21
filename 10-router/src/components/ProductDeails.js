import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  const params = useParams()

  return <div>Details: {params.productId}</div> 
}