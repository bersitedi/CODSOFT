import React from "react";
import { useQuery } from "@tanstack/react-query";
import DataTable from "../../components/DataTable";
import { getAllMessages } from "../../../../services/index/messages";
import { useDataTable } from "../../../../hooks/useDataTable";

const Messages = () => {
  const {
    data: messagesData,
    isLoading,
    isFetching,
  } = useDataTable({
    dataQueryFn: () => getAllMessages(),
    dataQueryKey: "messages",
  });

  return (
    <DataTable
      pageTitle="All Messages"
      dataListName="Messages"
      searchInputPlaceHolder="User's email..."
      tableHeaderTitleList={["Email", "Subject", "Message", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={messagesData?.data}
    >
      {messagesData?.data?.map((message, index) => (
        <tr key={index}>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.email}
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.subject}
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.message}
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default Messages;
