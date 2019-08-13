import ShowAlbum from '../components/ShowAlbum';


const SingleAlbum = ({ query }) => (
  <div>
    <ShowAlbum id={query.id} />
  </div>
)

export default SingleAlbum;