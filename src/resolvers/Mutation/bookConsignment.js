import ReactionError from "@reactioncommerce/reaction-error";

export default async function bookConsignment(parent, { input }, context, info) {
  // console.log("input", input);
  if (context.user === undefined || context.user === null) {
    throw new ReactionError(
      "access-denied",
      "Unauthorized access. Please Login First"
    );
  }
  const bookConsignment = await context.mutations.bookConsignment(
    context,
    { input }
  );
  console.log("bookConsignment", bookConsignment);
  if (bookConsignment) {
    return bookConsignment;
  } else {
    return null;
  }
}
