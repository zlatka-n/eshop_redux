import React from "react";
import { connect } from "react-redux";

function ItemPage(props) {
  //console.log(props);

  const historyId = Number(props.match.params.id);

  const itemInfo = props.itemsToSell.map((item) => {
    if (item.id === historyId) {
      console.log("matching :]");
      return (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.price}</div>
        </div>
      );
    }
    return null;
  });
  return <div> {itemInfo}</div>;
}

const mapStateToProps = (state) => {
  return {
    itemsToSell: state.warehouse,
  };
};
export default connect(mapStateToProps)(ItemPage);
