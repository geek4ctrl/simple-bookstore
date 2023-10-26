import React from "react";

const Button = (props: any) => {
    return (
        <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500" style={{ backgroundColor: "#E3E9F3", color: "#697384" }}>
            {props.children}
        </button>
    )
}

export default Button