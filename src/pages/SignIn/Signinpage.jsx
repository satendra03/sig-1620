import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorPhone, setErrorPhone] = useState("");
  const [errorAge, setErrorAge] = useState("");

  const handleChangePhone = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 10) {
      setErrorPhone(
        newValue.length === 10 ? "" : "Phone number must be exactly 10 digits."
      );
    } else {
      setErrorPhone("Please enter only digits.");
    }
  };

  const handleChangeAge = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 3) {
      setErrorAge(newValue.length > 0 ? "" : "Age is required.");
    } else {
      setErrorAge("Please enter a valid age.");
    }
  };

  const onSubmit = async (data) => {
    const phoneNumberWithCode = `+91${data.phoneNumber}`;
    let toastId = toast.loading("Processing..");

    try {
      await axios
        .post("http://192.168.1.40:5000/auth/signup", {
          ...data,
          phoneNumber: phoneNumberWithCode,
        })
        .then(() => {
          toast.success("Sign Up Successful", { id: toastId });
          navigate("/login");
        });
      // Uncomment this to navigate after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      toast.error("Sign Up Failed", { id: toastId });
    }
  };

  return (
    <div className="signup-page mt-10 px-20 py-10 h-screen w-screen">
      <div className="container h-full py-10">
        <div className="main-content w-full px-56 flex flex-col items-center justify-center">
          <div className="heading text-center">
            <h2 className="text-3xl mb-9 font-semibold">Sign Up Page</h2>
          </div>
          <div className="form w-96">
            <form className="w-full p-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  className="mb-1"
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
                <br />
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  className="mb-1"
                  type="text"
                  id="phoneNumber"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    onChange: handleChangePhone,
                  })}
                  placeholder="Enter 10-digit phone number"
                  maxLength={10}
                />
                {errorPhone && <p className="text-red-500">{errorPhone}</p>}
                <br />
                <Label htmlFor="age">Age</Label>
                <Input
                  className="mb-1"
                  type="text"
                  id="age"
                  {...register("age", {
                    required: "Age is required",
                    onChange: handleChangeAge,
                  })}
                  placeholder="Enter your age"
                />
                {errorAge && <p className="text-red-500">{errorAge}</p>}
                <br />
                <Label htmlFor="gender">Gender</Label>
                <select
                  id="gender"
                  {...register("gender", { required: "Gender is required" })}
                  className="mb-5 w-full p-2 border rounded"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500">{errors.gender.message}</p>
                )}
                <br />
                <Label htmlFor="password">Password</Label>
                <Input
                  className="mb-1"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <div className="button w-full flex justify-center items-center">
                  <Button className="w-fit mt-3" type="submit">
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
