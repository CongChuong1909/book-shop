import React, { useCallback, useContext, useEffect, useState } from "react";
import { Form, Table, Button, Container, Row, Col } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import Header from "../UI/Header/Header";
import {API} from "../../constant.js"
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Invoice = () => {
    const cartCtx = useContext(CartContext);
    const [listInvoice, setListInvoice] = useState([]);
    const [listDetail, setListDetail] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [status, setStatus] = useState(-1);
    const fetchlistInvoice = useCallback(async () => {
        try {
            const idUser = JSON.parse(localStorage.getItem('loginUser')).id;
            const response = await fetch(`${API}/order/get_order_of_user?iduser=${idUser}`);
   
            if (!response.ok) {
                throw new Error("Something is wrong!");
            }
            const data = await response.json();
            const loadListInvoice = [];
            for (const key in data) {
                loadListInvoice.push({
                    id: data[key]._id,
                    user: data[key].idUser.name,
                    voucher: data[key].idVoucher.name,
                    total: data[key].total,
                    recipient: data[key].recipient,
                    phone: data[key].phone,
                    address: data[key].address,
                    note: data[key].note,
                    date: data[key].date,
                    status: data[key].status,
                });
                setStatus(data[key].status);
            }

            setListInvoice(loadListInvoice);
        } catch (error) {}
    }, []);
    useEffect(() => {
        fetchlistInvoice();
    }, [ fetchlistInvoice]);

    const fetchListDetail = async (id) => {
        setShowDetail(true);
        try {
            const response = await fetch(`${API}/order/${id}`);
            if (!response.ok) {
                throw new Error("Something is wrong!");
            }
            const data = await response.json();
            const loadListInvoiceDetail = [];
            for (const key in data) {
                loadListInvoiceDetail.push({
                    id: data[key]._id,
                    nameBook: data[key].idBook.name,
                    imageBook: data[key].idBook.image,
                    amount: data[key].amount,
                    price: data[key].price,
                });
            }

            setListDetail(loadListInvoiceDetail);
        } catch (error) {}
    };
    console.log("aaa");

    const handleCancelOrder = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn hủy đơn hàng này không?")) {
            if (status === 3) {
                alert("Đơn hàng này đang giao không thể hủy");
                return;
            } else {
                const requestOptions = {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                };
                await fetch(
                    `${API}/order/user_update_status/${id}?status=0`,
                    requestOptions,
                )
                    .then((res) => res.json())
                    .then((response) => {
                        alert(response.msg);
                        setStatus(3);
                    })
                    .catch((error) => console.log(error));
            }
        } else {
            return;
        }
    };

    const handleConfirm = async(id) =>{
        cartCtx.items= [];
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        };
        console.log(requestOptions);
        await fetch(`${API}/order/user_update_status/${id}?status=4`, requestOptions)
            .then(res=> res.json())
            .then(response => {alert(response.msg); setStatus(4)})
            .catch(error => console.log(error))
    }


    const HandleAccept = (props)=>{
        if(status !== 3)
        {
            return <></>
        }
        else{
            return <Button className="button_confirm" onClick={()=>handleConfirm(props.id)} variant="primary">Xác nhận đã nhận hàng</Button>
        }
    }
    return (
        <Container >
            <Header />
            <Row className="container_invoice">
                <Col className="container_wrap" md={{ span: 8, offset: 2 }}>
                    <h1 className="text-center mb-4">Invoice</h1>
                    {listInvoice.map((item) => (
                        <div className="container_wrap"  key={item.id}>
                            <Form  className="form_invoice">
                               <div className="container_wrap" >
                               <Form.Group
                                    className="item_invoice"
                                    controlId="formInvoiceDate"
                                >
                                    <Form.Label column sm={3}>
                                        Invoice Date
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            type="date"
                                            defaultValue={item.date}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    className="item_invoice"
                                    controlId="formCustomerName"
                                >
                                    <Form.Label column sm={3}>
                                        Customer Name
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            value={item.user}
                                            type="text"
                                            placeholder="Enter customer name"
                                        />
                                    </Col>
                                </Form.Group>
                               </div>
                                <div>
                                    <Form.Group
                                    className="item_invoice"
                                    controlId="formCustomerPhone"
                                >
                                    <Form.Label column sm={3}>
                                        Customer Phone
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            value={item.phone}
                                            type="text"
                                            placeholder="Enter customer phone"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group
                                    className="item_invoice"
                                    controlId="formCustomerAddress"
                                >
                                    <Form.Label column sm={3}>
                                        Customer Address
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control
                                            value={item.address}
                                            type="text"
                                            placeholder="Enter customer address"
                                        />
                                    </Col>
                                </Form.Group>
                                </div>
                            </Form>

                            <div>
                                <Button
                                    onClick={fetchListDetail.bind(null, item.id)}
                                >
                                    Xem chi tiết
                                </Button>
                                <Button
                                    className="danger"
                                    onClick={handleCancelOrder.bind(null, item.id)}
                                >
                                    Hủy đơn hàng
                                </Button>
                            </div>
                            {showDetail && (
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>amount</th>
                                            <th>price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listDetail.map((item) => (
                                            <tr key={item.key}>
                                                <td>{item.nameBook}</td>
                                                <td>
                                                    <img
                                                        style={{
                                                            width: "80px",
                                                        }}
                                                        src={item.imageBook}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>{item.amount}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="3">Tổng Hóa đơn:</td>
                                            <td>{item.total}</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            )}
                            <div className="text-center container_wrap-confirm mt-4">
                            <HandleAccept id = {item.id}/>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>

    );
};

export default Invoice;
