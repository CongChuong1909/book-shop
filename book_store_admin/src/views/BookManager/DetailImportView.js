import React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Table, Button, InputGroup, Form } from 'react-bootstrap';
import { API } from 'views/constant';

function DetailImportView(props) {

    const [viewAddProduct, setViewAddProduct] = useState(false);
    const [price, setPrice] = useState(0);
    const [valueUpdate, setValueUpdate] = useState(null)
    const [sold, setSold] = useState(false);
    const handleSaleBookFromImport = (values) =>{
        setValueUpdate(values.Book)
        setViewAddProduct(true);
    }

    const updateAmountHandler = async() =>{
        console.log(valueUpdate);
        const dataAddAmount = {
            id: valueUpdate._id,
            amount: valueUpdate.qty
        }
        console.log(dataAddAmount);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataAddAmount),
        };
        await fetch(`${API}/book/add_amount`, requestOptions)
            .then((response) => {
                console.log(response);
                if(response.status === 200)
                {
                    alert("update số lượng sản phẩm thành công!");
                    setSold(true);
                }
            })
            .catch((error) => console.log(error));
    }


    const updatePriceHandler = async (data, id) => {
        console.log(id);
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        await fetch(`${API}/book/update/${id}`, requestOptions)
            .then((response) => {
                console.log(response);
                if(response.status === 200)
                {
                    alert("update giá sản phẩm thành công!");
                }
            })
            .catch((error) => console.log(error));
        
    };


    const handleUpdateQuatity = async()=>{
        const data = {
            ...valueUpdate,
            price: Number(price)
        }
        updatePriceHandler(data, valueUpdate._id)
        updateAmountHandler();
        setViewAddProduct(false);
    }

    const value = props.value;
    return (
        <Container >
      <Row>
        <Col xs={6}>
          <h3>Store Name</h3>
          <p>123 Main Street</p>
          <p>Anytown, USA 12345</p>
        </Col>
        <Col xs={6}>
          <h3>Date: 01/01/2022</h3>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name Book</th>
            <th>Image Book</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {value.map((item)=>(
            <tr key = {item.id}>
                <td>{item.Book.name}</td>
                <td><img width={80} height = {100} src={item.Book.image} alt="" /></td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
                <td><Button onClick={()=>handleSaleBookFromImport(item)}>Bán</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col xs={6}>
          <h3>Total: $30.00</h3>
        </Col>
      </Row>
      {viewAddProduct &&(
            <div className='toast_price'>
                <div className='toast_price-exit' onClick={()=>setViewAddProduct(false)}><p>X</p></div>
                <div className='toast_price-message'>
                    <p>Nhập giá muốn bán</p>
                    <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <Button onClick={handleUpdateQuatity}>Xác nhận bán</Button>
            </div>
      )}
    </Container>
    );
}

export default DetailImportView;