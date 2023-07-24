import React, { useEffect, useMemo, useState } from "react";
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

const BuildSearch = ({ allCats, setDataForm }) => {
  const [newValues, setNewValues] = useState([]);
  const [otherValue, setOtherValue] = useState("");
  const [indexArray, setIndexArray] = useState([]);
  //RTK Cats Query
  const [idProperties, seiIdProperties] = useState(0);
  const [idOptionsRTk, setIdOptionsRTK] = useState(0);
  const properties = useGetPropertiesCatsQuery(idProperties);
  const dataOptions = useGetOptionsCatsQuery(idOptionsRTk);
  const { Option } = Select;
  //start values filter search
  const initialValues = {
    categorys: "",
    sub_category: "",
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
  //render new data to generate inbput
  useMemo(
    () => setNewValues((oldArray) => [...oldArray, dataOptions?.data?.data]),
    [dataOptions?.data?.data]
  );
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      dir="ltr"
    >
      {(formik) => (
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
                    placeholder="select main categorys"
                  >
                    {dataCategories?.map((option) => {
                      return (
                        <Option
                          key={option.id}
                          value={option.name + "ID:" + option.id}
                        >
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
              const catId = formik.values.categorys.split("ID:")[1];
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
                        ?.filter((item) => item.id === +catId)[0]
                        ?.children?.map((child) => {
                          return (
                            <Option
                              key={child.id}
                              value={child.name + "ID:" + child.id}
                            >
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
            <Field name={otherValue} as="select">
              {(props) => {
                const { form } = props;
                const idSubCategory =
                  formik.values.sub_category.split("ID:")[1];
                seiIdProperties(idSubCategory);
                const dataProperties = properties?.data?.data;

                const handelChange = (name, value) => {
                  //switch to other faild
                  if (value === "other") {
                    setIndexArray([...indexArray, name]);
                  } else {
                    const filteredItems = indexArray.filter(
                      (item) => item !== name
                    );
                    setIndexArray(filteredItems);
                  }
                  //get data options in (RTK)
                  setOtherValue(name);
                  form.setFieldValue(name, value);
                  setIdOptionsRTK(+value.split("ID:")[1]);
                };

                return (
                  <div>
                    {dataProperties?.map((item) => {
                      return (
                        <div key={item.id}>
                          <label className="font-semibold mt-1 text-grayBoldColor ">
                            {item?.name}
                          </label>
                          <SelectSearch
                            name={item.name}
                            formHandler={form}
                            loading={properties.isLoading}
                            placeholder={`select ${item?.name} type `}
                            onChange={handelChange}
                          >
                            {item?.options?.map((data) => {
                              return (
                                <Option
                                  key={data.id}
                                  value={data.name + "ID:" + data.id}
                                >
                                  {data.name}
                                </Option>
                              );
                            })}
                            <Option key="other" value="other">
                              other
                            </Option>
                          </SelectSearch>
                          {indexArray.includes(item.name) && (
                            <div className="flex flex-col">
                              <label className="font-semibold text-grayBoldColor mt-1 ">
                                Other {item.name}
                              </label>
                              <Field
                                type="text"
                                name={"other " + item.name}
                                className="w-[92%] border-[1px] rounded-[5px] py-1 px-3 border-borderColor text-grayBoldColor "
                                placeholder="write other type"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </Field>
          )}
          {/*more options */}
          {formik.values.sub_category != "" && (
            <Field as="select">
              {(props) => {
                const { form } = props;
                return (
                  <div>
                    {newValues
                      .flat(3)
                      .slice(1)
                      ?.map((item) => {
                        return (
                          <div key={item?.id}>
                            <label className="font-semibold mt-1 text-grayBoldColor ">
                              {item?.name}
                            </label>
                            <SelectSearch
                              name={item?.name}
                              formHandler={form}
                              loading={dataOptions?.isLoading}
                              placeholder={`select ${item?.name} type `}
                            >
                              {item?.options?.map((data) => {
                                return (
                                  <Option
                                    key={data?.id}
                                    value={data?.name + "ID:" + data?.id}
                                  >
                                    {data?.name}
                                  </Option>
                                );
                              })}
                            </SelectSearch>
                          </div>
                        );
                      })}
                  </div>
                );
              }}
            </Field>
          )}

          <button className="py-1 px-6 backy text-white my-3" type="submit">
            search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BuildSearch;
