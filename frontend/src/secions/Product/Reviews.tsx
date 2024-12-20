import RatingCard from "../../components/Product/RatingCard";
import ReviewForm from "../../components/Product/ReviewForm";
import Title from "../../components/shared/Title";
// import ReviewCard from "../../components/Product/ReviewCard";
import { IsReviewed, RatingSet, reviews } from "../../api/product.api";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import ReviewCard from "../../components/Product/ReviewCard";
import Loading from "../../components/shared/Loading";

// import Stars from "../../components/Home/Stars";

const Reviews = (props: {
  rating: RatingSet[];
  count: number;
  rate: number;
  is_reviewed: boolean;
  user_review: IsReviewed | null;
  pid: string | null;
  name: string | null;
}) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["reviews"],
    queryFn: ({ pageParam }) => reviews({ pid: props.pid, cursor: pageParam }),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.next,
  });

  return (
    <div className="border-t-[1px] mt-[50px]">
      <div className="custom-container py-[20px]">
        <Title
          title={`${props.count} Review(s) for ${props.name}`}
          extra="text-[22px]"
        />
        <div className="flex gap-5 flex-col lg:flex-row">
          {/* Left Side */}
          <RatingCard
            rateSet={props.rating}
            count={props.count}
            rating={props.rate}
          />
          {/* Right Side */}
          <div className="w-full ">
            {/* Reviews */}
            <div className="w-full ">
              <div className="flex flex-col gap-3   pb-[10px] review-bg min-h-max  ">
                {/* {props.review.map((r) => (
                  <ReviewCard {...r} key={r.id} />
                ))} */}
                {status === "pending" ? (
                  <p>
                    <Loading />
                  </p>
                ) : status === "error" ? (
                  <p>Error: {error?.message}</p>
                ) : (
                  <>
                    {data.pages.map((group, i) => (
                      <React.Fragment key={i}>
                        {group.results.map((rev) => (
                          <ReviewCard {...rev} key={rev.id} />
                        ))}
                      </React.Fragment>
                    ))}
                    <div>
                      {isFetching && !isFetchingNextPage ? "Fetching..." : null}
                    </div>
                  </>
                )}
              </div>
              <div className="w-full flex justify-center ">
                <div className="btn btn-link text-primary text-[16px]">
                  <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                  >
                    {isFetchingNextPage ? (
                      <Loading />
                    ) : hasNextPage ? (
                      "See More"
                    ) : (
                      "Nothing more"
                    )}
                  </button>
                </div>
              </div>
            </div>
            {/* Add and Edit Review */}

            {props.is_reviewed ? (
              <ReviewForm
                edit={true}
                rating={props.user_review!.rating}
                review={props.user_review?.review}
                pid={props.pid || ""}
                id={props.user_review?.id || ""}
              />
            ) : (
              <ReviewForm edit={false} rating={0} pid={props.pid || ""} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
