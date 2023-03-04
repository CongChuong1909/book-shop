import React, { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";


function ProductItemForm(props) {

    
    const amountInputRef = useRef();
    const submitHandler = (e) =>{
        e.preventDefault();
        const userLogin= localStorage.getItem('loginUser');
        if(!userLogin)
        {
            alert("Vui lòng đăng nhập!");
        }
        else{
            const enterAmount = amountInputRef.current.value;
            const enterAmountNumber = +enterAmount; //convert
            if (
                enterAmount.trim().length === 0 ||
                enterAmountNumber < 0 ||
                enterAmountNumber > 5
            )
                return;
            
            props.onAddToCart(enterAmountNumber);
        }
        
    }

    const ViewButton = () =>{
        if(props.amount===0)
        {
            return <Button className="button_add_cart disable" type="submit">Add to cart</Button>
        }
        else if(props.amount> 0){
            return <Button className="button_add_cart" type="submit">Add to cart</Button>
        }
    } 

    return (
        
                <form action="" onSubmit={submitHandler}>
                   <ViewButton/>
                    <input
                    className="quantity"
                        ref={amountInputRef}
                        label="Amount"
                        id="amount"
                        type="number"
                        min="1"
                        max="5"
                        step="1"
                        defaultValue="1"
                    />
                </form>
        
    );
}

export default ProductItemForm;
