import React from "react";

const Item = () => {
    const images = [
        "https://f.fcdn.app/imgs/e338e0/www.kroser.com.uy/krosuy/14d6/original/catalogo/251LID16_1/1920-1200/ventana-aluminio-standard-serie-20-150x120-n-a.jpg",
        "https://d1aj1t8m7tqg8v.cloudfront.net/images/upload/1512/card/6526d2526f1449.77932346.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yUhI01o1onWyQEFDCJUPD8SwKw_tg0K4ow&s"
    ];

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {images.map((src, index) => (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                    <img
                                        src={src}
                                        alt={`Imagen ${index + 1}`}
                                        className="d-block mx-auto img-fluid rounded"
                                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-5 card-body">
                    <h1 className="mb-4"><b>Aluminio en Ventana</b></h1>
                    <p className="lead custom-text fw-lighter">
                        Esta es una apertura Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi dolore minima iste aspernatur, quisquam repudiandae velit dignissimos eum possimus, voluptates non et delectus facilis laudantium culpa alias quibusdam cumque quis?
                    </p>
                    <h3 className="text-danger">$125.00</h3>
                    <button
                        className="btn btn-success"
                        onClick={() => window.open('https://wa.me/+59893649367?text=Buenas, quisiera comprar este producto. ¿Está disponible?', '_blank')}
                    >
                        Contactar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
