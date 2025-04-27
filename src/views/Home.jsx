import { pizzas } from '../pizzas'
import CardPizza from '../components/CardPizza'

const Home = () => {
  return (
    <div className="container py-5 d-flex flex-wrap gap-4 justify-content-center">
      {pizzas.map((pizza) => (
        <CardPizza key={pizza.id} {...pizza} />
      ))}
    </div>
  )
}

export default Home
