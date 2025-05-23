import madMinute from "../assets/mad-minute.png";


export default function Projects() {


    return (
        <> 
            <section id="projects" className="min-h-screen p-8 bg-white flex flex-col items-center">
                <div className="flex flex-col gap-8 max-w-6xl">
                    {/* Project Card 1 - Screenshot Left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2 h-auto bg-gray-300 rounded-lg flex items-center justify-center">
                            <a href="/mad-minute" target="_blank" rel="noopener noreferrer">
                                <img src={madMinute} alt="Mad Minute Screenshot" className="w-full object-cover rounded-lg" />
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold mb-4">Mad Minute</h3>
                                <a href="/mad-minute" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-2">
                                    <span>Try It Out for Yourself</span>
                                    <i className="fas fa-arrow-right text-lg font-bold"></i>
                                </a>
                            </div>
                            <hr className="my-4 border-gray-300" />
                            <p className="text-gray-700 mb-4">
                                A fun math mini game that tests the user's quick skills to reach the target number.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Tailwind</li>
                                <li>Vite</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project Card 2 - Screenshot Right */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Screenshot Placeholder</span>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Gmail Cleaner</h3>
                            <p className="text-gray-700 mb-4">
                                This app allows its user to free up space more quickly.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project Card 3 - Screenshot Left */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Screenshot Placeholder</span>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">LinkedIn Connection Web</h3>
                            <p className="text-gray-700 mb-4">
                                This app allows its user to look for LinkedIn connections of your connections at other companies in a web format.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project Card 4 - Screenshot Right */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="w-full md:w-1/2 h-40 bg-gray-300 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">Screenshot Placeholder</span>
                        </div>
                        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">TBD</h3>
                            <p className="text-gray-700 mb-4">
                                A fun math mini game that tests the user's quick skills to reach the target number.
                            </p>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                                <li>TBD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}