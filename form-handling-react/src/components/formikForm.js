import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  userName: Yup.string().required("User Name is required"),
  email: Yup.string()
    .email("Email characters are Invalid")
    .required("Email is required"),
  password: Yup.string()
    .max(15, "Password should not exceed 15 characters")
    .required("Password is required"),
});

export const formikForm = () => (
  <Formik
    initialValues={{ userName: "", email: "", password: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {() => (
      <Form>
        <Field type="text" placeholder="User Name" name="userName" />
        <ErrorMessage name="userName" component="div" />

        <Field type="email" placeholder="Email" name="email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" placeholder="Password" name="password" />
        <ErrorMessage name="password" component="div" />
      </Form>
    )}
  </Formik>
);
