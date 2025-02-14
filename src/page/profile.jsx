import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useSelector } from "react-redux";

const Profile = () => {
    const { auth } = useSelector((state) => state.asset);
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email: </p>
                  <p>{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name: </p>
                  <p>{auth.user?.fullname}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem">phone number: </p>
                  <p>45545401</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality: </p>
                  <p>Indian</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">DOB: </p>
                  <p>45/54/5401</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
