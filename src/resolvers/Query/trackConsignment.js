import ReactionError from "@reactioncommerce/reaction-error";

export default async function trackConsignment(parent, args, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const trackConsignment = await context.queries.trackConsignment(
    context,
    args
  );
  console.log("apiGetAllCitiesSwiftResponse", trackConsignment);
  if (trackConsignment) {
    return trackConsignment;
  } else {
    return null;
  }
}
