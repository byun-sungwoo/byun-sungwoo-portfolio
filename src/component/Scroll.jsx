import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/Scroll.css";

const Scroll = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	return (
		<div style={{position:"absolute", width:'100%', height:'100%'}}>
			<div className="grids">
				<div
					className="boxes"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
				>1</div>
				<div
					className="boxes"
					data-aos="fade-right"
					data-aos-duration="1200"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
				>2</div>
				<div
					className="boxes"
					data-aos="fade-right"
					data-aos-duration="1400"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
				>3</div>
				<div
					className="boxes"
					data-aos="fade-right"
					data-aos-duration="1600"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
				>4</div>
			</div>
		</div>
	)
}

export default Scroll;