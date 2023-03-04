import React, { useCallback, useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function InvoiceDetail(props) {
    return (
        <div >
            <div style={{display:"flex", justifyContent:"end"}}>
                <Button onClick={props.onClose}>X</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>nameBook</th>
                        <th>imageBook</th>
                        <th>quatity</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.value.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nameBook}</td>
                            <td>
                                <img
                                    width={100}
                                    height={120}
                                    src={item.imageBook}
                                    alt=""
                                />
                            </td>
                            <td>{item.amount}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default InvoiceDetail;
