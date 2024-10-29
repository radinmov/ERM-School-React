import useTitle from "../../Componets/Hook/useTitle";
import { Sidebar } from "../../layouts/Sidebar/Sidebar";
import { Header } from "../../layouts/Header/Header";

export const Home = () => {
    useTitle("HomePage");
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <main className="flex-1 flex-col p-4 md:p-8">
                    <section className="flex flex-col flex-wrap gap-4 md:gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">نمایش برنامه کلاسی</h3>
                            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md">
                                برنامه هفتگی
                            </button>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">آها</h3>
                            <p className="text-center text-sm">اخبار جدید و تازه های گروه مختص بچه ها</p>
                            <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md">
                                اخبار و جراید
                            </button>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 bg-blue-500 p-6 text-white shadow-md rounded-lg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Xmz0bkfKQNfzJyPR3wCJeDDshgkEX5Hhww&s" />
                            <h3 className="text-lg font-bold">سامانه تیکتینگ</h3>
                            <p className="text-center text-sm">جهت درخواست پشتیبانی از سامانه تیکتینگ استفاده نمایید.</p>
                            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md">
                                سامانه تیکتینگ
                            </button>
                        </div>
                        {/* Add more cards for other features */}
                    </section>
                </main>
            </div>
        </div>
    );
};
