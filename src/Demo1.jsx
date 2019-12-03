import React from 'react';

import './Demo1.css';

class Demo1 extends React.Component {

    componentWillMount(){
        console.log('componentWillMount');
    };

    componentDidMount(){
        console.log('componentDidMount');
    }

    render() {

        let age = 20;
        let username = "abc";
        let product = {
            id: 'p01',
            name: 'name 1',
            photo: 'thumb1.gif',
            price: 5,
            quantity: 2,
            status: true,
        };
        let products= [
            {
                id: 'p01',
                name: 'name 1',
                photo: 'thumb1.gif',
                price: 5,
                quantity: 2,
                status: true,
            },
            {
                id: 'p02',
                name: 'name 2',
                photo: 'thumb2.gif',
                price: 15,
                quantity: 5,
                status: true,
            },
            {
                id: 'p03',
                name: 'name 3',
                photo: 'thumb3.gif',
                price: 5,
                quantity: 6,
                status: true,
            },
        ];

        let format2 ={
            color: 'yellow',
            fontSize: '50px',
        }

        return (
            <div>
                <h1 style={format2} >Hello World</h1>
                age: {age}
                <br/>
                username: {username}

                <h3>Product Info</h3>
                id: {product.id}
                <br/>
                name: {product.name}
                <br/>
                price: {product.price}
                <br/>
                quantity: {product.quantity}
                <br/>
                total: {product.price * product.quantity}
                <br/>
                status: {product.status ? 'show' : 'hide'}
                <br/>
                abc11111
                <br/>
                <img alt="Product444" scr='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1541610951-51aP744o4LL.jpg'></img>
                <img alt="Product2" src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1541610951-51aP744o4LL.jpg'></img>
                <br/>
                <img alt="Product2" src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1541610951-51aP744o4LL.jpg'></img>
                <br/>
                DucN <br />
                <img alt="Product1" src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1541610951-51aP744o4LL.jpg'></img>

                <h3 className='format1'>Product List Info</h3>
                <table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Photo</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Foreach */}
                        {products.map((p, index) => {
                            return(
                                <tr>
                                    <td>{index}</td>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td><img scr={'./images/' + p.photo} width='120' alt='no image' /></td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.status ? 'show' : 'hide'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        );
    }

}

export default Demo1;