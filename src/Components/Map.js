import react from "react";

function Map() {
  const details = [
    {
      id: 1,
      img: "",
      name: "sirt1",
      price: "180",
      delivery: "free Delivery",
      rating: "3.5",
      review: "2803"
    }
  ];
  return (
    <div>
      {details.map((value) => {
        return (
          <div key={value.id} className="card">
            <div className="img">
              {" "}
              <img src={value.img} alt="firstimg" />
            </div>
            <h2>{value.name}</h2>
            <h1>&#8377;{value.price}</h1>
            <h3>{value.delivery}</h3>
            <div className="btn-rev">
              <button>{value.rating}</button>
              <h3>{value.review}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Map;
