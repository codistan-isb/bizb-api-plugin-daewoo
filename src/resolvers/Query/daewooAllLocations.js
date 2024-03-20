import ReactionError from "@reactioncommerce/reaction-error";

export default async function daewooAllLocations(
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
  const daewooAllLocations =
    await context.queries.daewooAllLocations(context, args);
  console.log("apiGetAllCitiesSwiftResponse", daewooAllLocations);
  if (daewooAllLocations) {
    return daewooAllLocations;
  } else {
    return null;
  }
}
