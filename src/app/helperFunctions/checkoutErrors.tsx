import { addOrder } from "../reducer/loginSlice";

export default function onSubmit(
  { name, email, phone, address, county, town, code }: any,
  { setErrors, setPage, page, dispatch }: any
) {
  let errorsObj: any = {};
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (name.length <= 0) {
    errorsObj["name"] = "Name is required.";
  }
  if (!emailRegex.test(email)) {
    errorsObj["email"] = "Email is invalid.";
  }
  if (address.length <= 0) {
    errorsObj["address"] = "Name is required.";
  }
  if (county.length <= 0) {
    errorsObj["county"] = "County is required.";
  }
  if (town.length <= 0) {
    errorsObj["town"] = "Town is required.";
  }
  if (code.length <= 0) {
    errorsObj["code"] = "Postal code is required.";
  }
  if (phone.length <= 0) {
    errorsObj["phone"] = "Phone number is required.";
  }
  if (Object.keys(errorsObj).length > 0) {
    setErrors({ ...errorsObj });
    return;
  } else {
    setErrors({});
    dispatch(addOrder({ name, email, phone, address, county, town, code }));
    setPage({ ...page, value: 2, pages: ["cos", "date contact", "plata"] });
  }
}
