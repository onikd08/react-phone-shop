const Banner = () => {
  return (
    <div className="hero min-h-[calc(100vh/2)] bg-base-200 mt-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there!!</h1>
          <p className="py-6">
            Welcome to React Phone Shop. Here, you can check our wide range of
            latest phones, add them in your favorite list and checkout there
            price. All the best!!!
          </p>
          <button className="text-white rounded-lg p-4 bg-gradient-to-tr from-pink-600 to-pink-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
