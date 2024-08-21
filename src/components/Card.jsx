const Card = () => {
  const onClickEvent = (e) => {
    e.currentTarget.classList.toggle("is-flipped");
    console.log(e.currentTarget);
  };

  return (
    <div className="card" onClick={onClickEvent}>
      <div className="cardface cardface__front">front</div>
      <div className="cardface cardface__back">back</div>
    </div>
  );
};

export default Card;
