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
  const apiGetAllCitiesSwiftResponse =
    await context.queries.apiGetAllCitiesSwift(context, args);
  console.log("apiGetAllCitiesSwiftResponse", apiGetAllCitiesSwiftResponse);
  if (apiGetAllCitiesSwiftResponse) {
    return apiGetAllCitiesSwiftResponse;
  } else {
    return null;
  }
}
