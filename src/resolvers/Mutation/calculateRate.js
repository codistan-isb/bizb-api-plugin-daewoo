import ReactionError from "@reactioncommerce/reaction-error";

export default async function calculateRate(parent,args, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const calculateRate = await context.mutations.calculateRate(
    context,
    args
  );
  console.log("calculateRate", calculateRate);
  if (calculateRate) {
    return calculateRate;
  } else {
    return null;
  }
}
