function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="User"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 mx-auto"
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
