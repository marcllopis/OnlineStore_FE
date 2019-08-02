import Link from 'next/link';
import Albums from '../components/Albums';

const Album = props => (
  <div>
    <Link href="/create-album">
      <a>Create new album</a>
    </Link>
    <br />
    <Albums />
  </div>
)

export default Album;