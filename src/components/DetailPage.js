import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Child from "./Child";

export default function DetailPage(props) {
  const items = JSON.parse(localStorage.getItem("test"));
  return (
    <>
      <div className="container mt-5">
        <Breadcrumb>
          <Breadcrumb.Item href="/">HomePage</Breadcrumb.Item>
          <Breadcrumb.Item active>Detail Product</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
              <div className="col-md-3 mt-1">
                <Carousel variant="dark">
                  {items.images.map((result, index) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-block w-100 bg-black"
                          src={result}
                          alt="First slide"
                          style={{ height: "250px" }}
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className="col-md-6 mt-5">
                <h3 className="fs-bolder">{items.title}</h3>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <span className="me-2">{items.rating}</span>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ead531" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ead531" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ead531" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ead531" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ead531" }}
                    />
                  </div>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Brand : </span>
                  <span className="dot"></span>
                  <span>{items.brand}</span>
                  <span className="dot"></span>
                  <span>Best finish</span>
                </div>
                <div className="mt-1 mb-1 spec-1">
                  <span>Category : </span>
                  <span className="dot"></span>
                  <span>{items.category}</span>
                  <span className="dot"></span>
                  <span>Casual</span>
                </div>
                <div className="mt-4">
                  <p className="card-text text-start">{items.description}</p>
                </div>
              </div>
              <div className=" align-content-center col-md-3 border-left mt-5">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <span className="strike-text">IDR</span>
                  <h4 className="ms-md-2">{items.price}</h4>
                  <span className="strike-text">.000</span>
                </div>
                <div>
                  <h4 className="text-white badge bg-success fs-5 ms-md-4">
                    Discount {items.discountPercentage}%
                  </h4>
                </div>
                <div className="d-flex flex-column mt-4">
                  <button
                    className="btn btn-outline-primary btn-sm mt-2"
                    type="button"
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
        <div className="card text-center p-5">
          <div className="row g-0">
            <div className="col-md-4">
              <Carousel variant="dark">
                {items.images.map((result, index) => {
                  return (
                    <Carousel.Item>
                      <img
                        className="d-block w-100 bg-black"
                        src={result}
                        alt="First slide"
                        style={{ height: "300px" }}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex flex-row">
                  <div className="col-md-5 me-4">
                    <h1 className="card-title text-start fs-bold">
                      {items.title}
                    </h1>
                    <div className="d-flex flex-row">
                      <div className="col-3 text-start">
                        <span className="fw-bolder">Stock </span>
                      </div>
                      <div className="col-1 text-start">:</div>
                      <div className="badge bg-primary">
                        <div className="ratings mr-2">
                          <span className="me-2">{items.rating}</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#ead531" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#ead531" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#ead531" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#ead531" }}
                          />
                          <FontAwesomeIcon
                            icon={faStar}
                            style={{ color: "#ead531" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-sm-row ">
                      <div className="col-3 text-start">
                        <span className="fw-bolder">Stock </span>
                      </div>
                      <div className="col-1 text-start">:</div>
                      <span className="">{items.stock}</span>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="align-content-center border-left mt-1">
                      <div className="d-flex flex-row justify-content-center mb-2">
                        <span className="strike-text">IDR</span>
                        <h2 className="">{items.price}</h2>
                        <span className="strike-text">.000</span>
                      </div>
                      <h4 className="text-white badge bg-success fs-5">
                        Discount {items.discountPercentage}%
                      </h4>
                      <div className="d-flex flex-column mt-2">
                        <button
                          className="btn btn-outline-primary btn-sm mt-2"
                          type="button"
                        >
                          Add to wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="card-text text-start">{items.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
