import { BusinessData } from "@/types/business";
import {
  Button,
  Drawer,
  IconButton,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

interface IEditorSideBarProps {
  initalData: BusinessData;
  onUpdated: (data: BusinessData) => void;
}

export const EditorSideBar: FC<IEditorSideBarProps> = (props) => {
  const { register, handleSubmit } = useForm<BusinessData>({
    defaultValues: props.initalData,
  });

  const onUpdated = (data: BusinessData) => {
    props.onUpdated(data);
  };
  return (
    <>
        <div className="p-4 overflow-y-auto">
          <form onSubmit={handleSubmit(onUpdated)}>
            <div className="mb-4">
              <Input
                type="text"
                {...register("shopName", { required: true })}
                label="Shop Name"
                size="lg"
                color="blue"
              />
            </div>
            <div className="mb-4">
              <Textarea
                {...register("address", { required: true })}
                label="Address"
                size="lg"
                color="blue"
              />
            </div>
            <div className="mb-4">
              <Textarea
                {...register("description", { required: true })}
                label="Description"
                size="lg"
                color="blue"
              />
            </div>
            <div className="mb-4">
              <Input
                type="tel"
                {...register("contactNumber", { required: true })}
                label="Contact Number"
                size="lg"
                color="blue"
              />
            </div>
            <div className="text-center">
              <Button type="submit" color="blue">
                Submit
              </Button>
            </div>
          </form>
        </div>
    </>
  );
};
