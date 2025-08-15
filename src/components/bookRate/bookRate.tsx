import { ReactNode } from "react";

interface IProps{
    rating: number;
}

export default function BookRate({rating}: IProps){
    const stars: ReactNode[] = [];
    
    while (rating >= 1) {
        rating--;
        stars.push(<i key={rating} className="fa fa-star"></i>)
        if (rating === 0.5){
            stars.push(<i key='half' className="fa fa-star-half"></i>)
        }
    }

    ;

    return (
        <div className="text-yellow-400">
            {stars.map(i => i)}
        </div>
    )
}