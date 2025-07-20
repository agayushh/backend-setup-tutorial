const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next);
  };
};

export { asyncHandler };

// ------------------------------------------------------------------------------------------
// THESE ALL ARE IMPORTANT BITS OF CODE GO THROUGH THEM
// ------------------------------------------------------------------------------------------
// const asyncHandler = () => {}
// const asyncHandler = (func) =>{() => {}}
// const asyncHandler = (func) =>() => {  we can write line 9 as this as well}
// const asyncHandler = () => () => {}

// const asyncHandler = (fn) => (req, res, next) => {
//   try {
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
