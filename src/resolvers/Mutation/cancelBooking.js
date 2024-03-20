import ReactionError from "@reactioncommerce/reaction-error";

export default async function cancelBooking(parent,args, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const cancelBooking = await context.mutations.cancelBooking(
    context,
    args
  );
  console.log("cancelBooking", cancelBooking);
  if (cancelBooking) {
    return cancelBooking;
  } else {
    return null;
  }
}
