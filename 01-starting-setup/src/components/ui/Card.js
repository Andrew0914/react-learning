import "./Card.css";
// wrapper component
function Card(props) {
  const classes = `card ${props.className}`;
  // props children is a reserved property where you can get content inside of this componente
  return <div className={classes}> {props.children} </div>;
}

export default Card;
