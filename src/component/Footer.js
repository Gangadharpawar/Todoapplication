import React from "react";

export default function Footer() {
  const footerstyle = {
    position: "fixed",
    left: 2,
    bottom: 0,
    right: 2,
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "10px",
    backgroundColor: "#cfc6c6",
    color: "white",
  };
  return (
    <div>
      <footer className="fixed-footer" style={footerstyle}>
        &copy 2024 Powered by Nobel IT Company
      </footer>
    </div>
  );
}
