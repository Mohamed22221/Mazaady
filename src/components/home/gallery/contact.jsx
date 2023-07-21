import Image from "next/image";
import React from "react";
import SendIcon from "../../../assets/icon-send.svg";


const Contact = () => {
  return (
    <div className="shadow-box relative my-4 p-2 rounded-sm">
      <h3 className=" font-bold text-grayBoldColor">
        ارسال رسالة الى البائع
      </h3>
      <p className="text-grayColor max-sm:text-sm">
        يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
      </p>
      <div className="flex py-2">
          <input
            placeholder="اكتب المبلغ"
            className="w-[95%] border-2 px-2 py-1 mx-1 bg-grayColor  bg-opacity-10 text-grayColor rounded-[19px]"
          />
          <Image src={SendIcon} alt="Send" />

        </div>
    </div>
  );
};

export default Contact;
