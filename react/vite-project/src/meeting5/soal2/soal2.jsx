function Deliverystatus({ status }) {
    if (status === "Processed") {
      return <h3>Your order has been Processed</h3>;
    } else if (status === "Shipped") {
      return <h3>Your order has been Shipped</h3>;
    } else if (status === "Delivered") {
      return <h3>Your order has been Delivered</h3>;
    }
  }
  
  export default Deliverystatus;