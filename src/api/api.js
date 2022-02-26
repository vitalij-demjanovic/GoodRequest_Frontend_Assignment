import axios from "axios";


// export const serverShelter = async () => {
//     return fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
//         .then(res => res.json())
//         .then(data => data)
//         .catch(err => {
//             console.log(err)
//         })
// }


export const serverShelter = async () => {
    return axios.get('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
        .then(res => res.data)
        .catch(err => {
            console.log(err)
        })
}

export const serverSendForm = async (dataSend) => {
    return axios.post('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', dataSend)
        .then(res => res.data.messages)
        .catch((error) => {
            console.log(error);
        });
}