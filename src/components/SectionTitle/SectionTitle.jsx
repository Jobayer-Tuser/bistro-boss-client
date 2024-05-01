const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-5/12 mx-auto my-10">
            <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="uppercase border-y-4 py-4 mb-5 text-4xl border-gray-400">{heading}</h3>
        </div>
    );
};

export default SectionTitle;