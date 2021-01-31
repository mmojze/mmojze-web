import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
      <div>

        <div className="md:container lg:container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 gap-y-5 w-auto h-auto p-5 rounded-xl text-center font-sans fade-in" >
            <div className="font-semibold col-span-2 text-5xl text-center border-gray-700 border-b-2 md:border-b-0 lg:border-b-0 p-2">
                Follow me
            </div>
            <a href="https://www.linkedin.com/in/matiasmojze/">
            <FaLinkedin className="w-14 h-14 mx-auto mr-4 lg:mr-3 md:mr-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></FaLinkedin>
            </a>
            <a href="https://github.com/mmojze/">
            <FaGithubSquare className="w-14 h-14 mx-auto mr-36 lg:-ml-2 md:-ml-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"></FaGithubSquare>
            </a>
        </div>

        <div className="md:container lg:container mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 gap-y-5 w-auto h-auto p-16 rounded-xl text-center font-sans fade-in" >
            <div className="font-semibold col-span-2 text-5xl text-center border-gray-700 border-b-2 md:border-b-0 lg:border-b-0 p-2">
                Interested in hiring me?
            </div>
            <div className="font-semibold col-span-2 text-2xl md:text-4x1 lg:text-4x1 text-center mx-auto">
                Get in touch: <a href="mailto:mojze.dev@gmail.com">mojze.dev@gmail.com</a>
            </div>
        </div>

      </div>
    )
  }