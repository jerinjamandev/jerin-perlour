import MaxWidthWrapper from "@/app/lib/MaxWidthWrapper";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-pink-500 text-white px-4">
            <MaxWidthWrapper>
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Address</h3>
                            <p>Dhaka, Bangladesh</p><br />

                            <div className="flex space-x-4">
                                <a href="https://www.facebook.com/jerinjaman.jarin" target="_blank"> <FaFacebook className="h-8 w-8 hover:scale-110 duration-500" /></a>

                                <a href="https://www.linkedin.com/in/jerin-jaman/" target="_blank"> <FaLinkedin className="h-8 w-8 hover:scale-110 duration-500" /></a>

                                <a href="https://github.com/jerinjamandev" target="_blank"> <FaGithub className="h-8 w-8 hover:scale-110 duration-500" /></a>
                            </div> <br />

                            <p className=" text-gray-300 text-sm">
                                &copy; {currentYear} Jerin Jaman. All rights reserved.
                            </p>
                        </div>


                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Company</h3>
                            <ul>
                                <li>About us</li>
                                <li>About</li>
                                <li>Project</li>
                                <li>Our Team</li>
                                <li>Terms Conditions</li>
                                <li>Submit Listing</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li>Rentals</li>
                                <li>Sales</li>
                                <li>Contact</li>
                                <li>Our blog</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Lorem Ipsum</h3>
                            <p>
                                This is a custom text that you can replace with your own content. Feel free to add any information
                                relevant to your website or project.
                            </p><br />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
