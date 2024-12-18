import { useEffect, useState } from "react";
import Title from "../shared/Title";
import StarInput from "./StarInput";
import { useForm } from "react-hook-form";
import { reviewSchema, ReviewSchema } from "../../validations/auth.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview, updateReview } from "../../api/product.api";
import ToastMessage from "../shared/ToastMessage";

type Reviewtype = {
  edit: boolean;
  rating: number | 0;
  review?: string;
  pid: string | null;
  id?: string | null;
};

const ReviewForm = (props: Reviewtype) => {
  const [userRate, setUserRate] = useState(props.edit ? props.rating : 0);
  const postReviewMutation = useMutation({ mutationFn: postReview });
  const updateReviewMutation = useMutation({ mutationFn: updateReview });
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReviewSchema>({
    defaultValues: {
      product_id: "",
      rating: 1,
      review: "",
      id: "",
    },
    resolver: zodResolver(reviewSchema),
  });

  const reviewHandler = (values: ReviewSchema) => {
    if (props.edit) {
      // console.log("Edit", values);
      updateReviewMutation.mutate(values, {
        onSuccess: (res) => {
          queryClient.invalidateQueries({
            queryKey: ["product"],
          });
          setMsg(res.message);
        },
        onError: (err) => {
          setMsg(err.message);
          setErr(true);
        },
      });
    } else {
      // console.log("Add", values);
      postReviewMutation.mutate(values, {
        onSuccess: (res) => {
          queryClient.invalidateQueries({
            queryKey: ["product"],
          });
          console.log(res);
          setMsg(res.message);
        },
        onError: (err) => {
          console.log(err);
          setMsg(err.message);
          setErr(true);
        },
      });
    }
  };

  useEffect(() => {
    setValue("rating", userRate);
    setValue("review", props.edit ? props.review! : "");
    setValue("product_id", props.pid!);
    setValue("id", props.edit ? props.id! : "");
  }, [props, setValue, userRate]);
  return (
    <div className="w-full ">
      {msg && <ToastMessage msg={msg} err={err} />}
      <Title
        title={`${props.edit ? "Edit your review" : "Add a review"}`}
        extra="text-[25px]"
      />
      <p className="text-secondary-content text-[14px]">
        Required fields are marked *
      </p>
      {/* Form */}
      <form
        action=""
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(reviewHandler)}
      >
        {/* Rating */}

        <StarInput
          rateAction={setUserRate}
          rate={props.edit ? props.rating : 0}
          pid={props.pid}
        />
        <div className="text-[12px] text-red-500">
          <span>{errors.rating?.message}</span>
        </div>
        {/* Your Review */}
        <label className="form-control">
          <div className="label">
            <span className="label-text text-[16px]">Your Review *</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-32 "
            placeholder="Bio"
            {...register("review")}
          ></textarea>
        </label>
        <div className="text-[12px] text-red-500">
          <span>{errors.review?.message}</span>
          <span>{errors.product_id?.message}</span>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            className="btn w-full bg-primary text-[14px] text-white "
            value="Submit Review"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
