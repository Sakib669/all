import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DoctorCard from './DoctorCard';

const DoctorCategory = () => {
  const category = ['Cavity Protection', 'Cosmetic Dentistry', 'Oral Surgery'];
  const [selectedTab, setSelectedTab] = useState('Cavity Protection');
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    fetch('doctors.json')
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, []);

  useEffect(() => {
    const doctor = doctors.find(doctor => doctor.title === selectedTab);
    setSelectedDoctor(doctor);
  }, [selectedTab, doctors]);

  console.log(selectedTab);
  console.log(selectedDoctor);

  return (
    <Tabs>
      <TabList className='flex mb-2'>
        {category.map((category, index) => (
          <Tab
            key={index}
            onClick={() => setSelectedTab(category)}
          >
            {category}
          </Tab>
        ))}
      </TabList>

      {category.map((category, index) => (
        <TabPanel key={index}>
          {selectedDoctor && selectedDoctor.title === category && (
            <DoctorCard data={selectedDoctor} />
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default DoctorCategory;
