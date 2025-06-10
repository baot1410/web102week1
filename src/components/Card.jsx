function Card({ shop }) {
  return (
    <div className="boba-card">
      <img src={shop.img} alt={shop.name} className="card-image" />
      <h3>{shop.name}</h3>
      <p><strong>Location:</strong> {shop.location}</p>
      <p><strong>Popular:</strong> {shop.popular}</p>
      <p><strong>Menu:</strong> {shop.menu}</p>
      <button 
        className="card-button"
        onClick={() => window.open(shop.link, '_blank')}
      >
        View Menu
      </button>
    </div>
  );
}

export default Card;