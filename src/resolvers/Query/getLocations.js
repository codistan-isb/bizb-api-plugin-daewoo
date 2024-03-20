import ReactionError from "@reactioncommerce/reaction-error";

export default async function getLocations(
  parent,
 args,
  context,
  info
) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const getLocations =
    await context.queries.getLocations(context, args);
  console.log("apiGetAllCitiesSwiftResponse", getLocations);
  if (getLocations) {
    return getLocations;
  } else {
    return null;
  }
}
