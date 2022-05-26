import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./wishList.css";
import { Card } from "primereact/card";
import demoWishlist from "../../assets/images/demo-wishlist.webp";
import demo2 from "../../assets/images/wishlist-demo-1.webp";

const initialData = [
  {
    id: 1,
    title: "Vama Set without dupatta - S",
    subTitle: "₹3,671.00",
    image: demoWishlist,
  },
  {
    id: 2,
    title: "HEATHER SUIT SET - S",
    subTitle: "₹6,271.00",
    image: demo2,
  },
];

const WishList = (props) => {
  const [wishListItems, setWhishListItems] = useState(initialData);

  const header = () => {
    return (
      <div className="header-template">
        <i className="pi pi-heart-fill icon-size"></i>
        <div className="wishlist-header">WISHLIST</div>
      </div>
    );
  };
  const headerCard = (img) => (
    <img
      className="wishList-img"
      alt="Card"
      src={img}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const footer = (
    <span>
      <button type="submit" className="btn-add-cart">
        ADD TO CART
      </button>
      <Button
        icon="pi pi-trash"
        className="p-button-secondary p-button-text p-button-sm"
        style={{ marginLeft: "10px" }}
      />
    </span>
  );
  return (
    <div>
      <Dialog
        header={header}
        visible={props.displayBasic}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "100vw" }}
        footer={props.renderFooter("displayBasic")}
        onHide={() => props.onHide("displayBasic")}
      >
        <div className="card-data">
          {wishListItems ? (
            wishListItems.map((data) => (
              <div className="card-item">
                <Card
                  key={data.id}
                  title={data.title}
                  subTitle={data.subTitle}
                  style={{ width: "15em" }}
                  footer={footer}
                  header={() => headerCard(data.image)}
                ></Card>
              </div>
            ))
          ) : (
            <p className="wishList-items">
              there are no items in this wishlist
            </p>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default WishList;
