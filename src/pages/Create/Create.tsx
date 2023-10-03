import CreateForm from '../../components/CreateForm/Form/CreateForm';
import Card from '../../components/CreateForm/Card/Card';
import './Create.scss';
import { useAppSelector } from '../../components/redux/hooks/useAppSelector';

function Create() {
  const { cards } = useAppSelector((state) => state.create);

  return (
    <section className="create container" aria-label="Create product page">
      <CreateForm />
      <div className="cards" role="list" aria-label="Card list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Create;
