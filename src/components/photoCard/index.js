import React, {Fragment, useEffect, useState, useRef} from "react";
import {Article, ImgWrapper, Img, Button} from "./styles";
import { MdFavoriteBorder}  from "react-icons/md";

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {

	const element = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		Promise.resolve(
			typeof window.IntersectionObserver !== "undefined"
			? window.IntersectionObserver
			: import("Intersection-observer")
			).then(() => {
				const observer = new window.IntersectionObserver((entries)=> {
					const { isIntersecting } = entries[0];
					if (isIntersecting) {
						setShow(true);
					} else {
						setShow(false);
					}
				});
				observer.observe(element.current)
			})
	}, [element]);

	return(
		<Article ref={element}>
			{
				show && <Fragment> 
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} />
						</ImgWrapper>
					</a>

					<Button>
						<MdFavoriteBorder size="32px"/>{likes} likes
					</Button>
				</Fragment>
			}
			
		</Article>
	)
}