import React from "react";
import { useForm } from "react-hook-form";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const API = "http://localhost:3000/data";

  const AddData = async (data) => {
    try {
      await axios.post(API, data);
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin">
      <div className="container">
        <div className="adminContainer"></div>
        <form onSubmit={handleSubmit(AddData)}>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Cat name"
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <input
            type="text"
            {...register("url", { required: "Photo link is required" })}
            placeholder="Link a photo"
            className={errors.url ? "input-error" : ""}
          />
          {errors.url && <p className="error">{errors.url.message}</p>}

          <input
            type="text"
            {...register("color", { required: "Cat color is required" })}
            placeholder="Cat color"
            className={errors.color ? "input-error" : ""}
          />
          {errors.color && <p className="error">{errors.color.message}</p>}

          <input
            type="text"
            {...register("age", {
              required: "Age is required",
              pattern: { value: /^[0-9]+$/, message: "Age must be a number" },
            })}
            placeholder="Age of the cat"
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <p className="error">{errors.age.message}</p>}

          <input
            type="text"
            {...register("price", {
              required: "Price is required",
              pattern: { value: /^[0-9]+$/, message: "Price must be a number" },
            })}
            placeholder="Cat price"
            className={errors.price ? "input-error" : ""}
          />
          {errors.price && <p className="error">{errors.price.message}</p>}

          <button type="submit" className="addButton">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
