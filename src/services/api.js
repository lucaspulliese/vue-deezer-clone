import axios from 'axios';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/';

export const fetchAlbumById = id => axiosjson(`album/${id}`);

export const fetchAlbumTracks = id => axiosjson(`album/${id}/tracks`);

export const fetchArtistById = (artistId = '') => axiosjson(`artist/${artistId}`);

export const fetchPlaylistById = id => axiosjson(`playlist/${id}`);

export const fetchPlaylistTracks = id => axiosjson(`playlist/${id}/tracks`);

export const fetchTrackById = trackId => axiosjson(`track/${trackId}`);

export const search = (query, params) =>
axiosjson('search', { q: 'track:"'+query+'"' }).then(result =>
  result.data.slice(0,8)
);

// custom function to get json results withs axios
export function axiosjson(url, params = {}) {

  return new Promise((resolve, reject) => {

    axios.get(`${API_URL}/${url}`, {
      params: params
    })
    .then(response => {
      resolve(response.data)
    })
    
  })

}
