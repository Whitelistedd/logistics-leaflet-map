import Head from "next/head";
import { Map } from "@/components/Map";
import { NextPage } from "next";
import { Table } from "@/components/Table";
import { axiosInstance } from "@/lib/axiosInstance";
import { routesApi, useGetRoutesQuery } from "@/services/routes";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { AppDispatch, wrapper } from "@/redux/store";
import { addRoute } from "@/redux/slices/routes";
import { RoutesType } from "@/types/routes";

const Home = () => {
  const dispatch = AppDispatch();
  const { data, error, isLoading } = useGetRoutesQuery();

  const handleTableChange = (selectedRoute: RoutesType) => {
    dispatch(addRoute(selectedRoute[0]));
  };

  const columns = useMemo(
    () => [
      {
        title: "Номер заявки",
        dataIndex: "requestNumber",
        key: "1",
      },
      {
        title: "Координаты ОТ lat",
        dataIndex: "fromLat",
        key: "2",
      },
      {
        title: "Координаты ОТ lng",
        dataIndex: "fromLng",
        key: "3",
      },
      {
        title: "Координаты ДО lat",
        dataIndex: "toLat",
        key: "4",
      },
      {
        title: "Координаты ДО lng",
        dataIndex: "toLng",
        key: "5",
      },
    ],
    []
  );

  if (error) {
    return "Error";
  }

  if (isLoading) {
    return "loading...";
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <StyledTable
          rowSelection={{
            type: "radio",
            onChange: (_, selectedRoute) => handleTableChange(selectedRoute),
          }}
          dataSource={data}
          columns={columns}
        />
        <Map />
      </Container>
    </>
  );
};

const StyledTable = styled(Table)`
  min-width: 640px;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
`;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(routesApi.endpoints.getRoutes.initiate());

    await Promise.all(store.dispatch(routesApi.util.getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);

export default Home;
