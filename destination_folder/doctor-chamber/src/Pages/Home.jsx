
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const Home = () => {
    const cardsData = useLoaderData();
    
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                cardsData.map(card => <Cards
                key={card._id}
                card={card}></Cards>)
            }
        </div>
    );
};

export default Home;