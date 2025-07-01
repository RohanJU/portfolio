const ImageCard = () => {
    return (
      <div className="image-stack">
        <div className="card bg-yellow rotate-[-8deg]" />
        <div className="card bg-blue rotate-[8deg]" />
        <div className="card bg-pink">
          <img
            src="/src/assets/rename_3.png"
            alt="Rohan"
          />
        </div>
      </div>
    );
  };
  
  export default ImageCard;
  