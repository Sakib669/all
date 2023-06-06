import React, { useEffect, useRef, useState } from 'react';
import { getFromDB } from '../Utils/Utils';
import AppliedJobDetail from '../AppliedJobDetail/AppliedJobDetail';

const AppliedJobs = () => {
    const [data, setData] = useState([]);
    const appliedJobs = useRef(getFromDB());
    const [areEqual, setAreEqual] = useState([]);
    const [similiar, setSimiliar] = useState(areEqual);
    useEffect(() => {
        fetch('/second.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    useEffect(() => {
        const filteredData = data.filter(obj => {
            return appliedJobs.current.includes(obj.jobPosition);
        })
        setAreEqual(filteredData);
        setSimiliar(filteredData);
    }, [data]);

    const handleRemoteJobs = () => {
        const remote = [...areEqual].filter(element => element.onsetOrRemote === 'Remote');
        setSimiliar(remote);
    }

    const handleOnsetJobs = () => {
        const onset = [...areEqual].filter(element => element.onsetOrRemote === 'Onset');
        setSimiliar(onset);
    }

    console.log(similiar)


    return (
        <div>
            <div className='section-title mt-10 mb-28 py-10'>
                <h3 className='mt-4 text-center  font-bold text-5xl'>Applied Jobs</h3>
            </div>


            <div className='mb-12'>
                <button onClick={handleRemoteJobs}
                className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] h-1/4 text-white py-2 px-4 rounded font-bold mr-8'
                >Remote</button>


                <button onClick={handleOnsetJobs}
                className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] h-1/4 text-white py-2 px-4 rounded font-bold'
                >Onset</button>
            </div>



            <div>
                {
                    similiar.map(element => <AppliedJobDetail key={element.id}
                        element={element}
                    ></AppliedJobDetail>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;