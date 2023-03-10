import './Equipment.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import ProjectCard from '../components/ProjectCard';

const Equipment = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/category/equipment')
      .then((res) => {
        setData(res.data.data);
        setFilter(res.data.data);
        setLoaded(true);
      });
  }, []);

  const filterEquipment = (value) => {
    const type = data.filter((object) => object.name.includes(value));
    setFilter(type);
  };

  return (
    <main className="equipment">
      <audio autoPlay={true} className="audio">
        <source
          src="https://res.cloudinary.com/depifliz3/video/upload/v1676844684/samples/landscapes/botw_item_sound_foc7yd.mp3"
          type="audio/mp3"
        ></source>
      </audio>
      <div className="buttons-equipment">
        <button onClick={() => filterEquipment('sword')}>Swords</button>
        <button onClick={() => filterEquipment('axe')}>Axes</button>
        <button onClick={() => filterEquipment('club')}>Clubs</button>
        <button onClick={() => filterEquipment('spear')}>Spears</button>
        <button onClick={() => filterEquipment('bow')}>Bows</button>
        <button onClick={() => filterEquipment('shield')}>Shields</button>
        <button onClick={() => filterEquipment('')}>All</button>
      </div>
      <div className="grid-equipment">
        {loaded ? (
          filter.map((monster) => <ProjectCard key={monster.id} monster={monster} />)
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};

export default Equipment;
