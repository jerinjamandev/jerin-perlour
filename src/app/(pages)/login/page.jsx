import Link from 'next/link'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Pinkbtn from '../../components/Pinkbtn';

const Login = () => {
    return (
        <main>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-3xl font-bold mb-6 text-slate-700">Login</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="w-full border-gray-300 rounded-md p-2"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                className="w-full border-gray-300 rounded-md p-2"
                                placeholder="********"
                            />
                        </div>

                        <Pinkbtn label="Login" width="w-full" />

                        <p className='text-slate-700 py-2 text-sm'>New to here? <Link className='text-blue-500 hover:underline' href="/register">Register</Link></p><br />

                        <hr /><br />
                        <div className='flex justify-center items-center space-x-4'>
                            <FcGoogle className='w-10 h-10 cursor-pointer hover:scale-110 duration-500' />
                            <p className='text-xl text-slate-500 font-bold'>|</p>
                            <FaFacebook className='w-10 h-10 cursor-pointer hover:scale-110 duration-500 text-blue-500' />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login