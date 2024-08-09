import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 200); // Change 200 to your desired scroll distance
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={goToTop}
          className="flex justify-center items-center fixed bottom-20 right-5 w-12 h-12 bg-blue-500 text-white rounded-full cursor-pointer transition-transform transform hover:bg-blue-700 hover:-translate-y-1"
          style={{ zIndex: 9999 }} 
        >
          <FaArrowUp className="text-lg" />
        </div>
      )}
    </>
  );
};


const Wrapper = styled.div`
@media(max-width:481px){
bottom:7%;
right:12%;
display:flex;
justify-content:center;
align-items:center;
position:fixed;
color:white;
background-color:rgb(59,130,246);
width:48px;
height:48px;
z-index:9999;
border-radius:50%;
cursor:pointer;
transition:transform 0.3s ease,background-color 0.3s ease;
&:hover{
background-color:#003a79;
transform:translateY(-5px);
}
}
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;6
  bottom: 17px;
  right: 10px;
  color: white;
  background-color: rgb(59 130 246);
  width: 48px;
  height: 48px;
  z-index: 9999;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  
  &:hover {
    background-color: #003a79;
    transform: translateY(-5px);
  }
`;

export default GoToTop;
