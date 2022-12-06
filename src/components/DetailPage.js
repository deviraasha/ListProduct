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
      <div className="container mt-5">
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
                  <div className="col-sm-5 me-4">
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

                    <div className="d-flex flex-row ">
                      <div className="col-3 text-start">
                        <span className="fw-bolder">Stock </span>
                      </div>
                      <div className="col-1 text-start">:</div>
                      <span className="">{items.stock}</span>
                    </div>
                  </div>
                  <div className="col-sm-7">
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
                        <div className="child">
                          <button className="btn btn-primary w-100">
                            See Detail
                          </button>
                        </div>
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
      </div>
    </>
  );
}
