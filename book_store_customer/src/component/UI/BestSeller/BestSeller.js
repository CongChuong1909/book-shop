import React from 'react';
import Slider from 'react-slick';

function BestSeller(props) {
    var settings = {
        centerMode: true,
        centerMargin: 30,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };


    return (

        <div className="product">
                <Slider {...settings}>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_5a08976c1c2142bab758f57f1c8b7c94~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_5a08976c1c2142bab758f57f1c8b7c94~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Quả chanh hạnh phúc</p>
                        <h3 className="price-sale">55.000đ</h3>
                        <p className="primary-price">145.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_d305945be8424dc490b57fb13644945f~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_d305945be8424dc490b57fb13644945f~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Hội An Không chỉ là phố</p>
                        <h3 className="price-sale">60.000đ</h3>
                        <p className="primary-price">145.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_15e007e6a7314c3d893ccba9a0866dec~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_15e007e6a7314c3d893ccba9a0866dec~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Cổ điển sang trọng</p>
                        <h3 className="price-sale">74.000đ</h3>
                        <p className="primary-price">165.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_8f14ace6ece24283b0ddc0ac0bfb3c67~mv2.jpg/v1/fill/w_268,h_402,al_c,lg_1,q_80/45c4b2_8f14ace6ece24283b0ddc0ac0bfb3c67~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Kiến trúc hiện đại</p>
                        <h3 className="price-sale">44.000đ</h3>
                        <p className="primary-price">65.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_242c6c4dafe24477a23307bb283ee8d0~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_242c6c4dafe24477a23307bb283ee8d0~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Lịch sử hy lạp cổ đại</p>
                        <h3 className="price-sale">60.000đ</h3>
                        <p className="primary-price">120.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_5a08976c1c2142bab758f57f1c8b7c94~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_5a08976c1c2142bab758f57f1c8b7c94~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Quả chanh hạnh phúc</p>
                        <h3 className="price-sale">55.000đ</h3>
                        <p className="primary-price">145.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_d305945be8424dc490b57fb13644945f~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_d305945be8424dc490b57fb13644945f~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Hội An Không chỉ là phố</p>
                        <h3 className="price-sale">60.000đ</h3>
                        <p className="primary-price">145.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_15e007e6a7314c3d893ccba9a0866dec~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_15e007e6a7314c3d893ccba9a0866dec~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Cổ điển sang trọng</p>
                        <h3 className="price-sale">74.000đ</h3>
                        <p className="primary-price">165.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_8f14ace6ece24283b0ddc0ac0bfb3c67~mv2.jpg/v1/fill/w_268,h_402,al_c,lg_1,q_80/45c4b2_8f14ace6ece24283b0ddc0ac0bfb3c67~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Kiến trúc hiện đại</p>
                        <h3 className="price-sale">44.000đ</h3>
                        <p className="primary-price">65.000đ</p>
                    </div>
                </div>
                <div className="product-items">
                    <img src="https://static.wixstatic.com/media/45c4b2_242c6c4dafe24477a23307bb283ee8d0~mv2.jpg/v1/fill/w_268,h_402,al_c,q_80,usm_0.66_1.00_0.01/45c4b2_242c6c4dafe24477a23307bb283ee8d0~mv2.webp" className='img-seller' alt=""/>
                    <div className="product-items_wraps">
                        <p className="product-title ellipsis">Lịch sử hy lạp cổ đại</p>
                        <h3 className="price-sale">60.000đ</h3>
                        <p className="primary-price">120.000đ</p>
                    </div>
                </div>
                </Slider>
        </div>
    );
}

export default BestSeller;