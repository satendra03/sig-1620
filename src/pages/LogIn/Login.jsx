import { InputForm } from "@/components/customs/Form";
import Otp from "@/components/customs/Otp";
import { Form } from "@/components/ui/form";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

 
  


  const [value, setValue] = useState("");
  const [abha, setAbha] = useState("");
  const [error, setError] = useState("");
  const [errorAbha, setErrorAbha] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 10) {
      setValue(newValue);
      console.log(newValue);
      if (newValue.length === 10) {
        setError("");
      } else {
        setError("Number must be exactly 10 digits.");
      }
    } else {
      setError("Please enter only digits.");
    }
  };
  const handleChangeAbha = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) && newValue.length <= 10) {
      setAbha(newValue);
      console.log(newValue);
      if (newValue.length === 10) {
        setErrorAbha("");
      } else {
        setErrorAbha("Number must be exactly 10 digits.");
      }
    } else {
      setErrorAbha("Please enter only digits.");
    }
  };

  const onSubmit = (data) => {
    setOtpSent(true);
  };

  return (
    <>
      {
        <div className="main-page-login mt-10 px-20 py-10 h-screen w-screen">
          <div className="container h-full py-10">
            {!otpSent && (
              <div className="main-content w-full px-56 flex flex-col items-center justify-center">
                <div className="heading text-center">
                  <h2 className="text-3xl mb-9 font-semibold">Log in Page</h2>
                </div>
                <div className="form w-full">
                  <div className="grid w-full justify-center items-center gap-1.5">
                    <form
                      className="w-96 p-5"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Label className="" htmlFor="mobileNumber">
                        Mobile Number
                      </Label>
                      <Input
                        className="mb-1"
                        type="text"
                        id="mobileNumber"
                        value={value}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        required
                      />
                      {error && <p className="text-red-500">{error}</p>}
                      <br />
                      <Label htmlFor="aabha">AABHA ID</Label>
                      <Input
                        className="mb-2"
                        type="text"
                        id="aabha"
                        value={abha}
                        onChange={handleChangeAbha}
                        placeholder="Enter 10-digit mobile number"
                        maxLength={10}
                        required
                      />
                      {errorAbha && <p className="text-red-500">{errorAbha}</p>}
                      <div className="button w-full  gap-5 flex justify-center items-center">
                        <Button className="w-fit mt-3" type="submit">
                          Log in
                        </Button>
                        <Link to={'/signup'} ><Button variant={"secondary"}>Sign Up</Button></Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {otpSent && (
              <div className="otp-container w-full h-full flex items-center justify-center">
                <Otp />
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}

export default Login;
