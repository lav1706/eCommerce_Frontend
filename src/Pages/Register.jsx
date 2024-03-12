const Register = () => {
  return (
    <div
      className="w-screen h-screen relative 
   "
    >
      <img
        src="https://images.unsplash.com/photo-1622101865681-91085c46c890?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-screen h-screen bg-cover flex items-center justify-center;
        background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ) z-0 "
      />
      <div className="absolute z-30 w-2/5 p-5 bg-blue-200 top-[15%] left-[30%]  ">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input
            placeholder="name"
            type="text"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <input
            placeholder="username"
            type="text"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <input
            placeholder="last name"
            type="text"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />

          <input
            placeholder="Mobile No."
            type=""
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <input
            placeholder="password"
            type="password"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <input
            placeholder="confirm password"
            type="password"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <input
            placeholder="email"
            type="email"
            className="flex-1 min-w-[40%] ml-0 mr-2.5 mt-5 mb-0 p-2.5"
          />
          <span className="text-xs mx-0 my-5">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="w-2/5 bg-[teal] text-[white] cursor-pointer px-5 py-[15px] border-[none]">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
