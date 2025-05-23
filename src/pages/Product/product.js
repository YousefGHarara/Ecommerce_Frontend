import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import './product.css'

import React, { useContext } from 'react';
import Breadcrum from '../../components/Breadcrum/breadcrum';
import ProductDisplay from '../../components/ProductDisplay/productDisplay';
import DescriptionBox from '../../components/DescriptionBox/descriptionBox';
import RelatedProducts from '../../components/RelatedProducts/relatedProducts';

const Product = () => {

  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
