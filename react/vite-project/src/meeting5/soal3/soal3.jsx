function Notification({priority}) {
    if (priority === "low") {
      return <h3>No Immediate Action Required</h3>;
    } else if (priority === "medium") {
      return <h3>Please addres this issue soon</h3>;
    } else if (priority === "high") {
      return <h3>Immediate Action Required </h3>;
    }
}

export default Notification