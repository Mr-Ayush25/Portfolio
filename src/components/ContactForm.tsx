"use client";
import React from "react";
import toast from "react-hot-toast";
import { LuLoader2 } from "react-icons/lu";

type formDetails = {
  name: string;
  email: string;
  profession: string;
  contact: number | string;
  message: string;
};

const ContactForm = () => {
  // To store form data
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState<formDetails>({
    name: "",
    email: "",
    profession: "",
    contact: "",
    message: "",
  });

  // to handle chage of input
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // On submission of Form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/registerMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data && data.success) {
      setFormData({
        name: "",
        email: "",
        profession: "",
        contact: "",
        message: "",
      });
      setIsLoading(false);
      toast.success(data.message, {
        duration: 4000,
        className: "text-sm",
      });
    } else {
      setIsLoading(false);
      toast.error("Unable to send Mail. Check all fields again!", {
        duration: 4000,
        className: "text-sm",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto mx-auto w-full md:w-[600px] flex flex-col justify-between gap-8 lg:gap-10 rounded-xl py-7  lg:py-14 lg:px-10 lg:shadow-lg lg:hover:shadow-xl lg:hover:-translate-y-1 shadow-gray-400  dark:shadow-gray-400 lg:hover:shadow-gray-600 dark:lg:hover:shadow-gray-700 transition-all duration-200 ease-in-out"
    >
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        required
        onChange={handleChange}
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="email"
        placeholder="Email here"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="text"
        placeholder="Profession"
        name="profession"
        required
        value={formData.profession}
        onChange={handleChange}
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <input
        type="text"
        placeholder="Contact"
        name="contact"
        required
        value={formData.contact}
        onChange={handleChange}
        className="placeholder:text-gray-700 px-4 py-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent "
      />
      <textarea
        name="message"
        placeholder="Message here ..."
        maxLength={200}
        required
        value={formData.message}
        onChange={handleChange}
        className="pl-4 pt-2 border-b-2 border-b-gray-600 text-xl outline-none bg-transparent h-auto overflow placeholder:text-gray-700"
      ></textarea>
      <button
        type="submit"
        className="text-xl flex justify-center items-center gap-3 lg:text-2xl font-bold mt-4 bg-white py-4 px-6 rounded-full hover:tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out group placeholder:text-gray-700"
      >
        Submit {isLoading && <LuLoader2 className="text-md animate-spin" />}
      </button>
    </form>
  );
};

export default ContactForm;
