import UpdateAlbum from '../components/UpdateAlbum';


const UpdateExistingAlbum = ({ query }) => (
  <div>
    <UpdateAlbum id={query.id} />
  </div>
)

export default UpdateExistingAlbum;