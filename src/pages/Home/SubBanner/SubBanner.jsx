import  './SubBanner.css';

const SubBanner = () => {
    return (
        <div id="sub-banner" className='py-20 block sm:hidden md:hidden lg:block'>
            <div id='sub-banner-text' className='w-2/3 mx-auto h-[auto] px-20 py-14'>
                <h2 className='uppercase text-4xl text-center text-black font-light'>bistro boss</h2>
                <p className='text-center text-black mt-5 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore, rem recusandae minus expedita fugit illo suscipit. Doloremque magnam accusamus velit neque atque itaque eos id. Ipsa, blanditiis necessitatibus natus odit molestias architecto voluptatem soluta, exercitationem aliquid aliquam nisi, temporibus possimus quis. Eligendi nostrum quos dolor totam ratione pariatur voluptates ullam harum, commodi ex itaque aspernatur laborum, optio cupiditate quae enim assumenda, odio saepe molestiae reprehenderit consectetur deleniti sit dolore.</p>
            </div>
        </div>
    );
};

export default SubBanner;