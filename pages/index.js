import Link from 'next/link';


const Home = props => (
  <div>
    HOME!
    <Link href="/list">
      <a>Go to list</a>
    </Link>
  </div>
)

export default Home;