import React, { useState } from "react";
import Sidebar from "../../../layouts/Sidebar/Sidebar";
import Swal from "sweetalert2";

export const HomeWorkUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
    } else {
      Swal.fire({
        icon: "error",
        title: "خطا!",
        text: "لطفاً فایل مورد نظر خود را انتخاب کنید.",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row max-md:hidden">
        <Sidebar />
        <main className="flex-1 flex-col p-4 md:p-8 max-md:hidden">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-4">تمرین اسکات</h2>
            <div
              className={`border-2 ${
                isHovered
                  ? "border-blue-600"
                  : selectedFile
                  ? "border-green-500"
                  : "border-blue-500"
              } border-dashed p-6 rounded-lg text-center transition-all`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`text-6xl mb-4 transition-all ${
                selectedFile
                  ? "text-green-500"
                  : isHovered
                  ? "text-blue-600"
                  : "text-blue-500"
              }`}>
                <i
                  className={`fa-solid ${
                    selectedFile
                      ? "fa-circle-check"
                      : "fa-cloud-arrow-up"
                  }`}
                ></i>
              </div>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="mb-4"
              />
              <p className="text-sm text-gray-500">
                فایل تمرین باید یکی از تایپ‌های زیر باشد و حجم بیشتر از ۵ مگابایت نباشد.
              </p>
              <p className="text-sm text-blue-500">JPG, PDF, JPEG</p>
              <button
                onClick={handleUpload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                آپلود
              </button>
            </div>
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-700">
                فایل انتخاب شده: {selectedFile.name}
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
