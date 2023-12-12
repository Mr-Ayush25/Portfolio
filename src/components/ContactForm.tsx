const ContactForm = () => {
  return (
    <form className="h-auto mx-auto w-full md:w-[600px] flex flex-col justify-between gap-8 lg:gap-10 rounded-xl py-7  lg:py-14 lg:px-10 lg:shadow-lg lg:hover:shadow-xl lg:hover:-translate-y-1 shadow-gray-400  dark:shadow-gray-400 lg:hover:shadow-gray-600 dark:lg:hover:shadow-gray-700 transition-all duration-200 ease-in-out">
      <input
        type="text"
        placeholder="Name"
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="email"
        placeholder="Email here"
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="text"
        placeholder="Profession"
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="text"
        placeholder="Contact"
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <textarea
        name="message"
        placeholder="Message here ..."
        maxLength={200}
        className="pl-4 pt-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent h-auto overflow placeholder:text-gray-700"
      ></textarea>
      <button
        role="submit"
        className="text-xl lg:text-2xl font-bold mt-4 bg-white py-4 px-6 rounded-full hover:tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out group placeholder:text-gray-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
