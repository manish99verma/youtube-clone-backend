// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     fn(req, res, next);
//   } catch (error) {
//     res
//       .status(error.code || 500)
//       .json({ success: false, message: error.message });
//   }
// };

export const asyncHandler = (requestHandler) => (req, res, next) => {
  return Promise.resolve(requestHandler(req, res, next)).catch((err) =>
    next(err)
  );
};
