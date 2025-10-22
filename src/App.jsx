import React from "react";
import { UserStatusCard } from "./UserStatusCard";
import AlexImg from "./assets/A.jpg";
import BobImg from "./assets/B.jpg";
import CharlesImg from "./assets/C.jpg";

export function App() {
  const users = [
    { name: "Alex", job: "Full Stack Developer",image:AlexImg },
    { name: "Bob", job: "Front End Developer",image:BobImg },
    { name: "Charles", job: "Back End Developer",image:CharlesImg }
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
      padding: "30px",
      backgroundColor: "#da9918ff", // خلفية دافئة وراقية
      minHeight: "100vh"
    }}>
      {users.map(user => (
        <UserStatusCard 
          key={user.name} 
          name={user.name} 
          job={user.job}
          image={user.image}
        />
      ))}
    </div>
  );
}
