
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto py-8">
            <p className="text-yellow-500 mb-3">---  {subHeading} ---</p>
            <h3 className="text-4xl uppercase font-bold border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;