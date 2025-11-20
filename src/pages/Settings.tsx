import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  password: Yup.string().min(6, "Min 6 characters"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  address: Yup.string().required("Address required"),
  role: Yup.string().required("Select a role"),
});

export default function Settings() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader: any = new FileReader();
      reader.onloadend = () => setImagePreview(reader?.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="w-full p-4 rounded-2xl shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Profile Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
              address: "",
              twofa: false,
              role: "",
            }}
            validationSchema={ProfileSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ errors, touched, setFieldValue }) => (
              <Form className="space-y-4">
                {/* Profile Image */}
                <div className="flex flex-col items-start gap-3">
                  <Label className="mb-2">Profile Image</Label>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  {imagePreview ? (
                    <img src={imagePreview} alt="Preview" className="w-24 h-24 rounded-full object-cover" />
                  ) : <img src="/black-tshirt.png" className="w-24 h-24 rounded-full object-cover"/>}
                </div>

                {/* Name */}
                <div>
                  <Label className="mb-2">Name</Label>
                  <Field name="name" as={Input} placeholder="Enter name" />
                  {errors.name && touched.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <Label className="mb-2">Email</Label>
                  <Field name="email" as={Input} placeholder="Enter email" />
                  {errors.email && touched.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <Label className="mb-2">Phone</Label>
                  <Field name="phone" as={Input} placeholder="Enter phone" />
                  {errors.phone && touched.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                {/* Password */}
                <div>
                  <Label className="mb-2">Password</Label>
                  <Field name="password" type="password" as={Input} placeholder="Enter password" />
                </div>

                {/* Confirm Password */}
                <div>
                  <Label className="mb-2">Confirm Password</Label>
                  <Field name="confirmPassword" type="password" as={Input} placeholder="Confirm password" />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <Label className="mb-2">Address</Label>
                  <Field name="address" as={Input} placeholder="Enter address" />
                  {errors.address && touched.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                {/* Role Select */}
                <div>
                  <Label className="mb-2">Role</Label>
                  <Select onValueChange={(v) => setFieldValue("role", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && touched.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                </div>

                <Button type="submit" className="w-full">Save Changes</Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
