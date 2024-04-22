import { useNavigate } from "react-router-dom";
import { getAllMessages } from "../../../../services/index/messages";
import DataTable from "../../components/DataTable";
import { useDataTable } from "../../../../hooks/useDataTable";

const Messages = () => {
  const {
    searchKeyword,
    currentPage,
    isLoading,
    isFetching,
    data,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
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

  return (
    <DataTable
      pageTitle="Messages"
      dataListName="All Messages"
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchInputPlaceHolder="Search email..."
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Email", "Subject", "Message", ""]}
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
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
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
