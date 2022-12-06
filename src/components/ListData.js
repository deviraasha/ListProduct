import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

function ListData(props) {
  const { data, search , isLoading} = props;
  const [datas, setDatas] = useState("");


  return (
    <>
      {isLoading ?     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner> : data !== undefined ? (
        data.products
          .filter((keyword) => {
            if (search === "") {
              return keyword;
            } else if (
              keyword.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return keyword;
            }
          })
          .map((item, index) => {

            return (
              <div className="container mt-5 mb-5" key={index}>
                <div className="d-flex justify-content-center row">
                  <div className="col-md-10">
                    <div className="row p-2 bg-white border rounded">
                      <div className="col-md-3 mt-1">
                        <img
                          className="img-fluid img-responsive rounded product-image"
                          src={item.thumbnail}
                          alt="img-product"
                        />
                      </div>
                      <div className="col-md-6 mt-1">
                        <h5>{item.title}</h5>
                        <div className="d-flex flex-row">
                          <div className="ratings mr-2">
                            <span className="me-2">{item.rating}</span>
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
                          <span>{item.brand}</span>
                          <span className="dot"></span>
                          <span>Best finish</span>
                        </div>
                        <div className="mt-1 mb-1 spec-1">
                          <span>Category : </span>
                          <span className="dot"></span>
                          <span>{item.category}</span>
                          <span className="dot"></span>
                          <span>Casual</span>
                        </div>
                      </div>
                      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex flex-row align-items-center">
                          <span className="strike-text">IDR</span>
                          <h4 className="ms-2">{item.price}</h4>
                          <span className="strike-text">.000</span>
                        </div>
                        <h6 className="text-success">
                          Discount {item.discountPercentage}%
                        </h6>
                        <div className="d-flex flex-column mt-4">

                          <div className="child">
                            <Link to={{pathname: `/detail/${item.id}`}}>
                              <button
                                className="btn btn-primary w-100"
                                onClick={(e) => localStorage.setItem('test', JSON.stringify(item))}
                              >
                                See Detail
                              </button>
                            </Link>
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
                </div>
              </div>
            );
          })
      ) : (
        <></>
      )}
    </>
  );
}

export default ListData;
