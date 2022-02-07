import { Card } from 'components/atoms';

const TodoCard = (props) => {
  const { title, date, onClick = () => {} } = props;

  return (
    <Card shadow color="white" onClick={onClick}>
      <h3>{title}</h3>
      <p>Created: {date}</p>
    </Card>
  );
};

export default TodoCard;
