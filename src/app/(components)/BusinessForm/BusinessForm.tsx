import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Input, Textarea, Button, Typography } from "@material-tailwind/react";
import { BusinessData } from "@/types/business";

const defaultBusiness: BusinessData = {
  shopName: "ร้านกาแฟโคซี่",
  address: 'เลขที่ 808/22 ถ. พหลโยธิน ตำบลเวียง อำเภอเมืองเชียงราย เชียงราย 57000',
  landingImageUrl: 'https://i.pinimg.com/564x/8e/b8/71/8eb871e702b44fa39d4bae621a645672.jpg',
  description:
    "ร้านกาแฟโคซี่มอบบรรยากาศที่อบอุ่นและกาแฟที่ดีที่สุดในเมือง เมล็ดกาแฟของเรานำเข้าจากฟาร์มที่ดีที่สุดทั่วโลก",
  reviewers: [
    {
      name: "สมชาย ใจดี",
      comment: "กาแฟอร่อยมาก บรรยากาศดีมาก!",
      rate: 5,
    },
    {
      name: "สมหญิง สุขสบาย",
      comment: "สถานที่สวยงามและการบริการดีมาก",
      rate: 4,
    },
    {
      name: "อนันต์ สุขใจ",
      comment: "เป็นที่ที่เหมาะแก่การพักผ่อนและดื่มกาแฟ",
      rate: 5,
    },
  ],
  contactNumber: "(555) 123-4567",
};

export interface IBusinessShopFormProps {
  onSubmit: (data: BusinessData) => void;
}

const BusinessShopForm: React.FC<IBusinessShopFormProps> = (props) => {
  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: defaultBusiness,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "reviewers",
  });

  const landingImageUrl = watch("landingImageUrl");

  const onSubmit = (data: BusinessData) => {
    props.onSubmit(data);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Typography variant="h4" className="text-center mb-6">
        Business Shop Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
            {...register("landingImageUrl", { required: true })}
            label="Landing Image URL"
            size="lg"
            color="blue"
          />
          {landingImageUrl && (
            <div className="mt-4">
              <Typography variant="h6">Image Preview:</Typography>
              <img
                src={landingImageUrl}
                alt="Landing Preview"
                className="mt-2 max-w-full h-auto border rounded"
              />
            </div>
          )}
        </div>
        <div>
          <Typography variant="h5" className="mb-2">
            Reviewers
          </Typography>
          {fields.map((item, index) => (
            <div key={item.id} className="mb-4 border p-2 rounded">
              <div className="mb-2">
                <Input
                  type="text"
                  {...register(`reviewers.${index}.name`, { required: true })}
                  label={`Reviewer ${index + 1} Name`}
                  size="lg"
                  color="blue"
                />
              </div>
              <div className="mb-2">
                <Textarea
                  {...register(`reviewers.${index}.comment`, { required: true })}
                  label={`Reviewer ${index + 1} Comment`}
                  size="lg"
                  color="blue"
                />
              </div>
              <div className="mb-2">
                <Input
                  type="number"
                  {...register(`reviewers.${index}.rate`, {
                    required: true,
                    min: 0,
                    max: 5,
                  })}
                  label={`Reviewer ${index + 1} Rating (0-5)`}
                  size="lg"
                  color="blue"
                />
              </div>
              <Button
                type="button"
                color="red"
                size='sm'
                onClick={() => remove(index)}
                className="mt-2"
              >
                Remove Reviewer
              </Button>
            </div>
          ))}
          <Button
            type="button"
            color="green"
            size='sm'
            onClick={() =>
              append({ name: "", comment: "", rate: 0 })
            }
            className="mb-4"
          >
            Add Reviewer
          </Button>
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
  );
};


export default BusinessShopForm;
