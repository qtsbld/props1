import React from "react";

function SimpleProductCard({ name, price }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.price}>{price} ₽</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "200px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "18px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default SimpleProductCard;
