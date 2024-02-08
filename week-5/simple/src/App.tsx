
import { FaLinkedin } from "react-icons/fa";
import './App.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
function App() {


  return (
    <>

      <div className='basis-1/2 rounded-md border-2 border-sky-500'>
        <p className='text-5xl font-serif'>
          Deepansh Gupta

        </p>
        <p className='font-sans'>
          This is shit amount of work
          You can reach out to me at.<br />
          <a href="https://react-icons.github.io/react-icons/search/#q=github" target="_blank" >
            <button className=" mr-4">
              <FaLinkedin size={30} />
            </button>
          </a>


          <a href="https://react-icons.github.io/react-icons/search/#q=github" target="_blank">
            <button className=" mr-4">
              <FaInstagram size={30} />
            </button>
          </a><a href="https://react-icons.github.io/react-icons/search/#q=github" target="_blank">
            <button className=" mr-4">
              <FaGithubSquare size={30} />
            </button>
          </a>

        </p>
      </div>



    </>
  )
}

export default App
