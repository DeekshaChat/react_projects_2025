export default function CoreConcepts(props) {
    return (
        <li>
          <img src={props.val.image} alt={props.val.title} />
          <h3>{props.val.title}</h3>
          <p>{props.val.description}</p>
        </li>
      );
  }