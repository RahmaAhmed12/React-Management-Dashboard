import i18next from "i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lang", lng);

    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };
  const currentLang =
    languages.find((lang) => lang.code === i18next.language)?.label ||
    "English";

  return (
    <div>
      <button
        className="text-sm rounded-md border border-light-grey-500 flex justify-between bg-red  gap-2 py-2 px-4"
        onClick={() => setOpen(!open)}
      >
        {currentLang}
      </button>

      {open && (
        <div className=" mt-2 w-40 bg-white border border-light-grey-300 rounded-md shadow-lg ">
          <ul className="p-2">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
              onClick={() => changeLanguage("en")}
            >
              English
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
              onClick={() => changeLanguage("ar")}
            >
              العربية
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
