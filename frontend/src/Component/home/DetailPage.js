import { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import ProductImage from "../../Common/DetailPageC/ProductImage";
import ProductInfo from "../../Common/DetailPageC/ProductInfo";
const DetailPage = () => {
  const [Products, setProducts] = useState([]);
  const [detailPage, setDetailPage] = useState([]);
  const params = useParams();

  const getProducts = () => {
    Axios.get("/api/product/getproducts").then((response) => {
      if (response.data) {
        setProducts([...Products, ...response.data]);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  useEffect(() => {
    getProducts(Products);
    if (params.productId) {
      Products.forEach((product) => {
        if (product._id === params.productId) {
          setDetailPage(product);
        }
      });
    }
  }, [params.productId, Products]);

  //console.log(detailPage);
  // console.log(params.productId);

  return (
    <div
      className="product1-container"
      style={{ width: "100%", padding: "3rem 4rem" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{detailPage._id}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={detailPage} />
        </Col>
        {
          // <Col lg={12} xs={24}>
          //   <ProductInfo detail={detailPage} />
          // </Col>
        }
      </Row>
    </div>
  );
};

export default DetailPage;
