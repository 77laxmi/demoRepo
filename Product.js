import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Component/Breadcrum/BreadCrum'
import ProductDisplay from '../Component/PrductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Component/RelatedProducts/RelatedProducts'


const Product = () => {
  const{all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  // console.log('products....',product);
  return (
    <div>
     <BreadCrum product = {product}/>
     <ProductDisplay product = {product}/>
     <DescriptionBox/>
     <RelatedProducts/>
    </div>
  )
}

export default Product