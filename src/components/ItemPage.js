import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/index";
import "../css/itemPage.css";
import { FaTruck } from "react-icons/fa";
import { GrCheckmark } from "react-icons/gr";
function ItemPage(props) {
  //console.log(props);
  // const [quantity, setQuantity] = useState(1);

  //using history object, programmatic navigation. if history's id equals store's id, right object key values will be rendered
  const historyId = Number(props.match.params.id);

  // useEffect(() => {
  //   const values = Object.values(props.itemsToSell);
  //   values.map((book) => {
  //     //console.log("render");
  //     const bookQuant = book.map((item) => {
  //       return setQuantity(item.quantity + 1);
  //     });
  //     return bookQuant;
  //   });
  // }, [quantity]);

  const handleSubmit = () => {
    // setQuantity(quantity + 1);
    // props.buyItem(historyId, quantity);
    props.buyItem(historyId);
  };

  const renderItemInfo = () => {
    return props.products.map((item) => {
      if (item.id === historyId) {
        return (
          <div className="containerItemPage" key={item.id}>
            <img
              src={item.image}
              className="imgItemPage"
              alt="books' item"
            ></img>
            <div className="infoItemPage">
              <div className="titleItemPage">{item.title}</div>
              <div id="authorItemPage">{item.author}</div>
              <div className="descriptionItemPage">{item.description}</div>
            </div>

            <div className="priceAndBtn">
              <div className="priceItemPage">Price: {item.price} EUR</div>
              <div className="deliveryInfo">
                <FaTruck id="truckIcon"></FaTruck>Free delivery
              </div>

              <div className="dispatchInfo">
                <GrCheckmark id="dispatchIcon"></GrCheckmark>Dispatched in two
                business days
              </div>
              <button onClick={() => handleSubmit()} className="itemBtn">
                Add to basket
              </button>
            </div>
          </div>
        );
      }
      return null;
    });
  };

  return <div className="itemContainer">{renderItemInfo()}</div>;
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.getBook,
    products: state.getBook.products,
  };
};
export default connect(mapStateToProps, { buyItem })(ItemPage);
