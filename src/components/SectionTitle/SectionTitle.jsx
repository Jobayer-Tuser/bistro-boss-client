const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-5/12 mx-auto my-10 md:text-xl sm:text-sm mt-0 max-md:w-4/5 pt-5">
            <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="uppercase border-y-4 py-4 mb-5 text-4xl border-gray-400 text-slate-800 max-md:text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;