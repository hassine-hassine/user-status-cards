import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export function UserStatusCard({ name, image, job }) {
  const [status, setStatus] = useState("online");

  const toggleStatus = () => {
    setStatus(prev => (prev === "online" ? "offline" : "online"));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
      background: "linear-gradient(145deg, #fffaf0, #ffe4c4)",
      width: "200px",
      transition: "transform 0.2s, box-shadow 0.2s"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
    }}
    >
      {/* الصورة أو أيقونة */}
      {image ? (
        <img src={image} alt={name} style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
      ) : (
        <FaUserCircle size={60} color="#8B4513" />
      )}

      {/* الاسم مع badge صغير للحالة */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <h3 style={{ margin: 0, color: "#000000ff" }}>{name}</h3>
        <span style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: status === "online" ? "#0bbf5f" : "#f32f2f",
          display: "inline-block"
        }}></span>
      </div>

      {/* الوظيفة */}
      <h4 style={{ margin: 0, color: "#6B4226", fontWeight: "normal" }}>{job}</h4>

      {/* حالة المستخدم */}
      <span style={{
        fontSize: "13px",
        color: status === "online" ? "#0bbf5f" : "#f32f2f",
        fontWeight: "bold",
      }}>
        {status}
      </span>

      {/* زر Toggle */}
      <button 
        onClick={toggleStatus} 
        style={{
          marginTop: "12px",
          padding: "6px 14px",
          borderRadius: "10px",
          border: "none",
          background: status === "online" ? "#f3921f" : "#1f87f3",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = "brightness(0.9)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        Toggle Status
      </button>
    </div>
  );
}
