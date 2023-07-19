import React from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { object, string } from "yup";
import TextError from "../shared/TextError";
import { Select } from "antd";

const FormSearch = ({ allCats }) => {
  const { Option } = Select;
  const initialValues = {
    categorys: "",
  };
  console.log(initialValues);
  const onSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm({ data: "" });
  };
  const validationSchema = object().shape({
    categorys: string().required("required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="wrapper-style">
        <h3>Search By :</h3>
        <Field name="categorys" as="select">
          {(props) => {
            const { field, form, meta } = props;
            console.log(props);
            return (
              <div>
                <label>Main Category</label>
                <>
                  <Select
                    name={field.name}
                    onChange={(value) => form.setFieldValue("categorys", value)}
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
                {meta.error && meta.touched ? (
                  <TextError>{meta.error}</TextError>
                ) : null}
              </div>
            );
          }}
        </Field>
        <ErrorMessage name="scategorys" component={TextError} />

        <button type="submit">search</button>
      </Form>
    </Formik>
  );
};

export default FormSearch;
