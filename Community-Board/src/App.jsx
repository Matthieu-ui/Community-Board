import './App.css'
import Nav from './components/Nav';

function App() {
  return (
    <div>
    <Nav />
    <div className="container mx-auto">
      <h1 className="title">Welcome to the Community Board</h1>
      <p className="mb-8">
        This is a community board where you can post your thoughts and ideas
        about the community.
      </p>
      <div className="my-4 grid justify-center">
        <a href="/posts" className="btn btn-primary">
          View Posts
        </a>

        <a href="/posts/new" className="btn btn-secondary">

          Create Post
        </a>
        </div>
    </div>
  </div>

  );
}

export default App
