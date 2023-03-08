import React, { useContext, useState } from 'react';
import CartContext from '../../Store/CartContext';
import ProductItemForm from './ProductItemForm';

const ProductDetail = (props) => {
    const valueDetail = props.valueDetail;
    const [qty, setQty] = useState(valueDetail.qty);
    const cartCtx = useContext(CartContext);
    function handleAddToCart (amount){
            setQty(qty - amount);
            if(amount> qty)
            {
                alert("Không đủ sách trong kho")
            }
            else{
                cartCtx.addItem({
                    id: valueDetail.id,
                    name : valueDetail.name,
                    image: valueDetail.image,
                    amount: amount,
                    price: valueDetail.price,
                    des: valueDetail.des,
                    inventory: valueDetail.qty
                })
            }
    }
  return (
    <div className="product-detail_wrap" >
        <div className='product-detail_exit' onClick={props.onClose}>x</div>
        <div className="product-detail">
        
        <div className="product-image">
          <img src={valueDetail.image} alt="Product Name" />
        </div>
        <div className="product-info">
          <h1 className="product-name">{valueDetail.name}</h1>
          <p className="product-price">{valueDetail.price} VNĐ</p>
          <p className="product-author">{valueDetail.description}</p>
          <p className="product-author">Tác giả: <span className='bold' >{valueDetail.nameAuthor}</span></p>
          <p className="product-category">Thể loại sách: <span className='bold'>{valueDetail.nameCate}</span></p>
          <p className="product-publisher">Nhà xuất bản: <span className='bold'>{valueDetail.namePublisher}</span></p>
          <div className="product-quantity">
            <label htmlFor="quantity">Còn: {valueDetail.qty} Sách</label>
          </div>
        
            <ProductItemForm amount= {valueDetail.qty} onAddToCart = {handleAddToCart}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;