

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/african-maintenance-male-have-problem-when-he-checking-car-service-via-insurance-system-automobile-repair-check-up-center_73622-2247.jpg?w=740" className="w-full h-[500px]" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-end gap-5 bottom-8 right-8">
                    <a href="#slide4" className="btn btn-circle text-white border-none hover:bg-[#FF3811] bg-opacity-30">❮</a>
                    <a href="#slide2" className="btn btn-circle text-white border-none hover:bg-[#FF3811] bg-opacity-30">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;