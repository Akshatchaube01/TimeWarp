import image from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Custom404 = () => {
	const [counter, setCounter] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (counter > 0) {
			const timer = setTimeout(() => setCounter(counter - 1), 1000);
			return () => clearTimeout(timer);
		} else {
			navigate("/");
		}
	}, [counter, navigate]);
	return (
		<>
			<div className='flex items-center justify-center h-screen w-full bg-custom-bg bg-cover text-white md:flex-row flex-col '>
				<div className='flex justify-center items-start flex-col h-auto text-center md:text-left'>
					<h1 className='text-4xl md:text-5xl font-semibold my-10'>
						Oops!! You ran out of Oxygen.
					</h1>
					<p className='text-xl text-gray-300 font-semibold'>
						The page you are looking for is now beyond our reach.
					</p>
					<p className='text-xl text-gray-300 font-semibold hidden md:block'>
						Lets get you ..{" "}
					</p>
					<h1 className='my-10 text-xl font-semibold w-full'>
						Back Home in {counter} seconds ..{" "}
					</h1>
				</div>
				<div>
					<img
						src={image}
						alt=''
						className='absolute right-48 md:top-32 md:right-60 md:w-60 w-40 z-10'
					/>
					<h1 className=' text-[10rem] md:text-[17rem] font-bold'>404</h1>
				</div>
			</div>
		</>
	);
};

export default Custom404;
