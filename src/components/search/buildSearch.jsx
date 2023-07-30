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
import Requierd from "../shared/requierd";
import { splitData } from "../shared/split";

const BuildSearch = ({ allCats, setDataForm }) => {
  const [newValues, setNewValues] = useState([]);
  const [otherValue, setOtherValue] = useState("");
  const [indexArray, setIndexArray] = useState([]);
  const [moreOptions, setMoreOptions] = useState([]);

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
    items: {},
  };
  //handel filter search
  const onSubmit = (data, actions) => {
    setDataForm(data);
    setMoreOptions([]);
    actions.resetForm({
      values: {
        categorys: "",
        sub_category: "",
        items: {},
      },
    });
  };
  //handel validation error
  const validationSchema = object().shape({
    categorys: string().required("The categorys field is required "),
    sub_category: string().required("The sub categorys field is required "),
  });
  //render new data to generate inbput
  useEffect(() => {
    setNewValues((oldArray) => [...oldArray, dataOptions?.data?.data]);
  }, [dataOptions?.data?.data]);

  // Creates an array of objects with unique "name" property values.
  let uniqueObjArray = [
    ...new Map(
      newValues.flat(2).map((item) => [item?.["name"], item])
    ).values(),
  ].filter((item) => item != undefined);

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
                    Main Category
                    <Requierd />
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
              const catId = splitData(formik.values.categorys, 1);
              const handelChange = (name, value) => {
                form.setFieldValue(name, value);
                form.resetForm({
                  values: {
                    categorys: formik.values.categorys,
                    sub_category: value,
                    items: {},
                  },
                });
                if (Object?.keys(formik.values.items).length > 0) {
                  setNewValues(() => []);
                } else {
                  setNewValues((oldArray) => [
                    ...oldArray,
                    dataOptions?.data?.data,
                  ]);
                }
              };

              return (
                <div>
                  <label className="font-semibold mt-1 text-grayBoldColor ">
                    {" "}
                    Sub Category <Requierd />
                  </label>
                  <SelectSearch
                    name={field.name}
                    formHandler={form}
                    placeholder="select sub categorys "
                    onChange={handelChange}
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
          {formik.values.sub_category !== "" && (
            <Field name={`items.${otherValue}`} as="select">
              {(props) => {
                const { form } = props;
                const idSubCategory = splitData(formik.values.sub_category, 1);
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
                  setIdOptionsRTK(+splitData(value, 1));
                };

                return (
                  <div>
                    {dataProperties?.map((item, i, arr) => {
                      return (
                        <div key={item.id}>
                          <label className="font-semibold mt-1 text-grayBoldColor ">
                            {item?.name}
                          </label>
                          <SelectSearch
                            name={`items.${item.name}`}
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
                          {indexArray.includes(`items.${item.name}`) && (
                            <div className="flex flex-col">
                              <label className="font-semibold text-grayBoldColor mt-1 ">
                                Other {item.name}
                              </label>
                              <Field
                                type="text"
                                name={`items.${"other " + item.name}`}
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
          {formik.values.sub_category != "" &&
            Object.keys(formik.values.items).length != 0 && (
              <Field name={`items.${otherValue}`} as="select">
                {(props) => {
                  const { form } = props;
                  return (
                    <div>
                      {uniqueObjArray?.map((item, _, arr) => {
                        const handelChange = (name, value) => {
                          form.setFieldValue(name, value);
                          const idValue = item?.options?.filter(
                            (itemFilter) =>
                              itemFilter.id === +splitData(value, 1)
                          );
                          setMoreOptions((prev) => [...prev, ...idValue]);
                        };
                        return (
                          <div key={item?.id}>
                            <label className="font-semibold mt-1 text-grayBoldColor ">
                              {item?.name}
                            </label>
                            <SelectSearch
                              name={`items.${item.name}`}
                              formHandler={form}
                              loading={dataOptions?.isLoading}
                              placeholder={`select ${item?.name} type `}
                              onChange={handelChange}
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
          <Field name="categorys" as="select" className="!w-[80px]">
            {(props) => {
              const { form } = props;
              const searchOptions = moreOptions.filter(
                (item) => item?.options?.length > 0
              );

              return (
                <div>
                  {searchOptions?.map((item) => {
                    const handelChange = (name, value) => {
                      form.setFieldValue(name, value);
                    };
                    return (
                      <div key={item?.id}>
                        <label className="font-semibold mt-1 text-grayBoldColor ">
                          {item?.name}
                        </label>
                        <SelectSearch
                          name={`items.${item.name}`}
                          formHandler={form}
                          loading={dataOptions?.isLoading}
                          placeholder={`select ${item?.name} type `}
                          onChange={handelChange}
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

          <button className="py-1 px-6 backy text-white my-3" type="submit">
            search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BuildSearch;
