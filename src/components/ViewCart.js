import React from 'react';
import Image from 'react-bootstrap/Image'
import './styles/ViewCart.css';

class ViewCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="ViewCart">
                    <h1>Tu carrito <span>11 Items</span></h1>
                    <div className="ViewCartList">
                        <div className="ViewCartItem">
                            <div className="row">
                                <div className="col-3">
                                    <Image src="src/images/articles/95388.jpg" fluid />
                                </div>
                                <div className="col-4">
                                    <div>
                                        <h5>Ultraboost 19 Shoes</h5>

                                        <div class="ViewCartBody">
                                            <div>
                                                <label class="label">Color</label>
                                                <span>Rojo</span>
                                            </div>
                                            <div>
                                                <label class="label">Talle</label>
                                                <span>80</span>
                                            </div>
                                            <div className="ViewCartAction">
                                                <div className="Link">Editar</div>
                                                <div className="Link">Borrar</div>
                                            </div>
                                        </div>
                                        {/* <div>
                                        <span className="label">Color</span>
                                        <div className="value">Rojo</div>
                                    </div>
                                    <div>
                                        <span className="label">Talle</span>
                                        <div className="value">80</div>
                                    </div>
                                    <div>
                                        <span className="label">Marca</span>
                                        <div className="value">Nike</div>
                                    </div> */}
                                        {/* <button className="delete_link true" type="submit" value="Delete from Bag" name="dwfrm_cart_shipments_i0_items_i0_deleteProduct" tabindex="0"><span>Delete</span></button> */}
                                        {/* <button className="delete_link true" type="submit" value="Delete from Bag" name="dwfrm_cart_shipments_i0_items_i0_deleteProduct" tabindex="0"><span>Delete</span></button> */}
                                        {/* <button className="delete_link true" type="submit" value="Delete from Bag" name="dwfrm_cart_shipments_i0_items_i0_deleteProduct" tabindex="0"><span>Delete</span></button> */}
                                    </div>
                                </div>
                                <div className="col-5">
                                    precio
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Caracas */}
                    <div onClick={this.props.toggleViewCart}>CAMBIARE</div>


                </div>

            </React.Fragment>
        )
    }
}

export default ViewCart;