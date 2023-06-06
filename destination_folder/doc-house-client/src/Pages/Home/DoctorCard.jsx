/* eslint-disable react/prop-types */
import { TabPanel } from "react-tabs";

const DoctorCard = ({data}) => {
    console.log(data);
    return (
        <div className="space-y-5">
            <img src={data.photo} className="rounded-xl" />
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <p >{data.description1}</p>
            <p>{data.description2}</p>
            <button className="btn btn-outline btn-warning">Warning</button>
        </div>
    )
}

export default DoctorCard;