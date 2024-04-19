import LoginForm from "@/components/login/login-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <div>
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-2xl font-bold cursor-pointer text-karga-renk">
                kargakarga
              </h1>
              <div className="hidden md:flex justify-around space-x-4">
                <a href="#" className="hover:text-karga2 text-gray-700">
                  Home
                </a>
                <a href="#" className="hover:text-karga2 text-gray-700">
                  About
                </a>
                <a href="#" className="hover:text-karga2 text-gray-700">
                  Service
                </a>
                <a href="#" className="hover:text-karga2 text-gray-700">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <Link
                href="/login"
                className="text-md font-bold text-gri4 hover:underline underline-offset-1"
              >
                LOGIN
              </Link>
              <Link
                href="/register"
                className="bg-karga2 px-4 py-2 rounded text-white hover:opacity-70 text-md font-bold"
              >
                SIGNUP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-screen flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 
          justify-center items-center bg-karga-renk"
        >
          
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-5xl font-sans">
              Welcome 
               to <br/>My Homepage
            </h1>
           
            <div className="flex justify-center lg:justify-start mt-6">
              <Link
                href="/register"
                className="hover:bg-karga2 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-karga2 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center  space-y-8 bg-white">
          <div className="w-full flex items-center justify-center">
          <Image
              src="https://www.kargakarga.com/assets/images/loginPage/karga.svg"
              width={150}
              height={280}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
