import { FaArrowRight } from "react-icons/fa";

const Reservation = () => {
  return (
    <section className="bg-gray-100 pt-4 lg:pt-0">
      <div className="my-container">
        <div className="flex flex-col-reverse lg:grid  grid-cols-3">
          <div className="mx-3 lg:mx-0 lg:me-3">
            <div className="reservation-form">
              <h4 className="text-2xl font-bold my-4">Table Reservation</h4>
              <form>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input type="text" name="name" id="name" placeholder="Jhon Doe" className="px-4 py-2 border  outline-none border-none shadow-lg shadow-red-100 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="person" className="block text-gray-700 font-bold mb-2">
                    Person
                  </label>
                  <input type="text" name="person" id="person" placeholder="1 Person" className="px-4 py-2 border  outline-none border-none shadow-lg shadow-red-100 w-full" />
                </div>
                <div className="mb-2">
                  <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                    Date
                  </label>
                  <input type="date" name="date" id="date" className="px-4 py-2 border  outline-none border-none shadow-lg shadow-red-100 w-full" />
                </div>
                <button type="submit" className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline mb-3 flex items-center gap-2 mt-3">
                  Book A Table <FaArrowRight></FaArrowRight>
                </button>
              </form>
            </div>
          </div>
          <div className="relative ">
            <div className="absolute inset-0 overlay opacity-90 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 animate-gradient animation-duration-1000 animation-ease-in-out"></div>
            <div className="relative px-4 py-4">
              <h4 className="text-white text-2xl mb-3">Opening Hours</h4>
              <ul className=" list-none text-white space-y-4">
                <li className="flex justify-between">
                  <p>Monday</p>
                  <p>09:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Tuesday</p>
                  <p>10:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Wednesday</p>
                  <p>11:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Thursday</p>
                  <p>12:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Friday</p>
                  <p>14:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Saturday</p>
                  <p>14:00 - 18:00</p>
                </li>
                <li className="flex justify-between">
                  <p>Sunday</p>
                  <p>Closed</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:block">
            <img src="https://assignment-10-server-lbtoha.vercel.app/reservation" className="object-cover object-left object-contain h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
