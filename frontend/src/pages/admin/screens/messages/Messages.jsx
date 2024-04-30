import { useNavigate } from "react-router-dom";
import {
  getAllMessages,
  deleteMessage,
} from "../../../../services/index/messages"; // Import your deleteMessage function
import DataTable from "../../components/DataTable";
import { useDataTable } from "../../../../hooks/useDataTable";
import { useState } from "react";

const Messages = () => {
  const [message, setMessage] = useState(null);
  const [initialMessage, setInitialMessage] = useState(null);
  const {
    searchKeyword,
    currentPage,
    isLoading,
    isFetching,
    data,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    setCurrentPage,
    refetchData, // Add refetchData function from useDataTable hook
  } = useDataTable({
    dataQueryFn: () => getAllMessages(searchKeyword, currentPage),
    dataQueryKey: "messages",
    mutateDeleteFn: null,
    deleteDataMessage: null,
  });

  const navigate = useNavigate();

  if (!data) {
    return <div>Loading...</div>;
  }

  const messages = data.data || [];

  const handleDeleteMessage = async (id) => {
    if (window.confirm("Do you want to delete this message?")) {
      try {
        await deleteMessage(id); // Call the deleteMessage function with the message ID
        // Optionally, you can also refetch data to update the message list
        await refetchData();
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  return (
    <DataTable
      pageTitle="Messages"
      dataListName="All Messages"
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchInputPlaceHolder="Search email..."
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Email", "Subject", "Message", "Date", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={messages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={null}
    >
      {messages.map((message) => (
        <tr key={message._id}>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.email}
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.subject}
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            {message.message}
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(message.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <button
              type="button"
              onClick={() => handleDeleteMessage(message._id)} // Pass message ID to handleDeleteMessage function
              className="text-green-600 hover:text-green-900"
            >
              Delete
            </button>
            <button
              onClick={() =>
                navigate(`/admin/messages/manage/view/${message._id}`)
              }
              className="text-green-600 hover:text-green-900"
            >
              View
            </button>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default Messages;
