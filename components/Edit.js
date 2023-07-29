const Edit = () => {
  return (
    <div>
    <div className="py-0 mb-4">
      <h1 className="pb-3">COUNTRY MANAGE</h1>
      <hr />
    </div>
      <div className="flex gap-5">
          <h3>Country Name</h3>
        <div className="flex flex-1 flex-col">
          <input
            type="text"
            className="border outline-none border-gray-300 py-1 rounded mb-1"
            width={"70%"}
          />
          <button className="w-fit bg-blue-700 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
