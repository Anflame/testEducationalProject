import React, { FC } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage: FC = () => {
  const { id } = useParams();
  return <div data-testid="user-page">USER DETAILS PAGE {id}</div>;
};

export default UserDetailsPage;
