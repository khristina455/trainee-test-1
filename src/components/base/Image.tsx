import * as React from "react";

export default (props) => {
	const { className, src, width, height } = props;
	const ref = React.useRef(null);

	React.useEffect(() => {
		ref.current.style.backgroundImage = `url(${src})`;
		ref.current.style.width = width + 'px';
		ref.current.style.height = height + 'px';
	}, []);
	
    return <div ref={ref} className={className}></div>;
};
