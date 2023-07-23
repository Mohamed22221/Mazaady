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
  const [idProperties, seiIdProperties] = useState(0);
  const [idOptionsRTk, setIdOptionsRTK] = useState(0);
  //RTK Cats Query
  const properties = useGetPropertiesCatsQuery(idProperties);
  const dataOptions = useGetOptionsCatsQuery(idOptionsRTk);
  const { Option } = Select;
  //start values filter search
  const initialValues = {
    categorys: "",
    sub_category: "",
    properties: "",
    other: "",
    type: "",
    option: [""],
  };
  //handel filter search
  const onSubmit = (data, actions) => {
    setDataForm(data);
    actions.resetForm({ data: "" });
  };
  //handel validation error
  const validationSchema = object().shape({
    categorys: string().required("The categorys field is required "),
    sub_category: string().required("The sub categorys field is required "),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      dir="ltr"
    >
      {(formik) => (
      
        (
          <Form
            dir="ltr"
            lang="en"
            className="wrapper-style container mx-auto my-5 px-3 py-5 shadow-box rounded-[5px] border-t-[15px] border-mainColor "
          >
            <h3 className="text-[30px] my-2 font-bold">Search by Category </h3>
            <Field name="categorys" as="select" className="!w-[80px]">
              {(props) => {
                const { field, form } = props;
                const dataCategories = allCats?.data?.data?.categories;
                return (
                  <div>
                    <label className="font-semibold mt-1 text-grayBoldColor ">
                      Main Category<span className="text-red-500">* </span>
                    </label>
                    <SelectSearch
                      name={field.name}
                      formHandler={form}
                      loading={allCats.isLoading}
                      placeholder="select main categorys "
                    >
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
                return (
                  <div>
                    <label className="font-semibold mt-1 text-grayBoldColor ">
                      {" "}
                      Sub Category <span className="text-red-500">*</span>
                    </label>
                    <SelectSearch
                      name={field.name}
                      formHandler={form}
                      placeholder="select sub categorys "
                    >
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
                  seiIdProperties(idSubCategory);
                  const dataProperties = properties?.data?.data;
                  return (
                    <div>
                      <label className="font-semibold mt-1 text-grayBoldColor ">
                        process type{" "}
                      </label>
                      <SelectSearch
                        name={field.name}
                        formHandler={form}
                        loading={properties.isLoading}
                        placeholder="select process type "
                      >
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
              <div className="flex flex-col">
                <label className="font-semibold text-grayBoldColor mt-1 ">
                  Other
                </label>
                <Field
                  type="text"
                  name="other"
                  className="w-[92%] border-[1px] rounded-[5px] py-1 px-3 border-borderColor text-grayBoldColor "
                  placeholder="write other type"
                />
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
                  seiIdProperties(idSubCategory);
                  const getType = properties?.data?.data;
                  const filterType = getType?.filter(
                    (item) => item.id === formik.values.properties
                  )[0];

                  return (
                    <div>
                      <label className="font-semibold text-grayBoldColor mt-1">
                        {filterType?.name}
                      </label>

                      <SelectSearch
                        name={field.name}
                        formHandler={form}
                        loading={properties.isLoading}
                        placeholder="select type "
                      >
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
                  const { values } = form;
                  const { option } = values;
                  const idOptions = formik.values.type;
                  setIdOptionsRTK(idOptions);
                  const getOption = dataOptions?.data?.data;
                  return (
                    <>
                      {getOption?.map((item) => {
                        return (
                          <div key={item.id}>
                            <label className="font-semibold text-grayBoldColor ">
                              {item?.name}
                            </label>
                            {option.map((_, index) => {
                              return (
                                <SelectSearch
                                  key={index}
                                  name={`option[${index}]`}
                                  formHandler={form}
                                  placeholder="select more options "
                                  loading={dataOptions.isLoading}
                                >
                                  {item?.options?.flat(2)?.map((details) => {
                                    return (
                                      <Option
                                        key={details.id}
                                        value={details.id}
                                      >
                                        {details.name}
                                      </Option>
                                    );
                                  })}
                                </SelectSearch>
                              );
                            })}
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </Field>
            )}

            <button className="py-1 px-6 backy text-white my-3" type="submit">
              search
            </button>
          </Form>
        )
      )}
    </Formik>
  );
};

export default FormSearch;
