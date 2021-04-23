import './styles.css';

export function Product({productInfo}){
    return(
        <div className="product">
            <img className="product__image" alt={productInfo.nm_product} src={productInfo.url_image}/>
            <h1 className="product__title">{productInfo.nm_product}</h1>
            <p className="product__description">{productInfo.description}</p>
            <div className="product__prices">
                <span className="product__value--discount">{`R$${productInfo.vl_discount}`}</span>
                <span className="product__value">{`R$${productInfo.vl_price}`}</span>
            </div>
        </div>
    );
}