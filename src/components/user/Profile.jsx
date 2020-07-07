import React from "react";

const Profile = ({ currentUser }) => {
  const { email } = currentUser;
  return <div>email: {email}</div>;
};

export default Profile;
