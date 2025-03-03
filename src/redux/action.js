import axios from "axios";

export const getRandomPhotos = () => async (dispatch) => {

    try {

        dispatch({ type: "randomPhotoRequest" });

        const url = `https://api.unsplash.com/photos/random/?count=12&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;

        const { data } = await axios.get(url);

        const res = {
            data,
        };

        dispatch({ type: "randomPhotoSuccess", payload: res });

    } catch (error) {

        dispatch({ type: "randomPhotoFail", payload: error.response.data.message });

    }
};


export const searchPhotos = (query, page = 1) => async (dispatch) => {

    try {

        dispatch({ type: "searchRequest" });
        // & page=${ page }&per_page=${ perPage }

        const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;

        const { data } = await axios.get(url);

        const res = {
            data,
        };
        console.log(data);

        dispatch({ type: "searchSuccess", payload: res });

    } catch (error) {

        dispatch({ type: "searchFail", payload: error.response.data.message });

    }
};

export const searchPhotoById = (id) => async (dispatch) => {

    try {

        dispatch({ type: "searchByIdRequest" });

        const url = `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`;

        const { data } = await axios.get(url);

        const res = {
            data
        };

        dispatch({ type: "searchByIdSuccess", payload: res });


    } catch (error) {

        dispatch({ type: "searchByIdFail", payload: error.response.data.message });

    }
}

