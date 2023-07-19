import React from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { object, string } from "yup";
import TextError from "../shared/TextError";
import { Select } from "antd";

const FormSearch = ({ allCats }) => {
  const { Option } = Select;
  const initialValues = {
    categorys: "",
    sub_category: "",
  };
  console.log(initialValues);
  const onSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm({ data: "" });
  };
  const validationSchema = object().shape({
    categorys: string().required("required"),
    sub_category: string().required("required"),

  });
  console.log(Formik, "Formik");
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="wrapper-style">
          <h3>Search By :</h3>
          <Field name="categorys" as="select">
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <label>Main Category</label>
                  <>
                    <Select
                      name={field.name}
                      onChange={(value) =>
                        form.setFieldValue("categorys", value)
                      }
                      onBlur={() => form.setFieldTouched("categorys", true)}
                      value={form.values.categorys}
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.name ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.name ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.name ?? "").toLowerCase())
                      }
                    >
                      {allCats?.data?.data?.categories.map((option) => {
                        return (
                          <Option key={option.id} value={option.id}>
                            {option.name}
                          </Option>
                        );
                      })}
                    </Select>
                  </>
                  <ErrorMessage name="categorys" component={TextError}/>
                </div>
              );
            }}
          </Field>
          {/*sub category */}
          <Field name="sub_category" as="select">
            {(props) => {
              const { field, form } = props;
              return (
                <div>
                  <label>Sub Category </label>
                  <>
                    <Select
                      name={field.name}
                      onChange={(value) =>
                        form.setFieldValue("sub_category", value)
                      }
                      onBlur={() => form.setFieldTouched("sub_category", true)}
                      value={form.values.sub_category}
                      showSearch
                      style={{ width: 200 }}
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.name ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.name ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.name ?? "").toLowerCase())
                      }
                    >
                        
                      {formik.values.categorys != "" &&
                        allCats?.data?.data?.categories
                          .filter(
                            (item) => item.id === formik.values.categorys
                          )[0]
                          .children.map((child) => {
                            return (
                              <Option key={child.id} value={child.id}>
                                {child.name}
                              </Option>
                            );
                          })}
                    </Select>
                  </>
                  <ErrorMessage name="sub_category" component={TextError}/>

                </div>
              );
            }}
          </Field>
          <button type="submit">search</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
