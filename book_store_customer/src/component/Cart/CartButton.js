import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate ,useLocation  } from "react-router-dom";
import CartContext from "../../Store/CartContext";



function CartButton(props) {
    const cartCtx = useContext(CartContext);
    const [isChangeCart, setIsChangeCart] = useState(false);
    const { items } = cartCtx;
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsChangeCart(true);
    
        const timer = setTimeout(() => {
            setIsChangeCart(false);
        }, 300);
    
        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        
        return curNumber + item.amount;
    }, 0);

    const handleCheckLogin = () =>{
        console.log("Aaaaaaaaaa");
        const userLogin = localStorage.getItem("loginUser");
        if(!userLogin)
        {
            navigate(location.pathname);
            alert("Vui lòng đăng nhập để tiếp tục")
        }
        else{
            navigate('/cart');
        }
    }
    return (
        <div className="header_cart">
            <div onClick={handleCheckLogin}>
                <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
            <p>{numberOfCartItems}</p>
        </div>
    );
}

export default CartButton;
