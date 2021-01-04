import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export default function useFetchGifs(category) {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        async function loadImages(){
            const images = await getGifs(category);
            setState({
                data: images,
                loading: false,
            });
        }
        loadImages();
    }, [category]);

    return state;
}
