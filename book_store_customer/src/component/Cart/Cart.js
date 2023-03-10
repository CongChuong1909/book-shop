import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Store/CartContext";
import Header from "../UI/Header/Header";
import CartItem from "./CartItem";
import {API} from "../../constant.js"

function Cart(props) {
    const[listVoucher, setListVoucher] = useState([]);
    const cartCtx = useContext(CartContext);
    let countApply = 0;
    const [reduce, setReduce] =useState(0);
    console.log(cartCtx);
    const listBookCart = cartCtx.items;
    const totalAmount = cartCtx.totalAmount;
    console.log(listBookCart);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    const handleDeleteItem = (id) =>{
        if(id)
        {
            cartCtx.removeAllItem(id);
            cartCtx.totalAmount = 0;
        }
    }
    console.log(cartCtx.items);

    const fetchListVoucher = useCallback(async () => {
        try {
            const response = await fetch(
                `${API}/voucher`,
            );
            if (!response.ok) {
                throw new Error("Something is wrong!");
            }
            const data = await response.json();
            const loadListVoucher = [];
            console.log(data);
            for (let i =0; i< 3; i++ ) {
                loadListVoucher.push({
                    id: data[i]._id,
                    name: data[i].name,
                    reduce: data[i].reduce,
                    qty: data[i].qty,
                    mile: data[i].mile,
                    slug:data[i].slug
                });
            }
            
            setListVoucher(loadListVoucher);
        } catch (error) {
        }
    }, []);
    useEffect(() => {
        fetchListVoucher();
        
    }, [fetchListVoucher]);
    
    const handleApplyVoucher = (id,reduce) =>{
        cartCtx.voucher = {id, reduce};
        setReduce(reduce);
    }
    function convertToVnd(amount) {
        const parts = String(amount).split('.');
        let intPart = parts[0];
        intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        if (parts.length > 1) {
          const decPart = parts[1].substring(0, 2).padEnd(2, '0');
          return `${intPart} VN??${decPart}`;
        } else {
          return `${intPart} VN??`;
        }
      }
    
      const handlePayment = (e) =>{
        
            if(cartCtx.items.length === 0)
            {
                e.preventDefault();
                alert('Gi??? h??ng r???ng');
            }
      }
    
    return (
        <div className="Cart">
            <Header />

            <div className="cart-content container-cart">
                <h4>GI??? H??NG ({numberOfCartItems} s???n ph???m)</h4>
                <div className="cart-content-wrap">
                    <div className="cart-content-left">
                        <div className="cart-content-header">
                            <div className="select-all">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked="true"
                                    name=""
                                    id=""
                                />
                                <p>Ch???n t???t c??? ({numberOfCartItems} s???n ph???m)</p>
                            </div>
                            <div className="select-option">
                                <p>S??? l?????ng</p>
                                <p>Th??nh ti???n</p>
                            </div>
                        </div>

                        <div className="cart-content-product">
                            <ul className="cart-content-product-list">
                                {listBookCart.map((itemCart) =>(
                                    <CartItem key = {itemCart.id} {...itemCart} onDelete = {() =>handleDeleteItem.bind(null, itemCart.id)} />
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                    <div className="cart-content-right">
                        <div className="cart-content-right-header">
                            <div className="cart-content-content-right-sale">
                                <img
                                    src="	https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg"
                                    alt=""
                                />
                                KHUY???N M??I
                            </div>
                            <div className="cart-content-content-right-more">
                                Xem Th??m
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                        {
                           
                            listVoucher.map((item)=>{
                                let apply = false;
                                let destination = item.mile - totalAmount;
                                if(destination <= 0)
                                {
                                    destination = 0;
                                    apply = true;
                                    countApply +=1
                                }
                                
                                return(
                                <div key={item.id} className="cart_voucher">
                                    <div className="cart_voucher-title">
                                        <h3>M?? GI???M {convertToVnd(item.reduce)}</h3>
                                        <a href="/#">Chi ti???t</a>
                                    </div>
                                    <div className="cart_voucher-sub">
                                        <p>
                                            {item.name}
                                        </p>
                                    </div>
                                    <div className="cart-voucher-content">
                                        <div className="cart-voucher-content-bar">
                                            <div className="cart-voucher-content-bar-chart"></div>
                                            <p>Mua th??m {convertToVnd(destination)} ????? nh???n m??</p>
                                        </div>
                                        {!apply && <div className="btn-buy-more"><Link className="btn-buy-more_link" to = "/product">Mua th??m</Link></div>}
                                        {apply && <div className="btn-apply" onClick={() =>handleApplyVoucher(item.id,item.reduce)} >??p d???ng</div>}
                                    </div>
                                </div>
                            )})
                        }
                        
                        
                        <div className="cart_voucher">
                            <div className="into_money">
                                <p>Th??nh ti???n</p>
                                <p>{convertToVnd(totalAmount)}</p>
                            </div>
                            <div className="into_money">
                                <p>Gi???m gi??</p>
                                <p>- {convertToVnd(reduce)}</p>
                            </div>
                            {/* <div className="into_money">
                                <p>Ph?? v???n chuy???n</p>
                                <p>15.000??</p>
                            </div> */}
                            <div className="total-price">
                                <p>T???ng s??? ti???n(g???m VAT)</p>
                                <p>{convertToVnd(totalAmount - reduce)}</p>
                            </div>
                            
                            <Link
                                className="btn-payment-links"
                                to="/payment"
                            >
                                <div onClick={handlePayment} className="btn-payment">?????t h??ng</div>
                            </Link>
                            <p className="voucher_valid">
                                (Gi???m gi?? tr??n web ch??? ??p d???ng cho b??n l???)
                            </p>
                            <div className="voucher_useful">
                                <p>{countApply} khuy???n m??i ????? ??i???u ki???n</p>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                            <h6>
                                Kh??ng th??? ??p d???ng ?????ng th???i nhi???u nhi???u m??
                                <i className="fa-solid fa-circle-exclamation"></i>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
