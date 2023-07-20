import React, { useState } from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { object, string } from "yup";
import { Select } from "antd";
//fetch data (RTK)
import {
  useGetOptionsCatsQuery,
  useGetPropertiesCatsQuery,
} from "@/api/services/packagesApi";
//shared components
import TextError from "../shared/TextError";
import SelectSearch from "../shared/SelectSearch";

const FormSearch = ({ allCats, setDataForm }) => {
  const { Option } = Select;
  //start values filter search
  const initialValues = {
    categorys: "",
    sub_category: "",
    properties: "",
    other: "",
    type: "",
    option: "",
  };
  console.log(initialValues);
  //handel filter search
  const onSubmit = (data, actions) => {
    setDataForm(data);
    actions.resetForm({ data: "" });
  };
  //handel validation error
  const validationSchema = object().shape({
    categorys: string().required("required"),
    sub_category: string().required("required"),
  });

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
              const { field, form } = props;
              const dataCategories = allCats?.data?.data?.categories;
              return (
                <div>
                  <label>Main Category</label>
                  <SelectSearch name={field.name} formHandler={form}>
                    {dataCategories?.map((option) => {
                      return (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      );
                    })}
                  </SelectSearch>
                  <ErrorMessage name="categorys" component={TextError} />
                </div>
              );
            }}
          </Field>
          {/*sub category */}
          <Field name="sub_category" as="select">
            {(props) => {
              const { field, form } = props;
              const dataCategories = allCats?.data?.data?.categories;
              console.log(formik, "formik.values");
              return (
                <div>
                  <label> Sub Category</label>
                  <SelectSearch name={field.name} formHandler={form}>
                    {formik.values.categorys != "" &&
                      dataCategories
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
                  </SelectSearch>
                  <ErrorMessage name="sub_category" component={TextError} />
                </div>
              );
            }}
          </Field>
          {/*sub properties */}
          {formik.values.sub_category != "" && (
            <Field name="properties" as="select">
              {(props) => {
                const { field, form } = props;
                const idSubCategory = formik.values.sub_category;
                const properties = useGetPropertiesCatsQuery(idSubCategory);
                const dataProperties = properties?.data?.data;
                return (
                  <div>
                    <label>process type </label>
                    <SelectSearch name={field.name} formHandler={form}>
                      {dataProperties?.map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                      <Option key="other" value="other">
                        other
                      </Option>
                    </SelectSearch>
                  </div>
                );
              }}
            </Field>
          )}
          {/*other inbut */}
          {formik.values.properties === "other" && (
            <div className="form-control">
              <label>Other</label>
              <Field type="text" name="other" />
            </div>
          )}
          {/*obtions select */}
          {formik.values.properties === "" ? (
            ""
          ) : formik.values.properties === "other" ? (
            ""
          ) : (
            <Field name="type" as="select">
              {(props) => {
                const { field, form } = props;
                const idSubCategory = formik.values.sub_category;
                const dataProperties = useGetPropertiesCatsQuery(idSubCategory);
                const getType = dataProperties?.data?.data;
                const filterType = getType?.filter(
                  (item) => item.id === formik.values.properties
                )[0];

                return (
                  <div>
                    <label>{filterType?.name}</label>
                    <SelectSearch name={field.name} formHandler={form}>
                      {filterType?.options.map((item) => {
                        return (
                          <Option key={item.id} value={item.id}>
                            {item.name}
                          </Option>
                        );
                      })}
                    </SelectSearch>
                  </div>
                );
              }}
            </Field>
          )}
          {/*more selection */}
          {formik.values.type != "" && (
            <Field name="option" as="select">
              {(props) => {
                const { form, field } = props;
                const idOptions = formik.values.type;
                const dataOptions = useGetOptionsCatsQuery(idOptions);
                const getOption = dataOptions?.data?.data;
                return (
                  <>
                    {getOption?.map((item, index) => {
                      return (
                        <div key={item.id}>
                          <label>{item?.name}</label>
                          <SelectSearch name={field.name} formHandler={form}>
                            {item?.options?.map((details) => {
                              return (
                                <Option key={details.id} value={details.id}>
                                  {details.name}
                                </Option>
                              );
                            })}
                          </SelectSearch>
                        </div>
                      );
                    })}
                  </>
                );
              }}
            </Field>
          )}
          <button type="submit">search</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormSearch;
