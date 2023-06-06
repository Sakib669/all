const addToDB = param => {
    const prevData = JSON.parse(localStorage.getItem('jobs')) || [];
    if(!prevData.includes(param)){
        const arr = [...prevData, param];
        localStorage.setItem('jobs', JSON.stringify(arr));
    }
}

const getFromDB = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    return appliedJobs;
}

export {
    addToDB,
    getFromDB
};